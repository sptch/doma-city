update vancouver_x_property_tax_blocks_data as vancouver
set rent_approximate=(
	coalesce(land_value+improvement_value,0) / coalesce(numbeo.price_to_rent_city_center, 19)
)::double precision
from development.vancouver_numbeo as numbeo
where vancouver.year= numbeo.year


update development.taxes_full_data as vancouver
set rent_approximate=(
	coalesce(current_land_value+current_improvement_value,0) / coalesce(numbeo.price_to_rent_city_center, 19)
)
from development.vancouver_numbeo as numbeo
where vancouver.report_year = numbeo.year;

update development.taxes_full_data as vancouver
set rent_approximate=(
	coalesce(current_land_value+current_improvement_value,0) / 19
)
where rent_approximate is null;


select percentile_cont(0.5) 
WITHIN GROUP (ORDER BY (land_value+improvement_value)) 
from vancouver_x_property_tax_parcels_data
where 
(zone_category = 'Two Family Dwelling' or
zone_category = 'One Family Dwelling' or
zone_category = 'Multiple Family Dwelling') and
"year"=2020;

--This is for price
update vancouver_x_property_tax_parcels_data
set price_approximate=(land_value+improvement_value)*250
where 
(zone_category = 'Two Family Dwelling' or
zone_category = 'One Family Dwelling' or
zone_category = 'Multiple Family Dwelling')

--This is for rent
update vancouver_x_property_tax_parcels_data as main
set rent_approximate=(land_value+improvement_value)*(
  select rents.total/avg(taxes.land_value+taxes.improvement_value) 
  from rents_historical as rents, vancouver_x_property_tax_parcels_data as taxes
  where 
  (taxes.zone_category = 'Two Family Dwelling' or
  taxes.zone_category = 'One Family Dwelling' or
  taxes.zone_category = 'Multiple Family Dwelling') and
  main.year=rents.year
)
where 
(zone_category = 'Two Family Dwelling' or
zone_category = 'One Family Dwelling' or
zone_category = 'Multiple Family Dwelling')
