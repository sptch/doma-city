/* Create block stats */
CREATE MATERIALIZED VIEW public.blocks_wp
AS
SELECT 
	blocks.geom as spatialobj_built, blocks.id, blocks.neighborhood_id,
	coalesce(avg(parcels.transaction_price), 0) AS transaction_price,
	coalesce(avg(parcels.price_of_meter), 0) AS price_of_meter,
	coalesce(avg(parcels.shape_area), 0) AS shape_area,
  mode() within group (order by zoning_group) as zoning_group,
  mode() within group (order by zoning_id) as zoning_id,
  mode() within group (order by zoningid) as zoningid,
  mode() within group (order by ruleid) as ruleid,
  mode() within group (order by zoning_color) as zoning_color
FROM (
  SELECT geom, row_number() OVER () AS "id", neighborhood_id
  FROM (
    SELECT st_simplifypreservetopology(
      ST_MakePolygon(
        ST_ExteriorRing(
          (ST_Dump(
            ST_Buffer(
              ST_Collect(
                ST_MakeValid(spatialobj_built)
              ), 0)
          )).geom
        )
      ), 0.00005) as geom, neighborhood_id
    FROM parcels_wp
    GROUP BY neighborhood_id
  ) block_polygons
) blocks
  LEFT JOIN parcels_wp AS parcels
  ON ST_Intersects(blocks.geom, parcels.spatialobj_built)
GROUP BY blocks.geom, blocks.id, blocks.neighborhood_id
WITH DATA;

ALTER TABLE public.blocks_wp
    OWNER TO tileserver;

CREATE INDEX blocks_wp_spgist ON public.blocks_wp USING spgist(spatialobj_built);
