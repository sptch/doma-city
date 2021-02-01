 SELECT t.id,
    t.coord AS _coord,
    t.report_year,
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
  GROUP BY t.id, t.coord, t.report_year, t.area;