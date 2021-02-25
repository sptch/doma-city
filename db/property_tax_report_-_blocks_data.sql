 SELECT b.id,
    t.report_year,
    COALESCE(avg(t.land_value), 0::double precision) AS land_value,
    COALESCE(avg(t.improvement_value), 0::double precision) AS improvement_value,
    COALESCE(avg(t.tax_levy), 0::double precision) AS tax_levy,
    avg(t.year_built)::int AS year_built,
    avg(t.big_improvement_year)::int AS big_improvement_year,
    mode() WITHIN GROUP (ORDER BY t.legal_type) AS legal_type
   FROM ( SELECT "property_tax_report_-_blocks".id,
            "property_tax_report_-_blocks".geom,
            bl.report_year
           FROM "property_tax_report_-_blocks"
             CROSS JOIN ( SELECT "property_tax_report_-_parcels_data".report_year
                   FROM "property_tax_report_-_parcels_data"
                  GROUP BY "property_tax_report_-_parcels_data".report_year) bl) b
     LEFT JOIN ( SELECT "property_tax_report_-_parcels".geom,
            "property_tax_report_-_parcels".id,
            "property_tax_report_-_parcels"._coord,
            "property_tax_report_-_parcels_data".id,
            "property_tax_report_-_parcels_data"._coord,
            "property_tax_report_-_parcels_data".report_year,
            "property_tax_report_-_parcels_data".land_value,
            "property_tax_report_-_parcels_data".improvement_value,
            "property_tax_report_-_parcels_data".tax_levy,
            "property_tax_report_-_parcels_data".year_built,
            "property_tax_report_-_parcels_data".big_improvement_year,
            "property_tax_report_-_parcels_data".zone_category,
            "property_tax_report_-_parcels_data".legal_type
           FROM "property_tax_report_-_parcels"
             RIGHT JOIN "property_tax_report_-_parcels_data" ON "property_tax_report_-_parcels_data".id = "property_tax_report_-_parcels".id) t(geom, id, _coord, id_1, _coord_1, report_year, land_value, improvement_value,tax_levy, year_built, big_improvement_year, zone_category, legal_type) ON b.report_year = t.report_year AND st_intersects(b.geom, t.geom)
  GROUP BY b.geom, b.id, t.report_year;