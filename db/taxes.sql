 SELECT t.id,
    t.coord AS _coord,
    t.year,
    COALESCE(sum(t.current_land_value) / a.area, 0) AS current_land_value,
    COALESCE(sum(t.current_improvement_value) / a.area, 0) AS current_improvement_value,
    COALESCE(sum(t.previous_improvement_value) / a.area, 0) AS previous_improvement_value,
    COALESCE(sum(t.previous_land_value) / a.area, 0) AS previous_land_value,
    COALESCE(sum(t.tax_levy) / a.area, 0) AS tax_levy,
    mode() WITHIN GROUP (ORDER BY t.year_built) AS year_built,
    mode() WITHIN GROUP (ORDER BY t.big_improvement_year) AS big_improvement_year,
    mode() WITHIN GROUP (ORDER BY t.zone_category) AS zone_category,
    mode() WITHIN GROUP (ORDER BY t.legal_type) AS legal_type
   FROM development.taxes_full_data as t,
    ( SELECT st_area(taxes.geom::geography) AS area, taxes.id FROM taxes) as a
  WHERE t.id = a.id
  GROUP BY t.id, t.coord, t.year, t.area;

--parcels
 SELECT taxes_full_data.id,
    taxes_full_data.coord AS _coord,
    taxes_full_data.year,
    COALESCE(sum(taxes_full_data.current_land_value) / taxes_area.area, 0::double precision) AS current_land_value,
    COALESCE(sum(taxes_full_data.current_improvement_value) / taxes_area.area, 0::double precision) AS current_improvement_value,
    COALESCE(sum(taxes_full_data.previous_improvement_value) / taxes_area.area, 0::double precision) AS previous_improvement_value,
    COALESCE(sum(taxes_full_data.previous_land_value) / taxes_area.area, 0::double precision) AS previous_land_value,
    COALESCE(sum(taxes_full_data.tax_levy) / taxes_area.area, 0::double precision) AS tax_levy,
    mode() WITHIN GROUP (ORDER BY taxes_full_data.tax_assessment_year) AS _tax_assessment_year,
    mode() WITHIN GROUP (ORDER BY taxes_full_data.year_built) AS year_built,
    mode() WITHIN GROUP (ORDER BY taxes_full_data.big_improvement_year) AS big_improvement_year,
    mode() WITHIN GROUP (ORDER BY taxes_full_data.zone_category) AS zone_category,
    mode() WITHIN GROUP (ORDER BY taxes_full_data.legal_type) AS legal_type
   FROM development.taxes_full_data,
    ( SELECT st_area("property_tax_report_-_parcels".geom::geography) AS area,
            "property_tax_report_-_parcels".id
           FROM "property_tax_report_-_parcels") taxes_area
  WHERE taxes_full_data.id = taxes_area.id
  GROUP BY taxes_full_data.id, taxes_full_data.coord, taxes_full_data.year, taxes_area.area;


--bloks
   SELECT b.id,
    t.year,
    COALESCE(avg(t.current_land_value), 0::double precision) AS current_land_value,
    COALESCE(avg(t.current_improvement_value), 0::double precision) AS current_improvement_value,
    COALESCE(avg(t.previous_improvement_value), 0::double precision) AS previous_improvement_value,
    COALESCE(avg(t.previous_land_value), 0::double precision) AS previous_land_value,
    COALESCE(avg(t.tax_levy), 0::double precision) AS tax_levy,
    mode() WITHIN GROUP (ORDER BY t.year_built) AS year_built,
    mode() WITHIN GROUP (ORDER BY t.big_improvement_year) AS big_improvement_year,
    mode() WITHIN GROUP (ORDER BY t.zone_category) AS zone_category,
    mode() WITHIN GROUP (ORDER BY t.legal_type) AS legal_type
   FROM ( SELECT "property_tax_report_-_blocks".id,
            "property_tax_report_-_blocks".geom,
            bl.year
           FROM "property_tax_report_-_blocks"
             CROSS JOIN ( SELECT "property_tax_report_-_parcels_data".year
                   FROM "property_tax_report_-_parcels_data"
                  GROUP BY "property_tax_report_-_parcels_data".year) bl) b
     LEFT JOIN ( SELECT "property_tax_report_-_parcels".geom,
            "property_tax_report_-_parcels".id,
            "property_tax_report_-_parcels"._coord,
            "property_tax_report_-_parcels_data".id,
            "property_tax_report_-_parcels_data"._coord,
            "property_tax_report_-_parcels_data".year,
            "property_tax_report_-_parcels_data".current_land_value,
            "property_tax_report_-_parcels_data".current_improvement_value,
            "property_tax_report_-_parcels_data".previous_improvement_value,
            "property_tax_report_-_parcels_data".previous_land_value,
            "property_tax_report_-_parcels_data".tax_levy,
            "property_tax_report_-_parcels_data"._tax_assessment_year,
            "property_tax_report_-_parcels_data".year_built,
            "property_tax_report_-_parcels_data".big_improvement_year,
            "property_tax_report_-_parcels_data".zone_category,
            "property_tax_report_-_parcels_data".legal_type
           FROM "property_tax_report_-_parcels"
             RIGHT JOIN "property_tax_report_-_parcels_data" ON "property_tax_report_-_parcels_data".id = "property_tax_report_-_parcels".id) t(geom, id, _coord, id_1, _coord_1, year, current_land_value, current_improvement_value, previous_improvement_value, previous_land_value, tax_levy, _tax_assessment_year, year_built, big_improvement_year, zone_category, legal_type) ON b.year = t.year AND st_intersects(b.geom, t.geom)
  GROUP BY b.geom, b.id, t.year;