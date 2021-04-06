/* Create blocks aprroximation */
CREATE MATERIALIZED VIEW public.blocks_data
AS
SELECT 
	b.id,  t.year,
  COALESCE(avg(t.current_land_value), 0) AS current_land_value,
  COALESCE(avg(t.current_improvement_value), 0) AS current_improvement_value,
  COALESCE(avg(t.previous_improvement_value), 0) AS previous_improvement_value,
  COALESCE(avg(t.previous_land_value), 0) AS previous_land_value,
  COALESCE(avg(t.tax_levy), 0) AS tax_levy,
  mode() WITHIN GROUP (ORDER BY t.year_built) AS year_built,
  mode() WITHIN GROUP (ORDER BY t.big_improvement_year) AS big_improvement_year,
  mode() WITHIN GROUP (ORDER BY t.zone_category) AS zone_category,
  mode() WITHIN GROUP (ORDER BY t.legal_type) AS legal_type
FROM (    
  SELECT * 
  FROM blocks 
  CROSS JOIN (
    SELECT year from taxes_data group by year
  ) as bl ) as b
  LEFT JOIN (
    SELECT * 
    FROM taxes 
    RIGHT JOIN taxes_data
      ON taxes_data.id = taxes.id
  ) as t
  ON b.year=t.year and ST_Intersects(b.geom, t.geom)
GROUP BY b.geom, b.id, t.year
WITH DATA;
