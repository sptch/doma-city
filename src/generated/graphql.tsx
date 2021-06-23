import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  float8: any;
  geography: any;
  geometry: any;
  numeric: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan = {
  community?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
};

/** aggregated selection of "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Aggregate = {
  aggregate?: Maybe<Burnaby_X_Community_Plan_Aggregate_Fields>;
  nodes: Array<Burnaby_X_Community_Plan>;
};

/** aggregate fields of "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Aggregate_Fields = {
  avg?: Maybe<Burnaby_X_Community_Plan_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Burnaby_X_Community_Plan_Max_Fields>;
  min?: Maybe<Burnaby_X_Community_Plan_Min_Fields>;
  stddev?: Maybe<Burnaby_X_Community_Plan_Stddev_Fields>;
  stddev_pop?: Maybe<Burnaby_X_Community_Plan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Burnaby_X_Community_Plan_Stddev_Samp_Fields>;
  sum?: Maybe<Burnaby_X_Community_Plan_Sum_Fields>;
  var_pop?: Maybe<Burnaby_X_Community_Plan_Var_Pop_Fields>;
  var_samp?: Maybe<Burnaby_X_Community_Plan_Var_Samp_Fields>;
  variance?: Maybe<Burnaby_X_Community_Plan_Variance_Fields>;
};


/** aggregate fields of "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Burnaby_X_Community_Plan_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Aggregate_Order_By = {
  avg?: Maybe<Burnaby_X_Community_Plan_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Burnaby_X_Community_Plan_Max_Order_By>;
  min?: Maybe<Burnaby_X_Community_Plan_Min_Order_By>;
  stddev?: Maybe<Burnaby_X_Community_Plan_Stddev_Order_By>;
  stddev_pop?: Maybe<Burnaby_X_Community_Plan_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Burnaby_X_Community_Plan_Stddev_Samp_Order_By>;
  sum?: Maybe<Burnaby_X_Community_Plan_Sum_Order_By>;
  var_pop?: Maybe<Burnaby_X_Community_Plan_Var_Pop_Order_By>;
  var_samp?: Maybe<Burnaby_X_Community_Plan_Var_Samp_Order_By>;
  variance?: Maybe<Burnaby_X_Community_Plan_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Burnaby_X_Community_Plan_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "burnaby_x_community_plan". All fields are combined with a logical 'AND'. */
export type Burnaby_X_Community_Plan_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Burnaby_X_Community_Plan_Bool_Exp>>>;
  _not?: Maybe<Burnaby_X_Community_Plan_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Burnaby_X_Community_Plan_Bool_Exp>>>;
  community?: Maybe<String_Comparison_Exp>;
  designation?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Burnaby_X_Community_Plan_Max_Fields = {
  community?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Max_Order_By = {
  community?: Maybe<Order_By>;
  designation?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Burnaby_X_Community_Plan_Min_Fields = {
  community?: Maybe<Scalars['String']>;
  designation?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Min_Order_By = {
  community?: Maybe<Order_By>;
  designation?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Order_By = {
  community?: Maybe<Order_By>;
  designation?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "burnaby_x_community_plan" */
export enum Burnaby_X_Community_Plan_Select_Column {
  /** column name */
  Community = 'community',
  /** column name */
  Designation = 'designation',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Burnaby_X_Community_Plan_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Burnaby_X_Community_Plan_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Burnaby_X_Community_Plan_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Burnaby_X_Community_Plan_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Burnaby_X_Community_Plan_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Burnaby_X_Community_Plan_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Burnaby_X_Community_Plan_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "burnaby_x_community_plan" */
export type Burnaby_X_Community_Plan_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "burnaby_x_parcels" */
export type Burnaby_X_Parcels = {
  _lot_id?: Maybe<Scalars['Int']>;
  aggregate?: Maybe<Scalars['String']>;
  air_space?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  heritage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  strata?: Maybe<Scalars['String']>;
};

/** aggregated selection of "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Aggregate = {
  aggregate?: Maybe<Burnaby_X_Parcels_Aggregate_Fields>;
  nodes: Array<Burnaby_X_Parcels>;
};

/** aggregate fields of "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Aggregate_Fields = {
  avg?: Maybe<Burnaby_X_Parcels_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Burnaby_X_Parcels_Max_Fields>;
  min?: Maybe<Burnaby_X_Parcels_Min_Fields>;
  stddev?: Maybe<Burnaby_X_Parcels_Stddev_Fields>;
  stddev_pop?: Maybe<Burnaby_X_Parcels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Burnaby_X_Parcels_Stddev_Samp_Fields>;
  sum?: Maybe<Burnaby_X_Parcels_Sum_Fields>;
  var_pop?: Maybe<Burnaby_X_Parcels_Var_Pop_Fields>;
  var_samp?: Maybe<Burnaby_X_Parcels_Var_Samp_Fields>;
  variance?: Maybe<Burnaby_X_Parcels_Variance_Fields>;
};


/** aggregate fields of "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Burnaby_X_Parcels_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Aggregate_Order_By = {
  avg?: Maybe<Burnaby_X_Parcels_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Burnaby_X_Parcels_Max_Order_By>;
  min?: Maybe<Burnaby_X_Parcels_Min_Order_By>;
  stddev?: Maybe<Burnaby_X_Parcels_Stddev_Order_By>;
  stddev_pop?: Maybe<Burnaby_X_Parcels_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Burnaby_X_Parcels_Stddev_Samp_Order_By>;
  sum?: Maybe<Burnaby_X_Parcels_Sum_Order_By>;
  var_pop?: Maybe<Burnaby_X_Parcels_Var_Pop_Order_By>;
  var_samp?: Maybe<Burnaby_X_Parcels_Var_Samp_Order_By>;
  variance?: Maybe<Burnaby_X_Parcels_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Burnaby_X_Parcels_Avg_Fields = {
  _lot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Avg_Order_By = {
  _lot_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "burnaby_x_parcels". All fields are combined with a logical 'AND'. */
export type Burnaby_X_Parcels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Burnaby_X_Parcels_Bool_Exp>>>;
  _lot_id?: Maybe<Int_Comparison_Exp>;
  _not?: Maybe<Burnaby_X_Parcels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Burnaby_X_Parcels_Bool_Exp>>>;
  aggregate?: Maybe<String_Comparison_Exp>;
  air_space?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  heritage?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  strata?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Burnaby_X_Parcels_Max_Fields = {
  _lot_id?: Maybe<Scalars['Int']>;
  aggregate?: Maybe<Scalars['String']>;
  air_space?: Maybe<Scalars['String']>;
  heritage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  strata?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Max_Order_By = {
  _lot_id?: Maybe<Order_By>;
  aggregate?: Maybe<Order_By>;
  air_space?: Maybe<Order_By>;
  heritage?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  strata?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Burnaby_X_Parcels_Min_Fields = {
  _lot_id?: Maybe<Scalars['Int']>;
  aggregate?: Maybe<Scalars['String']>;
  air_space?: Maybe<Scalars['String']>;
  heritage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  strata?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Min_Order_By = {
  _lot_id?: Maybe<Order_By>;
  aggregate?: Maybe<Order_By>;
  air_space?: Maybe<Order_By>;
  heritage?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  strata?: Maybe<Order_By>;
};

/** ordering options when selecting data from "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Order_By = {
  _lot_id?: Maybe<Order_By>;
  aggregate?: Maybe<Order_By>;
  air_space?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  heritage?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  strata?: Maybe<Order_By>;
};

/** primary key columns input for table: "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "burnaby_x_parcels" */
export enum Burnaby_X_Parcels_Select_Column {
  /** column name */
  LotId = '_lot_id',
  /** column name */
  Aggregate = 'aggregate',
  /** column name */
  AirSpace = 'air_space',
  /** column name */
  Geom = 'geom',
  /** column name */
  Heritage = 'heritage',
  /** column name */
  Id = 'id',
  /** column name */
  Strata = 'strata'
}

/** aggregate stddev on columns */
export type Burnaby_X_Parcels_Stddev_Fields = {
  _lot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Stddev_Order_By = {
  _lot_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Burnaby_X_Parcels_Stddev_Pop_Fields = {
  _lot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Stddev_Pop_Order_By = {
  _lot_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Burnaby_X_Parcels_Stddev_Samp_Fields = {
  _lot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Stddev_Samp_Order_By = {
  _lot_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Burnaby_X_Parcels_Sum_Fields = {
  _lot_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Sum_Order_By = {
  _lot_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Burnaby_X_Parcels_Var_Pop_Fields = {
  _lot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Var_Pop_Order_By = {
  _lot_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Burnaby_X_Parcels_Var_Samp_Fields = {
  _lot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Var_Samp_Order_By = {
  _lot_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Burnaby_X_Parcels_Variance_Fields = {
  _lot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "burnaby_x_parcels" */
export type Burnaby_X_Parcels_Variance_Order_By = {
  _lot_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "burnaby_x_zoning" */
export type Burnaby_X_Zoning = {
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  zone_code?: Maybe<Scalars['String']>;
};

/** aggregated selection of "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Aggregate = {
  aggregate?: Maybe<Burnaby_X_Zoning_Aggregate_Fields>;
  nodes: Array<Burnaby_X_Zoning>;
};

/** aggregate fields of "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Aggregate_Fields = {
  avg?: Maybe<Burnaby_X_Zoning_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Burnaby_X_Zoning_Max_Fields>;
  min?: Maybe<Burnaby_X_Zoning_Min_Fields>;
  stddev?: Maybe<Burnaby_X_Zoning_Stddev_Fields>;
  stddev_pop?: Maybe<Burnaby_X_Zoning_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Burnaby_X_Zoning_Stddev_Samp_Fields>;
  sum?: Maybe<Burnaby_X_Zoning_Sum_Fields>;
  var_pop?: Maybe<Burnaby_X_Zoning_Var_Pop_Fields>;
  var_samp?: Maybe<Burnaby_X_Zoning_Var_Samp_Fields>;
  variance?: Maybe<Burnaby_X_Zoning_Variance_Fields>;
};


/** aggregate fields of "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Burnaby_X_Zoning_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Aggregate_Order_By = {
  avg?: Maybe<Burnaby_X_Zoning_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Burnaby_X_Zoning_Max_Order_By>;
  min?: Maybe<Burnaby_X_Zoning_Min_Order_By>;
  stddev?: Maybe<Burnaby_X_Zoning_Stddev_Order_By>;
  stddev_pop?: Maybe<Burnaby_X_Zoning_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Burnaby_X_Zoning_Stddev_Samp_Order_By>;
  sum?: Maybe<Burnaby_X_Zoning_Sum_Order_By>;
  var_pop?: Maybe<Burnaby_X_Zoning_Var_Pop_Order_By>;
  var_samp?: Maybe<Burnaby_X_Zoning_Var_Samp_Order_By>;
  variance?: Maybe<Burnaby_X_Zoning_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Burnaby_X_Zoning_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "burnaby_x_zoning". All fields are combined with a logical 'AND'. */
export type Burnaby_X_Zoning_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Burnaby_X_Zoning_Bool_Exp>>>;
  _not?: Maybe<Burnaby_X_Zoning_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Burnaby_X_Zoning_Bool_Exp>>>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  zone_code?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Burnaby_X_Zoning_Max_Fields = {
  id?: Maybe<Scalars['Int']>;
  zone_code?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Max_Order_By = {
  id?: Maybe<Order_By>;
  zone_code?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Burnaby_X_Zoning_Min_Fields = {
  id?: Maybe<Scalars['Int']>;
  zone_code?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Min_Order_By = {
  id?: Maybe<Order_By>;
  zone_code?: Maybe<Order_By>;
};

/** ordering options when selecting data from "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Order_By = {
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  zone_code?: Maybe<Order_By>;
};

/** primary key columns input for table: "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "burnaby_x_zoning" */
export enum Burnaby_X_Zoning_Select_Column {
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  ZoneCode = 'zone_code'
}

/** aggregate stddev on columns */
export type Burnaby_X_Zoning_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Burnaby_X_Zoning_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Burnaby_X_Zoning_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Burnaby_X_Zoning_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Burnaby_X_Zoning_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Burnaby_X_Zoning_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Burnaby_X_Zoning_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "burnaby_x_zoning" */
export type Burnaby_X_Zoning_Variance_Order_By = {
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "development.tiles" */
export type Development_Tiles = {
  tile?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "development.tiles" */
export type Development_Tiles_Aggregate = {
  aggregate?: Maybe<Development_Tiles_Aggregate_Fields>;
  nodes: Array<Development_Tiles>;
};

/** aggregate fields of "development.tiles" */
export type Development_Tiles_Aggregate_Fields = {
  avg?: Maybe<Development_Tiles_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Development_Tiles_Max_Fields>;
  min?: Maybe<Development_Tiles_Min_Fields>;
  stddev?: Maybe<Development_Tiles_Stddev_Fields>;
  stddev_pop?: Maybe<Development_Tiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Development_Tiles_Stddev_Samp_Fields>;
  sum?: Maybe<Development_Tiles_Sum_Fields>;
  var_pop?: Maybe<Development_Tiles_Var_Pop_Fields>;
  var_samp?: Maybe<Development_Tiles_Var_Samp_Fields>;
  variance?: Maybe<Development_Tiles_Variance_Fields>;
};


/** aggregate fields of "development.tiles" */
export type Development_Tiles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Development_Tiles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "development.tiles" */
export type Development_Tiles_Aggregate_Order_By = {
  avg?: Maybe<Development_Tiles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Development_Tiles_Max_Order_By>;
  min?: Maybe<Development_Tiles_Min_Order_By>;
  stddev?: Maybe<Development_Tiles_Stddev_Order_By>;
  stddev_pop?: Maybe<Development_Tiles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Development_Tiles_Stddev_Samp_Order_By>;
  sum?: Maybe<Development_Tiles_Sum_Order_By>;
  var_pop?: Maybe<Development_Tiles_Var_Pop_Order_By>;
  var_samp?: Maybe<Development_Tiles_Var_Samp_Order_By>;
  variance?: Maybe<Development_Tiles_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Development_Tiles_Avg_Fields = {
  tile?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "development.tiles" */
export type Development_Tiles_Avg_Order_By = {
  tile?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "development.tiles". All fields are combined with a logical 'AND'. */
export type Development_Tiles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Development_Tiles_Bool_Exp>>>;
  _not?: Maybe<Development_Tiles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Development_Tiles_Bool_Exp>>>;
  tile?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Development_Tiles_Max_Fields = {
  tile?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "development.tiles" */
export type Development_Tiles_Max_Order_By = {
  tile?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Development_Tiles_Min_Fields = {
  tile?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "development.tiles" */
export type Development_Tiles_Min_Order_By = {
  tile?: Maybe<Order_By>;
};

/** ordering options when selecting data from "development.tiles" */
export type Development_Tiles_Order_By = {
  tile?: Maybe<Order_By>;
};

/** select columns of table "development.tiles" */
export enum Development_Tiles_Select_Column {
  /** column name */
  Tile = 'tile'
}

/** aggregate stddev on columns */
export type Development_Tiles_Stddev_Fields = {
  tile?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "development.tiles" */
export type Development_Tiles_Stddev_Order_By = {
  tile?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Development_Tiles_Stddev_Pop_Fields = {
  tile?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "development.tiles" */
export type Development_Tiles_Stddev_Pop_Order_By = {
  tile?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Development_Tiles_Stddev_Samp_Fields = {
  tile?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "development.tiles" */
export type Development_Tiles_Stddev_Samp_Order_By = {
  tile?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Development_Tiles_Sum_Fields = {
  tile?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "development.tiles" */
export type Development_Tiles_Sum_Order_By = {
  tile?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Development_Tiles_Var_Pop_Fields = {
  tile?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "development.tiles" */
export type Development_Tiles_Var_Pop_Order_By = {
  tile?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Development_Tiles_Var_Samp_Fields = {
  tile?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "development.tiles" */
export type Development_Tiles_Var_Samp_Order_By = {
  tile?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Development_Tiles_Variance_Fields = {
  tile?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "development.tiles" */
export type Development_Tiles_Variance_Order_By = {
  tile?: Maybe<Order_By>;
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};


/** Expression to compare the result of casting a column of type geography. Multiple cast targets are combined with logical 'AND'. */
export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>;
};

/** expression to compare columns of type geography. All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>;
  _eq?: Maybe<Scalars['geography']>;
  _gt?: Maybe<Scalars['geography']>;
  _gte?: Maybe<Scalars['geography']>;
  _in?: Maybe<Array<Scalars['geography']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geography']>;
  _lte?: Maybe<Scalars['geography']>;
  _neq?: Maybe<Scalars['geography']>;
  _nin?: Maybe<Array<Scalars['geography']>>;
  /** is the column within a distance from a geography value */
  _st_d_within?: Maybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Maybe<Scalars['geography']>;
};


/** Expression to compare the result of casting a column of type geometry. Multiple cast targets are combined with logical 'AND'. */
export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>;
};

/** expression to compare columns of type geometry. All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>;
  _eq?: Maybe<Scalars['geometry']>;
  _gt?: Maybe<Scalars['geometry']>;
  _gte?: Maybe<Scalars['geometry']>;
  _in?: Maybe<Array<Scalars['geometry']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geometry']>;
  _lte?: Maybe<Scalars['geometry']>;
  _neq?: Maybe<Scalars['geometry']>;
  _nin?: Maybe<Array<Scalars['geometry']>>;
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Scalars['geometry']>;
  /** does the column crosses the given geometry value */
  _st_crosses?: Maybe<Scalars['geometry']>;
  /** is the column within a distance from a geometry value */
  _st_d_within?: Maybe<St_D_Within_Input>;
  /** is the column equal to given geometry value. Directionality is ignored */
  _st_equals?: Maybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Scalars['geometry']>;
};

export type Get_Tiles_Args = {
  column_id?: Maybe<Scalars['String']>;
  mode?: Maybe<Scalars['String']>;
  ntiles?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['String']>;
};

/** columns and relationships of "incomes" */
export type Incomes = {
  aggregate?: Maybe<Scalars['bigint']>;
  average?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  median?: Maybe<Scalars['bigint']>;
  population?: Maybe<Scalars['bigint']>;
  population_wi?: Maybe<Scalars['bigint']>;
  year?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "incomes" */
export type Incomes_Aggregate = {
  aggregate?: Maybe<Incomes_Aggregate_Fields>;
  nodes: Array<Incomes>;
};

/** aggregate fields of "incomes" */
export type Incomes_Aggregate_Fields = {
  avg?: Maybe<Incomes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Incomes_Max_Fields>;
  min?: Maybe<Incomes_Min_Fields>;
  stddev?: Maybe<Incomes_Stddev_Fields>;
  stddev_pop?: Maybe<Incomes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Incomes_Stddev_Samp_Fields>;
  sum?: Maybe<Incomes_Sum_Fields>;
  var_pop?: Maybe<Incomes_Var_Pop_Fields>;
  var_samp?: Maybe<Incomes_Var_Samp_Fields>;
  variance?: Maybe<Incomes_Variance_Fields>;
};


/** aggregate fields of "incomes" */
export type Incomes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Incomes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "incomes" */
export type Incomes_Aggregate_Order_By = {
  avg?: Maybe<Incomes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Incomes_Max_Order_By>;
  min?: Maybe<Incomes_Min_Order_By>;
  stddev?: Maybe<Incomes_Stddev_Order_By>;
  stddev_pop?: Maybe<Incomes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Incomes_Stddev_Samp_Order_By>;
  sum?: Maybe<Incomes_Sum_Order_By>;
  var_pop?: Maybe<Incomes_Var_Pop_Order_By>;
  var_samp?: Maybe<Incomes_Var_Samp_Order_By>;
  variance?: Maybe<Incomes_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Incomes_Avg_Fields = {
  aggregate?: Maybe<Scalars['Float']>;
  average?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  population_wi?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "incomes" */
export type Incomes_Avg_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "incomes". All fields are combined with a logical 'AND'. */
export type Incomes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Incomes_Bool_Exp>>>;
  _not?: Maybe<Incomes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Incomes_Bool_Exp>>>;
  aggregate?: Maybe<Bigint_Comparison_Exp>;
  average?: Maybe<Bigint_Comparison_Exp>;
  index?: Maybe<Bigint_Comparison_Exp>;
  median?: Maybe<Bigint_Comparison_Exp>;
  population?: Maybe<Bigint_Comparison_Exp>;
  population_wi?: Maybe<Bigint_Comparison_Exp>;
  year?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Incomes_Max_Fields = {
  aggregate?: Maybe<Scalars['bigint']>;
  average?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  median?: Maybe<Scalars['bigint']>;
  population?: Maybe<Scalars['bigint']>;
  population_wi?: Maybe<Scalars['bigint']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "incomes" */
export type Incomes_Max_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Incomes_Min_Fields = {
  aggregate?: Maybe<Scalars['bigint']>;
  average?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  median?: Maybe<Scalars['bigint']>;
  population?: Maybe<Scalars['bigint']>;
  population_wi?: Maybe<Scalars['bigint']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "incomes" */
export type Incomes_Min_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** ordering options when selecting data from "incomes" */
export type Incomes_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** select columns of table "incomes" */
export enum Incomes_Select_Column {
  /** column name */
  Aggregate = 'aggregate',
  /** column name */
  Average = 'average',
  /** column name */
  Index = 'index',
  /** column name */
  Median = 'median',
  /** column name */
  Population = 'population',
  /** column name */
  PopulationWi = 'population_wi',
  /** column name */
  Year = 'year'
}

/** aggregate stddev on columns */
export type Incomes_Stddev_Fields = {
  aggregate?: Maybe<Scalars['Float']>;
  average?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  population_wi?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "incomes" */
export type Incomes_Stddev_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Incomes_Stddev_Pop_Fields = {
  aggregate?: Maybe<Scalars['Float']>;
  average?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  population_wi?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "incomes" */
export type Incomes_Stddev_Pop_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Incomes_Stddev_Samp_Fields = {
  aggregate?: Maybe<Scalars['Float']>;
  average?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  population_wi?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "incomes" */
export type Incomes_Stddev_Samp_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Incomes_Sum_Fields = {
  aggregate?: Maybe<Scalars['bigint']>;
  average?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  median?: Maybe<Scalars['bigint']>;
  population?: Maybe<Scalars['bigint']>;
  population_wi?: Maybe<Scalars['bigint']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "incomes" */
export type Incomes_Sum_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Incomes_Var_Pop_Fields = {
  aggregate?: Maybe<Scalars['Float']>;
  average?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  population_wi?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "incomes" */
export type Incomes_Var_Pop_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Incomes_Var_Samp_Fields = {
  aggregate?: Maybe<Scalars['Float']>;
  average?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  population_wi?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "incomes" */
export type Incomes_Var_Samp_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Incomes_Variance_Fields = {
  aggregate?: Maybe<Scalars['Float']>;
  average?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  population_wi?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "incomes" */
export type Incomes_Variance_Order_By = {
  aggregate?: Maybe<Order_By>;
  average?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  population_wi?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** columns and relationships of "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data = {
  household_income__mean?: Maybe<Scalars['float8']>;
  household_income__median?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['float8']>;
  monthly_mortgager_income__median?: Maybe<Scalars['float8']>;
  monthly_renter_income__mean?: Maybe<Scalars['float8']>;
  monthly_renter_income__median?: Maybe<Scalars['float8']>;
  mortgage_payment__mean?: Maybe<Scalars['float8']>;
  mortgage_payment__median?: Maybe<Scalars['bigint']>;
  mortgage_to_income_mean?: Maybe<Scalars['float8']>;
  mortgage_to_income_median?: Maybe<Scalars['float8']>;
  p_renting?: Maybe<Scalars['float8']>;
  price__mean?: Maybe<Scalars['float8']>;
  price__median?: Maybe<Scalars['bigint']>;
  price_to_income_mean?: Maybe<Scalars['float8']>;
  price_to_income_median?: Maybe<Scalars['float8']>;
  puma?: Maybe<Scalars['bigint']>;
  rent__mean?: Maybe<Scalars['float8']>;
  rent__median?: Maybe<Scalars['bigint']>;
  rent_to_income_mean?: Maybe<Scalars['float8']>;
  rent_to_income_median?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Aggregate = {
  aggregate?: Maybe<New_York_X_Pumas_Data_Aggregate_Fields>;
  nodes: Array<New_York_X_Pumas_Data>;
};

/** aggregate fields of "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Aggregate_Fields = {
  avg?: Maybe<New_York_X_Pumas_Data_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<New_York_X_Pumas_Data_Max_Fields>;
  min?: Maybe<New_York_X_Pumas_Data_Min_Fields>;
  stddev?: Maybe<New_York_X_Pumas_Data_Stddev_Fields>;
  stddev_pop?: Maybe<New_York_X_Pumas_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<New_York_X_Pumas_Data_Stddev_Samp_Fields>;
  sum?: Maybe<New_York_X_Pumas_Data_Sum_Fields>;
  var_pop?: Maybe<New_York_X_Pumas_Data_Var_Pop_Fields>;
  var_samp?: Maybe<New_York_X_Pumas_Data_Var_Samp_Fields>;
  variance?: Maybe<New_York_X_Pumas_Data_Variance_Fields>;
};


/** aggregate fields of "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<New_York_X_Pumas_Data_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Aggregate_Order_By = {
  avg?: Maybe<New_York_X_Pumas_Data_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<New_York_X_Pumas_Data_Max_Order_By>;
  min?: Maybe<New_York_X_Pumas_Data_Min_Order_By>;
  stddev?: Maybe<New_York_X_Pumas_Data_Stddev_Order_By>;
  stddev_pop?: Maybe<New_York_X_Pumas_Data_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<New_York_X_Pumas_Data_Stddev_Samp_Order_By>;
  sum?: Maybe<New_York_X_Pumas_Data_Sum_Order_By>;
  var_pop?: Maybe<New_York_X_Pumas_Data_Var_Pop_Order_By>;
  var_samp?: Maybe<New_York_X_Pumas_Data_Var_Samp_Order_By>;
  variance?: Maybe<New_York_X_Pumas_Data_Variance_Order_By>;
};

/** aggregate avg on columns */
export type New_York_X_Pumas_Data_Avg_Fields = {
  household_income__mean?: Maybe<Scalars['Float']>;
  household_income__median?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__median?: Maybe<Scalars['Float']>;
  monthly_renter_income__mean?: Maybe<Scalars['Float']>;
  monthly_renter_income__median?: Maybe<Scalars['Float']>;
  mortgage_payment__mean?: Maybe<Scalars['Float']>;
  mortgage_payment__median?: Maybe<Scalars['Float']>;
  mortgage_to_income_mean?: Maybe<Scalars['Float']>;
  mortgage_to_income_median?: Maybe<Scalars['Float']>;
  p_renting?: Maybe<Scalars['Float']>;
  price__mean?: Maybe<Scalars['Float']>;
  price__median?: Maybe<Scalars['Float']>;
  price_to_income_mean?: Maybe<Scalars['Float']>;
  price_to_income_median?: Maybe<Scalars['Float']>;
  puma?: Maybe<Scalars['Float']>;
  rent__mean?: Maybe<Scalars['Float']>;
  rent__median?: Maybe<Scalars['Float']>;
  rent_to_income_mean?: Maybe<Scalars['Float']>;
  rent_to_income_median?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Avg_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "new_york_x_pumas_data". All fields are combined with a logical 'AND'. */
export type New_York_X_Pumas_Data_Bool_Exp = {
  _and?: Maybe<Array<Maybe<New_York_X_Pumas_Data_Bool_Exp>>>;
  _not?: Maybe<New_York_X_Pumas_Data_Bool_Exp>;
  _or?: Maybe<Array<Maybe<New_York_X_Pumas_Data_Bool_Exp>>>;
  household_income__mean?: Maybe<Float8_Comparison_Exp>;
  household_income__median?: Maybe<Bigint_Comparison_Exp>;
  index?: Maybe<Bigint_Comparison_Exp>;
  monthly_mortgager_income__mean?: Maybe<Float8_Comparison_Exp>;
  monthly_mortgager_income__median?: Maybe<Float8_Comparison_Exp>;
  monthly_renter_income__mean?: Maybe<Float8_Comparison_Exp>;
  monthly_renter_income__median?: Maybe<Float8_Comparison_Exp>;
  mortgage_payment__mean?: Maybe<Float8_Comparison_Exp>;
  mortgage_payment__median?: Maybe<Bigint_Comparison_Exp>;
  mortgage_to_income_mean?: Maybe<Float8_Comparison_Exp>;
  mortgage_to_income_median?: Maybe<Float8_Comparison_Exp>;
  p_renting?: Maybe<Float8_Comparison_Exp>;
  price__mean?: Maybe<Float8_Comparison_Exp>;
  price__median?: Maybe<Bigint_Comparison_Exp>;
  price_to_income_mean?: Maybe<Float8_Comparison_Exp>;
  price_to_income_median?: Maybe<Float8_Comparison_Exp>;
  puma?: Maybe<Bigint_Comparison_Exp>;
  rent__mean?: Maybe<Float8_Comparison_Exp>;
  rent__median?: Maybe<Bigint_Comparison_Exp>;
  rent_to_income_mean?: Maybe<Float8_Comparison_Exp>;
  rent_to_income_median?: Maybe<Float8_Comparison_Exp>;
  year?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type New_York_X_Pumas_Data_Max_Fields = {
  household_income__mean?: Maybe<Scalars['float8']>;
  household_income__median?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['float8']>;
  monthly_mortgager_income__median?: Maybe<Scalars['float8']>;
  monthly_renter_income__mean?: Maybe<Scalars['float8']>;
  monthly_renter_income__median?: Maybe<Scalars['float8']>;
  mortgage_payment__mean?: Maybe<Scalars['float8']>;
  mortgage_payment__median?: Maybe<Scalars['bigint']>;
  mortgage_to_income_mean?: Maybe<Scalars['float8']>;
  mortgage_to_income_median?: Maybe<Scalars['float8']>;
  p_renting?: Maybe<Scalars['float8']>;
  price__mean?: Maybe<Scalars['float8']>;
  price__median?: Maybe<Scalars['bigint']>;
  price_to_income_mean?: Maybe<Scalars['float8']>;
  price_to_income_median?: Maybe<Scalars['float8']>;
  puma?: Maybe<Scalars['bigint']>;
  rent__mean?: Maybe<Scalars['float8']>;
  rent__median?: Maybe<Scalars['bigint']>;
  rent_to_income_mean?: Maybe<Scalars['float8']>;
  rent_to_income_median?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Max_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type New_York_X_Pumas_Data_Min_Fields = {
  household_income__mean?: Maybe<Scalars['float8']>;
  household_income__median?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['float8']>;
  monthly_mortgager_income__median?: Maybe<Scalars['float8']>;
  monthly_renter_income__mean?: Maybe<Scalars['float8']>;
  monthly_renter_income__median?: Maybe<Scalars['float8']>;
  mortgage_payment__mean?: Maybe<Scalars['float8']>;
  mortgage_payment__median?: Maybe<Scalars['bigint']>;
  mortgage_to_income_mean?: Maybe<Scalars['float8']>;
  mortgage_to_income_median?: Maybe<Scalars['float8']>;
  p_renting?: Maybe<Scalars['float8']>;
  price__mean?: Maybe<Scalars['float8']>;
  price__median?: Maybe<Scalars['bigint']>;
  price_to_income_mean?: Maybe<Scalars['float8']>;
  price_to_income_median?: Maybe<Scalars['float8']>;
  puma?: Maybe<Scalars['bigint']>;
  rent__mean?: Maybe<Scalars['float8']>;
  rent__median?: Maybe<Scalars['bigint']>;
  rent_to_income_mean?: Maybe<Scalars['float8']>;
  rent_to_income_median?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Min_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** ordering options when selecting data from "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** select columns of table "new_york_x_pumas_data" */
export enum New_York_X_Pumas_Data_Select_Column {
  /** column name */
  HouseholdIncomeMean = 'household_income__mean',
  /** column name */
  HouseholdIncomeMedian = 'household_income__median',
  /** column name */
  Index = 'index',
  /** column name */
  MonthlyMortgagerIncomeMean = 'monthly_mortgager_income__mean',
  /** column name */
  MonthlyMortgagerIncomeMedian = 'monthly_mortgager_income__median',
  /** column name */
  MonthlyRenterIncomeMean = 'monthly_renter_income__mean',
  /** column name */
  MonthlyRenterIncomeMedian = 'monthly_renter_income__median',
  /** column name */
  MortgagePaymentMean = 'mortgage_payment__mean',
  /** column name */
  MortgagePaymentMedian = 'mortgage_payment__median',
  /** column name */
  MortgageToIncomeMean = 'mortgage_to_income_mean',
  /** column name */
  MortgageToIncomeMedian = 'mortgage_to_income_median',
  /** column name */
  PRenting = 'p_renting',
  /** column name */
  PriceMean = 'price__mean',
  /** column name */
  PriceMedian = 'price__median',
  /** column name */
  PriceToIncomeMean = 'price_to_income_mean',
  /** column name */
  PriceToIncomeMedian = 'price_to_income_median',
  /** column name */
  Puma = 'puma',
  /** column name */
  RentMean = 'rent__mean',
  /** column name */
  RentMedian = 'rent__median',
  /** column name */
  RentToIncomeMean = 'rent_to_income_mean',
  /** column name */
  RentToIncomeMedian = 'rent_to_income_median',
  /** column name */
  Year = 'year'
}

/** aggregate stddev on columns */
export type New_York_X_Pumas_Data_Stddev_Fields = {
  household_income__mean?: Maybe<Scalars['Float']>;
  household_income__median?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__median?: Maybe<Scalars['Float']>;
  monthly_renter_income__mean?: Maybe<Scalars['Float']>;
  monthly_renter_income__median?: Maybe<Scalars['Float']>;
  mortgage_payment__mean?: Maybe<Scalars['Float']>;
  mortgage_payment__median?: Maybe<Scalars['Float']>;
  mortgage_to_income_mean?: Maybe<Scalars['Float']>;
  mortgage_to_income_median?: Maybe<Scalars['Float']>;
  p_renting?: Maybe<Scalars['Float']>;
  price__mean?: Maybe<Scalars['Float']>;
  price__median?: Maybe<Scalars['Float']>;
  price_to_income_mean?: Maybe<Scalars['Float']>;
  price_to_income_median?: Maybe<Scalars['Float']>;
  puma?: Maybe<Scalars['Float']>;
  rent__mean?: Maybe<Scalars['Float']>;
  rent__median?: Maybe<Scalars['Float']>;
  rent_to_income_mean?: Maybe<Scalars['Float']>;
  rent_to_income_median?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Stddev_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type New_York_X_Pumas_Data_Stddev_Pop_Fields = {
  household_income__mean?: Maybe<Scalars['Float']>;
  household_income__median?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__median?: Maybe<Scalars['Float']>;
  monthly_renter_income__mean?: Maybe<Scalars['Float']>;
  monthly_renter_income__median?: Maybe<Scalars['Float']>;
  mortgage_payment__mean?: Maybe<Scalars['Float']>;
  mortgage_payment__median?: Maybe<Scalars['Float']>;
  mortgage_to_income_mean?: Maybe<Scalars['Float']>;
  mortgage_to_income_median?: Maybe<Scalars['Float']>;
  p_renting?: Maybe<Scalars['Float']>;
  price__mean?: Maybe<Scalars['Float']>;
  price__median?: Maybe<Scalars['Float']>;
  price_to_income_mean?: Maybe<Scalars['Float']>;
  price_to_income_median?: Maybe<Scalars['Float']>;
  puma?: Maybe<Scalars['Float']>;
  rent__mean?: Maybe<Scalars['Float']>;
  rent__median?: Maybe<Scalars['Float']>;
  rent_to_income_mean?: Maybe<Scalars['Float']>;
  rent_to_income_median?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Stddev_Pop_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type New_York_X_Pumas_Data_Stddev_Samp_Fields = {
  household_income__mean?: Maybe<Scalars['Float']>;
  household_income__median?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__median?: Maybe<Scalars['Float']>;
  monthly_renter_income__mean?: Maybe<Scalars['Float']>;
  monthly_renter_income__median?: Maybe<Scalars['Float']>;
  mortgage_payment__mean?: Maybe<Scalars['Float']>;
  mortgage_payment__median?: Maybe<Scalars['Float']>;
  mortgage_to_income_mean?: Maybe<Scalars['Float']>;
  mortgage_to_income_median?: Maybe<Scalars['Float']>;
  p_renting?: Maybe<Scalars['Float']>;
  price__mean?: Maybe<Scalars['Float']>;
  price__median?: Maybe<Scalars['Float']>;
  price_to_income_mean?: Maybe<Scalars['Float']>;
  price_to_income_median?: Maybe<Scalars['Float']>;
  puma?: Maybe<Scalars['Float']>;
  rent__mean?: Maybe<Scalars['Float']>;
  rent__median?: Maybe<Scalars['Float']>;
  rent_to_income_mean?: Maybe<Scalars['Float']>;
  rent_to_income_median?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Stddev_Samp_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type New_York_X_Pumas_Data_Sum_Fields = {
  household_income__mean?: Maybe<Scalars['float8']>;
  household_income__median?: Maybe<Scalars['bigint']>;
  index?: Maybe<Scalars['bigint']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['float8']>;
  monthly_mortgager_income__median?: Maybe<Scalars['float8']>;
  monthly_renter_income__mean?: Maybe<Scalars['float8']>;
  monthly_renter_income__median?: Maybe<Scalars['float8']>;
  mortgage_payment__mean?: Maybe<Scalars['float8']>;
  mortgage_payment__median?: Maybe<Scalars['bigint']>;
  mortgage_to_income_mean?: Maybe<Scalars['float8']>;
  mortgage_to_income_median?: Maybe<Scalars['float8']>;
  p_renting?: Maybe<Scalars['float8']>;
  price__mean?: Maybe<Scalars['float8']>;
  price__median?: Maybe<Scalars['bigint']>;
  price_to_income_mean?: Maybe<Scalars['float8']>;
  price_to_income_median?: Maybe<Scalars['float8']>;
  puma?: Maybe<Scalars['bigint']>;
  rent__mean?: Maybe<Scalars['float8']>;
  rent__median?: Maybe<Scalars['bigint']>;
  rent_to_income_mean?: Maybe<Scalars['float8']>;
  rent_to_income_median?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Sum_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type New_York_X_Pumas_Data_Var_Pop_Fields = {
  household_income__mean?: Maybe<Scalars['Float']>;
  household_income__median?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__median?: Maybe<Scalars['Float']>;
  monthly_renter_income__mean?: Maybe<Scalars['Float']>;
  monthly_renter_income__median?: Maybe<Scalars['Float']>;
  mortgage_payment__mean?: Maybe<Scalars['Float']>;
  mortgage_payment__median?: Maybe<Scalars['Float']>;
  mortgage_to_income_mean?: Maybe<Scalars['Float']>;
  mortgage_to_income_median?: Maybe<Scalars['Float']>;
  p_renting?: Maybe<Scalars['Float']>;
  price__mean?: Maybe<Scalars['Float']>;
  price__median?: Maybe<Scalars['Float']>;
  price_to_income_mean?: Maybe<Scalars['Float']>;
  price_to_income_median?: Maybe<Scalars['Float']>;
  puma?: Maybe<Scalars['Float']>;
  rent__mean?: Maybe<Scalars['Float']>;
  rent__median?: Maybe<Scalars['Float']>;
  rent_to_income_mean?: Maybe<Scalars['Float']>;
  rent_to_income_median?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Var_Pop_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type New_York_X_Pumas_Data_Var_Samp_Fields = {
  household_income__mean?: Maybe<Scalars['Float']>;
  household_income__median?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__median?: Maybe<Scalars['Float']>;
  monthly_renter_income__mean?: Maybe<Scalars['Float']>;
  monthly_renter_income__median?: Maybe<Scalars['Float']>;
  mortgage_payment__mean?: Maybe<Scalars['Float']>;
  mortgage_payment__median?: Maybe<Scalars['Float']>;
  mortgage_to_income_mean?: Maybe<Scalars['Float']>;
  mortgage_to_income_median?: Maybe<Scalars['Float']>;
  p_renting?: Maybe<Scalars['Float']>;
  price__mean?: Maybe<Scalars['Float']>;
  price__median?: Maybe<Scalars['Float']>;
  price_to_income_mean?: Maybe<Scalars['Float']>;
  price_to_income_median?: Maybe<Scalars['Float']>;
  puma?: Maybe<Scalars['Float']>;
  rent__mean?: Maybe<Scalars['Float']>;
  rent__median?: Maybe<Scalars['Float']>;
  rent_to_income_mean?: Maybe<Scalars['Float']>;
  rent_to_income_median?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Var_Samp_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type New_York_X_Pumas_Data_Variance_Fields = {
  household_income__mean?: Maybe<Scalars['Float']>;
  household_income__median?: Maybe<Scalars['Float']>;
  index?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__mean?: Maybe<Scalars['Float']>;
  monthly_mortgager_income__median?: Maybe<Scalars['Float']>;
  monthly_renter_income__mean?: Maybe<Scalars['Float']>;
  monthly_renter_income__median?: Maybe<Scalars['Float']>;
  mortgage_payment__mean?: Maybe<Scalars['Float']>;
  mortgage_payment__median?: Maybe<Scalars['Float']>;
  mortgage_to_income_mean?: Maybe<Scalars['Float']>;
  mortgage_to_income_median?: Maybe<Scalars['Float']>;
  p_renting?: Maybe<Scalars['Float']>;
  price__mean?: Maybe<Scalars['Float']>;
  price__median?: Maybe<Scalars['Float']>;
  price_to_income_mean?: Maybe<Scalars['Float']>;
  price_to_income_median?: Maybe<Scalars['Float']>;
  puma?: Maybe<Scalars['Float']>;
  rent__mean?: Maybe<Scalars['Float']>;
  rent__median?: Maybe<Scalars['Float']>;
  rent_to_income_mean?: Maybe<Scalars['Float']>;
  rent_to_income_median?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "new_york_x_pumas_data" */
export type New_York_X_Pumas_Data_Variance_Order_By = {
  household_income__mean?: Maybe<Order_By>;
  household_income__median?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  monthly_mortgager_income__mean?: Maybe<Order_By>;
  monthly_mortgager_income__median?: Maybe<Order_By>;
  monthly_renter_income__mean?: Maybe<Order_By>;
  monthly_renter_income__median?: Maybe<Order_By>;
  mortgage_payment__mean?: Maybe<Order_By>;
  mortgage_payment__median?: Maybe<Order_By>;
  mortgage_to_income_mean?: Maybe<Order_By>;
  mortgage_to_income_median?: Maybe<Order_By>;
  p_renting?: Maybe<Order_By>;
  price__mean?: Maybe<Order_By>;
  price__median?: Maybe<Order_By>;
  price_to_income_mean?: Maybe<Order_By>;
  price_to_income_median?: Maybe<Order_By>;
  puma?: Maybe<Order_By>;
  rent__mean?: Maybe<Order_By>;
  rent__median?: Maybe<Order_By>;
  rent_to_income_mean?: Maybe<Order_By>;
  rent_to_income_median?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** columns and relationships of "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003 = {
  am_date?: Maybe<Scalars['bigint']>;
  class?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  number_of_stories?: Maybe<Scalars['bigint']>;
  population?: Maybe<Scalars['numeric']>;
  primary_use?: Maybe<Scalars['String']>;
  secondary_use?: Maybe<Scalars['String']>;
  structural?: Maybe<Scalars['String']>;
  structural_description?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** aggregated selection of "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Aggregate = {
  aggregate?: Maybe<North_Vancouver_District_X_Buildings_2003_Aggregate_Fields>;
  nodes: Array<North_Vancouver_District_X_Buildings_2003>;
};

/** aggregate fields of "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Aggregate_Fields = {
  avg?: Maybe<North_Vancouver_District_X_Buildings_2003_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<North_Vancouver_District_X_Buildings_2003_Max_Fields>;
  min?: Maybe<North_Vancouver_District_X_Buildings_2003_Min_Fields>;
  stddev?: Maybe<North_Vancouver_District_X_Buildings_2003_Stddev_Fields>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Buildings_2003_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Buildings_2003_Stddev_Samp_Fields>;
  sum?: Maybe<North_Vancouver_District_X_Buildings_2003_Sum_Fields>;
  var_pop?: Maybe<North_Vancouver_District_X_Buildings_2003_Var_Pop_Fields>;
  var_samp?: Maybe<North_Vancouver_District_X_Buildings_2003_Var_Samp_Fields>;
  variance?: Maybe<North_Vancouver_District_X_Buildings_2003_Variance_Fields>;
};


/** aggregate fields of "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<North_Vancouver_District_X_Buildings_2003_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Aggregate_Order_By = {
  avg?: Maybe<North_Vancouver_District_X_Buildings_2003_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<North_Vancouver_District_X_Buildings_2003_Max_Order_By>;
  min?: Maybe<North_Vancouver_District_X_Buildings_2003_Min_Order_By>;
  stddev?: Maybe<North_Vancouver_District_X_Buildings_2003_Stddev_Order_By>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Buildings_2003_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Buildings_2003_Stddev_Samp_Order_By>;
  sum?: Maybe<North_Vancouver_District_X_Buildings_2003_Sum_Order_By>;
  var_pop?: Maybe<North_Vancouver_District_X_Buildings_2003_Var_Pop_Order_By>;
  var_samp?: Maybe<North_Vancouver_District_X_Buildings_2003_Var_Samp_Order_By>;
  variance?: Maybe<North_Vancouver_District_X_Buildings_2003_Variance_Order_By>;
};

/** aggregate avg on columns */
export type North_Vancouver_District_X_Buildings_2003_Avg_Fields = {
  am_date?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_stories?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Avg_Order_By = {
  am_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "north_vancouver_district_x_buildings_2003". All fields are combined with a logical 'AND'. */
export type North_Vancouver_District_X_Buildings_2003_Bool_Exp = {
  _and?: Maybe<Array<Maybe<North_Vancouver_District_X_Buildings_2003_Bool_Exp>>>;
  _not?: Maybe<North_Vancouver_District_X_Buildings_2003_Bool_Exp>;
  _or?: Maybe<Array<Maybe<North_Vancouver_District_X_Buildings_2003_Bool_Exp>>>;
  am_date?: Maybe<Bigint_Comparison_Exp>;
  class?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  number_of_stories?: Maybe<Bigint_Comparison_Exp>;
  population?: Maybe<Numeric_Comparison_Exp>;
  primary_use?: Maybe<String_Comparison_Exp>;
  secondary_use?: Maybe<String_Comparison_Exp>;
  structural?: Maybe<String_Comparison_Exp>;
  structural_description?: Maybe<String_Comparison_Exp>;
  subtype?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type North_Vancouver_District_X_Buildings_2003_Max_Fields = {
  am_date?: Maybe<Scalars['bigint']>;
  class?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  number_of_stories?: Maybe<Scalars['bigint']>;
  population?: Maybe<Scalars['numeric']>;
  primary_use?: Maybe<Scalars['String']>;
  secondary_use?: Maybe<Scalars['String']>;
  structural?: Maybe<Scalars['String']>;
  structural_description?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Max_Order_By = {
  am_date?: Maybe<Order_By>;
  class?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  primary_use?: Maybe<Order_By>;
  secondary_use?: Maybe<Order_By>;
  structural?: Maybe<Order_By>;
  structural_description?: Maybe<Order_By>;
  subtype?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type North_Vancouver_District_X_Buildings_2003_Min_Fields = {
  am_date?: Maybe<Scalars['bigint']>;
  class?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  number_of_stories?: Maybe<Scalars['bigint']>;
  population?: Maybe<Scalars['numeric']>;
  primary_use?: Maybe<Scalars['String']>;
  secondary_use?: Maybe<Scalars['String']>;
  structural?: Maybe<Scalars['String']>;
  structural_description?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Min_Order_By = {
  am_date?: Maybe<Order_By>;
  class?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  primary_use?: Maybe<Order_By>;
  secondary_use?: Maybe<Order_By>;
  structural?: Maybe<Order_By>;
  structural_description?: Maybe<Order_By>;
  subtype?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** ordering options when selecting data from "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Order_By = {
  am_date?: Maybe<Order_By>;
  class?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  primary_use?: Maybe<Order_By>;
  secondary_use?: Maybe<Order_By>;
  structural?: Maybe<Order_By>;
  structural_description?: Maybe<Order_By>;
  subtype?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "north_vancouver_district_x_buildings_2003" */
export enum North_Vancouver_District_X_Buildings_2003_Select_Column {
  /** column name */
  AmDate = 'am_date',
  /** column name */
  Class = 'class',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NumberOfStories = 'number_of_stories',
  /** column name */
  Population = 'population',
  /** column name */
  PrimaryUse = 'primary_use',
  /** column name */
  SecondaryUse = 'secondary_use',
  /** column name */
  Structural = 'structural',
  /** column name */
  StructuralDescription = 'structural_description',
  /** column name */
  Subtype = 'subtype',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type North_Vancouver_District_X_Buildings_2003_Stddev_Fields = {
  am_date?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_stories?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Stddev_Order_By = {
  am_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type North_Vancouver_District_X_Buildings_2003_Stddev_Pop_Fields = {
  am_date?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_stories?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Stddev_Pop_Order_By = {
  am_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type North_Vancouver_District_X_Buildings_2003_Stddev_Samp_Fields = {
  am_date?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_stories?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Stddev_Samp_Order_By = {
  am_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type North_Vancouver_District_X_Buildings_2003_Sum_Fields = {
  am_date?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  number_of_stories?: Maybe<Scalars['bigint']>;
  population?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Sum_Order_By = {
  am_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type North_Vancouver_District_X_Buildings_2003_Var_Pop_Fields = {
  am_date?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_stories?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Var_Pop_Order_By = {
  am_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type North_Vancouver_District_X_Buildings_2003_Var_Samp_Fields = {
  am_date?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_stories?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Var_Samp_Order_By = {
  am_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type North_Vancouver_District_X_Buildings_2003_Variance_Fields = {
  am_date?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  number_of_stories?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "north_vancouver_district_x_buildings_2003" */
export type North_Vancouver_District_X_Buildings_2003_Variance_Order_By = {
  am_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number_of_stories?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
};

/** columns and relationships of "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan = {
  _energov_nam?: Maybe<Scalars['String']>;
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  _ocp_zone?: Maybe<Scalars['String']>;
  _ocp_zone_re?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  ocp_class?: Maybe<Scalars['String']>;
  ocp_class_r?: Maybe<Scalars['String']>;
};

/** aggregated selection of "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Aggregate = {
  aggregate?: Maybe<North_Vancouver_District_X_Community_Plan_Aggregate_Fields>;
  nodes: Array<North_Vancouver_District_X_Community_Plan>;
};

/** aggregate fields of "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Aggregate_Fields = {
  avg?: Maybe<North_Vancouver_District_X_Community_Plan_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<North_Vancouver_District_X_Community_Plan_Max_Fields>;
  min?: Maybe<North_Vancouver_District_X_Community_Plan_Min_Fields>;
  stddev?: Maybe<North_Vancouver_District_X_Community_Plan_Stddev_Fields>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Community_Plan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Community_Plan_Stddev_Samp_Fields>;
  sum?: Maybe<North_Vancouver_District_X_Community_Plan_Sum_Fields>;
  var_pop?: Maybe<North_Vancouver_District_X_Community_Plan_Var_Pop_Fields>;
  var_samp?: Maybe<North_Vancouver_District_X_Community_Plan_Var_Samp_Fields>;
  variance?: Maybe<North_Vancouver_District_X_Community_Plan_Variance_Fields>;
};


/** aggregate fields of "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<North_Vancouver_District_X_Community_Plan_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Aggregate_Order_By = {
  avg?: Maybe<North_Vancouver_District_X_Community_Plan_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<North_Vancouver_District_X_Community_Plan_Max_Order_By>;
  min?: Maybe<North_Vancouver_District_X_Community_Plan_Min_Order_By>;
  stddev?: Maybe<North_Vancouver_District_X_Community_Plan_Stddev_Order_By>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Community_Plan_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Community_Plan_Stddev_Samp_Order_By>;
  sum?: Maybe<North_Vancouver_District_X_Community_Plan_Sum_Order_By>;
  var_pop?: Maybe<North_Vancouver_District_X_Community_Plan_Var_Pop_Order_By>;
  var_samp?: Maybe<North_Vancouver_District_X_Community_Plan_Var_Samp_Order_By>;
  variance?: Maybe<North_Vancouver_District_X_Community_Plan_Variance_Order_By>;
};

/** aggregate avg on columns */
export type North_Vancouver_District_X_Community_Plan_Avg_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Avg_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "north_vancouver_district_x_community_plan". All fields are combined with a logical 'AND'. */
export type North_Vancouver_District_X_Community_Plan_Bool_Exp = {
  _and?: Maybe<Array<Maybe<North_Vancouver_District_X_Community_Plan_Bool_Exp>>>;
  _energov_nam?: Maybe<String_Comparison_Exp>;
  _global_id?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<North_Vancouver_District_X_Community_Plan_Bool_Exp>;
  _object_id?: Maybe<Bigint_Comparison_Exp>;
  _ocp_zone?: Maybe<String_Comparison_Exp>;
  _ocp_zone_re?: Maybe<String_Comparison_Exp>;
  _or?: Maybe<Array<Maybe<North_Vancouver_District_X_Community_Plan_Bool_Exp>>>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  ocp_class?: Maybe<String_Comparison_Exp>;
  ocp_class_r?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type North_Vancouver_District_X_Community_Plan_Max_Fields = {
  _energov_nam?: Maybe<Scalars['String']>;
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  _ocp_zone?: Maybe<Scalars['String']>;
  _ocp_zone_re?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ocp_class?: Maybe<Scalars['String']>;
  ocp_class_r?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Max_Order_By = {
  _energov_nam?: Maybe<Order_By>;
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  _ocp_zone?: Maybe<Order_By>;
  _ocp_zone_re?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ocp_class?: Maybe<Order_By>;
  ocp_class_r?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type North_Vancouver_District_X_Community_Plan_Min_Fields = {
  _energov_nam?: Maybe<Scalars['String']>;
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  _ocp_zone?: Maybe<Scalars['String']>;
  _ocp_zone_re?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  ocp_class?: Maybe<Scalars['String']>;
  ocp_class_r?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Min_Order_By = {
  _energov_nam?: Maybe<Order_By>;
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  _ocp_zone?: Maybe<Order_By>;
  _ocp_zone_re?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ocp_class?: Maybe<Order_By>;
  ocp_class_r?: Maybe<Order_By>;
};

/** ordering options when selecting data from "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Order_By = {
  _energov_nam?: Maybe<Order_By>;
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  _ocp_zone?: Maybe<Order_By>;
  _ocp_zone_re?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  ocp_class?: Maybe<Order_By>;
  ocp_class_r?: Maybe<Order_By>;
};

/** primary key columns input for table: "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "north_vancouver_district_x_community_plan" */
export enum North_Vancouver_District_X_Community_Plan_Select_Column {
  /** column name */
  EnergovNam = '_energov_nam',
  /** column name */
  GlobalId = '_global_id',
  /** column name */
  ObjectId = '_object_id',
  /** column name */
  OcpZone = '_ocp_zone',
  /** column name */
  OcpZoneRe = '_ocp_zone_re',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  OcpClass = 'ocp_class',
  /** column name */
  OcpClassR = 'ocp_class_r'
}

/** aggregate stddev on columns */
export type North_Vancouver_District_X_Community_Plan_Stddev_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Stddev_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type North_Vancouver_District_X_Community_Plan_Stddev_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Stddev_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type North_Vancouver_District_X_Community_Plan_Stddev_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Stddev_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type North_Vancouver_District_X_Community_Plan_Sum_Fields = {
  _object_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Sum_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type North_Vancouver_District_X_Community_Plan_Var_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Var_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type North_Vancouver_District_X_Community_Plan_Var_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Var_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type North_Vancouver_District_X_Community_Plan_Variance_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "north_vancouver_district_x_community_plan" */
export type North_Vancouver_District_X_Community_Plan_Variance_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots = {
  _dlot?: Maybe<Scalars['String']>;
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
};

/** aggregated selection of "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Aggregate = {
  aggregate?: Maybe<North_Vancouver_District_X_Land_Lots_Aggregate_Fields>;
  nodes: Array<North_Vancouver_District_X_Land_Lots>;
};

/** aggregate fields of "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Aggregate_Fields = {
  avg?: Maybe<North_Vancouver_District_X_Land_Lots_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<North_Vancouver_District_X_Land_Lots_Max_Fields>;
  min?: Maybe<North_Vancouver_District_X_Land_Lots_Min_Fields>;
  stddev?: Maybe<North_Vancouver_District_X_Land_Lots_Stddev_Fields>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Land_Lots_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Land_Lots_Stddev_Samp_Fields>;
  sum?: Maybe<North_Vancouver_District_X_Land_Lots_Sum_Fields>;
  var_pop?: Maybe<North_Vancouver_District_X_Land_Lots_Var_Pop_Fields>;
  var_samp?: Maybe<North_Vancouver_District_X_Land_Lots_Var_Samp_Fields>;
  variance?: Maybe<North_Vancouver_District_X_Land_Lots_Variance_Fields>;
};


/** aggregate fields of "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<North_Vancouver_District_X_Land_Lots_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Aggregate_Order_By = {
  avg?: Maybe<North_Vancouver_District_X_Land_Lots_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<North_Vancouver_District_X_Land_Lots_Max_Order_By>;
  min?: Maybe<North_Vancouver_District_X_Land_Lots_Min_Order_By>;
  stddev?: Maybe<North_Vancouver_District_X_Land_Lots_Stddev_Order_By>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Land_Lots_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Land_Lots_Stddev_Samp_Order_By>;
  sum?: Maybe<North_Vancouver_District_X_Land_Lots_Sum_Order_By>;
  var_pop?: Maybe<North_Vancouver_District_X_Land_Lots_Var_Pop_Order_By>;
  var_samp?: Maybe<North_Vancouver_District_X_Land_Lots_Var_Samp_Order_By>;
  variance?: Maybe<North_Vancouver_District_X_Land_Lots_Variance_Order_By>;
};

/** aggregate avg on columns */
export type North_Vancouver_District_X_Land_Lots_Avg_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Avg_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "north_vancouver_district_x_land_lots". All fields are combined with a logical 'AND'. */
export type North_Vancouver_District_X_Land_Lots_Bool_Exp = {
  _and?: Maybe<Array<Maybe<North_Vancouver_District_X_Land_Lots_Bool_Exp>>>;
  _dlot?: Maybe<String_Comparison_Exp>;
  _global_id?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<North_Vancouver_District_X_Land_Lots_Bool_Exp>;
  _object_id?: Maybe<Bigint_Comparison_Exp>;
  _or?: Maybe<Array<Maybe<North_Vancouver_District_X_Land_Lots_Bool_Exp>>>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type North_Vancouver_District_X_Land_Lots_Max_Fields = {
  _dlot?: Maybe<Scalars['String']>;
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Max_Order_By = {
  _dlot?: Maybe<Order_By>;
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type North_Vancouver_District_X_Land_Lots_Min_Fields = {
  _dlot?: Maybe<Scalars['String']>;
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Min_Order_By = {
  _dlot?: Maybe<Order_By>;
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Order_By = {
  _dlot?: Maybe<Order_By>;
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "north_vancouver_district_x_land_lots" */
export enum North_Vancouver_District_X_Land_Lots_Select_Column {
  /** column name */
  Dlot = '_dlot',
  /** column name */
  GlobalId = '_global_id',
  /** column name */
  ObjectId = '_object_id',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type North_Vancouver_District_X_Land_Lots_Stddev_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Stddev_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type North_Vancouver_District_X_Land_Lots_Stddev_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Stddev_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type North_Vancouver_District_X_Land_Lots_Stddev_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Stddev_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type North_Vancouver_District_X_Land_Lots_Sum_Fields = {
  _object_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Sum_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type North_Vancouver_District_X_Land_Lots_Var_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Var_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type North_Vancouver_District_X_Land_Lots_Var_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Var_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type North_Vancouver_District_X_Land_Lots_Variance_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "north_vancouver_district_x_land_lots" */
export type North_Vancouver_District_X_Land_Lots_Variance_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods = {
  _global_id?: Maybe<Scalars['String']>;
  _nbdy_code?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  nbdy_name_?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Aggregate = {
  aggregate?: Maybe<North_Vancouver_District_X_Neighborhoods_Aggregate_Fields>;
  nodes: Array<North_Vancouver_District_X_Neighborhoods>;
};

/** aggregate fields of "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Aggregate_Fields = {
  avg?: Maybe<North_Vancouver_District_X_Neighborhoods_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<North_Vancouver_District_X_Neighborhoods_Max_Fields>;
  min?: Maybe<North_Vancouver_District_X_Neighborhoods_Min_Fields>;
  stddev?: Maybe<North_Vancouver_District_X_Neighborhoods_Stddev_Fields>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Neighborhoods_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Neighborhoods_Stddev_Samp_Fields>;
  sum?: Maybe<North_Vancouver_District_X_Neighborhoods_Sum_Fields>;
  var_pop?: Maybe<North_Vancouver_District_X_Neighborhoods_Var_Pop_Fields>;
  var_samp?: Maybe<North_Vancouver_District_X_Neighborhoods_Var_Samp_Fields>;
  variance?: Maybe<North_Vancouver_District_X_Neighborhoods_Variance_Fields>;
};


/** aggregate fields of "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<North_Vancouver_District_X_Neighborhoods_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Aggregate_Order_By = {
  avg?: Maybe<North_Vancouver_District_X_Neighborhoods_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<North_Vancouver_District_X_Neighborhoods_Max_Order_By>;
  min?: Maybe<North_Vancouver_District_X_Neighborhoods_Min_Order_By>;
  stddev?: Maybe<North_Vancouver_District_X_Neighborhoods_Stddev_Order_By>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Neighborhoods_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Neighborhoods_Stddev_Samp_Order_By>;
  sum?: Maybe<North_Vancouver_District_X_Neighborhoods_Sum_Order_By>;
  var_pop?: Maybe<North_Vancouver_District_X_Neighborhoods_Var_Pop_Order_By>;
  var_samp?: Maybe<North_Vancouver_District_X_Neighborhoods_Var_Samp_Order_By>;
  variance?: Maybe<North_Vancouver_District_X_Neighborhoods_Variance_Order_By>;
};

/** aggregate avg on columns */
export type North_Vancouver_District_X_Neighborhoods_Avg_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Avg_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "north_vancouver_district_x_neighborhoods". All fields are combined with a logical 'AND'. */
export type North_Vancouver_District_X_Neighborhoods_Bool_Exp = {
  _and?: Maybe<Array<Maybe<North_Vancouver_District_X_Neighborhoods_Bool_Exp>>>;
  _global_id?: Maybe<String_Comparison_Exp>;
  _nbdy_code?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<North_Vancouver_District_X_Neighborhoods_Bool_Exp>;
  _object_id?: Maybe<Bigint_Comparison_Exp>;
  _or?: Maybe<Array<Maybe<North_Vancouver_District_X_Neighborhoods_Bool_Exp>>>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  nbdy_name_?: Maybe<String_Comparison_Exp>;
  year?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type North_Vancouver_District_X_Neighborhoods_Max_Fields = {
  _global_id?: Maybe<Scalars['String']>;
  _nbdy_code?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  nbdy_name_?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Max_Order_By = {
  _global_id?: Maybe<Order_By>;
  _nbdy_code?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nbdy_name_?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type North_Vancouver_District_X_Neighborhoods_Min_Fields = {
  _global_id?: Maybe<Scalars['String']>;
  _nbdy_code?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  nbdy_name_?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Min_Order_By = {
  _global_id?: Maybe<Order_By>;
  _nbdy_code?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nbdy_name_?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** ordering options when selecting data from "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Order_By = {
  _global_id?: Maybe<Order_By>;
  _nbdy_code?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  nbdy_name_?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** primary key columns input for table: "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "north_vancouver_district_x_neighborhoods" */
export enum North_Vancouver_District_X_Neighborhoods_Select_Column {
  /** column name */
  GlobalId = '_global_id',
  /** column name */
  NbdyCode = '_nbdy_code',
  /** column name */
  ObjectId = '_object_id',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  NbdyName = 'nbdy_name_',
  /** column name */
  Year = 'year'
}

/** aggregate stddev on columns */
export type North_Vancouver_District_X_Neighborhoods_Stddev_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Stddev_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type North_Vancouver_District_X_Neighborhoods_Stddev_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Stddev_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type North_Vancouver_District_X_Neighborhoods_Stddev_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Stddev_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type North_Vancouver_District_X_Neighborhoods_Sum_Fields = {
  _object_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Sum_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type North_Vancouver_District_X_Neighborhoods_Var_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Var_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type North_Vancouver_District_X_Neighborhoods_Var_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Var_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type North_Vancouver_District_X_Neighborhoods_Variance_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "north_vancouver_district_x_neighborhoods" */
export type North_Vancouver_District_X_Neighborhoods_Variance_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** columns and relationships of "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels = {
  _dblink?: Maybe<Scalars['String']>;
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  air_space?: Maybe<Scalars['String']>;
  cogo?: Maybe<Scalars['String']>;
  corner_lot?: Maybe<Scalars['String']>;
  double_front?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  incident?: Maybe<Scalars['String']>;
  open_lane?: Maybe<Scalars['String']>;
};

/** aggregated selection of "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Aggregate = {
  aggregate?: Maybe<North_Vancouver_District_X_Parcels_Aggregate_Fields>;
  nodes: Array<North_Vancouver_District_X_Parcels>;
};

/** aggregate fields of "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Aggregate_Fields = {
  avg?: Maybe<North_Vancouver_District_X_Parcels_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<North_Vancouver_District_X_Parcels_Max_Fields>;
  min?: Maybe<North_Vancouver_District_X_Parcels_Min_Fields>;
  stddev?: Maybe<North_Vancouver_District_X_Parcels_Stddev_Fields>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Parcels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Parcels_Stddev_Samp_Fields>;
  sum?: Maybe<North_Vancouver_District_X_Parcels_Sum_Fields>;
  var_pop?: Maybe<North_Vancouver_District_X_Parcels_Var_Pop_Fields>;
  var_samp?: Maybe<North_Vancouver_District_X_Parcels_Var_Samp_Fields>;
  variance?: Maybe<North_Vancouver_District_X_Parcels_Variance_Fields>;
};


/** aggregate fields of "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<North_Vancouver_District_X_Parcels_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Aggregate_Order_By = {
  avg?: Maybe<North_Vancouver_District_X_Parcels_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<North_Vancouver_District_X_Parcels_Max_Order_By>;
  min?: Maybe<North_Vancouver_District_X_Parcels_Min_Order_By>;
  stddev?: Maybe<North_Vancouver_District_X_Parcels_Stddev_Order_By>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Parcels_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Parcels_Stddev_Samp_Order_By>;
  sum?: Maybe<North_Vancouver_District_X_Parcels_Sum_Order_By>;
  var_pop?: Maybe<North_Vancouver_District_X_Parcels_Var_Pop_Order_By>;
  var_samp?: Maybe<North_Vancouver_District_X_Parcels_Var_Samp_Order_By>;
  variance?: Maybe<North_Vancouver_District_X_Parcels_Variance_Order_By>;
};

/** aggregate avg on columns */
export type North_Vancouver_District_X_Parcels_Avg_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Avg_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "north_vancouver_district_x_parcels". All fields are combined with a logical 'AND'. */
export type North_Vancouver_District_X_Parcels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<North_Vancouver_District_X_Parcels_Bool_Exp>>>;
  _dblink?: Maybe<String_Comparison_Exp>;
  _global_id?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<North_Vancouver_District_X_Parcels_Bool_Exp>;
  _object_id?: Maybe<Bigint_Comparison_Exp>;
  _or?: Maybe<Array<Maybe<North_Vancouver_District_X_Parcels_Bool_Exp>>>;
  air_space?: Maybe<String_Comparison_Exp>;
  cogo?: Maybe<String_Comparison_Exp>;
  corner_lot?: Maybe<String_Comparison_Exp>;
  double_front?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  incident?: Maybe<String_Comparison_Exp>;
  open_lane?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type North_Vancouver_District_X_Parcels_Max_Fields = {
  _dblink?: Maybe<Scalars['String']>;
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  air_space?: Maybe<Scalars['String']>;
  cogo?: Maybe<Scalars['String']>;
  corner_lot?: Maybe<Scalars['String']>;
  double_front?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  incident?: Maybe<Scalars['String']>;
  open_lane?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Max_Order_By = {
  _dblink?: Maybe<Order_By>;
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  air_space?: Maybe<Order_By>;
  cogo?: Maybe<Order_By>;
  corner_lot?: Maybe<Order_By>;
  double_front?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  incident?: Maybe<Order_By>;
  open_lane?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type North_Vancouver_District_X_Parcels_Min_Fields = {
  _dblink?: Maybe<Scalars['String']>;
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  air_space?: Maybe<Scalars['String']>;
  cogo?: Maybe<Scalars['String']>;
  corner_lot?: Maybe<Scalars['String']>;
  double_front?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  incident?: Maybe<Scalars['String']>;
  open_lane?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Min_Order_By = {
  _dblink?: Maybe<Order_By>;
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  air_space?: Maybe<Order_By>;
  cogo?: Maybe<Order_By>;
  corner_lot?: Maybe<Order_By>;
  double_front?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  incident?: Maybe<Order_By>;
  open_lane?: Maybe<Order_By>;
};

/** ordering options when selecting data from "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Order_By = {
  _dblink?: Maybe<Order_By>;
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  air_space?: Maybe<Order_By>;
  cogo?: Maybe<Order_By>;
  corner_lot?: Maybe<Order_By>;
  double_front?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  incident?: Maybe<Order_By>;
  open_lane?: Maybe<Order_By>;
};

/** primary key columns input for table: "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "north_vancouver_district_x_parcels" */
export enum North_Vancouver_District_X_Parcels_Select_Column {
  /** column name */
  Dblink = '_dblink',
  /** column name */
  GlobalId = '_global_id',
  /** column name */
  ObjectId = '_object_id',
  /** column name */
  AirSpace = 'air_space',
  /** column name */
  Cogo = 'cogo',
  /** column name */
  CornerLot = 'corner_lot',
  /** column name */
  DoubleFront = 'double_front',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Incident = 'incident',
  /** column name */
  OpenLane = 'open_lane'
}

/** aggregate stddev on columns */
export type North_Vancouver_District_X_Parcels_Stddev_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Stddev_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type North_Vancouver_District_X_Parcels_Stddev_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Stddev_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type North_Vancouver_District_X_Parcels_Stddev_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Stddev_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type North_Vancouver_District_X_Parcels_Sum_Fields = {
  _object_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Sum_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type North_Vancouver_District_X_Parcels_Var_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Var_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type North_Vancouver_District_X_Parcels_Var_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Var_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type North_Vancouver_District_X_Parcels_Variance_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "north_vancouver_district_x_parcels" */
export type North_Vancouver_District_X_Parcels_Variance_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning = {
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  class?: Maybe<Scalars['String']>;
  class_code?: Maybe<Scalars['String']>;
  energov_nam?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  zoning?: Maybe<Scalars['String']>;
  zoning_code?: Maybe<Scalars['String']>;
};

/** aggregated selection of "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Aggregate = {
  aggregate?: Maybe<North_Vancouver_District_X_Zoning_Aggregate_Fields>;
  nodes: Array<North_Vancouver_District_X_Zoning>;
};

/** aggregate fields of "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Aggregate_Fields = {
  avg?: Maybe<North_Vancouver_District_X_Zoning_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<North_Vancouver_District_X_Zoning_Max_Fields>;
  min?: Maybe<North_Vancouver_District_X_Zoning_Min_Fields>;
  stddev?: Maybe<North_Vancouver_District_X_Zoning_Stddev_Fields>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Zoning_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Zoning_Stddev_Samp_Fields>;
  sum?: Maybe<North_Vancouver_District_X_Zoning_Sum_Fields>;
  var_pop?: Maybe<North_Vancouver_District_X_Zoning_Var_Pop_Fields>;
  var_samp?: Maybe<North_Vancouver_District_X_Zoning_Var_Samp_Fields>;
  variance?: Maybe<North_Vancouver_District_X_Zoning_Variance_Fields>;
};


/** aggregate fields of "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<North_Vancouver_District_X_Zoning_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Aggregate_Order_By = {
  avg?: Maybe<North_Vancouver_District_X_Zoning_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<North_Vancouver_District_X_Zoning_Max_Order_By>;
  min?: Maybe<North_Vancouver_District_X_Zoning_Min_Order_By>;
  stddev?: Maybe<North_Vancouver_District_X_Zoning_Stddev_Order_By>;
  stddev_pop?: Maybe<North_Vancouver_District_X_Zoning_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<North_Vancouver_District_X_Zoning_Stddev_Samp_Order_By>;
  sum?: Maybe<North_Vancouver_District_X_Zoning_Sum_Order_By>;
  var_pop?: Maybe<North_Vancouver_District_X_Zoning_Var_Pop_Order_By>;
  var_samp?: Maybe<North_Vancouver_District_X_Zoning_Var_Samp_Order_By>;
  variance?: Maybe<North_Vancouver_District_X_Zoning_Variance_Order_By>;
};

/** aggregate avg on columns */
export type North_Vancouver_District_X_Zoning_Avg_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Avg_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "north_vancouver_district_x_zoning". All fields are combined with a logical 'AND'. */
export type North_Vancouver_District_X_Zoning_Bool_Exp = {
  _and?: Maybe<Array<Maybe<North_Vancouver_District_X_Zoning_Bool_Exp>>>;
  _global_id?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<North_Vancouver_District_X_Zoning_Bool_Exp>;
  _object_id?: Maybe<Bigint_Comparison_Exp>;
  _or?: Maybe<Array<Maybe<North_Vancouver_District_X_Zoning_Bool_Exp>>>;
  class?: Maybe<String_Comparison_Exp>;
  class_code?: Maybe<String_Comparison_Exp>;
  energov_nam?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  zoning?: Maybe<String_Comparison_Exp>;
  zoning_code?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type North_Vancouver_District_X_Zoning_Max_Fields = {
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  class?: Maybe<Scalars['String']>;
  class_code?: Maybe<Scalars['String']>;
  energov_nam?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  zoning?: Maybe<Scalars['String']>;
  zoning_code?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Max_Order_By = {
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  class?: Maybe<Order_By>;
  class_code?: Maybe<Order_By>;
  energov_nam?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  zoning?: Maybe<Order_By>;
  zoning_code?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type North_Vancouver_District_X_Zoning_Min_Fields = {
  _global_id?: Maybe<Scalars['String']>;
  _object_id?: Maybe<Scalars['bigint']>;
  class?: Maybe<Scalars['String']>;
  class_code?: Maybe<Scalars['String']>;
  energov_nam?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  zoning?: Maybe<Scalars['String']>;
  zoning_code?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Min_Order_By = {
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  class?: Maybe<Order_By>;
  class_code?: Maybe<Order_By>;
  energov_nam?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  zoning?: Maybe<Order_By>;
  zoning_code?: Maybe<Order_By>;
};

/** ordering options when selecting data from "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Order_By = {
  _global_id?: Maybe<Order_By>;
  _object_id?: Maybe<Order_By>;
  class?: Maybe<Order_By>;
  class_code?: Maybe<Order_By>;
  energov_nam?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  zoning?: Maybe<Order_By>;
  zoning_code?: Maybe<Order_By>;
};

/** primary key columns input for table: "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "north_vancouver_district_x_zoning" */
export enum North_Vancouver_District_X_Zoning_Select_Column {
  /** column name */
  GlobalId = '_global_id',
  /** column name */
  ObjectId = '_object_id',
  /** column name */
  Class = 'class',
  /** column name */
  ClassCode = 'class_code',
  /** column name */
  EnergovNam = 'energov_nam',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Zoning = 'zoning',
  /** column name */
  ZoningCode = 'zoning_code'
}

/** aggregate stddev on columns */
export type North_Vancouver_District_X_Zoning_Stddev_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Stddev_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type North_Vancouver_District_X_Zoning_Stddev_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Stddev_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type North_Vancouver_District_X_Zoning_Stddev_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Stddev_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type North_Vancouver_District_X_Zoning_Sum_Fields = {
  _object_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Sum_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type North_Vancouver_District_X_Zoning_Var_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Var_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type North_Vancouver_District_X_Zoning_Var_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Var_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type North_Vancouver_District_X_Zoning_Variance_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "north_vancouver_district_x_zoning" */
export type North_Vancouver_District_X_Zoning_Variance_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};


/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "prices_historical" */
export type Prices_Historical = {
  average?: Maybe<Scalars['numeric']>;
  median?: Maybe<Scalars['numeric']>;
  normalized?: Maybe<Scalars['numeric']>;
  year?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "prices_historical" */
export type Prices_Historical_Aggregate = {
  aggregate?: Maybe<Prices_Historical_Aggregate_Fields>;
  nodes: Array<Prices_Historical>;
};

/** aggregate fields of "prices_historical" */
export type Prices_Historical_Aggregate_Fields = {
  avg?: Maybe<Prices_Historical_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Prices_Historical_Max_Fields>;
  min?: Maybe<Prices_Historical_Min_Fields>;
  stddev?: Maybe<Prices_Historical_Stddev_Fields>;
  stddev_pop?: Maybe<Prices_Historical_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Prices_Historical_Stddev_Samp_Fields>;
  sum?: Maybe<Prices_Historical_Sum_Fields>;
  var_pop?: Maybe<Prices_Historical_Var_Pop_Fields>;
  var_samp?: Maybe<Prices_Historical_Var_Samp_Fields>;
  variance?: Maybe<Prices_Historical_Variance_Fields>;
};


/** aggregate fields of "prices_historical" */
export type Prices_Historical_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Prices_Historical_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "prices_historical" */
export type Prices_Historical_Aggregate_Order_By = {
  avg?: Maybe<Prices_Historical_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Prices_Historical_Max_Order_By>;
  min?: Maybe<Prices_Historical_Min_Order_By>;
  stddev?: Maybe<Prices_Historical_Stddev_Order_By>;
  stddev_pop?: Maybe<Prices_Historical_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Prices_Historical_Stddev_Samp_Order_By>;
  sum?: Maybe<Prices_Historical_Sum_Order_By>;
  var_pop?: Maybe<Prices_Historical_Var_Pop_Order_By>;
  var_samp?: Maybe<Prices_Historical_Var_Samp_Order_By>;
  variance?: Maybe<Prices_Historical_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Prices_Historical_Avg_Fields = {
  average?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "prices_historical" */
export type Prices_Historical_Avg_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "prices_historical". All fields are combined with a logical 'AND'. */
export type Prices_Historical_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Prices_Historical_Bool_Exp>>>;
  _not?: Maybe<Prices_Historical_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Prices_Historical_Bool_Exp>>>;
  average?: Maybe<Numeric_Comparison_Exp>;
  median?: Maybe<Numeric_Comparison_Exp>;
  normalized?: Maybe<Numeric_Comparison_Exp>;
  year?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Prices_Historical_Max_Fields = {
  average?: Maybe<Scalars['numeric']>;
  median?: Maybe<Scalars['numeric']>;
  normalized?: Maybe<Scalars['numeric']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "prices_historical" */
export type Prices_Historical_Max_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Prices_Historical_Min_Fields = {
  average?: Maybe<Scalars['numeric']>;
  median?: Maybe<Scalars['numeric']>;
  normalized?: Maybe<Scalars['numeric']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "prices_historical" */
export type Prices_Historical_Min_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** ordering options when selecting data from "prices_historical" */
export type Prices_Historical_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** select columns of table "prices_historical" */
export enum Prices_Historical_Select_Column {
  /** column name */
  Average = 'average',
  /** column name */
  Median = 'median',
  /** column name */
  Normalized = 'normalized',
  /** column name */
  Year = 'year'
}

/** aggregate stddev on columns */
export type Prices_Historical_Stddev_Fields = {
  average?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "prices_historical" */
export type Prices_Historical_Stddev_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Prices_Historical_Stddev_Pop_Fields = {
  average?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "prices_historical" */
export type Prices_Historical_Stddev_Pop_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Prices_Historical_Stddev_Samp_Fields = {
  average?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "prices_historical" */
export type Prices_Historical_Stddev_Samp_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Prices_Historical_Sum_Fields = {
  average?: Maybe<Scalars['numeric']>;
  median?: Maybe<Scalars['numeric']>;
  normalized?: Maybe<Scalars['numeric']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "prices_historical" */
export type Prices_Historical_Sum_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Prices_Historical_Var_Pop_Fields = {
  average?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "prices_historical" */
export type Prices_Historical_Var_Pop_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Prices_Historical_Var_Samp_Fields = {
  average?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "prices_historical" */
export type Prices_Historical_Var_Samp_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Prices_Historical_Variance_Fields = {
  average?: Maybe<Scalars['Float']>;
  median?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "prices_historical" */
export type Prices_Historical_Variance_Order_By = {
  average?: Maybe<Order_By>;
  median?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** columns and relationships of "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo = {
  _country?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  affordability_index?: Maybe<Scalars['float8']>;
  geom?: Maybe<Scalars['geometry']>;
  gross_rental_yield_city_center?: Maybe<Scalars['float8']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['float8']>;
  id: Scalars['Int'];
  mortgage_as_percent_income?: Maybe<Scalars['float8']>;
  population?: Maybe<Scalars['Int']>;
  price_to_annual_income?: Maybe<Scalars['float8']>;
  price_to_rent_city_center?: Maybe<Scalars['float8']>;
  price_to_rent_non_city_center?: Maybe<Scalars['float8']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['float8']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Aggregate = {
  aggregate?: Maybe<Proprietary_X_Numbeo_Aggregate_Fields>;
  nodes: Array<Proprietary_X_Numbeo>;
};

/** aggregate fields of "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Aggregate_Fields = {
  avg?: Maybe<Proprietary_X_Numbeo_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Proprietary_X_Numbeo_Max_Fields>;
  min?: Maybe<Proprietary_X_Numbeo_Min_Fields>;
  stddev?: Maybe<Proprietary_X_Numbeo_Stddev_Fields>;
  stddev_pop?: Maybe<Proprietary_X_Numbeo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proprietary_X_Numbeo_Stddev_Samp_Fields>;
  sum?: Maybe<Proprietary_X_Numbeo_Sum_Fields>;
  var_pop?: Maybe<Proprietary_X_Numbeo_Var_Pop_Fields>;
  var_samp?: Maybe<Proprietary_X_Numbeo_Var_Samp_Fields>;
  variance?: Maybe<Proprietary_X_Numbeo_Variance_Fields>;
};


/** aggregate fields of "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proprietary_X_Numbeo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Aggregate_Order_By = {
  avg?: Maybe<Proprietary_X_Numbeo_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Proprietary_X_Numbeo_Max_Order_By>;
  min?: Maybe<Proprietary_X_Numbeo_Min_Order_By>;
  stddev?: Maybe<Proprietary_X_Numbeo_Stddev_Order_By>;
  stddev_pop?: Maybe<Proprietary_X_Numbeo_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Proprietary_X_Numbeo_Stddev_Samp_Order_By>;
  sum?: Maybe<Proprietary_X_Numbeo_Sum_Order_By>;
  var_pop?: Maybe<Proprietary_X_Numbeo_Var_Pop_Order_By>;
  var_samp?: Maybe<Proprietary_X_Numbeo_Var_Samp_Order_By>;
  variance?: Maybe<Proprietary_X_Numbeo_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proprietary_X_Numbeo_Avg_Fields = {
  affordability_index?: Maybe<Scalars['Float']>;
  gross_rental_yield_city_center?: Maybe<Scalars['Float']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mortgage_as_percent_income?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  price_to_annual_income?: Maybe<Scalars['Float']>;
  price_to_rent_city_center?: Maybe<Scalars['Float']>;
  price_to_rent_non_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Avg_Order_By = {
  affordability_index?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proprietary_x_numbeo". All fields are combined with a logical 'AND'. */
export type Proprietary_X_Numbeo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Proprietary_X_Numbeo_Bool_Exp>>>;
  _country?: Maybe<String_Comparison_Exp>;
  _name?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<Proprietary_X_Numbeo_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Proprietary_X_Numbeo_Bool_Exp>>>;
  affordability_index?: Maybe<Float8_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  gross_rental_yield_city_center?: Maybe<Float8_Comparison_Exp>;
  gross_rental_yield_non_city_center?: Maybe<Float8_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  mortgage_as_percent_income?: Maybe<Float8_Comparison_Exp>;
  population?: Maybe<Int_Comparison_Exp>;
  price_to_annual_income?: Maybe<Float8_Comparison_Exp>;
  price_to_rent_city_center?: Maybe<Float8_Comparison_Exp>;
  price_to_rent_non_city_center?: Maybe<Float8_Comparison_Exp>;
  rent_to_annual_income_city_center?: Maybe<Float8_Comparison_Exp>;
  rent_to_annual_income_non_city_center?: Maybe<Float8_Comparison_Exp>;
  year?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proprietary_X_Numbeo_Max_Fields = {
  _country?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  affordability_index?: Maybe<Scalars['float8']>;
  gross_rental_yield_city_center?: Maybe<Scalars['float8']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  mortgage_as_percent_income?: Maybe<Scalars['float8']>;
  population?: Maybe<Scalars['Int']>;
  price_to_annual_income?: Maybe<Scalars['float8']>;
  price_to_rent_city_center?: Maybe<Scalars['float8']>;
  price_to_rent_non_city_center?: Maybe<Scalars['float8']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['float8']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Max_Order_By = {
  _country?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  affordability_index?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Proprietary_X_Numbeo_Min_Fields = {
  _country?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  affordability_index?: Maybe<Scalars['float8']>;
  gross_rental_yield_city_center?: Maybe<Scalars['float8']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  mortgage_as_percent_income?: Maybe<Scalars['float8']>;
  population?: Maybe<Scalars['Int']>;
  price_to_annual_income?: Maybe<Scalars['float8']>;
  price_to_rent_city_center?: Maybe<Scalars['float8']>;
  price_to_rent_non_city_center?: Maybe<Scalars['float8']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['float8']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Min_Order_By = {
  _country?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  affordability_index?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** ordering options when selecting data from "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Order_By = {
  _country?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  affordability_index?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** primary key columns input for table: "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "proprietary_x_numbeo" */
export enum Proprietary_X_Numbeo_Select_Column {
  /** column name */
  Country = '_country',
  /** column name */
  Name = '_name',
  /** column name */
  AffordabilityIndex = 'affordability_index',
  /** column name */
  Geom = 'geom',
  /** column name */
  GrossRentalYieldCityCenter = 'gross_rental_yield_city_center',
  /** column name */
  GrossRentalYieldNonCityCenter = 'gross_rental_yield_non_city_center',
  /** column name */
  Id = 'id',
  /** column name */
  MortgageAsPercentIncome = 'mortgage_as_percent_income',
  /** column name */
  Population = 'population',
  /** column name */
  PriceToAnnualIncome = 'price_to_annual_income',
  /** column name */
  PriceToRentCityCenter = 'price_to_rent_city_center',
  /** column name */
  PriceToRentNonCityCenter = 'price_to_rent_non_city_center',
  /** column name */
  RentToAnnualIncomeCityCenter = 'rent_to_annual_income_city_center',
  /** column name */
  RentToAnnualIncomeNonCityCenter = 'rent_to_annual_income_non_city_center',
  /** column name */
  Year = 'year'
}

/** aggregate stddev on columns */
export type Proprietary_X_Numbeo_Stddev_Fields = {
  affordability_index?: Maybe<Scalars['Float']>;
  gross_rental_yield_city_center?: Maybe<Scalars['Float']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mortgage_as_percent_income?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  price_to_annual_income?: Maybe<Scalars['Float']>;
  price_to_rent_city_center?: Maybe<Scalars['Float']>;
  price_to_rent_non_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Stddev_Order_By = {
  affordability_index?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proprietary_X_Numbeo_Stddev_Pop_Fields = {
  affordability_index?: Maybe<Scalars['Float']>;
  gross_rental_yield_city_center?: Maybe<Scalars['Float']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mortgage_as_percent_income?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  price_to_annual_income?: Maybe<Scalars['Float']>;
  price_to_rent_city_center?: Maybe<Scalars['Float']>;
  price_to_rent_non_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Stddev_Pop_Order_By = {
  affordability_index?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proprietary_X_Numbeo_Stddev_Samp_Fields = {
  affordability_index?: Maybe<Scalars['Float']>;
  gross_rental_yield_city_center?: Maybe<Scalars['Float']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mortgage_as_percent_income?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  price_to_annual_income?: Maybe<Scalars['Float']>;
  price_to_rent_city_center?: Maybe<Scalars['Float']>;
  price_to_rent_non_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Stddev_Samp_Order_By = {
  affordability_index?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Proprietary_X_Numbeo_Sum_Fields = {
  affordability_index?: Maybe<Scalars['float8']>;
  gross_rental_yield_city_center?: Maybe<Scalars['float8']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  mortgage_as_percent_income?: Maybe<Scalars['float8']>;
  population?: Maybe<Scalars['Int']>;
  price_to_annual_income?: Maybe<Scalars['float8']>;
  price_to_rent_city_center?: Maybe<Scalars['float8']>;
  price_to_rent_non_city_center?: Maybe<Scalars['float8']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['float8']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Sum_Order_By = {
  affordability_index?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proprietary_X_Numbeo_Var_Pop_Fields = {
  affordability_index?: Maybe<Scalars['Float']>;
  gross_rental_yield_city_center?: Maybe<Scalars['Float']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mortgage_as_percent_income?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  price_to_annual_income?: Maybe<Scalars['Float']>;
  price_to_rent_city_center?: Maybe<Scalars['Float']>;
  price_to_rent_non_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Var_Pop_Order_By = {
  affordability_index?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proprietary_X_Numbeo_Var_Samp_Fields = {
  affordability_index?: Maybe<Scalars['Float']>;
  gross_rental_yield_city_center?: Maybe<Scalars['Float']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mortgage_as_percent_income?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  price_to_annual_income?: Maybe<Scalars['Float']>;
  price_to_rent_city_center?: Maybe<Scalars['Float']>;
  price_to_rent_non_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Var_Samp_Order_By = {
  affordability_index?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Proprietary_X_Numbeo_Variance_Fields = {
  affordability_index?: Maybe<Scalars['Float']>;
  gross_rental_yield_city_center?: Maybe<Scalars['Float']>;
  gross_rental_yield_non_city_center?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mortgage_as_percent_income?: Maybe<Scalars['Float']>;
  population?: Maybe<Scalars['Float']>;
  price_to_annual_income?: Maybe<Scalars['Float']>;
  price_to_rent_city_center?: Maybe<Scalars['Float']>;
  price_to_rent_non_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_city_center?: Maybe<Scalars['Float']>;
  rent_to_annual_income_non_city_center?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proprietary_x_numbeo" */
export type Proprietary_X_Numbeo_Variance_Order_By = {
  affordability_index?: Maybe<Order_By>;
  gross_rental_yield_city_center?: Maybe<Order_By>;
  gross_rental_yield_non_city_center?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  mortgage_as_percent_income?: Maybe<Order_By>;
  population?: Maybe<Order_By>;
  price_to_annual_income?: Maybe<Order_By>;
  price_to_rent_city_center?: Maybe<Order_By>;
  price_to_rent_non_city_center?: Maybe<Order_By>;
  rent_to_annual_income_city_center?: Maybe<Order_By>;
  rent_to_annual_income_non_city_center?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** columns and relationships of "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021 = {
  _address?: Maybe<Scalars['String']>;
  _building_id?: Maybe<Scalars['Int']>;
  _building_name?: Maybe<Scalars['String']>;
  _image_ids?: Maybe<Scalars['String']>;
  _listing_id?: Maybe<Scalars['Int']>;
  _pb_id?: Maybe<Scalars['Int']>;
  _pb_url?: Maybe<Scalars['String']>;
  _pl_id?: Maybe<Scalars['Int']>;
  _pl_url?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  listed_on_epoch?: Maybe<Scalars['Int']>;
  max_bathrooms?: Maybe<Scalars['Int']>;
  max_bedrooms?: Maybe<Scalars['Int']>;
  max_price?: Maybe<Scalars['Int']>;
  max_square_feet?: Maybe<Scalars['Int']>;
  min_bathrooms?: Maybe<Scalars['Int']>;
  min_bedrooms?: Maybe<Scalars['Int']>;
  min_price?: Maybe<Scalars['Int']>;
  min_square_feet?: Maybe<Scalars['Int']>;
  promotion_type?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Aggregate = {
  aggregate?: Maybe<Proprietary_X_Padmapper_Rent_2021_Aggregate_Fields>;
  nodes: Array<Proprietary_X_Padmapper_Rent_2021>;
};

/** aggregate fields of "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Aggregate_Fields = {
  avg?: Maybe<Proprietary_X_Padmapper_Rent_2021_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Proprietary_X_Padmapper_Rent_2021_Max_Fields>;
  min?: Maybe<Proprietary_X_Padmapper_Rent_2021_Min_Fields>;
  stddev?: Maybe<Proprietary_X_Padmapper_Rent_2021_Stddev_Fields>;
  stddev_pop?: Maybe<Proprietary_X_Padmapper_Rent_2021_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proprietary_X_Padmapper_Rent_2021_Stddev_Samp_Fields>;
  sum?: Maybe<Proprietary_X_Padmapper_Rent_2021_Sum_Fields>;
  var_pop?: Maybe<Proprietary_X_Padmapper_Rent_2021_Var_Pop_Fields>;
  var_samp?: Maybe<Proprietary_X_Padmapper_Rent_2021_Var_Samp_Fields>;
  variance?: Maybe<Proprietary_X_Padmapper_Rent_2021_Variance_Fields>;
};


/** aggregate fields of "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proprietary_X_Padmapper_Rent_2021_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Aggregate_Order_By = {
  avg?: Maybe<Proprietary_X_Padmapper_Rent_2021_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Proprietary_X_Padmapper_Rent_2021_Max_Order_By>;
  min?: Maybe<Proprietary_X_Padmapper_Rent_2021_Min_Order_By>;
  stddev?: Maybe<Proprietary_X_Padmapper_Rent_2021_Stddev_Order_By>;
  stddev_pop?: Maybe<Proprietary_X_Padmapper_Rent_2021_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Proprietary_X_Padmapper_Rent_2021_Stddev_Samp_Order_By>;
  sum?: Maybe<Proprietary_X_Padmapper_Rent_2021_Sum_Order_By>;
  var_pop?: Maybe<Proprietary_X_Padmapper_Rent_2021_Var_Pop_Order_By>;
  var_samp?: Maybe<Proprietary_X_Padmapper_Rent_2021_Var_Samp_Order_By>;
  variance?: Maybe<Proprietary_X_Padmapper_Rent_2021_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proprietary_X_Padmapper_Rent_2021_Avg_Fields = {
  _building_id?: Maybe<Scalars['Float']>;
  _listing_id?: Maybe<Scalars['Float']>;
  _pb_id?: Maybe<Scalars['Float']>;
  _pl_id?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  listed_on_epoch?: Maybe<Scalars['Float']>;
  max_bathrooms?: Maybe<Scalars['Float']>;
  max_bedrooms?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_square_feet?: Maybe<Scalars['Float']>;
  min_bathrooms?: Maybe<Scalars['Float']>;
  min_bedrooms?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_square_feet?: Maybe<Scalars['Float']>;
  promotion_type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Avg_Order_By = {
  _building_id?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proprietary_x_padmapper_rent_2021". All fields are combined with a logical 'AND'. */
export type Proprietary_X_Padmapper_Rent_2021_Bool_Exp = {
  _address?: Maybe<String_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Proprietary_X_Padmapper_Rent_2021_Bool_Exp>>>;
  _building_id?: Maybe<Int_Comparison_Exp>;
  _building_name?: Maybe<String_Comparison_Exp>;
  _image_ids?: Maybe<String_Comparison_Exp>;
  _listing_id?: Maybe<Int_Comparison_Exp>;
  _not?: Maybe<Proprietary_X_Padmapper_Rent_2021_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Proprietary_X_Padmapper_Rent_2021_Bool_Exp>>>;
  _pb_id?: Maybe<Int_Comparison_Exp>;
  _pb_url?: Maybe<String_Comparison_Exp>;
  _pl_id?: Maybe<Int_Comparison_Exp>;
  _pl_url?: Maybe<String_Comparison_Exp>;
  count?: Maybe<Int_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  listed_on_epoch?: Maybe<Int_Comparison_Exp>;
  max_bathrooms?: Maybe<Int_Comparison_Exp>;
  max_bedrooms?: Maybe<Int_Comparison_Exp>;
  max_price?: Maybe<Int_Comparison_Exp>;
  max_square_feet?: Maybe<Int_Comparison_Exp>;
  min_bathrooms?: Maybe<Int_Comparison_Exp>;
  min_bedrooms?: Maybe<Int_Comparison_Exp>;
  min_price?: Maybe<Int_Comparison_Exp>;
  min_square_feet?: Maybe<Int_Comparison_Exp>;
  promotion_type?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proprietary_X_Padmapper_Rent_2021_Max_Fields = {
  _address?: Maybe<Scalars['String']>;
  _building_id?: Maybe<Scalars['Int']>;
  _building_name?: Maybe<Scalars['String']>;
  _image_ids?: Maybe<Scalars['String']>;
  _listing_id?: Maybe<Scalars['Int']>;
  _pb_id?: Maybe<Scalars['Int']>;
  _pb_url?: Maybe<Scalars['String']>;
  _pl_id?: Maybe<Scalars['Int']>;
  _pl_url?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  listed_on_epoch?: Maybe<Scalars['Int']>;
  max_bathrooms?: Maybe<Scalars['Int']>;
  max_bedrooms?: Maybe<Scalars['Int']>;
  max_price?: Maybe<Scalars['Int']>;
  max_square_feet?: Maybe<Scalars['Int']>;
  min_bathrooms?: Maybe<Scalars['Int']>;
  min_bedrooms?: Maybe<Scalars['Int']>;
  min_price?: Maybe<Scalars['Int']>;
  min_square_feet?: Maybe<Scalars['Int']>;
  promotion_type?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Max_Order_By = {
  _address?: Maybe<Order_By>;
  _building_id?: Maybe<Order_By>;
  _building_name?: Maybe<Order_By>;
  _image_ids?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pb_url?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  _pl_url?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Proprietary_X_Padmapper_Rent_2021_Min_Fields = {
  _address?: Maybe<Scalars['String']>;
  _building_id?: Maybe<Scalars['Int']>;
  _building_name?: Maybe<Scalars['String']>;
  _image_ids?: Maybe<Scalars['String']>;
  _listing_id?: Maybe<Scalars['Int']>;
  _pb_id?: Maybe<Scalars['Int']>;
  _pb_url?: Maybe<Scalars['String']>;
  _pl_id?: Maybe<Scalars['Int']>;
  _pl_url?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  listed_on_epoch?: Maybe<Scalars['Int']>;
  max_bathrooms?: Maybe<Scalars['Int']>;
  max_bedrooms?: Maybe<Scalars['Int']>;
  max_price?: Maybe<Scalars['Int']>;
  max_square_feet?: Maybe<Scalars['Int']>;
  min_bathrooms?: Maybe<Scalars['Int']>;
  min_bedrooms?: Maybe<Scalars['Int']>;
  min_price?: Maybe<Scalars['Int']>;
  min_square_feet?: Maybe<Scalars['Int']>;
  promotion_type?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Min_Order_By = {
  _address?: Maybe<Order_By>;
  _building_id?: Maybe<Order_By>;
  _building_name?: Maybe<Order_By>;
  _image_ids?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pb_url?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  _pl_url?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** ordering options when selecting data from "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Order_By = {
  _address?: Maybe<Order_By>;
  _building_id?: Maybe<Order_By>;
  _building_name?: Maybe<Order_By>;
  _image_ids?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pb_url?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  _pl_url?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** primary key columns input for table: "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "proprietary_x_padmapper_rent_2021" */
export enum Proprietary_X_Padmapper_Rent_2021_Select_Column {
  /** column name */
  Address = '_address',
  /** column name */
  BuildingId = '_building_id',
  /** column name */
  BuildingName = '_building_name',
  /** column name */
  ImageIds = '_image_ids',
  /** column name */
  ListingId = '_listing_id',
  /** column name */
  PbId = '_pb_id',
  /** column name */
  PbUrl = '_pb_url',
  /** column name */
  PlId = '_pl_id',
  /** column name */
  PlUrl = '_pl_url',
  /** column name */
  Count = 'count',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  ListedOnEpoch = 'listed_on_epoch',
  /** column name */
  MaxBathrooms = 'max_bathrooms',
  /** column name */
  MaxBedrooms = 'max_bedrooms',
  /** column name */
  MaxPrice = 'max_price',
  /** column name */
  MaxSquareFeet = 'max_square_feet',
  /** column name */
  MinBathrooms = 'min_bathrooms',
  /** column name */
  MinBedrooms = 'min_bedrooms',
  /** column name */
  MinPrice = 'min_price',
  /** column name */
  MinSquareFeet = 'min_square_feet',
  /** column name */
  PromotionType = 'promotion_type'
}

/** aggregate stddev on columns */
export type Proprietary_X_Padmapper_Rent_2021_Stddev_Fields = {
  _building_id?: Maybe<Scalars['Float']>;
  _listing_id?: Maybe<Scalars['Float']>;
  _pb_id?: Maybe<Scalars['Float']>;
  _pl_id?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  listed_on_epoch?: Maybe<Scalars['Float']>;
  max_bathrooms?: Maybe<Scalars['Float']>;
  max_bedrooms?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_square_feet?: Maybe<Scalars['Float']>;
  min_bathrooms?: Maybe<Scalars['Float']>;
  min_bedrooms?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_square_feet?: Maybe<Scalars['Float']>;
  promotion_type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Stddev_Order_By = {
  _building_id?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proprietary_X_Padmapper_Rent_2021_Stddev_Pop_Fields = {
  _building_id?: Maybe<Scalars['Float']>;
  _listing_id?: Maybe<Scalars['Float']>;
  _pb_id?: Maybe<Scalars['Float']>;
  _pl_id?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  listed_on_epoch?: Maybe<Scalars['Float']>;
  max_bathrooms?: Maybe<Scalars['Float']>;
  max_bedrooms?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_square_feet?: Maybe<Scalars['Float']>;
  min_bathrooms?: Maybe<Scalars['Float']>;
  min_bedrooms?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_square_feet?: Maybe<Scalars['Float']>;
  promotion_type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Stddev_Pop_Order_By = {
  _building_id?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proprietary_X_Padmapper_Rent_2021_Stddev_Samp_Fields = {
  _building_id?: Maybe<Scalars['Float']>;
  _listing_id?: Maybe<Scalars['Float']>;
  _pb_id?: Maybe<Scalars['Float']>;
  _pl_id?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  listed_on_epoch?: Maybe<Scalars['Float']>;
  max_bathrooms?: Maybe<Scalars['Float']>;
  max_bedrooms?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_square_feet?: Maybe<Scalars['Float']>;
  min_bathrooms?: Maybe<Scalars['Float']>;
  min_bedrooms?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_square_feet?: Maybe<Scalars['Float']>;
  promotion_type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Stddev_Samp_Order_By = {
  _building_id?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Proprietary_X_Padmapper_Rent_2021_Sum_Fields = {
  _building_id?: Maybe<Scalars['Int']>;
  _listing_id?: Maybe<Scalars['Int']>;
  _pb_id?: Maybe<Scalars['Int']>;
  _pl_id?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  listed_on_epoch?: Maybe<Scalars['Int']>;
  max_bathrooms?: Maybe<Scalars['Int']>;
  max_bedrooms?: Maybe<Scalars['Int']>;
  max_price?: Maybe<Scalars['Int']>;
  max_square_feet?: Maybe<Scalars['Int']>;
  min_bathrooms?: Maybe<Scalars['Int']>;
  min_bedrooms?: Maybe<Scalars['Int']>;
  min_price?: Maybe<Scalars['Int']>;
  min_square_feet?: Maybe<Scalars['Int']>;
  promotion_type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Sum_Order_By = {
  _building_id?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proprietary_X_Padmapper_Rent_2021_Var_Pop_Fields = {
  _building_id?: Maybe<Scalars['Float']>;
  _listing_id?: Maybe<Scalars['Float']>;
  _pb_id?: Maybe<Scalars['Float']>;
  _pl_id?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  listed_on_epoch?: Maybe<Scalars['Float']>;
  max_bathrooms?: Maybe<Scalars['Float']>;
  max_bedrooms?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_square_feet?: Maybe<Scalars['Float']>;
  min_bathrooms?: Maybe<Scalars['Float']>;
  min_bedrooms?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_square_feet?: Maybe<Scalars['Float']>;
  promotion_type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Var_Pop_Order_By = {
  _building_id?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proprietary_X_Padmapper_Rent_2021_Var_Samp_Fields = {
  _building_id?: Maybe<Scalars['Float']>;
  _listing_id?: Maybe<Scalars['Float']>;
  _pb_id?: Maybe<Scalars['Float']>;
  _pl_id?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  listed_on_epoch?: Maybe<Scalars['Float']>;
  max_bathrooms?: Maybe<Scalars['Float']>;
  max_bedrooms?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_square_feet?: Maybe<Scalars['Float']>;
  min_bathrooms?: Maybe<Scalars['Float']>;
  min_bedrooms?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_square_feet?: Maybe<Scalars['Float']>;
  promotion_type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Var_Samp_Order_By = {
  _building_id?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Proprietary_X_Padmapper_Rent_2021_Variance_Fields = {
  _building_id?: Maybe<Scalars['Float']>;
  _listing_id?: Maybe<Scalars['Float']>;
  _pb_id?: Maybe<Scalars['Float']>;
  _pl_id?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  listed_on_epoch?: Maybe<Scalars['Float']>;
  max_bathrooms?: Maybe<Scalars['Float']>;
  max_bedrooms?: Maybe<Scalars['Float']>;
  max_price?: Maybe<Scalars['Float']>;
  max_square_feet?: Maybe<Scalars['Float']>;
  min_bathrooms?: Maybe<Scalars['Float']>;
  min_bedrooms?: Maybe<Scalars['Float']>;
  min_price?: Maybe<Scalars['Float']>;
  min_square_feet?: Maybe<Scalars['Float']>;
  promotion_type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proprietary_x_padmapper_rent_2021" */
export type Proprietary_X_Padmapper_Rent_2021_Variance_Order_By = {
  _building_id?: Maybe<Order_By>;
  _listing_id?: Maybe<Order_By>;
  _pb_id?: Maybe<Order_By>;
  _pl_id?: Maybe<Order_By>;
  count?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  listed_on_epoch?: Maybe<Order_By>;
  max_bathrooms?: Maybe<Order_By>;
  max_bedrooms?: Maybe<Order_By>;
  max_price?: Maybe<Order_By>;
  max_square_feet?: Maybe<Order_By>;
  min_bathrooms?: Maybe<Order_By>;
  min_bedrooms?: Maybe<Order_By>;
  min_price?: Maybe<Order_By>;
  min_square_feet?: Maybe<Order_By>;
  promotion_type?: Maybe<Order_By>;
};

/** columns and relationships of "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021 = {
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  days_on_zillow?: Maybe<Scalars['Int']>;
  geom?: Maybe<Scalars['geometry']>;
  home_status?: Maybe<Scalars['String']>;
  home_type?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  living_area?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Aggregate = {
  aggregate?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Aggregate_Fields>;
  nodes: Array<Proprietary_X_Zillow_On_Sale_2021>;
};

/** aggregate fields of "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Aggregate_Fields = {
  avg?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Max_Fields>;
  min?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Min_Fields>;
  stddev?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Stddev_Fields>;
  stddev_pop?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Stddev_Samp_Fields>;
  sum?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Sum_Fields>;
  var_pop?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Var_Pop_Fields>;
  var_samp?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Var_Samp_Fields>;
  variance?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Variance_Fields>;
};


/** aggregate fields of "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proprietary_X_Zillow_On_Sale_2021_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Aggregate_Order_By = {
  avg?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Max_Order_By>;
  min?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Min_Order_By>;
  stddev?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Stddev_Order_By>;
  stddev_pop?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Stddev_Samp_Order_By>;
  sum?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Sum_Order_By>;
  var_pop?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Var_Pop_Order_By>;
  var_samp?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Var_Samp_Order_By>;
  variance?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proprietary_X_Zillow_On_Sale_2021_Avg_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Avg_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proprietary_x_zillow_on_sale_2021". All fields are combined with a logical 'AND'. */
export type Proprietary_X_Zillow_On_Sale_2021_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Proprietary_X_Zillow_On_Sale_2021_Bool_Exp>>>;
  _not?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Proprietary_X_Zillow_On_Sale_2021_Bool_Exp>>>;
  bathrooms?: Maybe<Int_Comparison_Exp>;
  bedrooms?: Maybe<Int_Comparison_Exp>;
  date_sold?: Maybe<Bigint_Comparison_Exp>;
  days_on_zillow?: Maybe<Int_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  home_status?: Maybe<String_Comparison_Exp>;
  home_type?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  living_area?: Maybe<Int_Comparison_Exp>;
  price?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proprietary_X_Zillow_On_Sale_2021_Max_Fields = {
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  days_on_zillow?: Maybe<Scalars['Int']>;
  home_status?: Maybe<Scalars['String']>;
  home_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  living_area?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Max_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  home_status?: Maybe<Order_By>;
  home_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Proprietary_X_Zillow_On_Sale_2021_Min_Fields = {
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  days_on_zillow?: Maybe<Scalars['Int']>;
  home_status?: Maybe<Scalars['String']>;
  home_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  living_area?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Min_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  home_status?: Maybe<Order_By>;
  home_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** ordering options when selecting data from "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  home_status?: Maybe<Order_By>;
  home_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** primary key columns input for table: "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "proprietary_x_zillow_on_sale_2021" */
export enum Proprietary_X_Zillow_On_Sale_2021_Select_Column {
  /** column name */
  Bathrooms = 'bathrooms',
  /** column name */
  Bedrooms = 'bedrooms',
  /** column name */
  DateSold = 'date_sold',
  /** column name */
  DaysOnZillow = 'days_on_zillow',
  /** column name */
  Geom = 'geom',
  /** column name */
  HomeStatus = 'home_status',
  /** column name */
  HomeType = 'home_type',
  /** column name */
  Id = 'id',
  /** column name */
  LivingArea = 'living_area',
  /** column name */
  Price = 'price'
}

/** aggregate stddev on columns */
export type Proprietary_X_Zillow_On_Sale_2021_Stddev_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Stddev_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proprietary_X_Zillow_On_Sale_2021_Stddev_Pop_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Stddev_Pop_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proprietary_X_Zillow_On_Sale_2021_Stddev_Samp_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Stddev_Samp_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Proprietary_X_Zillow_On_Sale_2021_Sum_Fields = {
  bathrooms?: Maybe<Scalars['Int']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  days_on_zillow?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  living_area?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Sum_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proprietary_X_Zillow_On_Sale_2021_Var_Pop_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Var_Pop_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proprietary_X_Zillow_On_Sale_2021_Var_Samp_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Var_Samp_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Proprietary_X_Zillow_On_Sale_2021_Variance_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proprietary_x_zillow_on_sale_2021" */
export type Proprietary_X_Zillow_On_Sale_2021_Variance_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** columns and relationships of "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021 = {
  bathrooms?: Maybe<Scalars['float8']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  geom?: Maybe<Scalars['geometry']>;
  home_type?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  living_area?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  tax_assessed_value?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Aggregate = {
  aggregate?: Maybe<Proprietary_X_Zillow_Rent_2021_Aggregate_Fields>;
  nodes: Array<Proprietary_X_Zillow_Rent_2021>;
};

/** aggregate fields of "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Aggregate_Fields = {
  avg?: Maybe<Proprietary_X_Zillow_Rent_2021_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Proprietary_X_Zillow_Rent_2021_Max_Fields>;
  min?: Maybe<Proprietary_X_Zillow_Rent_2021_Min_Fields>;
  stddev?: Maybe<Proprietary_X_Zillow_Rent_2021_Stddev_Fields>;
  stddev_pop?: Maybe<Proprietary_X_Zillow_Rent_2021_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proprietary_X_Zillow_Rent_2021_Stddev_Samp_Fields>;
  sum?: Maybe<Proprietary_X_Zillow_Rent_2021_Sum_Fields>;
  var_pop?: Maybe<Proprietary_X_Zillow_Rent_2021_Var_Pop_Fields>;
  var_samp?: Maybe<Proprietary_X_Zillow_Rent_2021_Var_Samp_Fields>;
  variance?: Maybe<Proprietary_X_Zillow_Rent_2021_Variance_Fields>;
};


/** aggregate fields of "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proprietary_X_Zillow_Rent_2021_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Aggregate_Order_By = {
  avg?: Maybe<Proprietary_X_Zillow_Rent_2021_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Proprietary_X_Zillow_Rent_2021_Max_Order_By>;
  min?: Maybe<Proprietary_X_Zillow_Rent_2021_Min_Order_By>;
  stddev?: Maybe<Proprietary_X_Zillow_Rent_2021_Stddev_Order_By>;
  stddev_pop?: Maybe<Proprietary_X_Zillow_Rent_2021_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Proprietary_X_Zillow_Rent_2021_Stddev_Samp_Order_By>;
  sum?: Maybe<Proprietary_X_Zillow_Rent_2021_Sum_Order_By>;
  var_pop?: Maybe<Proprietary_X_Zillow_Rent_2021_Var_Pop_Order_By>;
  var_samp?: Maybe<Proprietary_X_Zillow_Rent_2021_Var_Samp_Order_By>;
  variance?: Maybe<Proprietary_X_Zillow_Rent_2021_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proprietary_X_Zillow_Rent_2021_Avg_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Avg_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proprietary_x_zillow_rent_2021". All fields are combined with a logical 'AND'. */
export type Proprietary_X_Zillow_Rent_2021_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Proprietary_X_Zillow_Rent_2021_Bool_Exp>>>;
  _not?: Maybe<Proprietary_X_Zillow_Rent_2021_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Proprietary_X_Zillow_Rent_2021_Bool_Exp>>>;
  bathrooms?: Maybe<Float8_Comparison_Exp>;
  bedrooms?: Maybe<Int_Comparison_Exp>;
  date_sold?: Maybe<Bigint_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  home_type?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  living_area?: Maybe<Int_Comparison_Exp>;
  price?: Maybe<Int_Comparison_Exp>;
  tax_assessed_value?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proprietary_X_Zillow_Rent_2021_Max_Fields = {
  bathrooms?: Maybe<Scalars['float8']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  home_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  living_area?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  tax_assessed_value?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Max_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  home_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Proprietary_X_Zillow_Rent_2021_Min_Fields = {
  bathrooms?: Maybe<Scalars['float8']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  home_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  living_area?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  tax_assessed_value?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Min_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  home_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** ordering options when selecting data from "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  home_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** primary key columns input for table: "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "proprietary_x_zillow_rent_2021" */
export enum Proprietary_X_Zillow_Rent_2021_Select_Column {
  /** column name */
  Bathrooms = 'bathrooms',
  /** column name */
  Bedrooms = 'bedrooms',
  /** column name */
  DateSold = 'date_sold',
  /** column name */
  Geom = 'geom',
  /** column name */
  HomeType = 'home_type',
  /** column name */
  Id = 'id',
  /** column name */
  LivingArea = 'living_area',
  /** column name */
  Price = 'price',
  /** column name */
  TaxAssessedValue = 'tax_assessed_value'
}

/** aggregate stddev on columns */
export type Proprietary_X_Zillow_Rent_2021_Stddev_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Stddev_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proprietary_X_Zillow_Rent_2021_Stddev_Pop_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Stddev_Pop_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proprietary_X_Zillow_Rent_2021_Stddev_Samp_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Stddev_Samp_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Proprietary_X_Zillow_Rent_2021_Sum_Fields = {
  bathrooms?: Maybe<Scalars['float8']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  living_area?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  tax_assessed_value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Sum_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proprietary_X_Zillow_Rent_2021_Var_Pop_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Var_Pop_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proprietary_X_Zillow_Rent_2021_Var_Samp_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Var_Samp_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Proprietary_X_Zillow_Rent_2021_Variance_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proprietary_x_zillow_rent_2021" */
export type Proprietary_X_Zillow_Rent_2021_Variance_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** columns and relationships of "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021 = {
  bathrooms?: Maybe<Scalars['float8']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  days_on_zillow?: Maybe<Scalars['Int']>;
  geom?: Maybe<Scalars['geometry']>;
  home_status?: Maybe<Scalars['String']>;
  home_type?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  living_area?: Maybe<Scalars['Int']>;
  lot_area_value?: Maybe<Scalars['float8']>;
  price?: Maybe<Scalars['Int']>;
  tax_assessed_value?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Aggregate = {
  aggregate?: Maybe<Proprietary_X_Zillow_Sold_2021_Aggregate_Fields>;
  nodes: Array<Proprietary_X_Zillow_Sold_2021>;
};

/** aggregate fields of "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Aggregate_Fields = {
  avg?: Maybe<Proprietary_X_Zillow_Sold_2021_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Proprietary_X_Zillow_Sold_2021_Max_Fields>;
  min?: Maybe<Proprietary_X_Zillow_Sold_2021_Min_Fields>;
  stddev?: Maybe<Proprietary_X_Zillow_Sold_2021_Stddev_Fields>;
  stddev_pop?: Maybe<Proprietary_X_Zillow_Sold_2021_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Proprietary_X_Zillow_Sold_2021_Stddev_Samp_Fields>;
  sum?: Maybe<Proprietary_X_Zillow_Sold_2021_Sum_Fields>;
  var_pop?: Maybe<Proprietary_X_Zillow_Sold_2021_Var_Pop_Fields>;
  var_samp?: Maybe<Proprietary_X_Zillow_Sold_2021_Var_Samp_Fields>;
  variance?: Maybe<Proprietary_X_Zillow_Sold_2021_Variance_Fields>;
};


/** aggregate fields of "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Proprietary_X_Zillow_Sold_2021_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Aggregate_Order_By = {
  avg?: Maybe<Proprietary_X_Zillow_Sold_2021_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Proprietary_X_Zillow_Sold_2021_Max_Order_By>;
  min?: Maybe<Proprietary_X_Zillow_Sold_2021_Min_Order_By>;
  stddev?: Maybe<Proprietary_X_Zillow_Sold_2021_Stddev_Order_By>;
  stddev_pop?: Maybe<Proprietary_X_Zillow_Sold_2021_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Proprietary_X_Zillow_Sold_2021_Stddev_Samp_Order_By>;
  sum?: Maybe<Proprietary_X_Zillow_Sold_2021_Sum_Order_By>;
  var_pop?: Maybe<Proprietary_X_Zillow_Sold_2021_Var_Pop_Order_By>;
  var_samp?: Maybe<Proprietary_X_Zillow_Sold_2021_Var_Samp_Order_By>;
  variance?: Maybe<Proprietary_X_Zillow_Sold_2021_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Proprietary_X_Zillow_Sold_2021_Avg_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  lot_area_value?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Avg_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "proprietary_x_zillow_sold_2021". All fields are combined with a logical 'AND'. */
export type Proprietary_X_Zillow_Sold_2021_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Proprietary_X_Zillow_Sold_2021_Bool_Exp>>>;
  _not?: Maybe<Proprietary_X_Zillow_Sold_2021_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Proprietary_X_Zillow_Sold_2021_Bool_Exp>>>;
  bathrooms?: Maybe<Float8_Comparison_Exp>;
  bedrooms?: Maybe<Int_Comparison_Exp>;
  date_sold?: Maybe<Bigint_Comparison_Exp>;
  days_on_zillow?: Maybe<Int_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  home_status?: Maybe<String_Comparison_Exp>;
  home_type?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  living_area?: Maybe<Int_Comparison_Exp>;
  lot_area_value?: Maybe<Float8_Comparison_Exp>;
  price?: Maybe<Int_Comparison_Exp>;
  tax_assessed_value?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Proprietary_X_Zillow_Sold_2021_Max_Fields = {
  bathrooms?: Maybe<Scalars['float8']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  days_on_zillow?: Maybe<Scalars['Int']>;
  home_status?: Maybe<Scalars['String']>;
  home_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  living_area?: Maybe<Scalars['Int']>;
  lot_area_value?: Maybe<Scalars['float8']>;
  price?: Maybe<Scalars['Int']>;
  tax_assessed_value?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Max_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  home_status?: Maybe<Order_By>;
  home_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Proprietary_X_Zillow_Sold_2021_Min_Fields = {
  bathrooms?: Maybe<Scalars['float8']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  days_on_zillow?: Maybe<Scalars['Int']>;
  home_status?: Maybe<Scalars['String']>;
  home_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  living_area?: Maybe<Scalars['Int']>;
  lot_area_value?: Maybe<Scalars['float8']>;
  price?: Maybe<Scalars['Int']>;
  tax_assessed_value?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Min_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  home_status?: Maybe<Order_By>;
  home_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** ordering options when selecting data from "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  home_status?: Maybe<Order_By>;
  home_type?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** primary key columns input for table: "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "proprietary_x_zillow_sold_2021" */
export enum Proprietary_X_Zillow_Sold_2021_Select_Column {
  /** column name */
  Bathrooms = 'bathrooms',
  /** column name */
  Bedrooms = 'bedrooms',
  /** column name */
  DateSold = 'date_sold',
  /** column name */
  DaysOnZillow = 'days_on_zillow',
  /** column name */
  Geom = 'geom',
  /** column name */
  HomeStatus = 'home_status',
  /** column name */
  HomeType = 'home_type',
  /** column name */
  Id = 'id',
  /** column name */
  LivingArea = 'living_area',
  /** column name */
  LotAreaValue = 'lot_area_value',
  /** column name */
  Price = 'price',
  /** column name */
  TaxAssessedValue = 'tax_assessed_value'
}

/** aggregate stddev on columns */
export type Proprietary_X_Zillow_Sold_2021_Stddev_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  lot_area_value?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Stddev_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Proprietary_X_Zillow_Sold_2021_Stddev_Pop_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  lot_area_value?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Stddev_Pop_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Proprietary_X_Zillow_Sold_2021_Stddev_Samp_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  lot_area_value?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Stddev_Samp_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Proprietary_X_Zillow_Sold_2021_Sum_Fields = {
  bathrooms?: Maybe<Scalars['float8']>;
  bedrooms?: Maybe<Scalars['Int']>;
  date_sold?: Maybe<Scalars['bigint']>;
  days_on_zillow?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  living_area?: Maybe<Scalars['Int']>;
  lot_area_value?: Maybe<Scalars['float8']>;
  price?: Maybe<Scalars['Int']>;
  tax_assessed_value?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Sum_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Proprietary_X_Zillow_Sold_2021_Var_Pop_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  lot_area_value?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Var_Pop_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Proprietary_X_Zillow_Sold_2021_Var_Samp_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  lot_area_value?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Var_Samp_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Proprietary_X_Zillow_Sold_2021_Variance_Fields = {
  bathrooms?: Maybe<Scalars['Float']>;
  bedrooms?: Maybe<Scalars['Float']>;
  date_sold?: Maybe<Scalars['Float']>;
  days_on_zillow?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  living_area?: Maybe<Scalars['Float']>;
  lot_area_value?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  tax_assessed_value?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "proprietary_x_zillow_sold_2021" */
export type Proprietary_X_Zillow_Sold_2021_Variance_Order_By = {
  bathrooms?: Maybe<Order_By>;
  bedrooms?: Maybe<Order_By>;
  date_sold?: Maybe<Order_By>;
  days_on_zillow?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  living_area?: Maybe<Order_By>;
  lot_area_value?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  tax_assessed_value?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  /** fetch data from the table: "burnaby_x_community_plan" */
  burnaby_x_community_plan: Array<Burnaby_X_Community_Plan>;
  /** fetch aggregated fields from the table: "burnaby_x_community_plan" */
  burnaby_x_community_plan_aggregate: Burnaby_X_Community_Plan_Aggregate;
  /** fetch data from the table: "burnaby_x_community_plan" using primary key columns */
  burnaby_x_community_plan_by_pk?: Maybe<Burnaby_X_Community_Plan>;
  /** fetch data from the table: "burnaby_x_parcels" */
  burnaby_x_parcels: Array<Burnaby_X_Parcels>;
  /** fetch aggregated fields from the table: "burnaby_x_parcels" */
  burnaby_x_parcels_aggregate: Burnaby_X_Parcels_Aggregate;
  /** fetch data from the table: "burnaby_x_parcels" using primary key columns */
  burnaby_x_parcels_by_pk?: Maybe<Burnaby_X_Parcels>;
  /** fetch data from the table: "burnaby_x_zoning" */
  burnaby_x_zoning: Array<Burnaby_X_Zoning>;
  /** fetch aggregated fields from the table: "burnaby_x_zoning" */
  burnaby_x_zoning_aggregate: Burnaby_X_Zoning_Aggregate;
  /** fetch data from the table: "burnaby_x_zoning" using primary key columns */
  burnaby_x_zoning_by_pk?: Maybe<Burnaby_X_Zoning>;
  /** fetch data from the table: "development.tiles" */
  development_tiles: Array<Development_Tiles>;
  /** fetch aggregated fields from the table: "development.tiles" */
  development_tiles_aggregate: Development_Tiles_Aggregate;
  /** execute function "get_tiles" which returns "development.tiles" */
  get_tiles: Array<Development_Tiles>;
  /** execute function "get_tiles" and query aggregates on result of table type "development.tiles" */
  get_tiles_aggregate: Development_Tiles_Aggregate;
  /** fetch data from the table: "incomes" */
  incomes: Array<Incomes>;
  /** fetch aggregated fields from the table: "incomes" */
  incomes_aggregate: Incomes_Aggregate;
  /** fetch data from the table: "new_york_x_pumas_data" */
  new_york_x_pumas_data: Array<New_York_X_Pumas_Data>;
  /** fetch aggregated fields from the table: "new_york_x_pumas_data" */
  new_york_x_pumas_data_aggregate: New_York_X_Pumas_Data_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_buildings_2003" */
  north_vancouver_district_x_buildings_2003: Array<North_Vancouver_District_X_Buildings_2003>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_buildings_2003" */
  north_vancouver_district_x_buildings_2003_aggregate: North_Vancouver_District_X_Buildings_2003_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_buildings_2003" using primary key columns */
  north_vancouver_district_x_buildings_2003_by_pk?: Maybe<North_Vancouver_District_X_Buildings_2003>;
  /** fetch data from the table: "north_vancouver_district_x_community_plan" */
  north_vancouver_district_x_community_plan: Array<North_Vancouver_District_X_Community_Plan>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_community_plan" */
  north_vancouver_district_x_community_plan_aggregate: North_Vancouver_District_X_Community_Plan_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_community_plan" using primary key columns */
  north_vancouver_district_x_community_plan_by_pk?: Maybe<North_Vancouver_District_X_Community_Plan>;
  /** fetch data from the table: "north_vancouver_district_x_land_lots" */
  north_vancouver_district_x_land_lots: Array<North_Vancouver_District_X_Land_Lots>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_land_lots" */
  north_vancouver_district_x_land_lots_aggregate: North_Vancouver_District_X_Land_Lots_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_land_lots" using primary key columns */
  north_vancouver_district_x_land_lots_by_pk?: Maybe<North_Vancouver_District_X_Land_Lots>;
  /** fetch data from the table: "north_vancouver_district_x_neighborhoods" */
  north_vancouver_district_x_neighborhoods: Array<North_Vancouver_District_X_Neighborhoods>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_neighborhoods" */
  north_vancouver_district_x_neighborhoods_aggregate: North_Vancouver_District_X_Neighborhoods_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_neighborhoods" using primary key columns */
  north_vancouver_district_x_neighborhoods_by_pk?: Maybe<North_Vancouver_District_X_Neighborhoods>;
  /** fetch data from the table: "north_vancouver_district_x_parcels" */
  north_vancouver_district_x_parcels: Array<North_Vancouver_District_X_Parcels>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_parcels" */
  north_vancouver_district_x_parcels_aggregate: North_Vancouver_District_X_Parcels_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_parcels" using primary key columns */
  north_vancouver_district_x_parcels_by_pk?: Maybe<North_Vancouver_District_X_Parcels>;
  /** fetch data from the table: "north_vancouver_district_x_zoning" */
  north_vancouver_district_x_zoning: Array<North_Vancouver_District_X_Zoning>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_zoning" */
  north_vancouver_district_x_zoning_aggregate: North_Vancouver_District_X_Zoning_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_zoning" using primary key columns */
  north_vancouver_district_x_zoning_by_pk?: Maybe<North_Vancouver_District_X_Zoning>;
  /** fetch data from the table: "prices_historical" */
  prices_historical: Array<Prices_Historical>;
  /** fetch aggregated fields from the table: "prices_historical" */
  prices_historical_aggregate: Prices_Historical_Aggregate;
  /** fetch data from the table: "proprietary_x_numbeo" */
  proprietary_x_numbeo: Array<Proprietary_X_Numbeo>;
  /** fetch aggregated fields from the table: "proprietary_x_numbeo" */
  proprietary_x_numbeo_aggregate: Proprietary_X_Numbeo_Aggregate;
  /** fetch data from the table: "proprietary_x_numbeo" using primary key columns */
  proprietary_x_numbeo_by_pk?: Maybe<Proprietary_X_Numbeo>;
  /** fetch data from the table: "proprietary_x_padmapper_rent_2021" */
  proprietary_x_padmapper_rent_2021: Array<Proprietary_X_Padmapper_Rent_2021>;
  /** fetch aggregated fields from the table: "proprietary_x_padmapper_rent_2021" */
  proprietary_x_padmapper_rent_2021_aggregate: Proprietary_X_Padmapper_Rent_2021_Aggregate;
  /** fetch data from the table: "proprietary_x_padmapper_rent_2021" using primary key columns */
  proprietary_x_padmapper_rent_2021_by_pk?: Maybe<Proprietary_X_Padmapper_Rent_2021>;
  /** fetch data from the table: "proprietary_x_zillow_on_sale_2021" */
  proprietary_x_zillow_on_sale_2021: Array<Proprietary_X_Zillow_On_Sale_2021>;
  /** fetch aggregated fields from the table: "proprietary_x_zillow_on_sale_2021" */
  proprietary_x_zillow_on_sale_2021_aggregate: Proprietary_X_Zillow_On_Sale_2021_Aggregate;
  /** fetch data from the table: "proprietary_x_zillow_on_sale_2021" using primary key columns */
  proprietary_x_zillow_on_sale_2021_by_pk?: Maybe<Proprietary_X_Zillow_On_Sale_2021>;
  /** fetch data from the table: "proprietary_x_zillow_rent_2021" */
  proprietary_x_zillow_rent_2021: Array<Proprietary_X_Zillow_Rent_2021>;
  /** fetch aggregated fields from the table: "proprietary_x_zillow_rent_2021" */
  proprietary_x_zillow_rent_2021_aggregate: Proprietary_X_Zillow_Rent_2021_Aggregate;
  /** fetch data from the table: "proprietary_x_zillow_rent_2021" using primary key columns */
  proprietary_x_zillow_rent_2021_by_pk?: Maybe<Proprietary_X_Zillow_Rent_2021>;
  /** fetch data from the table: "proprietary_x_zillow_sold_2021" */
  proprietary_x_zillow_sold_2021: Array<Proprietary_X_Zillow_Sold_2021>;
  /** fetch aggregated fields from the table: "proprietary_x_zillow_sold_2021" */
  proprietary_x_zillow_sold_2021_aggregate: Proprietary_X_Zillow_Sold_2021_Aggregate;
  /** fetch data from the table: "proprietary_x_zillow_sold_2021" using primary key columns */
  proprietary_x_zillow_sold_2021_by_pk?: Maybe<Proprietary_X_Zillow_Sold_2021>;
  /** fetch data from the table: "regional_x_indigenous_territories" */
  regional_x_indigenous_territories: Array<Regional_X_Indigenous_Territories>;
  /** fetch aggregated fields from the table: "regional_x_indigenous_territories" */
  regional_x_indigenous_territories_aggregate: Regional_X_Indigenous_Territories_Aggregate;
  /** fetch data from the table: "regional_x_rebgv_2020" */
  regional_x_rebgv_2020: Array<Regional_X_Rebgv_2020>;
  /** fetch aggregated fields from the table: "regional_x_rebgv_2020" */
  regional_x_rebgv_2020_aggregate: Regional_X_Rebgv_2020_Aggregate;
  /** fetch data from the table: "regional_x_rebgv_2020" using primary key columns */
  regional_x_rebgv_2020_by_pk?: Maybe<Regional_X_Rebgv_2020>;
  /** fetch data from the table: "regional_x_rent_vs_ownership_2015" */
  regional_x_rent_vs_ownership_2015: Array<Regional_X_Rent_Vs_Ownership_2015>;
  /** fetch aggregated fields from the table: "regional_x_rent_vs_ownership_2015" */
  regional_x_rent_vs_ownership_2015_aggregate: Regional_X_Rent_Vs_Ownership_2015_Aggregate;
  /** fetch data from the table: "regional_x_rent_vs_ownership_2015" using primary key columns */
  regional_x_rent_vs_ownership_2015_by_pk?: Maybe<Regional_X_Rent_Vs_Ownership_2015>;
  /** fetch data from the table: "regional_x_shelter_spending" */
  regional_x_shelter_spending: Array<Regional_X_Shelter_Spending>;
  /** fetch aggregated fields from the table: "regional_x_shelter_spending" */
  regional_x_shelter_spending_aggregate: Regional_X_Shelter_Spending_Aggregate;
  /** fetch data from the table: "regional_x_shelter_spending" using primary key columns */
  regional_x_shelter_spending_by_pk?: Maybe<Regional_X_Shelter_Spending>;
  /** fetch data from the table: "regional_x_zoning" */
  regional_x_zoning: Array<Regional_X_Zoning>;
  /** fetch aggregated fields from the table: "regional_x_zoning" */
  regional_x_zoning_aggregate: Regional_X_Zoning_Aggregate;
  /** fetch data from the table: "regional_x_zoning" using primary key columns */
  regional_x_zoning_by_pk?: Maybe<Regional_X_Zoning>;
  /** fetch data from the table: "rents_historical" */
  rents_historical: Array<Rents_Historical>;
  /** fetch aggregated fields from the table: "rents_historical" */
  rents_historical_aggregate: Rents_Historical_Aggregate;
  /** fetch data from the table: "surrey_x_census_tract_2016" */
  surrey_x_census_tract_2016: Array<Surrey_X_Census_Tract_2016>;
  /** fetch aggregated fields from the table: "surrey_x_census_tract_2016" */
  surrey_x_census_tract_2016_aggregate: Surrey_X_Census_Tract_2016_Aggregate;
  /** fetch data from the table: "surrey_x_census_tract_2016" using primary key columns */
  surrey_x_census_tract_2016_by_pk?: Maybe<Surrey_X_Census_Tract_2016>;
  /** fetch data from the table: "surrey_x_property_listing_2021" */
  surrey_x_property_listing_2021: Array<Surrey_X_Property_Listing_2021>;
  /** fetch aggregated fields from the table: "surrey_x_property_listing_2021" */
  surrey_x_property_listing_2021_aggregate: Surrey_X_Property_Listing_2021_Aggregate;
  /** fetch data from the table: "surrey_x_property_listing_2021" using primary key columns */
  surrey_x_property_listing_2021_by_pk?: Maybe<Surrey_X_Property_Listing_2021>;
  /** fetch data from the table: "synthetic_blocks" */
  synthetic_blocks: Array<Synthetic_Blocks>;
  /** fetch aggregated fields from the table: "synthetic_blocks" */
  synthetic_blocks_aggregate: Synthetic_Blocks_Aggregate;
  /** fetch data from the table: "synthetic_parcels" */
  synthetic_parcels: Array<Synthetic_Parcels>;
  /** fetch data from the table: "synthetic_parcels" using primary key columns */
  synthetic_parcels_by_pk?: Maybe<Synthetic_Parcels>;
  /** fetch data from the table: "vancouver_x_business_improvement_areas" */
  vancouver_x_business_improvement_areas: Array<Vancouver_X_Business_Improvement_Areas>;
  /** fetch aggregated fields from the table: "vancouver_x_business_improvement_areas" */
  vancouver_x_business_improvement_areas_aggregate: Vancouver_X_Business_Improvement_Areas_Aggregate;
  /** fetch data from the table: "vancouver_x_business_improvement_areas" using primary key columns */
  vancouver_x_business_improvement_areas_by_pk?: Maybe<Vancouver_X_Business_Improvement_Areas>;
  /** fetch data from the table: "vancouver_x_census_data_2016" */
  vancouver_x_census_data_2016: Array<Vancouver_X_Census_Data_2016>;
  /** fetch aggregated fields from the table: "vancouver_x_census_data_2016" */
  vancouver_x_census_data_2016_aggregate: Vancouver_X_Census_Data_2016_Aggregate;
  /** fetch data from the table: "vancouver_x_city_owned_properties" */
  vancouver_x_city_owned_properties: Array<Vancouver_X_City_Owned_Properties>;
  /** fetch aggregated fields from the table: "vancouver_x_city_owned_properties" */
  vancouver_x_city_owned_properties_aggregate: Vancouver_X_City_Owned_Properties_Aggregate;
  /** fetch data from the table: "vancouver_x_city_owned_properties" using primary key columns */
  vancouver_x_city_owned_properties_by_pk?: Maybe<Vancouver_X_City_Owned_Properties>;
  /** fetch data from the table: "vancouver_x_property_tax_blocks_data" */
  vancouver_x_property_tax_blocks_data: Array<Vancouver_X_Property_Tax_Blocks_Data>;
  /** fetch aggregated fields from the table: "vancouver_x_property_tax_blocks_data" */
  vancouver_x_property_tax_blocks_data_aggregate: Vancouver_X_Property_Tax_Blocks_Data_Aggregate;
  /** fetch data from the table: "vancouver_x_property_tax_blocks_geom" */
  vancouver_x_property_tax_blocks_geom: Array<Vancouver_X_Property_Tax_Blocks_Geom>;
  /** fetch aggregated fields from the table: "vancouver_x_property_tax_blocks_geom" */
  vancouver_x_property_tax_blocks_geom_aggregate: Vancouver_X_Property_Tax_Blocks_Geom_Aggregate;
  /** fetch data from the table: "vancouver_x_property_tax_blocks_geom" using primary key columns */
  vancouver_x_property_tax_blocks_geom_by_pk?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom>;
  /** fetch data from the table: "vancouver_x_property_tax_parcels_data" */
  vancouver_x_property_tax_parcels_data: Array<Vancouver_X_Property_Tax_Parcels_Data>;
  /** fetch aggregated fields from the table: "vancouver_x_property_tax_parcels_data" */
  vancouver_x_property_tax_parcels_data_aggregate: Vancouver_X_Property_Tax_Parcels_Data_Aggregate;
  /** fetch data from the table: "vancouver_x_property_tax_parcels_geom" */
  vancouver_x_property_tax_parcels_geom: Array<Vancouver_X_Property_Tax_Parcels_Geom>;
  /** fetch aggregated fields from the table: "vancouver_x_property_tax_parcels_geom" */
  vancouver_x_property_tax_parcels_geom_aggregate: Vancouver_X_Property_Tax_Parcels_Geom_Aggregate;
  /** fetch data from the table: "vancouver_x_property_tax_parcels_geom" using primary key columns */
  vancouver_x_property_tax_parcels_geom_by_pk?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom>;
  /** fetch data from the table: "vancouver_x_zoning_districts_and_labels" */
  vancouver_x_zoning_districts_and_labels: Array<Vancouver_X_Zoning_Districts_And_Labels>;
  /** fetch aggregated fields from the table: "vancouver_x_zoning_districts_and_labels" */
  vancouver_x_zoning_districts_and_labels_aggregate: Vancouver_X_Zoning_Districts_And_Labels_Aggregate;
  /** fetch data from the table: "vancouver_x_zoning_districts_and_labels" using primary key columns */
  vancouver_x_zoning_districts_and_labels_by_pk?: Maybe<Vancouver_X_Zoning_Districts_And_Labels>;
};


/** query root */
export type Query_RootBurnaby_X_Community_PlanArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Community_Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Community_Plan_Order_By>>;
  where?: Maybe<Burnaby_X_Community_Plan_Bool_Exp>;
};


/** query root */
export type Query_RootBurnaby_X_Community_Plan_AggregateArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Community_Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Community_Plan_Order_By>>;
  where?: Maybe<Burnaby_X_Community_Plan_Bool_Exp>;
};


/** query root */
export type Query_RootBurnaby_X_Community_Plan_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBurnaby_X_ParcelsArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Parcels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Parcels_Order_By>>;
  where?: Maybe<Burnaby_X_Parcels_Bool_Exp>;
};


/** query root */
export type Query_RootBurnaby_X_Parcels_AggregateArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Parcels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Parcels_Order_By>>;
  where?: Maybe<Burnaby_X_Parcels_Bool_Exp>;
};


/** query root */
export type Query_RootBurnaby_X_Parcels_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootBurnaby_X_ZoningArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Zoning_Order_By>>;
  where?: Maybe<Burnaby_X_Zoning_Bool_Exp>;
};


/** query root */
export type Query_RootBurnaby_X_Zoning_AggregateArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Zoning_Order_By>>;
  where?: Maybe<Burnaby_X_Zoning_Bool_Exp>;
};


/** query root */
export type Query_RootBurnaby_X_Zoning_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootDevelopment_TilesArgs = {
  distinct_on?: Maybe<Array<Development_Tiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Development_Tiles_Order_By>>;
  where?: Maybe<Development_Tiles_Bool_Exp>;
};


/** query root */
export type Query_RootDevelopment_Tiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Development_Tiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Development_Tiles_Order_By>>;
  where?: Maybe<Development_Tiles_Bool_Exp>;
};


/** query root */
export type Query_RootGet_TilesArgs = {
  args: Get_Tiles_Args;
  distinct_on?: Maybe<Array<Development_Tiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Development_Tiles_Order_By>>;
  where?: Maybe<Development_Tiles_Bool_Exp>;
};


/** query root */
export type Query_RootGet_Tiles_AggregateArgs = {
  args: Get_Tiles_Args;
  distinct_on?: Maybe<Array<Development_Tiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Development_Tiles_Order_By>>;
  where?: Maybe<Development_Tiles_Bool_Exp>;
};


/** query root */
export type Query_RootIncomesArgs = {
  distinct_on?: Maybe<Array<Incomes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Incomes_Order_By>>;
  where?: Maybe<Incomes_Bool_Exp>;
};


/** query root */
export type Query_RootIncomes_AggregateArgs = {
  distinct_on?: Maybe<Array<Incomes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Incomes_Order_By>>;
  where?: Maybe<Incomes_Bool_Exp>;
};


/** query root */
export type Query_RootNew_York_X_Pumas_DataArgs = {
  distinct_on?: Maybe<Array<New_York_X_Pumas_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<New_York_X_Pumas_Data_Order_By>>;
  where?: Maybe<New_York_X_Pumas_Data_Bool_Exp>;
};


/** query root */
export type Query_RootNew_York_X_Pumas_Data_AggregateArgs = {
  distinct_on?: Maybe<Array<New_York_X_Pumas_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<New_York_X_Pumas_Data_Order_By>>;
  where?: Maybe<New_York_X_Pumas_Data_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Buildings_2003Args = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Buildings_2003_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Buildings_2003_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Buildings_2003_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Buildings_2003_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Buildings_2003_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Buildings_2003_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Buildings_2003_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Buildings_2003_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Community_PlanArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Community_Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Community_Plan_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Community_Plan_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Community_Plan_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Community_Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Community_Plan_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Community_Plan_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Community_Plan_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Land_LotsArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Land_Lots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Land_Lots_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Land_Lots_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Land_Lots_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Land_Lots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Land_Lots_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Land_Lots_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Land_Lots_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_NeighborhoodsArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Neighborhoods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Neighborhoods_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Neighborhoods_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Neighborhoods_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Neighborhoods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Neighborhoods_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Neighborhoods_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Neighborhoods_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_ParcelsArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Parcels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Parcels_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Parcels_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Parcels_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Parcels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Parcels_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Parcels_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Parcels_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_ZoningArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Zoning_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Zoning_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Zoning_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Zoning_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Zoning_Bool_Exp>;
};


/** query root */
export type Query_RootNorth_Vancouver_District_X_Zoning_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootPrices_HistoricalArgs = {
  distinct_on?: Maybe<Array<Prices_Historical_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prices_Historical_Order_By>>;
  where?: Maybe<Prices_Historical_Bool_Exp>;
};


/** query root */
export type Query_RootPrices_Historical_AggregateArgs = {
  distinct_on?: Maybe<Array<Prices_Historical_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prices_Historical_Order_By>>;
  where?: Maybe<Prices_Historical_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_NumbeoArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Numbeo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Numbeo_Order_By>>;
  where?: Maybe<Proprietary_X_Numbeo_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_Numbeo_AggregateArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Numbeo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Numbeo_Order_By>>;
  where?: Maybe<Proprietary_X_Numbeo_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_Numbeo_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProprietary_X_Padmapper_Rent_2021Args = {
  distinct_on?: Maybe<Array<Proprietary_X_Padmapper_Rent_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Padmapper_Rent_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Padmapper_Rent_2021_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_Padmapper_Rent_2021_AggregateArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Padmapper_Rent_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Padmapper_Rent_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Padmapper_Rent_2021_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_Padmapper_Rent_2021_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProprietary_X_Zillow_On_Sale_2021Args = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_On_Sale_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_On_Sale_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_Zillow_On_Sale_2021_AggregateArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_On_Sale_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_On_Sale_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_Zillow_On_Sale_2021_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProprietary_X_Zillow_Rent_2021Args = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_Rent_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_Rent_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_Rent_2021_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_Zillow_Rent_2021_AggregateArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_Rent_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_Rent_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_Rent_2021_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_Zillow_Rent_2021_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootProprietary_X_Zillow_Sold_2021Args = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_Sold_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_Sold_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_Sold_2021_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_Zillow_Sold_2021_AggregateArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_Sold_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_Sold_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_Sold_2021_Bool_Exp>;
};


/** query root */
export type Query_RootProprietary_X_Zillow_Sold_2021_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRegional_X_Indigenous_TerritoriesArgs = {
  distinct_on?: Maybe<Array<Regional_X_Indigenous_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Indigenous_Territories_Order_By>>;
  where?: Maybe<Regional_X_Indigenous_Territories_Bool_Exp>;
};


/** query root */
export type Query_RootRegional_X_Indigenous_Territories_AggregateArgs = {
  distinct_on?: Maybe<Array<Regional_X_Indigenous_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Indigenous_Territories_Order_By>>;
  where?: Maybe<Regional_X_Indigenous_Territories_Bool_Exp>;
};


/** query root */
export type Query_RootRegional_X_Rebgv_2020Args = {
  distinct_on?: Maybe<Array<Regional_X_Rebgv_2020_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Rebgv_2020_Order_By>>;
  where?: Maybe<Regional_X_Rebgv_2020_Bool_Exp>;
};


/** query root */
export type Query_RootRegional_X_Rebgv_2020_AggregateArgs = {
  distinct_on?: Maybe<Array<Regional_X_Rebgv_2020_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Rebgv_2020_Order_By>>;
  where?: Maybe<Regional_X_Rebgv_2020_Bool_Exp>;
};


/** query root */
export type Query_RootRegional_X_Rebgv_2020_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRegional_X_Rent_Vs_Ownership_2015Args = {
  distinct_on?: Maybe<Array<Regional_X_Rent_Vs_Ownership_2015_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Rent_Vs_Ownership_2015_Order_By>>;
  where?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Bool_Exp>;
};


/** query root */
export type Query_RootRegional_X_Rent_Vs_Ownership_2015_AggregateArgs = {
  distinct_on?: Maybe<Array<Regional_X_Rent_Vs_Ownership_2015_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Rent_Vs_Ownership_2015_Order_By>>;
  where?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Bool_Exp>;
};


/** query root */
export type Query_RootRegional_X_Rent_Vs_Ownership_2015_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRegional_X_Shelter_SpendingArgs = {
  distinct_on?: Maybe<Array<Regional_X_Shelter_Spending_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Shelter_Spending_Order_By>>;
  where?: Maybe<Regional_X_Shelter_Spending_Bool_Exp>;
};


/** query root */
export type Query_RootRegional_X_Shelter_Spending_AggregateArgs = {
  distinct_on?: Maybe<Array<Regional_X_Shelter_Spending_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Shelter_Spending_Order_By>>;
  where?: Maybe<Regional_X_Shelter_Spending_Bool_Exp>;
};


/** query root */
export type Query_RootRegional_X_Shelter_Spending_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRegional_X_ZoningArgs = {
  distinct_on?: Maybe<Array<Regional_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Zoning_Order_By>>;
  where?: Maybe<Regional_X_Zoning_Bool_Exp>;
};


/** query root */
export type Query_RootRegional_X_Zoning_AggregateArgs = {
  distinct_on?: Maybe<Array<Regional_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Zoning_Order_By>>;
  where?: Maybe<Regional_X_Zoning_Bool_Exp>;
};


/** query root */
export type Query_RootRegional_X_Zoning_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootRents_HistoricalArgs = {
  distinct_on?: Maybe<Array<Rents_Historical_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rents_Historical_Order_By>>;
  where?: Maybe<Rents_Historical_Bool_Exp>;
};


/** query root */
export type Query_RootRents_Historical_AggregateArgs = {
  distinct_on?: Maybe<Array<Rents_Historical_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rents_Historical_Order_By>>;
  where?: Maybe<Rents_Historical_Bool_Exp>;
};


/** query root */
export type Query_RootSurrey_X_Census_Tract_2016Args = {
  distinct_on?: Maybe<Array<Surrey_X_Census_Tract_2016_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Surrey_X_Census_Tract_2016_Order_By>>;
  where?: Maybe<Surrey_X_Census_Tract_2016_Bool_Exp>;
};


/** query root */
export type Query_RootSurrey_X_Census_Tract_2016_AggregateArgs = {
  distinct_on?: Maybe<Array<Surrey_X_Census_Tract_2016_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Surrey_X_Census_Tract_2016_Order_By>>;
  where?: Maybe<Surrey_X_Census_Tract_2016_Bool_Exp>;
};


/** query root */
export type Query_RootSurrey_X_Census_Tract_2016_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSurrey_X_Property_Listing_2021Args = {
  distinct_on?: Maybe<Array<Surrey_X_Property_Listing_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Surrey_X_Property_Listing_2021_Order_By>>;
  where?: Maybe<Surrey_X_Property_Listing_2021_Bool_Exp>;
};


/** query root */
export type Query_RootSurrey_X_Property_Listing_2021_AggregateArgs = {
  distinct_on?: Maybe<Array<Surrey_X_Property_Listing_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Surrey_X_Property_Listing_2021_Order_By>>;
  where?: Maybe<Surrey_X_Property_Listing_2021_Bool_Exp>;
};


/** query root */
export type Query_RootSurrey_X_Property_Listing_2021_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSynthetic_BlocksArgs = {
  distinct_on?: Maybe<Array<Synthetic_Blocks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Synthetic_Blocks_Order_By>>;
  where?: Maybe<Synthetic_Blocks_Bool_Exp>;
};


/** query root */
export type Query_RootSynthetic_Blocks_AggregateArgs = {
  distinct_on?: Maybe<Array<Synthetic_Blocks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Synthetic_Blocks_Order_By>>;
  where?: Maybe<Synthetic_Blocks_Bool_Exp>;
};


/** query root */
export type Query_RootSynthetic_ParcelsArgs = {
  distinct_on?: Maybe<Array<Synthetic_Parcels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Synthetic_Parcels_Order_By>>;
  where?: Maybe<Synthetic_Parcels_Bool_Exp>;
};


/** query root */
export type Query_RootSynthetic_Parcels_By_PkArgs = {
  index: Scalars['bigint'];
};


/** query root */
export type Query_RootVancouver_X_Business_Improvement_AreasArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Business_Improvement_Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Business_Improvement_Areas_Order_By>>;
  where?: Maybe<Vancouver_X_Business_Improvement_Areas_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Business_Improvement_Areas_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Business_Improvement_Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Business_Improvement_Areas_Order_By>>;
  where?: Maybe<Vancouver_X_Business_Improvement_Areas_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Business_Improvement_Areas_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootVancouver_X_Census_Data_2016Args = {
  distinct_on?: Maybe<Array<Vancouver_X_Census_Data_2016_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Census_Data_2016_Order_By>>;
  where?: Maybe<Vancouver_X_Census_Data_2016_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Census_Data_2016_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Census_Data_2016_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Census_Data_2016_Order_By>>;
  where?: Maybe<Vancouver_X_Census_Data_2016_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_City_Owned_PropertiesArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_City_Owned_Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_City_Owned_Properties_Order_By>>;
  where?: Maybe<Vancouver_X_City_Owned_Properties_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_City_Owned_Properties_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_City_Owned_Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_City_Owned_Properties_Order_By>>;
  where?: Maybe<Vancouver_X_City_Owned_Properties_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_City_Owned_Properties_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootVancouver_X_Property_Tax_Blocks_DataArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Data_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Property_Tax_Blocks_Data_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Data_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Property_Tax_Blocks_GeomArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Geom_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Geom_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Property_Tax_Blocks_Geom_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Geom_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Geom_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Property_Tax_Blocks_Geom_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootVancouver_X_Property_Tax_Parcels_DataArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Data_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Property_Tax_Parcels_Data_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Data_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Property_Tax_Parcels_GeomArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Geom_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Geom_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Property_Tax_Parcels_Geom_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Geom_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Geom_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Property_Tax_Parcels_Geom_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootVancouver_X_Zoning_Districts_And_LabelsArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Zoning_Districts_And_Labels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Zoning_Districts_And_Labels_Order_By>>;
  where?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Zoning_Districts_And_Labels_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Zoning_Districts_And_Labels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Zoning_Districts_And_Labels_Order_By>>;
  where?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Bool_Exp>;
};


/** query root */
export type Query_RootVancouver_X_Zoning_Districts_And_Labels_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "regional_x_indigenous_territories" */
export type Regional_X_Indigenous_Territories = {
  _description?: Maybe<Scalars['String']>;
  _french_description?: Maybe<Scalars['String']>;
  _french_name?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  _slug?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "regional_x_indigenous_territories" */
export type Regional_X_Indigenous_Territories_Aggregate = {
  aggregate?: Maybe<Regional_X_Indigenous_Territories_Aggregate_Fields>;
  nodes: Array<Regional_X_Indigenous_Territories>;
};

/** aggregate fields of "regional_x_indigenous_territories" */
export type Regional_X_Indigenous_Territories_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Regional_X_Indigenous_Territories_Max_Fields>;
  min?: Maybe<Regional_X_Indigenous_Territories_Min_Fields>;
};


/** aggregate fields of "regional_x_indigenous_territories" */
export type Regional_X_Indigenous_Territories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Regional_X_Indigenous_Territories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "regional_x_indigenous_territories" */
export type Regional_X_Indigenous_Territories_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Regional_X_Indigenous_Territories_Max_Order_By>;
  min?: Maybe<Regional_X_Indigenous_Territories_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "regional_x_indigenous_territories". All fields are combined with a logical 'AND'. */
export type Regional_X_Indigenous_Territories_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Regional_X_Indigenous_Territories_Bool_Exp>>>;
  _description?: Maybe<String_Comparison_Exp>;
  _french_description?: Maybe<String_Comparison_Exp>;
  _french_name?: Maybe<String_Comparison_Exp>;
  _name?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<Regional_X_Indigenous_Territories_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Regional_X_Indigenous_Territories_Bool_Exp>>>;
  _slug?: Maybe<String_Comparison_Exp>;
  color?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Regional_X_Indigenous_Territories_Max_Fields = {
  _description?: Maybe<Scalars['String']>;
  _french_description?: Maybe<Scalars['String']>;
  _french_name?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  _slug?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "regional_x_indigenous_territories" */
export type Regional_X_Indigenous_Territories_Max_Order_By = {
  _description?: Maybe<Order_By>;
  _french_description?: Maybe<Order_By>;
  _french_name?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  _slug?: Maybe<Order_By>;
  color?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Regional_X_Indigenous_Territories_Min_Fields = {
  _description?: Maybe<Scalars['String']>;
  _french_description?: Maybe<Scalars['String']>;
  _french_name?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  _slug?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "regional_x_indigenous_territories" */
export type Regional_X_Indigenous_Territories_Min_Order_By = {
  _description?: Maybe<Order_By>;
  _french_description?: Maybe<Order_By>;
  _french_name?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  _slug?: Maybe<Order_By>;
  color?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "regional_x_indigenous_territories" */
export type Regional_X_Indigenous_Territories_Order_By = {
  _description?: Maybe<Order_By>;
  _french_description?: Maybe<Order_By>;
  _french_name?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  _slug?: Maybe<Order_By>;
  color?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** select columns of table "regional_x_indigenous_territories" */
export enum Regional_X_Indigenous_Territories_Select_Column {
  /** column name */
  Description = '_description',
  /** column name */
  FrenchDescription = '_french_description',
  /** column name */
  FrenchName = '_french_name',
  /** column name */
  Name = '_name',
  /** column name */
  Slug = '_slug',
  /** column name */
  Color = 'color',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id'
}

/** columns and relationships of "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020 = {
  _source?: Maybe<Scalars['String']>;
  apartment_bm?: Maybe<Scalars['Int']>;
  apartment_chg?: Maybe<Scalars['float8']>;
  apartment_ind?: Maybe<Scalars['float8']>;
  composite_bm?: Maybe<Scalars['Int']>;
  composite_chg?: Maybe<Scalars['float8']>;
  composite_ind?: Maybe<Scalars['float8']>;
  geography?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  sf_detached_bm?: Maybe<Scalars['Int']>;
  sf_detached_chg?: Maybe<Scalars['float8']>;
  sf_detached_ind?: Maybe<Scalars['float8']>;
  townhouse_bm?: Maybe<Scalars['Int']>;
  townhouse_chg?: Maybe<Scalars['float8']>;
  townhouse_ind?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Aggregate = {
  aggregate?: Maybe<Regional_X_Rebgv_2020_Aggregate_Fields>;
  nodes: Array<Regional_X_Rebgv_2020>;
};

/** aggregate fields of "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Aggregate_Fields = {
  avg?: Maybe<Regional_X_Rebgv_2020_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Regional_X_Rebgv_2020_Max_Fields>;
  min?: Maybe<Regional_X_Rebgv_2020_Min_Fields>;
  stddev?: Maybe<Regional_X_Rebgv_2020_Stddev_Fields>;
  stddev_pop?: Maybe<Regional_X_Rebgv_2020_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Regional_X_Rebgv_2020_Stddev_Samp_Fields>;
  sum?: Maybe<Regional_X_Rebgv_2020_Sum_Fields>;
  var_pop?: Maybe<Regional_X_Rebgv_2020_Var_Pop_Fields>;
  var_samp?: Maybe<Regional_X_Rebgv_2020_Var_Samp_Fields>;
  variance?: Maybe<Regional_X_Rebgv_2020_Variance_Fields>;
};


/** aggregate fields of "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Regional_X_Rebgv_2020_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Aggregate_Order_By = {
  avg?: Maybe<Regional_X_Rebgv_2020_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Regional_X_Rebgv_2020_Max_Order_By>;
  min?: Maybe<Regional_X_Rebgv_2020_Min_Order_By>;
  stddev?: Maybe<Regional_X_Rebgv_2020_Stddev_Order_By>;
  stddev_pop?: Maybe<Regional_X_Rebgv_2020_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Regional_X_Rebgv_2020_Stddev_Samp_Order_By>;
  sum?: Maybe<Regional_X_Rebgv_2020_Sum_Order_By>;
  var_pop?: Maybe<Regional_X_Rebgv_2020_Var_Pop_Order_By>;
  var_samp?: Maybe<Regional_X_Rebgv_2020_Var_Samp_Order_By>;
  variance?: Maybe<Regional_X_Rebgv_2020_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Regional_X_Rebgv_2020_Avg_Fields = {
  apartment_bm?: Maybe<Scalars['Float']>;
  apartment_chg?: Maybe<Scalars['Float']>;
  apartment_ind?: Maybe<Scalars['Float']>;
  composite_bm?: Maybe<Scalars['Float']>;
  composite_chg?: Maybe<Scalars['Float']>;
  composite_ind?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sf_detached_bm?: Maybe<Scalars['Float']>;
  sf_detached_chg?: Maybe<Scalars['Float']>;
  sf_detached_ind?: Maybe<Scalars['Float']>;
  townhouse_bm?: Maybe<Scalars['Float']>;
  townhouse_chg?: Maybe<Scalars['Float']>;
  townhouse_ind?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Avg_Order_By = {
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "regional_x_rebgv_2020". All fields are combined with a logical 'AND'. */
export type Regional_X_Rebgv_2020_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Regional_X_Rebgv_2020_Bool_Exp>>>;
  _not?: Maybe<Regional_X_Rebgv_2020_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Regional_X_Rebgv_2020_Bool_Exp>>>;
  _source?: Maybe<String_Comparison_Exp>;
  apartment_bm?: Maybe<Int_Comparison_Exp>;
  apartment_chg?: Maybe<Float8_Comparison_Exp>;
  apartment_ind?: Maybe<Float8_Comparison_Exp>;
  composite_bm?: Maybe<Int_Comparison_Exp>;
  composite_chg?: Maybe<Float8_Comparison_Exp>;
  composite_ind?: Maybe<Float8_Comparison_Exp>;
  geography?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  sf_detached_bm?: Maybe<Int_Comparison_Exp>;
  sf_detached_chg?: Maybe<Float8_Comparison_Exp>;
  sf_detached_ind?: Maybe<Float8_Comparison_Exp>;
  townhouse_bm?: Maybe<Int_Comparison_Exp>;
  townhouse_chg?: Maybe<Float8_Comparison_Exp>;
  townhouse_ind?: Maybe<Float8_Comparison_Exp>;
};

/** aggregate max on columns */
export type Regional_X_Rebgv_2020_Max_Fields = {
  _source?: Maybe<Scalars['String']>;
  apartment_bm?: Maybe<Scalars['Int']>;
  apartment_chg?: Maybe<Scalars['float8']>;
  apartment_ind?: Maybe<Scalars['float8']>;
  composite_bm?: Maybe<Scalars['Int']>;
  composite_chg?: Maybe<Scalars['float8']>;
  composite_ind?: Maybe<Scalars['float8']>;
  geography?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  sf_detached_bm?: Maybe<Scalars['Int']>;
  sf_detached_chg?: Maybe<Scalars['float8']>;
  sf_detached_ind?: Maybe<Scalars['float8']>;
  townhouse_bm?: Maybe<Scalars['Int']>;
  townhouse_chg?: Maybe<Scalars['float8']>;
  townhouse_ind?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Max_Order_By = {
  _source?: Maybe<Order_By>;
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  geography?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Regional_X_Rebgv_2020_Min_Fields = {
  _source?: Maybe<Scalars['String']>;
  apartment_bm?: Maybe<Scalars['Int']>;
  apartment_chg?: Maybe<Scalars['float8']>;
  apartment_ind?: Maybe<Scalars['float8']>;
  composite_bm?: Maybe<Scalars['Int']>;
  composite_chg?: Maybe<Scalars['float8']>;
  composite_ind?: Maybe<Scalars['float8']>;
  geography?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  sf_detached_bm?: Maybe<Scalars['Int']>;
  sf_detached_chg?: Maybe<Scalars['float8']>;
  sf_detached_ind?: Maybe<Scalars['float8']>;
  townhouse_bm?: Maybe<Scalars['Int']>;
  townhouse_chg?: Maybe<Scalars['float8']>;
  townhouse_ind?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Min_Order_By = {
  _source?: Maybe<Order_By>;
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  geography?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** ordering options when selecting data from "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Order_By = {
  _source?: Maybe<Order_By>;
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  geography?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** primary key columns input for table: "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "regional_x_rebgv_2020" */
export enum Regional_X_Rebgv_2020_Select_Column {
  /** column name */
  Source = '_source',
  /** column name */
  ApartmentBm = 'apartment_bm',
  /** column name */
  ApartmentChg = 'apartment_chg',
  /** column name */
  ApartmentInd = 'apartment_ind',
  /** column name */
  CompositeBm = 'composite_bm',
  /** column name */
  CompositeChg = 'composite_chg',
  /** column name */
  CompositeInd = 'composite_ind',
  /** column name */
  Geography = 'geography',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  SfDetachedBm = 'sf_detached_bm',
  /** column name */
  SfDetachedChg = 'sf_detached_chg',
  /** column name */
  SfDetachedInd = 'sf_detached_ind',
  /** column name */
  TownhouseBm = 'townhouse_bm',
  /** column name */
  TownhouseChg = 'townhouse_chg',
  /** column name */
  TownhouseInd = 'townhouse_ind'
}

/** aggregate stddev on columns */
export type Regional_X_Rebgv_2020_Stddev_Fields = {
  apartment_bm?: Maybe<Scalars['Float']>;
  apartment_chg?: Maybe<Scalars['Float']>;
  apartment_ind?: Maybe<Scalars['Float']>;
  composite_bm?: Maybe<Scalars['Float']>;
  composite_chg?: Maybe<Scalars['Float']>;
  composite_ind?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sf_detached_bm?: Maybe<Scalars['Float']>;
  sf_detached_chg?: Maybe<Scalars['Float']>;
  sf_detached_ind?: Maybe<Scalars['Float']>;
  townhouse_bm?: Maybe<Scalars['Float']>;
  townhouse_chg?: Maybe<Scalars['Float']>;
  townhouse_ind?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Stddev_Order_By = {
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Regional_X_Rebgv_2020_Stddev_Pop_Fields = {
  apartment_bm?: Maybe<Scalars['Float']>;
  apartment_chg?: Maybe<Scalars['Float']>;
  apartment_ind?: Maybe<Scalars['Float']>;
  composite_bm?: Maybe<Scalars['Float']>;
  composite_chg?: Maybe<Scalars['Float']>;
  composite_ind?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sf_detached_bm?: Maybe<Scalars['Float']>;
  sf_detached_chg?: Maybe<Scalars['Float']>;
  sf_detached_ind?: Maybe<Scalars['Float']>;
  townhouse_bm?: Maybe<Scalars['Float']>;
  townhouse_chg?: Maybe<Scalars['Float']>;
  townhouse_ind?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Stddev_Pop_Order_By = {
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Regional_X_Rebgv_2020_Stddev_Samp_Fields = {
  apartment_bm?: Maybe<Scalars['Float']>;
  apartment_chg?: Maybe<Scalars['Float']>;
  apartment_ind?: Maybe<Scalars['Float']>;
  composite_bm?: Maybe<Scalars['Float']>;
  composite_chg?: Maybe<Scalars['Float']>;
  composite_ind?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sf_detached_bm?: Maybe<Scalars['Float']>;
  sf_detached_chg?: Maybe<Scalars['Float']>;
  sf_detached_ind?: Maybe<Scalars['Float']>;
  townhouse_bm?: Maybe<Scalars['Float']>;
  townhouse_chg?: Maybe<Scalars['Float']>;
  townhouse_ind?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Stddev_Samp_Order_By = {
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Regional_X_Rebgv_2020_Sum_Fields = {
  apartment_bm?: Maybe<Scalars['Int']>;
  apartment_chg?: Maybe<Scalars['float8']>;
  apartment_ind?: Maybe<Scalars['float8']>;
  composite_bm?: Maybe<Scalars['Int']>;
  composite_chg?: Maybe<Scalars['float8']>;
  composite_ind?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  sf_detached_bm?: Maybe<Scalars['Int']>;
  sf_detached_chg?: Maybe<Scalars['float8']>;
  sf_detached_ind?: Maybe<Scalars['float8']>;
  townhouse_bm?: Maybe<Scalars['Int']>;
  townhouse_chg?: Maybe<Scalars['float8']>;
  townhouse_ind?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Sum_Order_By = {
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Regional_X_Rebgv_2020_Var_Pop_Fields = {
  apartment_bm?: Maybe<Scalars['Float']>;
  apartment_chg?: Maybe<Scalars['Float']>;
  apartment_ind?: Maybe<Scalars['Float']>;
  composite_bm?: Maybe<Scalars['Float']>;
  composite_chg?: Maybe<Scalars['Float']>;
  composite_ind?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sf_detached_bm?: Maybe<Scalars['Float']>;
  sf_detached_chg?: Maybe<Scalars['Float']>;
  sf_detached_ind?: Maybe<Scalars['Float']>;
  townhouse_bm?: Maybe<Scalars['Float']>;
  townhouse_chg?: Maybe<Scalars['Float']>;
  townhouse_ind?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Var_Pop_Order_By = {
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Regional_X_Rebgv_2020_Var_Samp_Fields = {
  apartment_bm?: Maybe<Scalars['Float']>;
  apartment_chg?: Maybe<Scalars['Float']>;
  apartment_ind?: Maybe<Scalars['Float']>;
  composite_bm?: Maybe<Scalars['Float']>;
  composite_chg?: Maybe<Scalars['Float']>;
  composite_ind?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sf_detached_bm?: Maybe<Scalars['Float']>;
  sf_detached_chg?: Maybe<Scalars['Float']>;
  sf_detached_ind?: Maybe<Scalars['Float']>;
  townhouse_bm?: Maybe<Scalars['Float']>;
  townhouse_chg?: Maybe<Scalars['Float']>;
  townhouse_ind?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Var_Samp_Order_By = {
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Regional_X_Rebgv_2020_Variance_Fields = {
  apartment_bm?: Maybe<Scalars['Float']>;
  apartment_chg?: Maybe<Scalars['Float']>;
  apartment_ind?: Maybe<Scalars['Float']>;
  composite_bm?: Maybe<Scalars['Float']>;
  composite_chg?: Maybe<Scalars['Float']>;
  composite_ind?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sf_detached_bm?: Maybe<Scalars['Float']>;
  sf_detached_chg?: Maybe<Scalars['Float']>;
  sf_detached_ind?: Maybe<Scalars['Float']>;
  townhouse_bm?: Maybe<Scalars['Float']>;
  townhouse_chg?: Maybe<Scalars['Float']>;
  townhouse_ind?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "regional_x_rebgv_2020" */
export type Regional_X_Rebgv_2020_Variance_Order_By = {
  apartment_bm?: Maybe<Order_By>;
  apartment_chg?: Maybe<Order_By>;
  apartment_ind?: Maybe<Order_By>;
  composite_bm?: Maybe<Order_By>;
  composite_chg?: Maybe<Order_By>;
  composite_ind?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sf_detached_bm?: Maybe<Order_By>;
  sf_detached_chg?: Maybe<Order_By>;
  sf_detached_ind?: Maybe<Order_By>;
  townhouse_bm?: Maybe<Order_By>;
  townhouse_chg?: Maybe<Order_By>;
  townhouse_ind?: Maybe<Order_By>;
};

/** columns and relationships of "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015 = {
  _a_updt_dte?: Maybe<Scalars['date']>;
  _ad_updt_dte?: Maybe<Scalars['date']>;
  _g_updt_dte?: Maybe<Scalars['date']>;
  _objectid?: Maybe<Scalars['Int']>;
  _pd_type_code?: Maybe<Scalars['String']>;
  _urban_rural_ind?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  tenure_owned?: Maybe<Scalars['float8']>;
  tenure_rented?: Maybe<Scalars['float8']>;
  tenure_total?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Aggregate = {
  aggregate?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Aggregate_Fields>;
  nodes: Array<Regional_X_Rent_Vs_Ownership_2015>;
};

/** aggregate fields of "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Aggregate_Fields = {
  avg?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Max_Fields>;
  min?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Min_Fields>;
  stddev?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Stddev_Fields>;
  stddev_pop?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Stddev_Samp_Fields>;
  sum?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Sum_Fields>;
  var_pop?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Var_Pop_Fields>;
  var_samp?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Var_Samp_Fields>;
  variance?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Variance_Fields>;
};


/** aggregate fields of "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Regional_X_Rent_Vs_Ownership_2015_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Aggregate_Order_By = {
  avg?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Max_Order_By>;
  min?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Min_Order_By>;
  stddev?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Stddev_Order_By>;
  stddev_pop?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Stddev_Samp_Order_By>;
  sum?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Sum_Order_By>;
  var_pop?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Var_Pop_Order_By>;
  var_samp?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Var_Samp_Order_By>;
  variance?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Regional_X_Rent_Vs_Ownership_2015_Avg_Fields = {
  _objectid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenure_owned?: Maybe<Scalars['Float']>;
  tenure_rented?: Maybe<Scalars['Float']>;
  tenure_total?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Avg_Order_By = {
  _objectid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "regional_x_rent_vs_ownership_2015". All fields are combined with a logical 'AND'. */
export type Regional_X_Rent_Vs_Ownership_2015_Bool_Exp = {
  _a_updt_dte?: Maybe<Date_Comparison_Exp>;
  _ad_updt_dte?: Maybe<Date_Comparison_Exp>;
  _and?: Maybe<Array<Maybe<Regional_X_Rent_Vs_Ownership_2015_Bool_Exp>>>;
  _g_updt_dte?: Maybe<Date_Comparison_Exp>;
  _not?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Bool_Exp>;
  _objectid?: Maybe<Int_Comparison_Exp>;
  _or?: Maybe<Array<Maybe<Regional_X_Rent_Vs_Ownership_2015_Bool_Exp>>>;
  _pd_type_code?: Maybe<String_Comparison_Exp>;
  _urban_rural_ind?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  tenure_owned?: Maybe<Float8_Comparison_Exp>;
  tenure_rented?: Maybe<Float8_Comparison_Exp>;
  tenure_total?: Maybe<Float8_Comparison_Exp>;
};

/** aggregate max on columns */
export type Regional_X_Rent_Vs_Ownership_2015_Max_Fields = {
  _a_updt_dte?: Maybe<Scalars['date']>;
  _ad_updt_dte?: Maybe<Scalars['date']>;
  _g_updt_dte?: Maybe<Scalars['date']>;
  _objectid?: Maybe<Scalars['Int']>;
  _pd_type_code?: Maybe<Scalars['String']>;
  _urban_rural_ind?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tenure_owned?: Maybe<Scalars['float8']>;
  tenure_rented?: Maybe<Scalars['float8']>;
  tenure_total?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Max_Order_By = {
  _a_updt_dte?: Maybe<Order_By>;
  _ad_updt_dte?: Maybe<Order_By>;
  _g_updt_dte?: Maybe<Order_By>;
  _objectid?: Maybe<Order_By>;
  _pd_type_code?: Maybe<Order_By>;
  _urban_rural_ind?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Regional_X_Rent_Vs_Ownership_2015_Min_Fields = {
  _a_updt_dte?: Maybe<Scalars['date']>;
  _ad_updt_dte?: Maybe<Scalars['date']>;
  _g_updt_dte?: Maybe<Scalars['date']>;
  _objectid?: Maybe<Scalars['Int']>;
  _pd_type_code?: Maybe<Scalars['String']>;
  _urban_rural_ind?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  tenure_owned?: Maybe<Scalars['float8']>;
  tenure_rented?: Maybe<Scalars['float8']>;
  tenure_total?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Min_Order_By = {
  _a_updt_dte?: Maybe<Order_By>;
  _ad_updt_dte?: Maybe<Order_By>;
  _g_updt_dte?: Maybe<Order_By>;
  _objectid?: Maybe<Order_By>;
  _pd_type_code?: Maybe<Order_By>;
  _urban_rural_ind?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** ordering options when selecting data from "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Order_By = {
  _a_updt_dte?: Maybe<Order_By>;
  _ad_updt_dte?: Maybe<Order_By>;
  _g_updt_dte?: Maybe<Order_By>;
  _objectid?: Maybe<Order_By>;
  _pd_type_code?: Maybe<Order_By>;
  _urban_rural_ind?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** primary key columns input for table: "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "regional_x_rent_vs_ownership_2015" */
export enum Regional_X_Rent_Vs_Ownership_2015_Select_Column {
  /** column name */
  AUpdtDte = '_a_updt_dte',
  /** column name */
  AdUpdtDte = '_ad_updt_dte',
  /** column name */
  GUpdtDte = '_g_updt_dte',
  /** column name */
  Objectid = '_objectid',
  /** column name */
  PdTypeCode = '_pd_type_code',
  /** column name */
  UrbanRuralInd = '_urban_rural_ind',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  TenureOwned = 'tenure_owned',
  /** column name */
  TenureRented = 'tenure_rented',
  /** column name */
  TenureTotal = 'tenure_total'
}

/** aggregate stddev on columns */
export type Regional_X_Rent_Vs_Ownership_2015_Stddev_Fields = {
  _objectid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenure_owned?: Maybe<Scalars['Float']>;
  tenure_rented?: Maybe<Scalars['Float']>;
  tenure_total?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Stddev_Order_By = {
  _objectid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Regional_X_Rent_Vs_Ownership_2015_Stddev_Pop_Fields = {
  _objectid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenure_owned?: Maybe<Scalars['Float']>;
  tenure_rented?: Maybe<Scalars['Float']>;
  tenure_total?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Stddev_Pop_Order_By = {
  _objectid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Regional_X_Rent_Vs_Ownership_2015_Stddev_Samp_Fields = {
  _objectid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenure_owned?: Maybe<Scalars['Float']>;
  tenure_rented?: Maybe<Scalars['Float']>;
  tenure_total?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Stddev_Samp_Order_By = {
  _objectid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Regional_X_Rent_Vs_Ownership_2015_Sum_Fields = {
  _objectid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tenure_owned?: Maybe<Scalars['float8']>;
  tenure_rented?: Maybe<Scalars['float8']>;
  tenure_total?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Sum_Order_By = {
  _objectid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Regional_X_Rent_Vs_Ownership_2015_Var_Pop_Fields = {
  _objectid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenure_owned?: Maybe<Scalars['Float']>;
  tenure_rented?: Maybe<Scalars['Float']>;
  tenure_total?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Var_Pop_Order_By = {
  _objectid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Regional_X_Rent_Vs_Ownership_2015_Var_Samp_Fields = {
  _objectid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenure_owned?: Maybe<Scalars['Float']>;
  tenure_rented?: Maybe<Scalars['Float']>;
  tenure_total?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Var_Samp_Order_By = {
  _objectid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Regional_X_Rent_Vs_Ownership_2015_Variance_Fields = {
  _objectid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenure_owned?: Maybe<Scalars['Float']>;
  tenure_rented?: Maybe<Scalars['Float']>;
  tenure_total?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "regional_x_rent_vs_ownership_2015" */
export type Regional_X_Rent_Vs_Ownership_2015_Variance_Order_By = {
  _objectid?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  tenure_owned?: Maybe<Order_By>;
  tenure_rented?: Maybe<Order_By>;
  tenure_total?: Maybe<Order_By>;
};

/** columns and relationships of "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending = {
  chsa_population_census?: Maybe<Scalars['Int']>;
  chsa_urban_rural_class?: Maybe<Scalars['String']>;
  comunity_health_service_area?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  health_authority?: Maybe<Scalars['String']>;
  health_service_delivery_area?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  local_health_area?: Maybe<Scalars['String']>;
  shelt_ot_30_100_total?: Maybe<Scalars['float8']>;
  shelt_ot_30plus_total?: Maybe<Scalars['float8']>;
  shelt_ot_households_total?: Maybe<Scalars['float8']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['float8']>;
  shelt_own_30plus_rate?: Maybe<Scalars['float8']>;
  shelt_own_households_total?: Maybe<Scalars['float8']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['float8']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['float8']>;
  shelt_own_value_average?: Maybe<Scalars['float8']>;
  shelt_own_value_median?: Maybe<Scalars['float8']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['float8']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['float8']>;
  shelt_rent_households_total?: Maybe<Scalars['float8']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['float8']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['float8']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Aggregate = {
  aggregate?: Maybe<Regional_X_Shelter_Spending_Aggregate_Fields>;
  nodes: Array<Regional_X_Shelter_Spending>;
};

/** aggregate fields of "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Aggregate_Fields = {
  avg?: Maybe<Regional_X_Shelter_Spending_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Regional_X_Shelter_Spending_Max_Fields>;
  min?: Maybe<Regional_X_Shelter_Spending_Min_Fields>;
  stddev?: Maybe<Regional_X_Shelter_Spending_Stddev_Fields>;
  stddev_pop?: Maybe<Regional_X_Shelter_Spending_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Regional_X_Shelter_Spending_Stddev_Samp_Fields>;
  sum?: Maybe<Regional_X_Shelter_Spending_Sum_Fields>;
  var_pop?: Maybe<Regional_X_Shelter_Spending_Var_Pop_Fields>;
  var_samp?: Maybe<Regional_X_Shelter_Spending_Var_Samp_Fields>;
  variance?: Maybe<Regional_X_Shelter_Spending_Variance_Fields>;
};


/** aggregate fields of "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Regional_X_Shelter_Spending_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Aggregate_Order_By = {
  avg?: Maybe<Regional_X_Shelter_Spending_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Regional_X_Shelter_Spending_Max_Order_By>;
  min?: Maybe<Regional_X_Shelter_Spending_Min_Order_By>;
  stddev?: Maybe<Regional_X_Shelter_Spending_Stddev_Order_By>;
  stddev_pop?: Maybe<Regional_X_Shelter_Spending_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Regional_X_Shelter_Spending_Stddev_Samp_Order_By>;
  sum?: Maybe<Regional_X_Shelter_Spending_Sum_Order_By>;
  var_pop?: Maybe<Regional_X_Shelter_Spending_Var_Pop_Order_By>;
  var_samp?: Maybe<Regional_X_Shelter_Spending_Var_Samp_Order_By>;
  variance?: Maybe<Regional_X_Shelter_Spending_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Regional_X_Shelter_Spending_Avg_Fields = {
  chsa_population_census?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shelt_ot_30_100_total?: Maybe<Scalars['Float']>;
  shelt_ot_30plus_total?: Maybe<Scalars['Float']>;
  shelt_ot_households_total?: Maybe<Scalars['Float']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['Float']>;
  shelt_own_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_own_households_total?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_own_value_average?: Maybe<Scalars['Float']>;
  shelt_own_value_median?: Maybe<Scalars['Float']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['Float']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_rent_households_total?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Avg_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "regional_x_shelter_spending". All fields are combined with a logical 'AND'. */
export type Regional_X_Shelter_Spending_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Regional_X_Shelter_Spending_Bool_Exp>>>;
  _not?: Maybe<Regional_X_Shelter_Spending_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Regional_X_Shelter_Spending_Bool_Exp>>>;
  chsa_population_census?: Maybe<Int_Comparison_Exp>;
  chsa_urban_rural_class?: Maybe<String_Comparison_Exp>;
  comunity_health_service_area?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  health_authority?: Maybe<String_Comparison_Exp>;
  health_service_delivery_area?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  local_health_area?: Maybe<String_Comparison_Exp>;
  shelt_ot_30_100_total?: Maybe<Float8_Comparison_Exp>;
  shelt_ot_30plus_total?: Maybe<Float8_Comparison_Exp>;
  shelt_ot_households_total?: Maybe<Float8_Comparison_Exp>;
  shelt_ot_less_than_30_total?: Maybe<Float8_Comparison_Exp>;
  shelt_own_30plus_rate?: Maybe<Float8_Comparison_Exp>;
  shelt_own_households_total?: Maybe<Float8_Comparison_Exp>;
  shelt_own_mo_cost_average?: Maybe<Float8_Comparison_Exp>;
  shelt_own_mo_cost_median?: Maybe<Float8_Comparison_Exp>;
  shelt_own_value_average?: Maybe<Float8_Comparison_Exp>;
  shelt_own_value_median?: Maybe<Float8_Comparison_Exp>;
  shelt_own_with_mortgage_rate?: Maybe<Float8_Comparison_Exp>;
  shelt_rent_30plus_rate?: Maybe<Float8_Comparison_Exp>;
  shelt_rent_households_total?: Maybe<Float8_Comparison_Exp>;
  shelt_rent_mo_cost_average?: Maybe<Float8_Comparison_Exp>;
  shelt_rent_mo_cost_median?: Maybe<Float8_Comparison_Exp>;
  shelt_rent_subsidized_rate?: Maybe<Float8_Comparison_Exp>;
};

/** aggregate max on columns */
export type Regional_X_Shelter_Spending_Max_Fields = {
  chsa_population_census?: Maybe<Scalars['Int']>;
  chsa_urban_rural_class?: Maybe<Scalars['String']>;
  comunity_health_service_area?: Maybe<Scalars['String']>;
  health_authority?: Maybe<Scalars['String']>;
  health_service_delivery_area?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  local_health_area?: Maybe<Scalars['String']>;
  shelt_ot_30_100_total?: Maybe<Scalars['float8']>;
  shelt_ot_30plus_total?: Maybe<Scalars['float8']>;
  shelt_ot_households_total?: Maybe<Scalars['float8']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['float8']>;
  shelt_own_30plus_rate?: Maybe<Scalars['float8']>;
  shelt_own_households_total?: Maybe<Scalars['float8']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['float8']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['float8']>;
  shelt_own_value_average?: Maybe<Scalars['float8']>;
  shelt_own_value_median?: Maybe<Scalars['float8']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['float8']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['float8']>;
  shelt_rent_households_total?: Maybe<Scalars['float8']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['float8']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['float8']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Max_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  chsa_urban_rural_class?: Maybe<Order_By>;
  comunity_health_service_area?: Maybe<Order_By>;
  health_authority?: Maybe<Order_By>;
  health_service_delivery_area?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  local_health_area?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Regional_X_Shelter_Spending_Min_Fields = {
  chsa_population_census?: Maybe<Scalars['Int']>;
  chsa_urban_rural_class?: Maybe<Scalars['String']>;
  comunity_health_service_area?: Maybe<Scalars['String']>;
  health_authority?: Maybe<Scalars['String']>;
  health_service_delivery_area?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  local_health_area?: Maybe<Scalars['String']>;
  shelt_ot_30_100_total?: Maybe<Scalars['float8']>;
  shelt_ot_30plus_total?: Maybe<Scalars['float8']>;
  shelt_ot_households_total?: Maybe<Scalars['float8']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['float8']>;
  shelt_own_30plus_rate?: Maybe<Scalars['float8']>;
  shelt_own_households_total?: Maybe<Scalars['float8']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['float8']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['float8']>;
  shelt_own_value_average?: Maybe<Scalars['float8']>;
  shelt_own_value_median?: Maybe<Scalars['float8']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['float8']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['float8']>;
  shelt_rent_households_total?: Maybe<Scalars['float8']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['float8']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['float8']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Min_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  chsa_urban_rural_class?: Maybe<Order_By>;
  comunity_health_service_area?: Maybe<Order_By>;
  health_authority?: Maybe<Order_By>;
  health_service_delivery_area?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  local_health_area?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** ordering options when selecting data from "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  chsa_urban_rural_class?: Maybe<Order_By>;
  comunity_health_service_area?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  health_authority?: Maybe<Order_By>;
  health_service_delivery_area?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  local_health_area?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** primary key columns input for table: "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "regional_x_shelter_spending" */
export enum Regional_X_Shelter_Spending_Select_Column {
  /** column name */
  ChsaPopulationCensus = 'chsa_population_census',
  /** column name */
  ChsaUrbanRuralClass = 'chsa_urban_rural_class',
  /** column name */
  ComunityHealthServiceArea = 'comunity_health_service_area',
  /** column name */
  Geom = 'geom',
  /** column name */
  HealthAuthority = 'health_authority',
  /** column name */
  HealthServiceDeliveryArea = 'health_service_delivery_area',
  /** column name */
  Id = 'id',
  /** column name */
  LocalHealthArea = 'local_health_area',
  /** column name */
  SheltOt_30_100Total = 'shelt_ot_30_100_total',
  /** column name */
  SheltOt_30plusTotal = 'shelt_ot_30plus_total',
  /** column name */
  SheltOtHouseholdsTotal = 'shelt_ot_households_total',
  /** column name */
  SheltOtLessThan_30Total = 'shelt_ot_less_than_30_total',
  /** column name */
  SheltOwn_30plusRate = 'shelt_own_30plus_rate',
  /** column name */
  SheltOwnHouseholdsTotal = 'shelt_own_households_total',
  /** column name */
  SheltOwnMoCostAverage = 'shelt_own_mo_cost_average',
  /** column name */
  SheltOwnMoCostMedian = 'shelt_own_mo_cost_median',
  /** column name */
  SheltOwnValueAverage = 'shelt_own_value_average',
  /** column name */
  SheltOwnValueMedian = 'shelt_own_value_median',
  /** column name */
  SheltOwnWithMortgageRate = 'shelt_own_with_mortgage_rate',
  /** column name */
  SheltRent_30plusRate = 'shelt_rent_30plus_rate',
  /** column name */
  SheltRentHouseholdsTotal = 'shelt_rent_households_total',
  /** column name */
  SheltRentMoCostAverage = 'shelt_rent_mo_cost_average',
  /** column name */
  SheltRentMoCostMedian = 'shelt_rent_mo_cost_median',
  /** column name */
  SheltRentSubsidizedRate = 'shelt_rent_subsidized_rate'
}

/** aggregate stddev on columns */
export type Regional_X_Shelter_Spending_Stddev_Fields = {
  chsa_population_census?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shelt_ot_30_100_total?: Maybe<Scalars['Float']>;
  shelt_ot_30plus_total?: Maybe<Scalars['Float']>;
  shelt_ot_households_total?: Maybe<Scalars['Float']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['Float']>;
  shelt_own_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_own_households_total?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_own_value_average?: Maybe<Scalars['Float']>;
  shelt_own_value_median?: Maybe<Scalars['Float']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['Float']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_rent_households_total?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Stddev_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Regional_X_Shelter_Spending_Stddev_Pop_Fields = {
  chsa_population_census?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shelt_ot_30_100_total?: Maybe<Scalars['Float']>;
  shelt_ot_30plus_total?: Maybe<Scalars['Float']>;
  shelt_ot_households_total?: Maybe<Scalars['Float']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['Float']>;
  shelt_own_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_own_households_total?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_own_value_average?: Maybe<Scalars['Float']>;
  shelt_own_value_median?: Maybe<Scalars['Float']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['Float']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_rent_households_total?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Stddev_Pop_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Regional_X_Shelter_Spending_Stddev_Samp_Fields = {
  chsa_population_census?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shelt_ot_30_100_total?: Maybe<Scalars['Float']>;
  shelt_ot_30plus_total?: Maybe<Scalars['Float']>;
  shelt_ot_households_total?: Maybe<Scalars['Float']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['Float']>;
  shelt_own_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_own_households_total?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_own_value_average?: Maybe<Scalars['Float']>;
  shelt_own_value_median?: Maybe<Scalars['Float']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['Float']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_rent_households_total?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Stddev_Samp_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Regional_X_Shelter_Spending_Sum_Fields = {
  chsa_population_census?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  shelt_ot_30_100_total?: Maybe<Scalars['float8']>;
  shelt_ot_30plus_total?: Maybe<Scalars['float8']>;
  shelt_ot_households_total?: Maybe<Scalars['float8']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['float8']>;
  shelt_own_30plus_rate?: Maybe<Scalars['float8']>;
  shelt_own_households_total?: Maybe<Scalars['float8']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['float8']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['float8']>;
  shelt_own_value_average?: Maybe<Scalars['float8']>;
  shelt_own_value_median?: Maybe<Scalars['float8']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['float8']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['float8']>;
  shelt_rent_households_total?: Maybe<Scalars['float8']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['float8']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['float8']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Sum_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Regional_X_Shelter_Spending_Var_Pop_Fields = {
  chsa_population_census?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shelt_ot_30_100_total?: Maybe<Scalars['Float']>;
  shelt_ot_30plus_total?: Maybe<Scalars['Float']>;
  shelt_ot_households_total?: Maybe<Scalars['Float']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['Float']>;
  shelt_own_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_own_households_total?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_own_value_average?: Maybe<Scalars['Float']>;
  shelt_own_value_median?: Maybe<Scalars['Float']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['Float']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_rent_households_total?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Var_Pop_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Regional_X_Shelter_Spending_Var_Samp_Fields = {
  chsa_population_census?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shelt_ot_30_100_total?: Maybe<Scalars['Float']>;
  shelt_ot_30plus_total?: Maybe<Scalars['Float']>;
  shelt_ot_households_total?: Maybe<Scalars['Float']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['Float']>;
  shelt_own_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_own_households_total?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_own_value_average?: Maybe<Scalars['Float']>;
  shelt_own_value_median?: Maybe<Scalars['Float']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['Float']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_rent_households_total?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Var_Samp_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Regional_X_Shelter_Spending_Variance_Fields = {
  chsa_population_census?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  shelt_ot_30_100_total?: Maybe<Scalars['Float']>;
  shelt_ot_30plus_total?: Maybe<Scalars['Float']>;
  shelt_ot_households_total?: Maybe<Scalars['Float']>;
  shelt_ot_less_than_30_total?: Maybe<Scalars['Float']>;
  shelt_own_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_own_households_total?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_own_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_own_value_average?: Maybe<Scalars['Float']>;
  shelt_own_value_median?: Maybe<Scalars['Float']>;
  shelt_own_with_mortgage_rate?: Maybe<Scalars['Float']>;
  shelt_rent_30plus_rate?: Maybe<Scalars['Float']>;
  shelt_rent_households_total?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_average?: Maybe<Scalars['Float']>;
  shelt_rent_mo_cost_median?: Maybe<Scalars['Float']>;
  shelt_rent_subsidized_rate?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "regional_x_shelter_spending" */
export type Regional_X_Shelter_Spending_Variance_Order_By = {
  chsa_population_census?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shelt_ot_30_100_total?: Maybe<Order_By>;
  shelt_ot_30plus_total?: Maybe<Order_By>;
  shelt_ot_households_total?: Maybe<Order_By>;
  shelt_ot_less_than_30_total?: Maybe<Order_By>;
  shelt_own_30plus_rate?: Maybe<Order_By>;
  shelt_own_households_total?: Maybe<Order_By>;
  shelt_own_mo_cost_average?: Maybe<Order_By>;
  shelt_own_mo_cost_median?: Maybe<Order_By>;
  shelt_own_value_average?: Maybe<Order_By>;
  shelt_own_value_median?: Maybe<Order_By>;
  shelt_own_with_mortgage_rate?: Maybe<Order_By>;
  shelt_rent_30plus_rate?: Maybe<Order_By>;
  shelt_rent_households_total?: Maybe<Order_By>;
  shelt_rent_mo_cost_average?: Maybe<Order_By>;
  shelt_rent_mo_cost_median?: Maybe<Order_By>;
  shelt_rent_subsidized_rate?: Maybe<Order_By>;
};

/** columns and relationships of "regional_x_zoning" */
export type Regional_X_Zoning = {
  _zoning_code?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  municipality?: Maybe<Scalars['String']>;
  zoning_category?: Maybe<Scalars['String']>;
};

/** aggregated selection of "regional_x_zoning" */
export type Regional_X_Zoning_Aggregate = {
  aggregate?: Maybe<Regional_X_Zoning_Aggregate_Fields>;
  nodes: Array<Regional_X_Zoning>;
};

/** aggregate fields of "regional_x_zoning" */
export type Regional_X_Zoning_Aggregate_Fields = {
  avg?: Maybe<Regional_X_Zoning_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Regional_X_Zoning_Max_Fields>;
  min?: Maybe<Regional_X_Zoning_Min_Fields>;
  stddev?: Maybe<Regional_X_Zoning_Stddev_Fields>;
  stddev_pop?: Maybe<Regional_X_Zoning_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Regional_X_Zoning_Stddev_Samp_Fields>;
  sum?: Maybe<Regional_X_Zoning_Sum_Fields>;
  var_pop?: Maybe<Regional_X_Zoning_Var_Pop_Fields>;
  var_samp?: Maybe<Regional_X_Zoning_Var_Samp_Fields>;
  variance?: Maybe<Regional_X_Zoning_Variance_Fields>;
};


/** aggregate fields of "regional_x_zoning" */
export type Regional_X_Zoning_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Regional_X_Zoning_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "regional_x_zoning" */
export type Regional_X_Zoning_Aggregate_Order_By = {
  avg?: Maybe<Regional_X_Zoning_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Regional_X_Zoning_Max_Order_By>;
  min?: Maybe<Regional_X_Zoning_Min_Order_By>;
  stddev?: Maybe<Regional_X_Zoning_Stddev_Order_By>;
  stddev_pop?: Maybe<Regional_X_Zoning_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Regional_X_Zoning_Stddev_Samp_Order_By>;
  sum?: Maybe<Regional_X_Zoning_Sum_Order_By>;
  var_pop?: Maybe<Regional_X_Zoning_Var_Pop_Order_By>;
  var_samp?: Maybe<Regional_X_Zoning_Var_Samp_Order_By>;
  variance?: Maybe<Regional_X_Zoning_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Regional_X_Zoning_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "regional_x_zoning" */
export type Regional_X_Zoning_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "regional_x_zoning". All fields are combined with a logical 'AND'. */
export type Regional_X_Zoning_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Regional_X_Zoning_Bool_Exp>>>;
  _not?: Maybe<Regional_X_Zoning_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Regional_X_Zoning_Bool_Exp>>>;
  _zoning_code?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  municipality?: Maybe<String_Comparison_Exp>;
  zoning_category?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Regional_X_Zoning_Max_Fields = {
  _zoning_code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  municipality?: Maybe<Scalars['String']>;
  zoning_category?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "regional_x_zoning" */
export type Regional_X_Zoning_Max_Order_By = {
  _zoning_code?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  municipality?: Maybe<Order_By>;
  zoning_category?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Regional_X_Zoning_Min_Fields = {
  _zoning_code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  municipality?: Maybe<Scalars['String']>;
  zoning_category?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "regional_x_zoning" */
export type Regional_X_Zoning_Min_Order_By = {
  _zoning_code?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  municipality?: Maybe<Order_By>;
  zoning_category?: Maybe<Order_By>;
};

/** ordering options when selecting data from "regional_x_zoning" */
export type Regional_X_Zoning_Order_By = {
  _zoning_code?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  municipality?: Maybe<Order_By>;
  zoning_category?: Maybe<Order_By>;
};

/** primary key columns input for table: "regional_x_zoning" */
export type Regional_X_Zoning_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "regional_x_zoning" */
export enum Regional_X_Zoning_Select_Column {
  /** column name */
  ZoningCode = '_zoning_code',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Municipality = 'municipality',
  /** column name */
  ZoningCategory = 'zoning_category'
}

/** aggregate stddev on columns */
export type Regional_X_Zoning_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "regional_x_zoning" */
export type Regional_X_Zoning_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Regional_X_Zoning_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "regional_x_zoning" */
export type Regional_X_Zoning_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Regional_X_Zoning_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "regional_x_zoning" */
export type Regional_X_Zoning_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Regional_X_Zoning_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "regional_x_zoning" */
export type Regional_X_Zoning_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Regional_X_Zoning_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "regional_x_zoning" */
export type Regional_X_Zoning_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Regional_X_Zoning_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "regional_x_zoning" */
export type Regional_X_Zoning_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Regional_X_Zoning_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "regional_x_zoning" */
export type Regional_X_Zoning_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "rents_historical" */
export type Rents_Historical = {
  average?: Maybe<Scalars['bigint']>;
  bachelor?: Maybe<Scalars['bigint']>;
  normalized?: Maybe<Scalars['numeric']>;
  one_bedroom?: Maybe<Scalars['bigint']>;
  three_bedroom?: Maybe<Scalars['bigint']>;
  two_bedroom?: Maybe<Scalars['bigint']>;
  year?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "rents_historical" */
export type Rents_Historical_Aggregate = {
  aggregate?: Maybe<Rents_Historical_Aggregate_Fields>;
  nodes: Array<Rents_Historical>;
};

/** aggregate fields of "rents_historical" */
export type Rents_Historical_Aggregate_Fields = {
  avg?: Maybe<Rents_Historical_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Rents_Historical_Max_Fields>;
  min?: Maybe<Rents_Historical_Min_Fields>;
  stddev?: Maybe<Rents_Historical_Stddev_Fields>;
  stddev_pop?: Maybe<Rents_Historical_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rents_Historical_Stddev_Samp_Fields>;
  sum?: Maybe<Rents_Historical_Sum_Fields>;
  var_pop?: Maybe<Rents_Historical_Var_Pop_Fields>;
  var_samp?: Maybe<Rents_Historical_Var_Samp_Fields>;
  variance?: Maybe<Rents_Historical_Variance_Fields>;
};


/** aggregate fields of "rents_historical" */
export type Rents_Historical_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rents_Historical_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rents_historical" */
export type Rents_Historical_Aggregate_Order_By = {
  avg?: Maybe<Rents_Historical_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rents_Historical_Max_Order_By>;
  min?: Maybe<Rents_Historical_Min_Order_By>;
  stddev?: Maybe<Rents_Historical_Stddev_Order_By>;
  stddev_pop?: Maybe<Rents_Historical_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rents_Historical_Stddev_Samp_Order_By>;
  sum?: Maybe<Rents_Historical_Sum_Order_By>;
  var_pop?: Maybe<Rents_Historical_Var_Pop_Order_By>;
  var_samp?: Maybe<Rents_Historical_Var_Samp_Order_By>;
  variance?: Maybe<Rents_Historical_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Rents_Historical_Avg_Fields = {
  average?: Maybe<Scalars['Float']>;
  bachelor?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  one_bedroom?: Maybe<Scalars['Float']>;
  three_bedroom?: Maybe<Scalars['Float']>;
  two_bedroom?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rents_historical" */
export type Rents_Historical_Avg_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rents_historical". All fields are combined with a logical 'AND'. */
export type Rents_Historical_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Rents_Historical_Bool_Exp>>>;
  _not?: Maybe<Rents_Historical_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Rents_Historical_Bool_Exp>>>;
  average?: Maybe<Bigint_Comparison_Exp>;
  bachelor?: Maybe<Bigint_Comparison_Exp>;
  normalized?: Maybe<Numeric_Comparison_Exp>;
  one_bedroom?: Maybe<Bigint_Comparison_Exp>;
  three_bedroom?: Maybe<Bigint_Comparison_Exp>;
  two_bedroom?: Maybe<Bigint_Comparison_Exp>;
  year?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Rents_Historical_Max_Fields = {
  average?: Maybe<Scalars['bigint']>;
  bachelor?: Maybe<Scalars['bigint']>;
  normalized?: Maybe<Scalars['numeric']>;
  one_bedroom?: Maybe<Scalars['bigint']>;
  three_bedroom?: Maybe<Scalars['bigint']>;
  two_bedroom?: Maybe<Scalars['bigint']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "rents_historical" */
export type Rents_Historical_Max_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rents_Historical_Min_Fields = {
  average?: Maybe<Scalars['bigint']>;
  bachelor?: Maybe<Scalars['bigint']>;
  normalized?: Maybe<Scalars['numeric']>;
  one_bedroom?: Maybe<Scalars['bigint']>;
  three_bedroom?: Maybe<Scalars['bigint']>;
  two_bedroom?: Maybe<Scalars['bigint']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "rents_historical" */
export type Rents_Historical_Min_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** ordering options when selecting data from "rents_historical" */
export type Rents_Historical_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** select columns of table "rents_historical" */
export enum Rents_Historical_Select_Column {
  /** column name */
  Average = 'average',
  /** column name */
  Bachelor = 'bachelor',
  /** column name */
  Normalized = 'normalized',
  /** column name */
  OneBedroom = 'one_bedroom',
  /** column name */
  ThreeBedroom = 'three_bedroom',
  /** column name */
  TwoBedroom = 'two_bedroom',
  /** column name */
  Year = 'year'
}

/** aggregate stddev on columns */
export type Rents_Historical_Stddev_Fields = {
  average?: Maybe<Scalars['Float']>;
  bachelor?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  one_bedroom?: Maybe<Scalars['Float']>;
  three_bedroom?: Maybe<Scalars['Float']>;
  two_bedroom?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rents_historical" */
export type Rents_Historical_Stddev_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rents_Historical_Stddev_Pop_Fields = {
  average?: Maybe<Scalars['Float']>;
  bachelor?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  one_bedroom?: Maybe<Scalars['Float']>;
  three_bedroom?: Maybe<Scalars['Float']>;
  two_bedroom?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rents_historical" */
export type Rents_Historical_Stddev_Pop_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rents_Historical_Stddev_Samp_Fields = {
  average?: Maybe<Scalars['Float']>;
  bachelor?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  one_bedroom?: Maybe<Scalars['Float']>;
  three_bedroom?: Maybe<Scalars['Float']>;
  two_bedroom?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rents_historical" */
export type Rents_Historical_Stddev_Samp_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rents_Historical_Sum_Fields = {
  average?: Maybe<Scalars['bigint']>;
  bachelor?: Maybe<Scalars['bigint']>;
  normalized?: Maybe<Scalars['numeric']>;
  one_bedroom?: Maybe<Scalars['bigint']>;
  three_bedroom?: Maybe<Scalars['bigint']>;
  two_bedroom?: Maybe<Scalars['bigint']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "rents_historical" */
export type Rents_Historical_Sum_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Rents_Historical_Var_Pop_Fields = {
  average?: Maybe<Scalars['Float']>;
  bachelor?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  one_bedroom?: Maybe<Scalars['Float']>;
  three_bedroom?: Maybe<Scalars['Float']>;
  two_bedroom?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rents_historical" */
export type Rents_Historical_Var_Pop_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rents_Historical_Var_Samp_Fields = {
  average?: Maybe<Scalars['Float']>;
  bachelor?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  one_bedroom?: Maybe<Scalars['Float']>;
  three_bedroom?: Maybe<Scalars['Float']>;
  two_bedroom?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rents_historical" */
export type Rents_Historical_Var_Samp_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rents_Historical_Variance_Fields = {
  average?: Maybe<Scalars['Float']>;
  bachelor?: Maybe<Scalars['Float']>;
  normalized?: Maybe<Scalars['Float']>;
  one_bedroom?: Maybe<Scalars['Float']>;
  three_bedroom?: Maybe<Scalars['Float']>;
  two_bedroom?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rents_historical" */
export type Rents_Historical_Variance_Order_By = {
  average?: Maybe<Order_By>;
  bachelor?: Maybe<Order_By>;
  normalized?: Maybe<Order_By>;
  one_bedroom?: Maybe<Order_By>;
  three_bedroom?: Maybe<Order_By>;
  two_bedroom?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: Maybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

/** subscription root */
export type Subscription_Root = {
  /** fetch data from the table: "burnaby_x_community_plan" */
  burnaby_x_community_plan: Array<Burnaby_X_Community_Plan>;
  /** fetch aggregated fields from the table: "burnaby_x_community_plan" */
  burnaby_x_community_plan_aggregate: Burnaby_X_Community_Plan_Aggregate;
  /** fetch data from the table: "burnaby_x_community_plan" using primary key columns */
  burnaby_x_community_plan_by_pk?: Maybe<Burnaby_X_Community_Plan>;
  /** fetch data from the table: "burnaby_x_parcels" */
  burnaby_x_parcels: Array<Burnaby_X_Parcels>;
  /** fetch aggregated fields from the table: "burnaby_x_parcels" */
  burnaby_x_parcels_aggregate: Burnaby_X_Parcels_Aggregate;
  /** fetch data from the table: "burnaby_x_parcels" using primary key columns */
  burnaby_x_parcels_by_pk?: Maybe<Burnaby_X_Parcels>;
  /** fetch data from the table: "burnaby_x_zoning" */
  burnaby_x_zoning: Array<Burnaby_X_Zoning>;
  /** fetch aggregated fields from the table: "burnaby_x_zoning" */
  burnaby_x_zoning_aggregate: Burnaby_X_Zoning_Aggregate;
  /** fetch data from the table: "burnaby_x_zoning" using primary key columns */
  burnaby_x_zoning_by_pk?: Maybe<Burnaby_X_Zoning>;
  /** fetch data from the table: "development.tiles" */
  development_tiles: Array<Development_Tiles>;
  /** fetch aggregated fields from the table: "development.tiles" */
  development_tiles_aggregate: Development_Tiles_Aggregate;
  /** execute function "get_tiles" which returns "development.tiles" */
  get_tiles: Array<Development_Tiles>;
  /** execute function "get_tiles" and query aggregates on result of table type "development.tiles" */
  get_tiles_aggregate: Development_Tiles_Aggregate;
  /** fetch data from the table: "incomes" */
  incomes: Array<Incomes>;
  /** fetch aggregated fields from the table: "incomes" */
  incomes_aggregate: Incomes_Aggregate;
  /** fetch data from the table: "new_york_x_pumas_data" */
  new_york_x_pumas_data: Array<New_York_X_Pumas_Data>;
  /** fetch aggregated fields from the table: "new_york_x_pumas_data" */
  new_york_x_pumas_data_aggregate: New_York_X_Pumas_Data_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_buildings_2003" */
  north_vancouver_district_x_buildings_2003: Array<North_Vancouver_District_X_Buildings_2003>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_buildings_2003" */
  north_vancouver_district_x_buildings_2003_aggregate: North_Vancouver_District_X_Buildings_2003_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_buildings_2003" using primary key columns */
  north_vancouver_district_x_buildings_2003_by_pk?: Maybe<North_Vancouver_District_X_Buildings_2003>;
  /** fetch data from the table: "north_vancouver_district_x_community_plan" */
  north_vancouver_district_x_community_plan: Array<North_Vancouver_District_X_Community_Plan>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_community_plan" */
  north_vancouver_district_x_community_plan_aggregate: North_Vancouver_District_X_Community_Plan_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_community_plan" using primary key columns */
  north_vancouver_district_x_community_plan_by_pk?: Maybe<North_Vancouver_District_X_Community_Plan>;
  /** fetch data from the table: "north_vancouver_district_x_land_lots" */
  north_vancouver_district_x_land_lots: Array<North_Vancouver_District_X_Land_Lots>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_land_lots" */
  north_vancouver_district_x_land_lots_aggregate: North_Vancouver_District_X_Land_Lots_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_land_lots" using primary key columns */
  north_vancouver_district_x_land_lots_by_pk?: Maybe<North_Vancouver_District_X_Land_Lots>;
  /** fetch data from the table: "north_vancouver_district_x_neighborhoods" */
  north_vancouver_district_x_neighborhoods: Array<North_Vancouver_District_X_Neighborhoods>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_neighborhoods" */
  north_vancouver_district_x_neighborhoods_aggregate: North_Vancouver_District_X_Neighborhoods_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_neighborhoods" using primary key columns */
  north_vancouver_district_x_neighborhoods_by_pk?: Maybe<North_Vancouver_District_X_Neighborhoods>;
  /** fetch data from the table: "north_vancouver_district_x_parcels" */
  north_vancouver_district_x_parcels: Array<North_Vancouver_District_X_Parcels>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_parcels" */
  north_vancouver_district_x_parcels_aggregate: North_Vancouver_District_X_Parcels_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_parcels" using primary key columns */
  north_vancouver_district_x_parcels_by_pk?: Maybe<North_Vancouver_District_X_Parcels>;
  /** fetch data from the table: "north_vancouver_district_x_zoning" */
  north_vancouver_district_x_zoning: Array<North_Vancouver_District_X_Zoning>;
  /** fetch aggregated fields from the table: "north_vancouver_district_x_zoning" */
  north_vancouver_district_x_zoning_aggregate: North_Vancouver_District_X_Zoning_Aggregate;
  /** fetch data from the table: "north_vancouver_district_x_zoning" using primary key columns */
  north_vancouver_district_x_zoning_by_pk?: Maybe<North_Vancouver_District_X_Zoning>;
  /** fetch data from the table: "prices_historical" */
  prices_historical: Array<Prices_Historical>;
  /** fetch aggregated fields from the table: "prices_historical" */
  prices_historical_aggregate: Prices_Historical_Aggregate;
  /** fetch data from the table: "proprietary_x_numbeo" */
  proprietary_x_numbeo: Array<Proprietary_X_Numbeo>;
  /** fetch aggregated fields from the table: "proprietary_x_numbeo" */
  proprietary_x_numbeo_aggregate: Proprietary_X_Numbeo_Aggregate;
  /** fetch data from the table: "proprietary_x_numbeo" using primary key columns */
  proprietary_x_numbeo_by_pk?: Maybe<Proprietary_X_Numbeo>;
  /** fetch data from the table: "proprietary_x_padmapper_rent_2021" */
  proprietary_x_padmapper_rent_2021: Array<Proprietary_X_Padmapper_Rent_2021>;
  /** fetch aggregated fields from the table: "proprietary_x_padmapper_rent_2021" */
  proprietary_x_padmapper_rent_2021_aggregate: Proprietary_X_Padmapper_Rent_2021_Aggregate;
  /** fetch data from the table: "proprietary_x_padmapper_rent_2021" using primary key columns */
  proprietary_x_padmapper_rent_2021_by_pk?: Maybe<Proprietary_X_Padmapper_Rent_2021>;
  /** fetch data from the table: "proprietary_x_zillow_on_sale_2021" */
  proprietary_x_zillow_on_sale_2021: Array<Proprietary_X_Zillow_On_Sale_2021>;
  /** fetch aggregated fields from the table: "proprietary_x_zillow_on_sale_2021" */
  proprietary_x_zillow_on_sale_2021_aggregate: Proprietary_X_Zillow_On_Sale_2021_Aggregate;
  /** fetch data from the table: "proprietary_x_zillow_on_sale_2021" using primary key columns */
  proprietary_x_zillow_on_sale_2021_by_pk?: Maybe<Proprietary_X_Zillow_On_Sale_2021>;
  /** fetch data from the table: "proprietary_x_zillow_rent_2021" */
  proprietary_x_zillow_rent_2021: Array<Proprietary_X_Zillow_Rent_2021>;
  /** fetch aggregated fields from the table: "proprietary_x_zillow_rent_2021" */
  proprietary_x_zillow_rent_2021_aggregate: Proprietary_X_Zillow_Rent_2021_Aggregate;
  /** fetch data from the table: "proprietary_x_zillow_rent_2021" using primary key columns */
  proprietary_x_zillow_rent_2021_by_pk?: Maybe<Proprietary_X_Zillow_Rent_2021>;
  /** fetch data from the table: "proprietary_x_zillow_sold_2021" */
  proprietary_x_zillow_sold_2021: Array<Proprietary_X_Zillow_Sold_2021>;
  /** fetch aggregated fields from the table: "proprietary_x_zillow_sold_2021" */
  proprietary_x_zillow_sold_2021_aggregate: Proprietary_X_Zillow_Sold_2021_Aggregate;
  /** fetch data from the table: "proprietary_x_zillow_sold_2021" using primary key columns */
  proprietary_x_zillow_sold_2021_by_pk?: Maybe<Proprietary_X_Zillow_Sold_2021>;
  /** fetch data from the table: "regional_x_indigenous_territories" */
  regional_x_indigenous_territories: Array<Regional_X_Indigenous_Territories>;
  /** fetch aggregated fields from the table: "regional_x_indigenous_territories" */
  regional_x_indigenous_territories_aggregate: Regional_X_Indigenous_Territories_Aggregate;
  /** fetch data from the table: "regional_x_rebgv_2020" */
  regional_x_rebgv_2020: Array<Regional_X_Rebgv_2020>;
  /** fetch aggregated fields from the table: "regional_x_rebgv_2020" */
  regional_x_rebgv_2020_aggregate: Regional_X_Rebgv_2020_Aggregate;
  /** fetch data from the table: "regional_x_rebgv_2020" using primary key columns */
  regional_x_rebgv_2020_by_pk?: Maybe<Regional_X_Rebgv_2020>;
  /** fetch data from the table: "regional_x_rent_vs_ownership_2015" */
  regional_x_rent_vs_ownership_2015: Array<Regional_X_Rent_Vs_Ownership_2015>;
  /** fetch aggregated fields from the table: "regional_x_rent_vs_ownership_2015" */
  regional_x_rent_vs_ownership_2015_aggregate: Regional_X_Rent_Vs_Ownership_2015_Aggregate;
  /** fetch data from the table: "regional_x_rent_vs_ownership_2015" using primary key columns */
  regional_x_rent_vs_ownership_2015_by_pk?: Maybe<Regional_X_Rent_Vs_Ownership_2015>;
  /** fetch data from the table: "regional_x_shelter_spending" */
  regional_x_shelter_spending: Array<Regional_X_Shelter_Spending>;
  /** fetch aggregated fields from the table: "regional_x_shelter_spending" */
  regional_x_shelter_spending_aggregate: Regional_X_Shelter_Spending_Aggregate;
  /** fetch data from the table: "regional_x_shelter_spending" using primary key columns */
  regional_x_shelter_spending_by_pk?: Maybe<Regional_X_Shelter_Spending>;
  /** fetch data from the table: "regional_x_zoning" */
  regional_x_zoning: Array<Regional_X_Zoning>;
  /** fetch aggregated fields from the table: "regional_x_zoning" */
  regional_x_zoning_aggregate: Regional_X_Zoning_Aggregate;
  /** fetch data from the table: "regional_x_zoning" using primary key columns */
  regional_x_zoning_by_pk?: Maybe<Regional_X_Zoning>;
  /** fetch data from the table: "rents_historical" */
  rents_historical: Array<Rents_Historical>;
  /** fetch aggregated fields from the table: "rents_historical" */
  rents_historical_aggregate: Rents_Historical_Aggregate;
  /** fetch data from the table: "surrey_x_census_tract_2016" */
  surrey_x_census_tract_2016: Array<Surrey_X_Census_Tract_2016>;
  /** fetch aggregated fields from the table: "surrey_x_census_tract_2016" */
  surrey_x_census_tract_2016_aggregate: Surrey_X_Census_Tract_2016_Aggregate;
  /** fetch data from the table: "surrey_x_census_tract_2016" using primary key columns */
  surrey_x_census_tract_2016_by_pk?: Maybe<Surrey_X_Census_Tract_2016>;
  /** fetch data from the table: "surrey_x_property_listing_2021" */
  surrey_x_property_listing_2021: Array<Surrey_X_Property_Listing_2021>;
  /** fetch aggregated fields from the table: "surrey_x_property_listing_2021" */
  surrey_x_property_listing_2021_aggregate: Surrey_X_Property_Listing_2021_Aggregate;
  /** fetch data from the table: "surrey_x_property_listing_2021" using primary key columns */
  surrey_x_property_listing_2021_by_pk?: Maybe<Surrey_X_Property_Listing_2021>;
  /** fetch data from the table: "synthetic_blocks" */
  synthetic_blocks: Array<Synthetic_Blocks>;
  /** fetch aggregated fields from the table: "synthetic_blocks" */
  synthetic_blocks_aggregate: Synthetic_Blocks_Aggregate;
  /** fetch data from the table: "synthetic_parcels" */
  synthetic_parcels: Array<Synthetic_Parcels>;
  /** fetch data from the table: "synthetic_parcels" using primary key columns */
  synthetic_parcels_by_pk?: Maybe<Synthetic_Parcels>;
  /** fetch data from the table: "vancouver_x_business_improvement_areas" */
  vancouver_x_business_improvement_areas: Array<Vancouver_X_Business_Improvement_Areas>;
  /** fetch aggregated fields from the table: "vancouver_x_business_improvement_areas" */
  vancouver_x_business_improvement_areas_aggregate: Vancouver_X_Business_Improvement_Areas_Aggregate;
  /** fetch data from the table: "vancouver_x_business_improvement_areas" using primary key columns */
  vancouver_x_business_improvement_areas_by_pk?: Maybe<Vancouver_X_Business_Improvement_Areas>;
  /** fetch data from the table: "vancouver_x_census_data_2016" */
  vancouver_x_census_data_2016: Array<Vancouver_X_Census_Data_2016>;
  /** fetch aggregated fields from the table: "vancouver_x_census_data_2016" */
  vancouver_x_census_data_2016_aggregate: Vancouver_X_Census_Data_2016_Aggregate;
  /** fetch data from the table: "vancouver_x_city_owned_properties" */
  vancouver_x_city_owned_properties: Array<Vancouver_X_City_Owned_Properties>;
  /** fetch aggregated fields from the table: "vancouver_x_city_owned_properties" */
  vancouver_x_city_owned_properties_aggregate: Vancouver_X_City_Owned_Properties_Aggregate;
  /** fetch data from the table: "vancouver_x_city_owned_properties" using primary key columns */
  vancouver_x_city_owned_properties_by_pk?: Maybe<Vancouver_X_City_Owned_Properties>;
  /** fetch data from the table: "vancouver_x_property_tax_blocks_data" */
  vancouver_x_property_tax_blocks_data: Array<Vancouver_X_Property_Tax_Blocks_Data>;
  /** fetch aggregated fields from the table: "vancouver_x_property_tax_blocks_data" */
  vancouver_x_property_tax_blocks_data_aggregate: Vancouver_X_Property_Tax_Blocks_Data_Aggregate;
  /** fetch data from the table: "vancouver_x_property_tax_blocks_geom" */
  vancouver_x_property_tax_blocks_geom: Array<Vancouver_X_Property_Tax_Blocks_Geom>;
  /** fetch aggregated fields from the table: "vancouver_x_property_tax_blocks_geom" */
  vancouver_x_property_tax_blocks_geom_aggregate: Vancouver_X_Property_Tax_Blocks_Geom_Aggregate;
  /** fetch data from the table: "vancouver_x_property_tax_blocks_geom" using primary key columns */
  vancouver_x_property_tax_blocks_geom_by_pk?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom>;
  /** fetch data from the table: "vancouver_x_property_tax_parcels_data" */
  vancouver_x_property_tax_parcels_data: Array<Vancouver_X_Property_Tax_Parcels_Data>;
  /** fetch aggregated fields from the table: "vancouver_x_property_tax_parcels_data" */
  vancouver_x_property_tax_parcels_data_aggregate: Vancouver_X_Property_Tax_Parcels_Data_Aggregate;
  /** fetch data from the table: "vancouver_x_property_tax_parcels_geom" */
  vancouver_x_property_tax_parcels_geom: Array<Vancouver_X_Property_Tax_Parcels_Geom>;
  /** fetch aggregated fields from the table: "vancouver_x_property_tax_parcels_geom" */
  vancouver_x_property_tax_parcels_geom_aggregate: Vancouver_X_Property_Tax_Parcels_Geom_Aggregate;
  /** fetch data from the table: "vancouver_x_property_tax_parcels_geom" using primary key columns */
  vancouver_x_property_tax_parcels_geom_by_pk?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom>;
  /** fetch data from the table: "vancouver_x_zoning_districts_and_labels" */
  vancouver_x_zoning_districts_and_labels: Array<Vancouver_X_Zoning_Districts_And_Labels>;
  /** fetch aggregated fields from the table: "vancouver_x_zoning_districts_and_labels" */
  vancouver_x_zoning_districts_and_labels_aggregate: Vancouver_X_Zoning_Districts_And_Labels_Aggregate;
  /** fetch data from the table: "vancouver_x_zoning_districts_and_labels" using primary key columns */
  vancouver_x_zoning_districts_and_labels_by_pk?: Maybe<Vancouver_X_Zoning_Districts_And_Labels>;
};


/** subscription root */
export type Subscription_RootBurnaby_X_Community_PlanArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Community_Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Community_Plan_Order_By>>;
  where?: Maybe<Burnaby_X_Community_Plan_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBurnaby_X_Community_Plan_AggregateArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Community_Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Community_Plan_Order_By>>;
  where?: Maybe<Burnaby_X_Community_Plan_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBurnaby_X_Community_Plan_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBurnaby_X_ParcelsArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Parcels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Parcels_Order_By>>;
  where?: Maybe<Burnaby_X_Parcels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBurnaby_X_Parcels_AggregateArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Parcels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Parcels_Order_By>>;
  where?: Maybe<Burnaby_X_Parcels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBurnaby_X_Parcels_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootBurnaby_X_ZoningArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Zoning_Order_By>>;
  where?: Maybe<Burnaby_X_Zoning_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBurnaby_X_Zoning_AggregateArgs = {
  distinct_on?: Maybe<Array<Burnaby_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Burnaby_X_Zoning_Order_By>>;
  where?: Maybe<Burnaby_X_Zoning_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBurnaby_X_Zoning_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootDevelopment_TilesArgs = {
  distinct_on?: Maybe<Array<Development_Tiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Development_Tiles_Order_By>>;
  where?: Maybe<Development_Tiles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootDevelopment_Tiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Development_Tiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Development_Tiles_Order_By>>;
  where?: Maybe<Development_Tiles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGet_TilesArgs = {
  args: Get_Tiles_Args;
  distinct_on?: Maybe<Array<Development_Tiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Development_Tiles_Order_By>>;
  where?: Maybe<Development_Tiles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootGet_Tiles_AggregateArgs = {
  args: Get_Tiles_Args;
  distinct_on?: Maybe<Array<Development_Tiles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Development_Tiles_Order_By>>;
  where?: Maybe<Development_Tiles_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIncomesArgs = {
  distinct_on?: Maybe<Array<Incomes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Incomes_Order_By>>;
  where?: Maybe<Incomes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootIncomes_AggregateArgs = {
  distinct_on?: Maybe<Array<Incomes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Incomes_Order_By>>;
  where?: Maybe<Incomes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNew_York_X_Pumas_DataArgs = {
  distinct_on?: Maybe<Array<New_York_X_Pumas_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<New_York_X_Pumas_Data_Order_By>>;
  where?: Maybe<New_York_X_Pumas_Data_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNew_York_X_Pumas_Data_AggregateArgs = {
  distinct_on?: Maybe<Array<New_York_X_Pumas_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<New_York_X_Pumas_Data_Order_By>>;
  where?: Maybe<New_York_X_Pumas_Data_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Buildings_2003Args = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Buildings_2003_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Buildings_2003_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Buildings_2003_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Buildings_2003_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Buildings_2003_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Buildings_2003_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Buildings_2003_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Buildings_2003_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Community_PlanArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Community_Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Community_Plan_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Community_Plan_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Community_Plan_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Community_Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Community_Plan_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Community_Plan_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Community_Plan_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Land_LotsArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Land_Lots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Land_Lots_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Land_Lots_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Land_Lots_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Land_Lots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Land_Lots_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Land_Lots_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Land_Lots_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_NeighborhoodsArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Neighborhoods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Neighborhoods_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Neighborhoods_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Neighborhoods_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Neighborhoods_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Neighborhoods_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Neighborhoods_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Neighborhoods_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_ParcelsArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Parcels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Parcels_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Parcels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Parcels_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Parcels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Parcels_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Parcels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Parcels_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_ZoningArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Zoning_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Zoning_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Zoning_AggregateArgs = {
  distinct_on?: Maybe<Array<North_Vancouver_District_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<North_Vancouver_District_X_Zoning_Order_By>>;
  where?: Maybe<North_Vancouver_District_X_Zoning_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootNorth_Vancouver_District_X_Zoning_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootPrices_HistoricalArgs = {
  distinct_on?: Maybe<Array<Prices_Historical_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prices_Historical_Order_By>>;
  where?: Maybe<Prices_Historical_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPrices_Historical_AggregateArgs = {
  distinct_on?: Maybe<Array<Prices_Historical_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prices_Historical_Order_By>>;
  where?: Maybe<Prices_Historical_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_NumbeoArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Numbeo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Numbeo_Order_By>>;
  where?: Maybe<Proprietary_X_Numbeo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_Numbeo_AggregateArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Numbeo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Numbeo_Order_By>>;
  where?: Maybe<Proprietary_X_Numbeo_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_Numbeo_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProprietary_X_Padmapper_Rent_2021Args = {
  distinct_on?: Maybe<Array<Proprietary_X_Padmapper_Rent_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Padmapper_Rent_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Padmapper_Rent_2021_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_Padmapper_Rent_2021_AggregateArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Padmapper_Rent_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Padmapper_Rent_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Padmapper_Rent_2021_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_Padmapper_Rent_2021_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProprietary_X_Zillow_On_Sale_2021Args = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_On_Sale_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_On_Sale_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_Zillow_On_Sale_2021_AggregateArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_On_Sale_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_On_Sale_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_On_Sale_2021_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_Zillow_On_Sale_2021_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProprietary_X_Zillow_Rent_2021Args = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_Rent_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_Rent_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_Rent_2021_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_Zillow_Rent_2021_AggregateArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_Rent_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_Rent_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_Rent_2021_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_Zillow_Rent_2021_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootProprietary_X_Zillow_Sold_2021Args = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_Sold_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_Sold_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_Sold_2021_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_Zillow_Sold_2021_AggregateArgs = {
  distinct_on?: Maybe<Array<Proprietary_X_Zillow_Sold_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Proprietary_X_Zillow_Sold_2021_Order_By>>;
  where?: Maybe<Proprietary_X_Zillow_Sold_2021_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProprietary_X_Zillow_Sold_2021_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRegional_X_Indigenous_TerritoriesArgs = {
  distinct_on?: Maybe<Array<Regional_X_Indigenous_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Indigenous_Territories_Order_By>>;
  where?: Maybe<Regional_X_Indigenous_Territories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegional_X_Indigenous_Territories_AggregateArgs = {
  distinct_on?: Maybe<Array<Regional_X_Indigenous_Territories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Indigenous_Territories_Order_By>>;
  where?: Maybe<Regional_X_Indigenous_Territories_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegional_X_Rebgv_2020Args = {
  distinct_on?: Maybe<Array<Regional_X_Rebgv_2020_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Rebgv_2020_Order_By>>;
  where?: Maybe<Regional_X_Rebgv_2020_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegional_X_Rebgv_2020_AggregateArgs = {
  distinct_on?: Maybe<Array<Regional_X_Rebgv_2020_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Rebgv_2020_Order_By>>;
  where?: Maybe<Regional_X_Rebgv_2020_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegional_X_Rebgv_2020_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRegional_X_Rent_Vs_Ownership_2015Args = {
  distinct_on?: Maybe<Array<Regional_X_Rent_Vs_Ownership_2015_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Rent_Vs_Ownership_2015_Order_By>>;
  where?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegional_X_Rent_Vs_Ownership_2015_AggregateArgs = {
  distinct_on?: Maybe<Array<Regional_X_Rent_Vs_Ownership_2015_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Rent_Vs_Ownership_2015_Order_By>>;
  where?: Maybe<Regional_X_Rent_Vs_Ownership_2015_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegional_X_Rent_Vs_Ownership_2015_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRegional_X_Shelter_SpendingArgs = {
  distinct_on?: Maybe<Array<Regional_X_Shelter_Spending_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Shelter_Spending_Order_By>>;
  where?: Maybe<Regional_X_Shelter_Spending_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegional_X_Shelter_Spending_AggregateArgs = {
  distinct_on?: Maybe<Array<Regional_X_Shelter_Spending_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Shelter_Spending_Order_By>>;
  where?: Maybe<Regional_X_Shelter_Spending_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegional_X_Shelter_Spending_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRegional_X_ZoningArgs = {
  distinct_on?: Maybe<Array<Regional_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Zoning_Order_By>>;
  where?: Maybe<Regional_X_Zoning_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegional_X_Zoning_AggregateArgs = {
  distinct_on?: Maybe<Array<Regional_X_Zoning_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Regional_X_Zoning_Order_By>>;
  where?: Maybe<Regional_X_Zoning_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRegional_X_Zoning_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRents_HistoricalArgs = {
  distinct_on?: Maybe<Array<Rents_Historical_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rents_Historical_Order_By>>;
  where?: Maybe<Rents_Historical_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRents_Historical_AggregateArgs = {
  distinct_on?: Maybe<Array<Rents_Historical_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rents_Historical_Order_By>>;
  where?: Maybe<Rents_Historical_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSurrey_X_Census_Tract_2016Args = {
  distinct_on?: Maybe<Array<Surrey_X_Census_Tract_2016_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Surrey_X_Census_Tract_2016_Order_By>>;
  where?: Maybe<Surrey_X_Census_Tract_2016_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSurrey_X_Census_Tract_2016_AggregateArgs = {
  distinct_on?: Maybe<Array<Surrey_X_Census_Tract_2016_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Surrey_X_Census_Tract_2016_Order_By>>;
  where?: Maybe<Surrey_X_Census_Tract_2016_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSurrey_X_Census_Tract_2016_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSurrey_X_Property_Listing_2021Args = {
  distinct_on?: Maybe<Array<Surrey_X_Property_Listing_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Surrey_X_Property_Listing_2021_Order_By>>;
  where?: Maybe<Surrey_X_Property_Listing_2021_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSurrey_X_Property_Listing_2021_AggregateArgs = {
  distinct_on?: Maybe<Array<Surrey_X_Property_Listing_2021_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Surrey_X_Property_Listing_2021_Order_By>>;
  where?: Maybe<Surrey_X_Property_Listing_2021_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSurrey_X_Property_Listing_2021_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSynthetic_BlocksArgs = {
  distinct_on?: Maybe<Array<Synthetic_Blocks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Synthetic_Blocks_Order_By>>;
  where?: Maybe<Synthetic_Blocks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSynthetic_Blocks_AggregateArgs = {
  distinct_on?: Maybe<Array<Synthetic_Blocks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Synthetic_Blocks_Order_By>>;
  where?: Maybe<Synthetic_Blocks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSynthetic_ParcelsArgs = {
  distinct_on?: Maybe<Array<Synthetic_Parcels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Synthetic_Parcels_Order_By>>;
  where?: Maybe<Synthetic_Parcels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSynthetic_Parcels_By_PkArgs = {
  index: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootVancouver_X_Business_Improvement_AreasArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Business_Improvement_Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Business_Improvement_Areas_Order_By>>;
  where?: Maybe<Vancouver_X_Business_Improvement_Areas_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Business_Improvement_Areas_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Business_Improvement_Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Business_Improvement_Areas_Order_By>>;
  where?: Maybe<Vancouver_X_Business_Improvement_Areas_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Business_Improvement_Areas_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootVancouver_X_Census_Data_2016Args = {
  distinct_on?: Maybe<Array<Vancouver_X_Census_Data_2016_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Census_Data_2016_Order_By>>;
  where?: Maybe<Vancouver_X_Census_Data_2016_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Census_Data_2016_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Census_Data_2016_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Census_Data_2016_Order_By>>;
  where?: Maybe<Vancouver_X_Census_Data_2016_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_City_Owned_PropertiesArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_City_Owned_Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_City_Owned_Properties_Order_By>>;
  where?: Maybe<Vancouver_X_City_Owned_Properties_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_City_Owned_Properties_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_City_Owned_Properties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_City_Owned_Properties_Order_By>>;
  where?: Maybe<Vancouver_X_City_Owned_Properties_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_City_Owned_Properties_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootVancouver_X_Property_Tax_Blocks_DataArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Data_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Property_Tax_Blocks_Data_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Data_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Property_Tax_Blocks_GeomArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Geom_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Geom_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Property_Tax_Blocks_Geom_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Geom_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Geom_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Property_Tax_Blocks_Geom_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootVancouver_X_Property_Tax_Parcels_DataArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Data_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Property_Tax_Parcels_Data_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Data_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Data_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Property_Tax_Parcels_GeomArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Geom_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Geom_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Property_Tax_Parcels_Geom_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Geom_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Geom_Order_By>>;
  where?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Property_Tax_Parcels_Geom_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootVancouver_X_Zoning_Districts_And_LabelsArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Zoning_Districts_And_Labels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Zoning_Districts_And_Labels_Order_By>>;
  where?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Zoning_Districts_And_Labels_AggregateArgs = {
  distinct_on?: Maybe<Array<Vancouver_X_Zoning_Districts_And_Labels_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Vancouver_X_Zoning_Districts_And_Labels_Order_By>>;
  where?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootVancouver_X_Zoning_Districts_And_Labels_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016 = {
  _object_id?: Maybe<Scalars['numeric']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  income_med?: Maybe<Scalars['numeric']>;
  income_per?: Maybe<Scalars['numeric']>;
  income_wit?: Maybe<Scalars['numeric']>;
  o_id?: Maybe<Scalars['bigint']>;
  total_population?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Aggregate = {
  aggregate?: Maybe<Surrey_X_Census_Tract_2016_Aggregate_Fields>;
  nodes: Array<Surrey_X_Census_Tract_2016>;
};

/** aggregate fields of "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Aggregate_Fields = {
  avg?: Maybe<Surrey_X_Census_Tract_2016_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Surrey_X_Census_Tract_2016_Max_Fields>;
  min?: Maybe<Surrey_X_Census_Tract_2016_Min_Fields>;
  stddev?: Maybe<Surrey_X_Census_Tract_2016_Stddev_Fields>;
  stddev_pop?: Maybe<Surrey_X_Census_Tract_2016_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Surrey_X_Census_Tract_2016_Stddev_Samp_Fields>;
  sum?: Maybe<Surrey_X_Census_Tract_2016_Sum_Fields>;
  var_pop?: Maybe<Surrey_X_Census_Tract_2016_Var_Pop_Fields>;
  var_samp?: Maybe<Surrey_X_Census_Tract_2016_Var_Samp_Fields>;
  variance?: Maybe<Surrey_X_Census_Tract_2016_Variance_Fields>;
};


/** aggregate fields of "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Surrey_X_Census_Tract_2016_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Aggregate_Order_By = {
  avg?: Maybe<Surrey_X_Census_Tract_2016_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Surrey_X_Census_Tract_2016_Max_Order_By>;
  min?: Maybe<Surrey_X_Census_Tract_2016_Min_Order_By>;
  stddev?: Maybe<Surrey_X_Census_Tract_2016_Stddev_Order_By>;
  stddev_pop?: Maybe<Surrey_X_Census_Tract_2016_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Surrey_X_Census_Tract_2016_Stddev_Samp_Order_By>;
  sum?: Maybe<Surrey_X_Census_Tract_2016_Sum_Order_By>;
  var_pop?: Maybe<Surrey_X_Census_Tract_2016_Var_Pop_Order_By>;
  var_samp?: Maybe<Surrey_X_Census_Tract_2016_Var_Samp_Order_By>;
  variance?: Maybe<Surrey_X_Census_Tract_2016_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Surrey_X_Census_Tract_2016_Avg_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  income_med?: Maybe<Scalars['Float']>;
  income_per?: Maybe<Scalars['Float']>;
  income_wit?: Maybe<Scalars['Float']>;
  o_id?: Maybe<Scalars['Float']>;
  total_population?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Avg_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "surrey_x_census_tract_2016". All fields are combined with a logical 'AND'. */
export type Surrey_X_Census_Tract_2016_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Surrey_X_Census_Tract_2016_Bool_Exp>>>;
  _not?: Maybe<Surrey_X_Census_Tract_2016_Bool_Exp>;
  _object_id?: Maybe<Numeric_Comparison_Exp>;
  _or?: Maybe<Array<Maybe<Surrey_X_Census_Tract_2016_Bool_Exp>>>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  income_med?: Maybe<Numeric_Comparison_Exp>;
  income_per?: Maybe<Numeric_Comparison_Exp>;
  income_wit?: Maybe<Numeric_Comparison_Exp>;
  o_id?: Maybe<Bigint_Comparison_Exp>;
  total_population?: Maybe<Numeric_Comparison_Exp>;
};

/** aggregate max on columns */
export type Surrey_X_Census_Tract_2016_Max_Fields = {
  _object_id?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  income_med?: Maybe<Scalars['numeric']>;
  income_per?: Maybe<Scalars['numeric']>;
  income_wit?: Maybe<Scalars['numeric']>;
  o_id?: Maybe<Scalars['bigint']>;
  total_population?: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Max_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Surrey_X_Census_Tract_2016_Min_Fields = {
  _object_id?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  income_med?: Maybe<Scalars['numeric']>;
  income_per?: Maybe<Scalars['numeric']>;
  income_wit?: Maybe<Scalars['numeric']>;
  o_id?: Maybe<Scalars['bigint']>;
  total_population?: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Min_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** ordering options when selecting data from "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Order_By = {
  _object_id?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** primary key columns input for table: "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "surrey_x_census_tract_2016" */
export enum Surrey_X_Census_Tract_2016_Select_Column {
  /** column name */
  ObjectId = '_object_id',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  IncomeMed = 'income_med',
  /** column name */
  IncomePer = 'income_per',
  /** column name */
  IncomeWit = 'income_wit',
  /** column name */
  OId = 'o_id',
  /** column name */
  TotalPopulation = 'total_population'
}

/** aggregate stddev on columns */
export type Surrey_X_Census_Tract_2016_Stddev_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  income_med?: Maybe<Scalars['Float']>;
  income_per?: Maybe<Scalars['Float']>;
  income_wit?: Maybe<Scalars['Float']>;
  o_id?: Maybe<Scalars['Float']>;
  total_population?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Stddev_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Surrey_X_Census_Tract_2016_Stddev_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  income_med?: Maybe<Scalars['Float']>;
  income_per?: Maybe<Scalars['Float']>;
  income_wit?: Maybe<Scalars['Float']>;
  o_id?: Maybe<Scalars['Float']>;
  total_population?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Stddev_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Surrey_X_Census_Tract_2016_Stddev_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  income_med?: Maybe<Scalars['Float']>;
  income_per?: Maybe<Scalars['Float']>;
  income_wit?: Maybe<Scalars['Float']>;
  o_id?: Maybe<Scalars['Float']>;
  total_population?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Stddev_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Surrey_X_Census_Tract_2016_Sum_Fields = {
  _object_id?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  income_med?: Maybe<Scalars['numeric']>;
  income_per?: Maybe<Scalars['numeric']>;
  income_wit?: Maybe<Scalars['numeric']>;
  o_id?: Maybe<Scalars['bigint']>;
  total_population?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Sum_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Surrey_X_Census_Tract_2016_Var_Pop_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  income_med?: Maybe<Scalars['Float']>;
  income_per?: Maybe<Scalars['Float']>;
  income_wit?: Maybe<Scalars['Float']>;
  o_id?: Maybe<Scalars['Float']>;
  total_population?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Var_Pop_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Surrey_X_Census_Tract_2016_Var_Samp_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  income_med?: Maybe<Scalars['Float']>;
  income_per?: Maybe<Scalars['Float']>;
  income_wit?: Maybe<Scalars['Float']>;
  o_id?: Maybe<Scalars['Float']>;
  total_population?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Var_Samp_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Surrey_X_Census_Tract_2016_Variance_Fields = {
  _object_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  income_med?: Maybe<Scalars['Float']>;
  income_per?: Maybe<Scalars['Float']>;
  income_wit?: Maybe<Scalars['Float']>;
  o_id?: Maybe<Scalars['Float']>;
  total_population?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "surrey_x_census_tract_2016" */
export type Surrey_X_Census_Tract_2016_Variance_Order_By = {
  _object_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  income_med?: Maybe<Order_By>;
  income_per?: Maybe<Order_By>;
  income_wit?: Maybe<Order_By>;
  o_id?: Maybe<Order_By>;
  total_population?: Maybe<Order_By>;
};

/** columns and relationships of "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021 = {
  _house?: Maybe<Scalars['Int']>;
  _legal_description?: Maybe<Scalars['String']>;
  _lot?: Maybe<Scalars['String']>;
  _luc_text?: Maybe<Scalars['String']>;
  _mslink?: Maybe<Scalars['Int']>;
  _pid?: Maybe<Scalars['String']>;
  _plan_number?: Maybe<Scalars['String']>;
  _postal_code?: Maybe<Scalars['String']>;
  _street?: Maybe<Scalars['String']>;
  _unit?: Maybe<Scalars['String']>;
  _zone_bylaws?: Maybe<Scalars['String']>;
  gross_assessment?: Maybe<Scalars['Int']>;
  gross_improvements?: Maybe<Scalars['Int']>;
  gross_land?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  lot_size?: Maybe<Scalars['String']>;
  lot_type?: Maybe<Scalars['String']>;
  owner_type?: Maybe<Scalars['String']>;
  plan_type?: Maybe<Scalars['String']>;
  plan_year?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
  zone_description?: Maybe<Scalars['String']>;
};

/** aggregated selection of "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Aggregate = {
  aggregate?: Maybe<Surrey_X_Property_Listing_2021_Aggregate_Fields>;
  nodes: Array<Surrey_X_Property_Listing_2021>;
};

/** aggregate fields of "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Aggregate_Fields = {
  avg?: Maybe<Surrey_X_Property_Listing_2021_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Surrey_X_Property_Listing_2021_Max_Fields>;
  min?: Maybe<Surrey_X_Property_Listing_2021_Min_Fields>;
  stddev?: Maybe<Surrey_X_Property_Listing_2021_Stddev_Fields>;
  stddev_pop?: Maybe<Surrey_X_Property_Listing_2021_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Surrey_X_Property_Listing_2021_Stddev_Samp_Fields>;
  sum?: Maybe<Surrey_X_Property_Listing_2021_Sum_Fields>;
  var_pop?: Maybe<Surrey_X_Property_Listing_2021_Var_Pop_Fields>;
  var_samp?: Maybe<Surrey_X_Property_Listing_2021_Var_Samp_Fields>;
  variance?: Maybe<Surrey_X_Property_Listing_2021_Variance_Fields>;
};


/** aggregate fields of "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Surrey_X_Property_Listing_2021_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Aggregate_Order_By = {
  avg?: Maybe<Surrey_X_Property_Listing_2021_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Surrey_X_Property_Listing_2021_Max_Order_By>;
  min?: Maybe<Surrey_X_Property_Listing_2021_Min_Order_By>;
  stddev?: Maybe<Surrey_X_Property_Listing_2021_Stddev_Order_By>;
  stddev_pop?: Maybe<Surrey_X_Property_Listing_2021_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Surrey_X_Property_Listing_2021_Stddev_Samp_Order_By>;
  sum?: Maybe<Surrey_X_Property_Listing_2021_Sum_Order_By>;
  var_pop?: Maybe<Surrey_X_Property_Listing_2021_Var_Pop_Order_By>;
  var_samp?: Maybe<Surrey_X_Property_Listing_2021_Var_Samp_Order_By>;
  variance?: Maybe<Surrey_X_Property_Listing_2021_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Surrey_X_Property_Listing_2021_Avg_Fields = {
  _house?: Maybe<Scalars['Float']>;
  _mslink?: Maybe<Scalars['Float']>;
  gross_assessment?: Maybe<Scalars['Float']>;
  gross_improvements?: Maybe<Scalars['Float']>;
  gross_land?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  plan_year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Avg_Order_By = {
  _house?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "surrey_x_property_listing_2021". All fields are combined with a logical 'AND'. */
export type Surrey_X_Property_Listing_2021_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Surrey_X_Property_Listing_2021_Bool_Exp>>>;
  _house?: Maybe<Int_Comparison_Exp>;
  _legal_description?: Maybe<String_Comparison_Exp>;
  _lot?: Maybe<String_Comparison_Exp>;
  _luc_text?: Maybe<String_Comparison_Exp>;
  _mslink?: Maybe<Int_Comparison_Exp>;
  _not?: Maybe<Surrey_X_Property_Listing_2021_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Surrey_X_Property_Listing_2021_Bool_Exp>>>;
  _pid?: Maybe<String_Comparison_Exp>;
  _plan_number?: Maybe<String_Comparison_Exp>;
  _postal_code?: Maybe<String_Comparison_Exp>;
  _street?: Maybe<String_Comparison_Exp>;
  _unit?: Maybe<String_Comparison_Exp>;
  _zone_bylaws?: Maybe<String_Comparison_Exp>;
  gross_assessment?: Maybe<Int_Comparison_Exp>;
  gross_improvements?: Maybe<Int_Comparison_Exp>;
  gross_land?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lot_size?: Maybe<String_Comparison_Exp>;
  lot_type?: Maybe<String_Comparison_Exp>;
  owner_type?: Maybe<String_Comparison_Exp>;
  plan_type?: Maybe<String_Comparison_Exp>;
  plan_year?: Maybe<Int_Comparison_Exp>;
  zone?: Maybe<String_Comparison_Exp>;
  zone_description?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Surrey_X_Property_Listing_2021_Max_Fields = {
  _house?: Maybe<Scalars['Int']>;
  _legal_description?: Maybe<Scalars['String']>;
  _lot?: Maybe<Scalars['String']>;
  _luc_text?: Maybe<Scalars['String']>;
  _mslink?: Maybe<Scalars['Int']>;
  _pid?: Maybe<Scalars['String']>;
  _plan_number?: Maybe<Scalars['String']>;
  _postal_code?: Maybe<Scalars['String']>;
  _street?: Maybe<Scalars['String']>;
  _unit?: Maybe<Scalars['String']>;
  _zone_bylaws?: Maybe<Scalars['String']>;
  gross_assessment?: Maybe<Scalars['Int']>;
  gross_improvements?: Maybe<Scalars['Int']>;
  gross_land?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lot_size?: Maybe<Scalars['String']>;
  lot_type?: Maybe<Scalars['String']>;
  owner_type?: Maybe<Scalars['String']>;
  plan_type?: Maybe<Scalars['String']>;
  plan_year?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
  zone_description?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Max_Order_By = {
  _house?: Maybe<Order_By>;
  _legal_description?: Maybe<Order_By>;
  _lot?: Maybe<Order_By>;
  _luc_text?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  _pid?: Maybe<Order_By>;
  _plan_number?: Maybe<Order_By>;
  _postal_code?: Maybe<Order_By>;
  _street?: Maybe<Order_By>;
  _unit?: Maybe<Order_By>;
  _zone_bylaws?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lot_size?: Maybe<Order_By>;
  lot_type?: Maybe<Order_By>;
  owner_type?: Maybe<Order_By>;
  plan_type?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
  zone?: Maybe<Order_By>;
  zone_description?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Surrey_X_Property_Listing_2021_Min_Fields = {
  _house?: Maybe<Scalars['Int']>;
  _legal_description?: Maybe<Scalars['String']>;
  _lot?: Maybe<Scalars['String']>;
  _luc_text?: Maybe<Scalars['String']>;
  _mslink?: Maybe<Scalars['Int']>;
  _pid?: Maybe<Scalars['String']>;
  _plan_number?: Maybe<Scalars['String']>;
  _postal_code?: Maybe<Scalars['String']>;
  _street?: Maybe<Scalars['String']>;
  _unit?: Maybe<Scalars['String']>;
  _zone_bylaws?: Maybe<Scalars['String']>;
  gross_assessment?: Maybe<Scalars['Int']>;
  gross_improvements?: Maybe<Scalars['Int']>;
  gross_land?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lot_size?: Maybe<Scalars['String']>;
  lot_type?: Maybe<Scalars['String']>;
  owner_type?: Maybe<Scalars['String']>;
  plan_type?: Maybe<Scalars['String']>;
  plan_year?: Maybe<Scalars['Int']>;
  zone?: Maybe<Scalars['String']>;
  zone_description?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Min_Order_By = {
  _house?: Maybe<Order_By>;
  _legal_description?: Maybe<Order_By>;
  _lot?: Maybe<Order_By>;
  _luc_text?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  _pid?: Maybe<Order_By>;
  _plan_number?: Maybe<Order_By>;
  _postal_code?: Maybe<Order_By>;
  _street?: Maybe<Order_By>;
  _unit?: Maybe<Order_By>;
  _zone_bylaws?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lot_size?: Maybe<Order_By>;
  lot_type?: Maybe<Order_By>;
  owner_type?: Maybe<Order_By>;
  plan_type?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
  zone?: Maybe<Order_By>;
  zone_description?: Maybe<Order_By>;
};

/** ordering options when selecting data from "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Order_By = {
  _house?: Maybe<Order_By>;
  _legal_description?: Maybe<Order_By>;
  _lot?: Maybe<Order_By>;
  _luc_text?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  _pid?: Maybe<Order_By>;
  _plan_number?: Maybe<Order_By>;
  _postal_code?: Maybe<Order_By>;
  _street?: Maybe<Order_By>;
  _unit?: Maybe<Order_By>;
  _zone_bylaws?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lot_size?: Maybe<Order_By>;
  lot_type?: Maybe<Order_By>;
  owner_type?: Maybe<Order_By>;
  plan_type?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
  zone?: Maybe<Order_By>;
  zone_description?: Maybe<Order_By>;
};

/** primary key columns input for table: "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "surrey_x_property_listing_2021" */
export enum Surrey_X_Property_Listing_2021_Select_Column {
  /** column name */
  House = '_house',
  /** column name */
  LegalDescription = '_legal_description',
  /** column name */
  Lot = '_lot',
  /** column name */
  LucText = '_luc_text',
  /** column name */
  Mslink = '_mslink',
  /** column name */
  Pid = '_pid',
  /** column name */
  PlanNumber = '_plan_number',
  /** column name */
  PostalCode = '_postal_code',
  /** column name */
  Street = '_street',
  /** column name */
  Unit = '_unit',
  /** column name */
  ZoneBylaws = '_zone_bylaws',
  /** column name */
  GrossAssessment = 'gross_assessment',
  /** column name */
  GrossImprovements = 'gross_improvements',
  /** column name */
  GrossLand = 'gross_land',
  /** column name */
  Id = 'id',
  /** column name */
  LotSize = 'lot_size',
  /** column name */
  LotType = 'lot_type',
  /** column name */
  OwnerType = 'owner_type',
  /** column name */
  PlanType = 'plan_type',
  /** column name */
  PlanYear = 'plan_year',
  /** column name */
  Zone = 'zone',
  /** column name */
  ZoneDescription = 'zone_description'
}

/** aggregate stddev on columns */
export type Surrey_X_Property_Listing_2021_Stddev_Fields = {
  _house?: Maybe<Scalars['Float']>;
  _mslink?: Maybe<Scalars['Float']>;
  gross_assessment?: Maybe<Scalars['Float']>;
  gross_improvements?: Maybe<Scalars['Float']>;
  gross_land?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  plan_year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Stddev_Order_By = {
  _house?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Surrey_X_Property_Listing_2021_Stddev_Pop_Fields = {
  _house?: Maybe<Scalars['Float']>;
  _mslink?: Maybe<Scalars['Float']>;
  gross_assessment?: Maybe<Scalars['Float']>;
  gross_improvements?: Maybe<Scalars['Float']>;
  gross_land?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  plan_year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Stddev_Pop_Order_By = {
  _house?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Surrey_X_Property_Listing_2021_Stddev_Samp_Fields = {
  _house?: Maybe<Scalars['Float']>;
  _mslink?: Maybe<Scalars['Float']>;
  gross_assessment?: Maybe<Scalars['Float']>;
  gross_improvements?: Maybe<Scalars['Float']>;
  gross_land?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  plan_year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Stddev_Samp_Order_By = {
  _house?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Surrey_X_Property_Listing_2021_Sum_Fields = {
  _house?: Maybe<Scalars['Int']>;
  _mslink?: Maybe<Scalars['Int']>;
  gross_assessment?: Maybe<Scalars['Int']>;
  gross_improvements?: Maybe<Scalars['Int']>;
  gross_land?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  plan_year?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Sum_Order_By = {
  _house?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Surrey_X_Property_Listing_2021_Var_Pop_Fields = {
  _house?: Maybe<Scalars['Float']>;
  _mslink?: Maybe<Scalars['Float']>;
  gross_assessment?: Maybe<Scalars['Float']>;
  gross_improvements?: Maybe<Scalars['Float']>;
  gross_land?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  plan_year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Var_Pop_Order_By = {
  _house?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Surrey_X_Property_Listing_2021_Var_Samp_Fields = {
  _house?: Maybe<Scalars['Float']>;
  _mslink?: Maybe<Scalars['Float']>;
  gross_assessment?: Maybe<Scalars['Float']>;
  gross_improvements?: Maybe<Scalars['Float']>;
  gross_land?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  plan_year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Var_Samp_Order_By = {
  _house?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Surrey_X_Property_Listing_2021_Variance_Fields = {
  _house?: Maybe<Scalars['Float']>;
  _mslink?: Maybe<Scalars['Float']>;
  gross_assessment?: Maybe<Scalars['Float']>;
  gross_improvements?: Maybe<Scalars['Float']>;
  gross_land?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  plan_year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "surrey_x_property_listing_2021" */
export type Surrey_X_Property_Listing_2021_Variance_Order_By = {
  _house?: Maybe<Order_By>;
  _mslink?: Maybe<Order_By>;
  gross_assessment?: Maybe<Order_By>;
  gross_improvements?: Maybe<Order_By>;
  gross_land?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  plan_year?: Maybe<Order_By>;
};

/** columns and relationships of "synthetic_blocks" */
export type Synthetic_Blocks = {
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  rent?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** aggregated selection of "synthetic_blocks" */
export type Synthetic_Blocks_Aggregate = {
  aggregate?: Maybe<Synthetic_Blocks_Aggregate_Fields>;
  nodes: Array<Synthetic_Blocks>;
};

/** aggregate fields of "synthetic_blocks" */
export type Synthetic_Blocks_Aggregate_Fields = {
  avg?: Maybe<Synthetic_Blocks_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Synthetic_Blocks_Max_Fields>;
  min?: Maybe<Synthetic_Blocks_Min_Fields>;
  stddev?: Maybe<Synthetic_Blocks_Stddev_Fields>;
  stddev_pop?: Maybe<Synthetic_Blocks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Synthetic_Blocks_Stddev_Samp_Fields>;
  sum?: Maybe<Synthetic_Blocks_Sum_Fields>;
  var_pop?: Maybe<Synthetic_Blocks_Var_Pop_Fields>;
  var_samp?: Maybe<Synthetic_Blocks_Var_Samp_Fields>;
  variance?: Maybe<Synthetic_Blocks_Variance_Fields>;
};


/** aggregate fields of "synthetic_blocks" */
export type Synthetic_Blocks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Synthetic_Blocks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "synthetic_blocks" */
export type Synthetic_Blocks_Aggregate_Order_By = {
  avg?: Maybe<Synthetic_Blocks_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Synthetic_Blocks_Max_Order_By>;
  min?: Maybe<Synthetic_Blocks_Min_Order_By>;
  stddev?: Maybe<Synthetic_Blocks_Stddev_Order_By>;
  stddev_pop?: Maybe<Synthetic_Blocks_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Synthetic_Blocks_Stddev_Samp_Order_By>;
  sum?: Maybe<Synthetic_Blocks_Sum_Order_By>;
  var_pop?: Maybe<Synthetic_Blocks_Var_Pop_Order_By>;
  var_samp?: Maybe<Synthetic_Blocks_Var_Samp_Order_By>;
  variance?: Maybe<Synthetic_Blocks_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Synthetic_Blocks_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rent?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "synthetic_blocks" */
export type Synthetic_Blocks_Avg_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "synthetic_blocks". All fields are combined with a logical 'AND'. */
export type Synthetic_Blocks_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Synthetic_Blocks_Bool_Exp>>>;
  _not?: Maybe<Synthetic_Blocks_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Synthetic_Blocks_Bool_Exp>>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Float8_Comparison_Exp>;
  rent?: Maybe<Float8_Comparison_Exp>;
  year?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Synthetic_Blocks_Max_Fields = {
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  rent?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "synthetic_blocks" */
export type Synthetic_Blocks_Max_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Synthetic_Blocks_Min_Fields = {
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  rent?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "synthetic_blocks" */
export type Synthetic_Blocks_Min_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** ordering options when selecting data from "synthetic_blocks" */
export type Synthetic_Blocks_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** select columns of table "synthetic_blocks" */
export enum Synthetic_Blocks_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  Rent = 'rent',
  /** column name */
  Year = 'year'
}

/** aggregate stddev on columns */
export type Synthetic_Blocks_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rent?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "synthetic_blocks" */
export type Synthetic_Blocks_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Synthetic_Blocks_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rent?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "synthetic_blocks" */
export type Synthetic_Blocks_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Synthetic_Blocks_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rent?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "synthetic_blocks" */
export type Synthetic_Blocks_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Synthetic_Blocks_Sum_Fields = {
  id?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['float8']>;
  rent?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "synthetic_blocks" */
export type Synthetic_Blocks_Sum_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Synthetic_Blocks_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rent?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "synthetic_blocks" */
export type Synthetic_Blocks_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Synthetic_Blocks_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rent?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "synthetic_blocks" */
export type Synthetic_Blocks_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Synthetic_Blocks_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rent?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "synthetic_blocks" */
export type Synthetic_Blocks_Variance_Order_By = {
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** columns and relationships of "synthetic_parcels" */
export type Synthetic_Parcels = {
  id?: Maybe<Scalars['bigint']>;
  imp?: Maybe<Scalars['float8']>;
  imp_pm?: Maybe<Scalars['float8']>;
  index: Scalars['bigint'];
  lnd?: Maybe<Scalars['float8']>;
  lnd_pm?: Maybe<Scalars['float8']>;
  lvy?: Maybe<Scalars['float8']>;
  lvy_pm?: Maybe<Scalars['float8']>;
  norm?: Maybe<Scalars['float8']>;
  price?: Maybe<Scalars['float8']>;
  price_average?: Maybe<Scalars['float8']>;
  price_max?: Maybe<Scalars['float8']>;
  price_min?: Maybe<Scalars['float8']>;
  rent?: Maybe<Scalars['float8']>;
  rent_average?: Maybe<Scalars['bigint']>;
  rent_max?: Maybe<Scalars['float8']>;
  rent_min?: Maybe<Scalars['float8']>;
  tot?: Maybe<Scalars['float8']>;
  tot_max_pm?: Maybe<Scalars['float8']>;
  tot_min_pm?: Maybe<Scalars['float8']>;
  tot_pm?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
  zone_category?: Maybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "synthetic_parcels". All fields are combined with a logical 'AND'. */
export type Synthetic_Parcels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Synthetic_Parcels_Bool_Exp>>>;
  _not?: Maybe<Synthetic_Parcels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Synthetic_Parcels_Bool_Exp>>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  imp?: Maybe<Float8_Comparison_Exp>;
  imp_pm?: Maybe<Float8_Comparison_Exp>;
  index?: Maybe<Bigint_Comparison_Exp>;
  lnd?: Maybe<Float8_Comparison_Exp>;
  lnd_pm?: Maybe<Float8_Comparison_Exp>;
  lvy?: Maybe<Float8_Comparison_Exp>;
  lvy_pm?: Maybe<Float8_Comparison_Exp>;
  norm?: Maybe<Float8_Comparison_Exp>;
  price?: Maybe<Float8_Comparison_Exp>;
  price_average?: Maybe<Float8_Comparison_Exp>;
  price_max?: Maybe<Float8_Comparison_Exp>;
  price_min?: Maybe<Float8_Comparison_Exp>;
  rent?: Maybe<Float8_Comparison_Exp>;
  rent_average?: Maybe<Bigint_Comparison_Exp>;
  rent_max?: Maybe<Float8_Comparison_Exp>;
  rent_min?: Maybe<Float8_Comparison_Exp>;
  tot?: Maybe<Float8_Comparison_Exp>;
  tot_max_pm?: Maybe<Float8_Comparison_Exp>;
  tot_min_pm?: Maybe<Float8_Comparison_Exp>;
  tot_pm?: Maybe<Float8_Comparison_Exp>;
  year?: Maybe<Bigint_Comparison_Exp>;
  zone_category?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "synthetic_parcels" */
export type Synthetic_Parcels_Order_By = {
  id?: Maybe<Order_By>;
  imp?: Maybe<Order_By>;
  imp_pm?: Maybe<Order_By>;
  index?: Maybe<Order_By>;
  lnd?: Maybe<Order_By>;
  lnd_pm?: Maybe<Order_By>;
  lvy?: Maybe<Order_By>;
  lvy_pm?: Maybe<Order_By>;
  norm?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  price_average?: Maybe<Order_By>;
  price_max?: Maybe<Order_By>;
  price_min?: Maybe<Order_By>;
  rent?: Maybe<Order_By>;
  rent_average?: Maybe<Order_By>;
  rent_max?: Maybe<Order_By>;
  rent_min?: Maybe<Order_By>;
  tot?: Maybe<Order_By>;
  tot_max_pm?: Maybe<Order_By>;
  tot_min_pm?: Maybe<Order_By>;
  tot_pm?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  zone_category?: Maybe<Order_By>;
};

/** primary key columns input for table: "synthetic_parcels" */
export type Synthetic_Parcels_Pk_Columns_Input = {
  index: Scalars['bigint'];
};

/** select columns of table "synthetic_parcels" */
export enum Synthetic_Parcels_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Imp = 'imp',
  /** column name */
  ImpPm = 'imp_pm',
  /** column name */
  Index = 'index',
  /** column name */
  Lnd = 'lnd',
  /** column name */
  LndPm = 'lnd_pm',
  /** column name */
  Lvy = 'lvy',
  /** column name */
  LvyPm = 'lvy_pm',
  /** column name */
  Norm = 'norm',
  /** column name */
  Price = 'price',
  /** column name */
  PriceAverage = 'price_average',
  /** column name */
  PriceMax = 'price_max',
  /** column name */
  PriceMin = 'price_min',
  /** column name */
  Rent = 'rent',
  /** column name */
  RentAverage = 'rent_average',
  /** column name */
  RentMax = 'rent_max',
  /** column name */
  RentMin = 'rent_min',
  /** column name */
  Tot = 'tot',
  /** column name */
  TotMaxPm = 'tot_max_pm',
  /** column name */
  TotMinPm = 'tot_min_pm',
  /** column name */
  TotPm = 'tot_pm',
  /** column name */
  Year = 'year',
  /** column name */
  ZoneCategory = 'zone_category'
}

/** columns and relationships of "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas = {
  _map_id?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
};

/** aggregated selection of "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Aggregate = {
  aggregate?: Maybe<Vancouver_X_Business_Improvement_Areas_Aggregate_Fields>;
  nodes: Array<Vancouver_X_Business_Improvement_Areas>;
};

/** aggregate fields of "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Aggregate_Fields = {
  avg?: Maybe<Vancouver_X_Business_Improvement_Areas_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vancouver_X_Business_Improvement_Areas_Max_Fields>;
  min?: Maybe<Vancouver_X_Business_Improvement_Areas_Min_Fields>;
  stddev?: Maybe<Vancouver_X_Business_Improvement_Areas_Stddev_Fields>;
  stddev_pop?: Maybe<Vancouver_X_Business_Improvement_Areas_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vancouver_X_Business_Improvement_Areas_Stddev_Samp_Fields>;
  sum?: Maybe<Vancouver_X_Business_Improvement_Areas_Sum_Fields>;
  var_pop?: Maybe<Vancouver_X_Business_Improvement_Areas_Var_Pop_Fields>;
  var_samp?: Maybe<Vancouver_X_Business_Improvement_Areas_Var_Samp_Fields>;
  variance?: Maybe<Vancouver_X_Business_Improvement_Areas_Variance_Fields>;
};


/** aggregate fields of "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vancouver_X_Business_Improvement_Areas_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Aggregate_Order_By = {
  avg?: Maybe<Vancouver_X_Business_Improvement_Areas_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vancouver_X_Business_Improvement_Areas_Max_Order_By>;
  min?: Maybe<Vancouver_X_Business_Improvement_Areas_Min_Order_By>;
  stddev?: Maybe<Vancouver_X_Business_Improvement_Areas_Stddev_Order_By>;
  stddev_pop?: Maybe<Vancouver_X_Business_Improvement_Areas_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vancouver_X_Business_Improvement_Areas_Stddev_Samp_Order_By>;
  sum?: Maybe<Vancouver_X_Business_Improvement_Areas_Sum_Order_By>;
  var_pop?: Maybe<Vancouver_X_Business_Improvement_Areas_Var_Pop_Order_By>;
  var_samp?: Maybe<Vancouver_X_Business_Improvement_Areas_Var_Samp_Order_By>;
  variance?: Maybe<Vancouver_X_Business_Improvement_Areas_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vancouver_X_Business_Improvement_Areas_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vancouver_x_business_improvement_areas". All fields are combined with a logical 'AND'. */
export type Vancouver_X_Business_Improvement_Areas_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vancouver_X_Business_Improvement_Areas_Bool_Exp>>>;
  _map_id?: Maybe<String_Comparison_Exp>;
  _name?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<Vancouver_X_Business_Improvement_Areas_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vancouver_X_Business_Improvement_Areas_Bool_Exp>>>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vancouver_X_Business_Improvement_Areas_Max_Fields = {
  _map_id?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Max_Order_By = {
  _map_id?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vancouver_X_Business_Improvement_Areas_Min_Fields = {
  _map_id?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Min_Order_By = {
  _map_id?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Order_By = {
  _map_id?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vancouver_x_business_improvement_areas" */
export enum Vancouver_X_Business_Improvement_Areas_Select_Column {
  /** column name */
  MapId = '_map_id',
  /** column name */
  Name = '_name',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Vancouver_X_Business_Improvement_Areas_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vancouver_X_Business_Improvement_Areas_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vancouver_X_Business_Improvement_Areas_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vancouver_X_Business_Improvement_Areas_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vancouver_X_Business_Improvement_Areas_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vancouver_X_Business_Improvement_Areas_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vancouver_X_Business_Improvement_Areas_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vancouver_x_business_improvement_areas" */
export type Vancouver_X_Business_Improvement_Areas_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016 = {
  _map_id?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  average_age_of_the_population?: Maybe<Scalars['float8']>;
  average_household_size?: Maybe<Scalars['float8']>;
  canadian_citizens?: Maybe<Scalars['bigint']>;
  employment_rate?: Maybe<Scalars['float8']>;
  external_migrants?: Maybe<Scalars['bigint']>;
  geom?: Maybe<Scalars['geometry']>;
  id?: Maybe<Scalars['Int']>;
  immigrants_total_number?: Maybe<Scalars['bigint']>;
  internal_migrants?: Maybe<Scalars['bigint']>;
  interprovincial_migrants?: Maybe<Scalars['bigint']>;
  intraprovincial_migrants?: Maybe<Scalars['bigint']>;
  migrants?: Maybe<Scalars['bigint']>;
  movers?: Maybe<Scalars['bigint']>;
  nonimmigrants_total_number?: Maybe<Scalars['bigint']>;
  nonmigrants?: Maybe<Scalars['bigint']>;
  nonmovers?: Maybe<Scalars['bigint']>;
  not_canadian_citizens?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['bigint']>;
  population_total?: Maybe<Scalars['bigint']>;
  total__income?: Maybe<Scalars['bigint']>;
  total_lowincome_status?: Maybe<Scalars['bigint']>;
  unemployment_rate?: Maybe<Scalars['float8']>;
};

/** aggregated selection of "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Aggregate = {
  aggregate?: Maybe<Vancouver_X_Census_Data_2016_Aggregate_Fields>;
  nodes: Array<Vancouver_X_Census_Data_2016>;
};

/** aggregate fields of "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Aggregate_Fields = {
  avg?: Maybe<Vancouver_X_Census_Data_2016_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vancouver_X_Census_Data_2016_Max_Fields>;
  min?: Maybe<Vancouver_X_Census_Data_2016_Min_Fields>;
  stddev?: Maybe<Vancouver_X_Census_Data_2016_Stddev_Fields>;
  stddev_pop?: Maybe<Vancouver_X_Census_Data_2016_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vancouver_X_Census_Data_2016_Stddev_Samp_Fields>;
  sum?: Maybe<Vancouver_X_Census_Data_2016_Sum_Fields>;
  var_pop?: Maybe<Vancouver_X_Census_Data_2016_Var_Pop_Fields>;
  var_samp?: Maybe<Vancouver_X_Census_Data_2016_Var_Samp_Fields>;
  variance?: Maybe<Vancouver_X_Census_Data_2016_Variance_Fields>;
};


/** aggregate fields of "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vancouver_X_Census_Data_2016_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Aggregate_Order_By = {
  avg?: Maybe<Vancouver_X_Census_Data_2016_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vancouver_X_Census_Data_2016_Max_Order_By>;
  min?: Maybe<Vancouver_X_Census_Data_2016_Min_Order_By>;
  stddev?: Maybe<Vancouver_X_Census_Data_2016_Stddev_Order_By>;
  stddev_pop?: Maybe<Vancouver_X_Census_Data_2016_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vancouver_X_Census_Data_2016_Stddev_Samp_Order_By>;
  sum?: Maybe<Vancouver_X_Census_Data_2016_Sum_Order_By>;
  var_pop?: Maybe<Vancouver_X_Census_Data_2016_Var_Pop_Order_By>;
  var_samp?: Maybe<Vancouver_X_Census_Data_2016_Var_Samp_Order_By>;
  variance?: Maybe<Vancouver_X_Census_Data_2016_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vancouver_X_Census_Data_2016_Avg_Fields = {
  average_age_of_the_population?: Maybe<Scalars['Float']>;
  average_household_size?: Maybe<Scalars['Float']>;
  canadian_citizens?: Maybe<Scalars['Float']>;
  employment_rate?: Maybe<Scalars['Float']>;
  external_migrants?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  immigrants_total_number?: Maybe<Scalars['Float']>;
  internal_migrants?: Maybe<Scalars['Float']>;
  interprovincial_migrants?: Maybe<Scalars['Float']>;
  intraprovincial_migrants?: Maybe<Scalars['Float']>;
  migrants?: Maybe<Scalars['Float']>;
  movers?: Maybe<Scalars['Float']>;
  nonimmigrants_total_number?: Maybe<Scalars['Float']>;
  nonmigrants?: Maybe<Scalars['Float']>;
  nonmovers?: Maybe<Scalars['Float']>;
  not_canadian_citizens?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['Float']>;
  population_total?: Maybe<Scalars['Float']>;
  total__income?: Maybe<Scalars['Float']>;
  total_lowincome_status?: Maybe<Scalars['Float']>;
  unemployment_rate?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Avg_Order_By = {
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vancouver_x_census_data_2016". All fields are combined with a logical 'AND'. */
export type Vancouver_X_Census_Data_2016_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vancouver_X_Census_Data_2016_Bool_Exp>>>;
  _map_id?: Maybe<String_Comparison_Exp>;
  _name?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<Vancouver_X_Census_Data_2016_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vancouver_X_Census_Data_2016_Bool_Exp>>>;
  average_age_of_the_population?: Maybe<Float8_Comparison_Exp>;
  average_household_size?: Maybe<Float8_Comparison_Exp>;
  canadian_citizens?: Maybe<Bigint_Comparison_Exp>;
  employment_rate?: Maybe<Float8_Comparison_Exp>;
  external_migrants?: Maybe<Bigint_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  immigrants_total_number?: Maybe<Bigint_Comparison_Exp>;
  internal_migrants?: Maybe<Bigint_Comparison_Exp>;
  interprovincial_migrants?: Maybe<Bigint_Comparison_Exp>;
  intraprovincial_migrants?: Maybe<Bigint_Comparison_Exp>;
  migrants?: Maybe<Bigint_Comparison_Exp>;
  movers?: Maybe<Bigint_Comparison_Exp>;
  nonimmigrants_total_number?: Maybe<Bigint_Comparison_Exp>;
  nonmigrants?: Maybe<Bigint_Comparison_Exp>;
  nonmovers?: Maybe<Bigint_Comparison_Exp>;
  not_canadian_citizens?: Maybe<Bigint_Comparison_Exp>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Bigint_Comparison_Exp>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Bigint_Comparison_Exp>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Bigint_Comparison_Exp>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Bigint_Comparison_Exp>;
  population_total?: Maybe<Bigint_Comparison_Exp>;
  total__income?: Maybe<Bigint_Comparison_Exp>;
  total_lowincome_status?: Maybe<Bigint_Comparison_Exp>;
  unemployment_rate?: Maybe<Float8_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vancouver_X_Census_Data_2016_Max_Fields = {
  _map_id?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  average_age_of_the_population?: Maybe<Scalars['float8']>;
  average_household_size?: Maybe<Scalars['float8']>;
  canadian_citizens?: Maybe<Scalars['bigint']>;
  employment_rate?: Maybe<Scalars['float8']>;
  external_migrants?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  immigrants_total_number?: Maybe<Scalars['bigint']>;
  internal_migrants?: Maybe<Scalars['bigint']>;
  interprovincial_migrants?: Maybe<Scalars['bigint']>;
  intraprovincial_migrants?: Maybe<Scalars['bigint']>;
  migrants?: Maybe<Scalars['bigint']>;
  movers?: Maybe<Scalars['bigint']>;
  nonimmigrants_total_number?: Maybe<Scalars['bigint']>;
  nonmigrants?: Maybe<Scalars['bigint']>;
  nonmovers?: Maybe<Scalars['bigint']>;
  not_canadian_citizens?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['bigint']>;
  population_total?: Maybe<Scalars['bigint']>;
  total__income?: Maybe<Scalars['bigint']>;
  total_lowincome_status?: Maybe<Scalars['bigint']>;
  unemployment_rate?: Maybe<Scalars['float8']>;
};

/** order by max() on columns of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Max_Order_By = {
  _map_id?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vancouver_X_Census_Data_2016_Min_Fields = {
  _map_id?: Maybe<Scalars['String']>;
  _name?: Maybe<Scalars['String']>;
  average_age_of_the_population?: Maybe<Scalars['float8']>;
  average_household_size?: Maybe<Scalars['float8']>;
  canadian_citizens?: Maybe<Scalars['bigint']>;
  employment_rate?: Maybe<Scalars['float8']>;
  external_migrants?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  immigrants_total_number?: Maybe<Scalars['bigint']>;
  internal_migrants?: Maybe<Scalars['bigint']>;
  interprovincial_migrants?: Maybe<Scalars['bigint']>;
  intraprovincial_migrants?: Maybe<Scalars['bigint']>;
  migrants?: Maybe<Scalars['bigint']>;
  movers?: Maybe<Scalars['bigint']>;
  nonimmigrants_total_number?: Maybe<Scalars['bigint']>;
  nonmigrants?: Maybe<Scalars['bigint']>;
  nonmovers?: Maybe<Scalars['bigint']>;
  not_canadian_citizens?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['bigint']>;
  population_total?: Maybe<Scalars['bigint']>;
  total__income?: Maybe<Scalars['bigint']>;
  total_lowincome_status?: Maybe<Scalars['bigint']>;
  unemployment_rate?: Maybe<Scalars['float8']>;
};

/** order by min() on columns of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Min_Order_By = {
  _map_id?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Order_By = {
  _map_id?: Maybe<Order_By>;
  _name?: Maybe<Order_By>;
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** select columns of table "vancouver_x_census_data_2016" */
export enum Vancouver_X_Census_Data_2016_Select_Column {
  /** column name */
  MapId = '_map_id',
  /** column name */
  Name = '_name',
  /** column name */
  AverageAgeOfThePopulation = 'average_age_of_the_population',
  /** column name */
  AverageHouseholdSize = 'average_household_size',
  /** column name */
  CanadianCitizens = 'canadian_citizens',
  /** column name */
  EmploymentRate = 'employment_rate',
  /** column name */
  ExternalMigrants = 'external_migrants',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  ImmigrantsTotalNumber = 'immigrants_total_number',
  /** column name */
  InternalMigrants = 'internal_migrants',
  /** column name */
  InterprovincialMigrants = 'interprovincial_migrants',
  /** column name */
  IntraprovincialMigrants = 'intraprovincial_migrants',
  /** column name */
  Migrants = 'migrants',
  /** column name */
  Movers = 'movers',
  /** column name */
  NonimmigrantsTotalNumber = 'nonimmigrants_total_number',
  /** column name */
  Nonmigrants = 'nonmigrants',
  /** column name */
  Nonmovers = 'nonmovers',
  /** column name */
  NotCanadianCitizens = 'not_canadian_citizens',
  /** column name */
  PlacesOfBirthForTheImmigrantsAfrica = 'places_of_birth_for_the_immigrants_africa',
  /** column name */
  PlacesOfBirthForTheImmigrantsAmericas = 'places_of_birth_for_the_immigrants_americas',
  /** column name */
  PlacesOfBirthForTheImmigrantsAsia = 'places_of_birth_for_the_immigrants_asia',
  /** column name */
  PlacesOfBirthForTheImmigrantsEurope = 'places_of_birth_for_the_immigrants_europe',
  /** column name */
  PopulationTotal = 'population_total',
  /** column name */
  TotalIncome = 'total__income',
  /** column name */
  TotalLowincomeStatus = 'total_lowincome_status',
  /** column name */
  UnemploymentRate = 'unemployment_rate'
}

/** aggregate stddev on columns */
export type Vancouver_X_Census_Data_2016_Stddev_Fields = {
  average_age_of_the_population?: Maybe<Scalars['Float']>;
  average_household_size?: Maybe<Scalars['Float']>;
  canadian_citizens?: Maybe<Scalars['Float']>;
  employment_rate?: Maybe<Scalars['Float']>;
  external_migrants?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  immigrants_total_number?: Maybe<Scalars['Float']>;
  internal_migrants?: Maybe<Scalars['Float']>;
  interprovincial_migrants?: Maybe<Scalars['Float']>;
  intraprovincial_migrants?: Maybe<Scalars['Float']>;
  migrants?: Maybe<Scalars['Float']>;
  movers?: Maybe<Scalars['Float']>;
  nonimmigrants_total_number?: Maybe<Scalars['Float']>;
  nonmigrants?: Maybe<Scalars['Float']>;
  nonmovers?: Maybe<Scalars['Float']>;
  not_canadian_citizens?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['Float']>;
  population_total?: Maybe<Scalars['Float']>;
  total__income?: Maybe<Scalars['Float']>;
  total_lowincome_status?: Maybe<Scalars['Float']>;
  unemployment_rate?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Stddev_Order_By = {
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vancouver_X_Census_Data_2016_Stddev_Pop_Fields = {
  average_age_of_the_population?: Maybe<Scalars['Float']>;
  average_household_size?: Maybe<Scalars['Float']>;
  canadian_citizens?: Maybe<Scalars['Float']>;
  employment_rate?: Maybe<Scalars['Float']>;
  external_migrants?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  immigrants_total_number?: Maybe<Scalars['Float']>;
  internal_migrants?: Maybe<Scalars['Float']>;
  interprovincial_migrants?: Maybe<Scalars['Float']>;
  intraprovincial_migrants?: Maybe<Scalars['Float']>;
  migrants?: Maybe<Scalars['Float']>;
  movers?: Maybe<Scalars['Float']>;
  nonimmigrants_total_number?: Maybe<Scalars['Float']>;
  nonmigrants?: Maybe<Scalars['Float']>;
  nonmovers?: Maybe<Scalars['Float']>;
  not_canadian_citizens?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['Float']>;
  population_total?: Maybe<Scalars['Float']>;
  total__income?: Maybe<Scalars['Float']>;
  total_lowincome_status?: Maybe<Scalars['Float']>;
  unemployment_rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Stddev_Pop_Order_By = {
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vancouver_X_Census_Data_2016_Stddev_Samp_Fields = {
  average_age_of_the_population?: Maybe<Scalars['Float']>;
  average_household_size?: Maybe<Scalars['Float']>;
  canadian_citizens?: Maybe<Scalars['Float']>;
  employment_rate?: Maybe<Scalars['Float']>;
  external_migrants?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  immigrants_total_number?: Maybe<Scalars['Float']>;
  internal_migrants?: Maybe<Scalars['Float']>;
  interprovincial_migrants?: Maybe<Scalars['Float']>;
  intraprovincial_migrants?: Maybe<Scalars['Float']>;
  migrants?: Maybe<Scalars['Float']>;
  movers?: Maybe<Scalars['Float']>;
  nonimmigrants_total_number?: Maybe<Scalars['Float']>;
  nonmigrants?: Maybe<Scalars['Float']>;
  nonmovers?: Maybe<Scalars['Float']>;
  not_canadian_citizens?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['Float']>;
  population_total?: Maybe<Scalars['Float']>;
  total__income?: Maybe<Scalars['Float']>;
  total_lowincome_status?: Maybe<Scalars['Float']>;
  unemployment_rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Stddev_Samp_Order_By = {
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vancouver_X_Census_Data_2016_Sum_Fields = {
  average_age_of_the_population?: Maybe<Scalars['float8']>;
  average_household_size?: Maybe<Scalars['float8']>;
  canadian_citizens?: Maybe<Scalars['bigint']>;
  employment_rate?: Maybe<Scalars['float8']>;
  external_migrants?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
  immigrants_total_number?: Maybe<Scalars['bigint']>;
  internal_migrants?: Maybe<Scalars['bigint']>;
  interprovincial_migrants?: Maybe<Scalars['bigint']>;
  intraprovincial_migrants?: Maybe<Scalars['bigint']>;
  migrants?: Maybe<Scalars['bigint']>;
  movers?: Maybe<Scalars['bigint']>;
  nonimmigrants_total_number?: Maybe<Scalars['bigint']>;
  nonmigrants?: Maybe<Scalars['bigint']>;
  nonmovers?: Maybe<Scalars['bigint']>;
  not_canadian_citizens?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['bigint']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['bigint']>;
  population_total?: Maybe<Scalars['bigint']>;
  total__income?: Maybe<Scalars['bigint']>;
  total_lowincome_status?: Maybe<Scalars['bigint']>;
  unemployment_rate?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Sum_Order_By = {
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vancouver_X_Census_Data_2016_Var_Pop_Fields = {
  average_age_of_the_population?: Maybe<Scalars['Float']>;
  average_household_size?: Maybe<Scalars['Float']>;
  canadian_citizens?: Maybe<Scalars['Float']>;
  employment_rate?: Maybe<Scalars['Float']>;
  external_migrants?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  immigrants_total_number?: Maybe<Scalars['Float']>;
  internal_migrants?: Maybe<Scalars['Float']>;
  interprovincial_migrants?: Maybe<Scalars['Float']>;
  intraprovincial_migrants?: Maybe<Scalars['Float']>;
  migrants?: Maybe<Scalars['Float']>;
  movers?: Maybe<Scalars['Float']>;
  nonimmigrants_total_number?: Maybe<Scalars['Float']>;
  nonmigrants?: Maybe<Scalars['Float']>;
  nonmovers?: Maybe<Scalars['Float']>;
  not_canadian_citizens?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['Float']>;
  population_total?: Maybe<Scalars['Float']>;
  total__income?: Maybe<Scalars['Float']>;
  total_lowincome_status?: Maybe<Scalars['Float']>;
  unemployment_rate?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Var_Pop_Order_By = {
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vancouver_X_Census_Data_2016_Var_Samp_Fields = {
  average_age_of_the_population?: Maybe<Scalars['Float']>;
  average_household_size?: Maybe<Scalars['Float']>;
  canadian_citizens?: Maybe<Scalars['Float']>;
  employment_rate?: Maybe<Scalars['Float']>;
  external_migrants?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  immigrants_total_number?: Maybe<Scalars['Float']>;
  internal_migrants?: Maybe<Scalars['Float']>;
  interprovincial_migrants?: Maybe<Scalars['Float']>;
  intraprovincial_migrants?: Maybe<Scalars['Float']>;
  migrants?: Maybe<Scalars['Float']>;
  movers?: Maybe<Scalars['Float']>;
  nonimmigrants_total_number?: Maybe<Scalars['Float']>;
  nonmigrants?: Maybe<Scalars['Float']>;
  nonmovers?: Maybe<Scalars['Float']>;
  not_canadian_citizens?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['Float']>;
  population_total?: Maybe<Scalars['Float']>;
  total__income?: Maybe<Scalars['Float']>;
  total_lowincome_status?: Maybe<Scalars['Float']>;
  unemployment_rate?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Var_Samp_Order_By = {
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vancouver_X_Census_Data_2016_Variance_Fields = {
  average_age_of_the_population?: Maybe<Scalars['Float']>;
  average_household_size?: Maybe<Scalars['Float']>;
  canadian_citizens?: Maybe<Scalars['Float']>;
  employment_rate?: Maybe<Scalars['Float']>;
  external_migrants?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  immigrants_total_number?: Maybe<Scalars['Float']>;
  internal_migrants?: Maybe<Scalars['Float']>;
  interprovincial_migrants?: Maybe<Scalars['Float']>;
  intraprovincial_migrants?: Maybe<Scalars['Float']>;
  migrants?: Maybe<Scalars['Float']>;
  movers?: Maybe<Scalars['Float']>;
  nonimmigrants_total_number?: Maybe<Scalars['Float']>;
  nonmigrants?: Maybe<Scalars['Float']>;
  nonmovers?: Maybe<Scalars['Float']>;
  not_canadian_citizens?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Scalars['Float']>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Scalars['Float']>;
  population_total?: Maybe<Scalars['Float']>;
  total__income?: Maybe<Scalars['Float']>;
  total_lowincome_status?: Maybe<Scalars['Float']>;
  unemployment_rate?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vancouver_x_census_data_2016" */
export type Vancouver_X_Census_Data_2016_Variance_Order_By = {
  average_age_of_the_population?: Maybe<Order_By>;
  average_household_size?: Maybe<Order_By>;
  canadian_citizens?: Maybe<Order_By>;
  employment_rate?: Maybe<Order_By>;
  external_migrants?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  immigrants_total_number?: Maybe<Order_By>;
  internal_migrants?: Maybe<Order_By>;
  interprovincial_migrants?: Maybe<Order_By>;
  intraprovincial_migrants?: Maybe<Order_By>;
  migrants?: Maybe<Order_By>;
  movers?: Maybe<Order_By>;
  nonimmigrants_total_number?: Maybe<Order_By>;
  nonmigrants?: Maybe<Order_By>;
  nonmovers?: Maybe<Order_By>;
  not_canadian_citizens?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_africa?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_americas?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_asia?: Maybe<Order_By>;
  places_of_birth_for_the_immigrants_europe?: Maybe<Order_By>;
  population_total?: Maybe<Order_By>;
  total__income?: Maybe<Order_By>;
  total_lowincome_status?: Maybe<Order_By>;
  unemployment_rate?: Maybe<Order_By>;
};

/** columns and relationships of "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties = {
  _building_no?: Maybe<Scalars['String']>;
  _geo_local_area?: Maybe<Scalars['String']>;
  _land_coordinate?: Maybe<Scalars['numeric']>;
  _sap_address?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};

/** aggregated selection of "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Aggregate = {
  aggregate?: Maybe<Vancouver_X_City_Owned_Properties_Aggregate_Fields>;
  nodes: Array<Vancouver_X_City_Owned_Properties>;
};

/** aggregate fields of "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Aggregate_Fields = {
  avg?: Maybe<Vancouver_X_City_Owned_Properties_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vancouver_X_City_Owned_Properties_Max_Fields>;
  min?: Maybe<Vancouver_X_City_Owned_Properties_Min_Fields>;
  stddev?: Maybe<Vancouver_X_City_Owned_Properties_Stddev_Fields>;
  stddev_pop?: Maybe<Vancouver_X_City_Owned_Properties_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vancouver_X_City_Owned_Properties_Stddev_Samp_Fields>;
  sum?: Maybe<Vancouver_X_City_Owned_Properties_Sum_Fields>;
  var_pop?: Maybe<Vancouver_X_City_Owned_Properties_Var_Pop_Fields>;
  var_samp?: Maybe<Vancouver_X_City_Owned_Properties_Var_Samp_Fields>;
  variance?: Maybe<Vancouver_X_City_Owned_Properties_Variance_Fields>;
};


/** aggregate fields of "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vancouver_X_City_Owned_Properties_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Aggregate_Order_By = {
  avg?: Maybe<Vancouver_X_City_Owned_Properties_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vancouver_X_City_Owned_Properties_Max_Order_By>;
  min?: Maybe<Vancouver_X_City_Owned_Properties_Min_Order_By>;
  stddev?: Maybe<Vancouver_X_City_Owned_Properties_Stddev_Order_By>;
  stddev_pop?: Maybe<Vancouver_X_City_Owned_Properties_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vancouver_X_City_Owned_Properties_Stddev_Samp_Order_By>;
  sum?: Maybe<Vancouver_X_City_Owned_Properties_Sum_Order_By>;
  var_pop?: Maybe<Vancouver_X_City_Owned_Properties_Var_Pop_Order_By>;
  var_samp?: Maybe<Vancouver_X_City_Owned_Properties_Var_Samp_Order_By>;
  variance?: Maybe<Vancouver_X_City_Owned_Properties_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vancouver_X_City_Owned_Properties_Avg_Fields = {
  _land_coordinate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Avg_Order_By = {
  _land_coordinate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vancouver_x_city_owned_properties". All fields are combined with a logical 'AND'. */
export type Vancouver_X_City_Owned_Properties_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vancouver_X_City_Owned_Properties_Bool_Exp>>>;
  _building_no?: Maybe<String_Comparison_Exp>;
  _geo_local_area?: Maybe<String_Comparison_Exp>;
  _land_coordinate?: Maybe<Numeric_Comparison_Exp>;
  _not?: Maybe<Vancouver_X_City_Owned_Properties_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vancouver_X_City_Owned_Properties_Bool_Exp>>>;
  _sap_address?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vancouver_X_City_Owned_Properties_Max_Fields = {
  _building_no?: Maybe<Scalars['String']>;
  _geo_local_area?: Maybe<Scalars['String']>;
  _land_coordinate?: Maybe<Scalars['numeric']>;
  _sap_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Max_Order_By = {
  _building_no?: Maybe<Order_By>;
  _geo_local_area?: Maybe<Order_By>;
  _land_coordinate?: Maybe<Order_By>;
  _sap_address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vancouver_X_City_Owned_Properties_Min_Fields = {
  _building_no?: Maybe<Scalars['String']>;
  _geo_local_area?: Maybe<Scalars['String']>;
  _land_coordinate?: Maybe<Scalars['numeric']>;
  _sap_address?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Min_Order_By = {
  _building_no?: Maybe<Order_By>;
  _geo_local_area?: Maybe<Order_By>;
  _land_coordinate?: Maybe<Order_By>;
  _sap_address?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Order_By = {
  _building_no?: Maybe<Order_By>;
  _geo_local_area?: Maybe<Order_By>;
  _land_coordinate?: Maybe<Order_By>;
  _sap_address?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** primary key columns input for table: "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vancouver_x_city_owned_properties" */
export enum Vancouver_X_City_Owned_Properties_Select_Column {
  /** column name */
  BuildingNo = '_building_no',
  /** column name */
  GeoLocalArea = '_geo_local_area',
  /** column name */
  LandCoordinate = '_land_coordinate',
  /** column name */
  SapAddress = '_sap_address',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type'
}

/** aggregate stddev on columns */
export type Vancouver_X_City_Owned_Properties_Stddev_Fields = {
  _land_coordinate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Stddev_Order_By = {
  _land_coordinate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vancouver_X_City_Owned_Properties_Stddev_Pop_Fields = {
  _land_coordinate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Stddev_Pop_Order_By = {
  _land_coordinate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vancouver_X_City_Owned_Properties_Stddev_Samp_Fields = {
  _land_coordinate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Stddev_Samp_Order_By = {
  _land_coordinate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vancouver_X_City_Owned_Properties_Sum_Fields = {
  _land_coordinate?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Sum_Order_By = {
  _land_coordinate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vancouver_X_City_Owned_Properties_Var_Pop_Fields = {
  _land_coordinate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Var_Pop_Order_By = {
  _land_coordinate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vancouver_X_City_Owned_Properties_Var_Samp_Fields = {
  _land_coordinate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Var_Samp_Order_By = {
  _land_coordinate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vancouver_X_City_Owned_Properties_Variance_Fields = {
  _land_coordinate?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vancouver_x_city_owned_properties" */
export type Vancouver_X_City_Owned_Properties_Variance_Order_By = {
  _land_coordinate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data = {
  big_improvement_year?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  improvement_value?: Maybe<Scalars['float8']>;
  land_value?: Maybe<Scalars['float8']>;
  legal_type?: Maybe<Scalars['String']>;
  rent_approximate?: Maybe<Scalars['float8']>;
  tax_levy?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
  year_built?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Aggregate = {
  aggregate?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Aggregate_Fields>;
  nodes: Array<Vancouver_X_Property_Tax_Blocks_Data>;
};

/** aggregate fields of "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Aggregate_Fields = {
  avg?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Max_Fields>;
  min?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Min_Fields>;
  stddev?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Sum_Fields>;
  var_pop?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Var_Samp_Fields>;
  variance?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Variance_Fields>;
};


/** aggregate fields of "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Data_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Aggregate_Order_By = {
  avg?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Max_Order_By>;
  min?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Min_Order_By>;
  stddev?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Stddev_Order_By>;
  stddev_pop?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Stddev_Samp_Order_By>;
  sum?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Sum_Order_By>;
  var_pop?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Var_Pop_Order_By>;
  var_samp?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Var_Samp_Order_By>;
  variance?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vancouver_X_Property_Tax_Blocks_Data_Avg_Fields = {
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Avg_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vancouver_x_property_tax_blocks_data". All fields are combined with a logical 'AND'. */
export type Vancouver_X_Property_Tax_Blocks_Data_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vancouver_X_Property_Tax_Blocks_Data_Bool_Exp>>>;
  _not?: Maybe<Vancouver_X_Property_Tax_Blocks_Data_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vancouver_X_Property_Tax_Blocks_Data_Bool_Exp>>>;
  big_improvement_year?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  improvement_value?: Maybe<Float8_Comparison_Exp>;
  land_value?: Maybe<Float8_Comparison_Exp>;
  legal_type?: Maybe<String_Comparison_Exp>;
  rent_approximate?: Maybe<Float8_Comparison_Exp>;
  tax_levy?: Maybe<Float8_Comparison_Exp>;
  year?: Maybe<Bigint_Comparison_Exp>;
  year_built?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vancouver_X_Property_Tax_Blocks_Data_Max_Fields = {
  big_improvement_year?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  improvement_value?: Maybe<Scalars['float8']>;
  land_value?: Maybe<Scalars['float8']>;
  legal_type?: Maybe<Scalars['String']>;
  rent_approximate?: Maybe<Scalars['float8']>;
  tax_levy?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
  year_built?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Max_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  legal_type?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vancouver_X_Property_Tax_Blocks_Data_Min_Fields = {
  big_improvement_year?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  improvement_value?: Maybe<Scalars['float8']>;
  land_value?: Maybe<Scalars['float8']>;
  legal_type?: Maybe<Scalars['String']>;
  rent_approximate?: Maybe<Scalars['float8']>;
  tax_levy?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
  year_built?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Min_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  legal_type?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  legal_type?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** select columns of table "vancouver_x_property_tax_blocks_data" */
export enum Vancouver_X_Property_Tax_Blocks_Data_Select_Column {
  /** column name */
  BigImprovementYear = 'big_improvement_year',
  /** column name */
  Id = 'id',
  /** column name */
  ImprovementValue = 'improvement_value',
  /** column name */
  LandValue = 'land_value',
  /** column name */
  LegalType = 'legal_type',
  /** column name */
  RentApproximate = 'rent_approximate',
  /** column name */
  TaxLevy = 'tax_levy',
  /** column name */
  Year = 'year',
  /** column name */
  YearBuilt = 'year_built'
}

/** aggregate stddev on columns */
export type Vancouver_X_Property_Tax_Blocks_Data_Stddev_Fields = {
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Stddev_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vancouver_X_Property_Tax_Blocks_Data_Stddev_Pop_Fields = {
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Stddev_Pop_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vancouver_X_Property_Tax_Blocks_Data_Stddev_Samp_Fields = {
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Stddev_Samp_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vancouver_X_Property_Tax_Blocks_Data_Sum_Fields = {
  big_improvement_year?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  improvement_value?: Maybe<Scalars['float8']>;
  land_value?: Maybe<Scalars['float8']>;
  rent_approximate?: Maybe<Scalars['float8']>;
  tax_levy?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
  year_built?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Sum_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vancouver_X_Property_Tax_Blocks_Data_Var_Pop_Fields = {
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Var_Pop_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vancouver_X_Property_Tax_Blocks_Data_Var_Samp_Fields = {
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Var_Samp_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vancouver_X_Property_Tax_Blocks_Data_Variance_Fields = {
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vancouver_x_property_tax_blocks_data" */
export type Vancouver_X_Property_Tax_Blocks_Data_Variance_Order_By = {
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** columns and relationships of "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom = {
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['bigint'];
};

/** aggregated selection of "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Aggregate = {
  aggregate?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Aggregate_Fields>;
  nodes: Array<Vancouver_X_Property_Tax_Blocks_Geom>;
};

/** aggregate fields of "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Aggregate_Fields = {
  avg?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Max_Fields>;
  min?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Min_Fields>;
  stddev?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Fields>;
  stddev_pop?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Samp_Fields>;
  sum?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Sum_Fields>;
  var_pop?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Var_Pop_Fields>;
  var_samp?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Var_Samp_Fields>;
  variance?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Variance_Fields>;
};


/** aggregate fields of "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vancouver_X_Property_Tax_Blocks_Geom_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Aggregate_Order_By = {
  avg?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Max_Order_By>;
  min?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Min_Order_By>;
  stddev?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Order_By>;
  stddev_pop?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Samp_Order_By>;
  sum?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Sum_Order_By>;
  var_pop?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Var_Pop_Order_By>;
  var_samp?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Var_Samp_Order_By>;
  variance?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vancouver_X_Property_Tax_Blocks_Geom_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vancouver_x_property_tax_blocks_geom". All fields are combined with a logical 'AND'. */
export type Vancouver_X_Property_Tax_Blocks_Geom_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Bool_Exp>>>;
  _not?: Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vancouver_X_Property_Tax_Blocks_Geom_Bool_Exp>>>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vancouver_X_Property_Tax_Blocks_Geom_Max_Fields = {
  id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Max_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vancouver_X_Property_Tax_Blocks_Geom_Min_Fields = {
  id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Min_Order_By = {
  id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Order_By = {
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "vancouver_x_property_tax_blocks_geom" */
export enum Vancouver_X_Property_Tax_Blocks_Geom_Select_Column {
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vancouver_X_Property_Tax_Blocks_Geom_Sum_Fields = {
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vancouver_X_Property_Tax_Blocks_Geom_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vancouver_X_Property_Tax_Blocks_Geom_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vancouver_X_Property_Tax_Blocks_Geom_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vancouver_x_property_tax_blocks_geom" */
export type Vancouver_X_Property_Tax_Blocks_Geom_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data = {
  _coord?: Maybe<Scalars['bigint']>;
  big_improvement_year?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['bigint']>;
  improvement_value?: Maybe<Scalars['float8']>;
  land_value?: Maybe<Scalars['float8']>;
  legal_type?: Maybe<Scalars['String']>;
  price_approximate?: Maybe<Scalars['float8']>;
  rent_approximate?: Maybe<Scalars['float8']>;
  tax_levy?: Maybe<Scalars['float8']>;
  tax_price_approximate?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
  year_built?: Maybe<Scalars['float8']>;
  zone_category?: Maybe<Scalars['String']>;
};

/** aggregated selection of "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Aggregate = {
  aggregate?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Aggregate_Fields>;
  nodes: Array<Vancouver_X_Property_Tax_Parcels_Data>;
};

/** aggregate fields of "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Aggregate_Fields = {
  avg?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Max_Fields>;
  min?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Min_Fields>;
  stddev?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Stddev_Fields>;
  stddev_pop?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Stddev_Samp_Fields>;
  sum?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Sum_Fields>;
  var_pop?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Var_Pop_Fields>;
  var_samp?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Var_Samp_Fields>;
  variance?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Variance_Fields>;
};


/** aggregate fields of "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Data_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Aggregate_Order_By = {
  avg?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Max_Order_By>;
  min?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Min_Order_By>;
  stddev?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Stddev_Order_By>;
  stddev_pop?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Stddev_Samp_Order_By>;
  sum?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Sum_Order_By>;
  var_pop?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Var_Pop_Order_By>;
  var_samp?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Var_Samp_Order_By>;
  variance?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vancouver_X_Property_Tax_Parcels_Data_Avg_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  price_approximate?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  tax_price_approximate?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Avg_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vancouver_x_property_tax_parcels_data". All fields are combined with a logical 'AND'. */
export type Vancouver_X_Property_Tax_Parcels_Data_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vancouver_X_Property_Tax_Parcels_Data_Bool_Exp>>>;
  _coord?: Maybe<Bigint_Comparison_Exp>;
  _not?: Maybe<Vancouver_X_Property_Tax_Parcels_Data_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vancouver_X_Property_Tax_Parcels_Data_Bool_Exp>>>;
  big_improvement_year?: Maybe<Float8_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  improvement_value?: Maybe<Float8_Comparison_Exp>;
  land_value?: Maybe<Float8_Comparison_Exp>;
  legal_type?: Maybe<String_Comparison_Exp>;
  price_approximate?: Maybe<Float8_Comparison_Exp>;
  rent_approximate?: Maybe<Float8_Comparison_Exp>;
  tax_levy?: Maybe<Float8_Comparison_Exp>;
  tax_price_approximate?: Maybe<Float8_Comparison_Exp>;
  year?: Maybe<Bigint_Comparison_Exp>;
  year_built?: Maybe<Float8_Comparison_Exp>;
  zone_category?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vancouver_X_Property_Tax_Parcels_Data_Max_Fields = {
  _coord?: Maybe<Scalars['bigint']>;
  big_improvement_year?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['bigint']>;
  improvement_value?: Maybe<Scalars['float8']>;
  land_value?: Maybe<Scalars['float8']>;
  legal_type?: Maybe<Scalars['String']>;
  price_approximate?: Maybe<Scalars['float8']>;
  rent_approximate?: Maybe<Scalars['float8']>;
  tax_levy?: Maybe<Scalars['float8']>;
  tax_price_approximate?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
  year_built?: Maybe<Scalars['float8']>;
  zone_category?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Max_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  legal_type?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
  zone_category?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vancouver_X_Property_Tax_Parcels_Data_Min_Fields = {
  _coord?: Maybe<Scalars['bigint']>;
  big_improvement_year?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['bigint']>;
  improvement_value?: Maybe<Scalars['float8']>;
  land_value?: Maybe<Scalars['float8']>;
  legal_type?: Maybe<Scalars['String']>;
  price_approximate?: Maybe<Scalars['float8']>;
  rent_approximate?: Maybe<Scalars['float8']>;
  tax_levy?: Maybe<Scalars['float8']>;
  tax_price_approximate?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
  year_built?: Maybe<Scalars['float8']>;
  zone_category?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Min_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  legal_type?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
  zone_category?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  legal_type?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
  zone_category?: Maybe<Order_By>;
};

/** select columns of table "vancouver_x_property_tax_parcels_data" */
export enum Vancouver_X_Property_Tax_Parcels_Data_Select_Column {
  /** column name */
  Coord = '_coord',
  /** column name */
  BigImprovementYear = 'big_improvement_year',
  /** column name */
  Id = 'id',
  /** column name */
  ImprovementValue = 'improvement_value',
  /** column name */
  LandValue = 'land_value',
  /** column name */
  LegalType = 'legal_type',
  /** column name */
  PriceApproximate = 'price_approximate',
  /** column name */
  RentApproximate = 'rent_approximate',
  /** column name */
  TaxLevy = 'tax_levy',
  /** column name */
  TaxPriceApproximate = 'tax_price_approximate',
  /** column name */
  Year = 'year',
  /** column name */
  YearBuilt = 'year_built',
  /** column name */
  ZoneCategory = 'zone_category'
}

/** aggregate stddev on columns */
export type Vancouver_X_Property_Tax_Parcels_Data_Stddev_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  price_approximate?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  tax_price_approximate?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Stddev_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vancouver_X_Property_Tax_Parcels_Data_Stddev_Pop_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  price_approximate?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  tax_price_approximate?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Stddev_Pop_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vancouver_X_Property_Tax_Parcels_Data_Stddev_Samp_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  price_approximate?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  tax_price_approximate?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Stddev_Samp_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vancouver_X_Property_Tax_Parcels_Data_Sum_Fields = {
  _coord?: Maybe<Scalars['bigint']>;
  big_improvement_year?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['bigint']>;
  improvement_value?: Maybe<Scalars['float8']>;
  land_value?: Maybe<Scalars['float8']>;
  price_approximate?: Maybe<Scalars['float8']>;
  rent_approximate?: Maybe<Scalars['float8']>;
  tax_levy?: Maybe<Scalars['float8']>;
  tax_price_approximate?: Maybe<Scalars['float8']>;
  year?: Maybe<Scalars['bigint']>;
  year_built?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Sum_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vancouver_X_Property_Tax_Parcels_Data_Var_Pop_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  price_approximate?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  tax_price_approximate?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Var_Pop_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vancouver_X_Property_Tax_Parcels_Data_Var_Samp_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  price_approximate?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  tax_price_approximate?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Var_Samp_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vancouver_X_Property_Tax_Parcels_Data_Variance_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  big_improvement_year?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  improvement_value?: Maybe<Scalars['Float']>;
  land_value?: Maybe<Scalars['Float']>;
  price_approximate?: Maybe<Scalars['Float']>;
  rent_approximate?: Maybe<Scalars['Float']>;
  tax_levy?: Maybe<Scalars['Float']>;
  tax_price_approximate?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
  year_built?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vancouver_x_property_tax_parcels_data" */
export type Vancouver_X_Property_Tax_Parcels_Data_Variance_Order_By = {
  _coord?: Maybe<Order_By>;
  big_improvement_year?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  improvement_value?: Maybe<Order_By>;
  land_value?: Maybe<Order_By>;
  price_approximate?: Maybe<Order_By>;
  rent_approximate?: Maybe<Order_By>;
  tax_levy?: Maybe<Order_By>;
  tax_price_approximate?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
  year_built?: Maybe<Order_By>;
};

/** columns and relationships of "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom = {
  _coord?: Maybe<Scalars['bigint']>;
  geom: Scalars['geometry'];
  id: Scalars['bigint'];
};

/** aggregated selection of "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Aggregate = {
  aggregate?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Aggregate_Fields>;
  nodes: Array<Vancouver_X_Property_Tax_Parcels_Geom>;
};

/** aggregate fields of "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Aggregate_Fields = {
  avg?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Max_Fields>;
  min?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Min_Fields>;
  stddev?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Fields>;
  stddev_pop?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Samp_Fields>;
  sum?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Sum_Fields>;
  var_pop?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Var_Pop_Fields>;
  var_samp?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Var_Samp_Fields>;
  variance?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Variance_Fields>;
};


/** aggregate fields of "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vancouver_X_Property_Tax_Parcels_Geom_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Aggregate_Order_By = {
  avg?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Max_Order_By>;
  min?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Min_Order_By>;
  stddev?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Order_By>;
  stddev_pop?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Samp_Order_By>;
  sum?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Sum_Order_By>;
  var_pop?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Var_Pop_Order_By>;
  var_samp?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Var_Samp_Order_By>;
  variance?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vancouver_X_Property_Tax_Parcels_Geom_Avg_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Avg_Order_By = {
  _coord?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vancouver_x_property_tax_parcels_geom". All fields are combined with a logical 'AND'. */
export type Vancouver_X_Property_Tax_Parcels_Geom_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Bool_Exp>>>;
  _coord?: Maybe<Bigint_Comparison_Exp>;
  _not?: Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vancouver_X_Property_Tax_Parcels_Geom_Bool_Exp>>>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vancouver_X_Property_Tax_Parcels_Geom_Max_Fields = {
  _coord?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Max_Order_By = {
  _coord?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vancouver_X_Property_Tax_Parcels_Geom_Min_Fields = {
  _coord?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Min_Order_By = {
  _coord?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Order_By = {
  _coord?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "vancouver_x_property_tax_parcels_geom" */
export enum Vancouver_X_Property_Tax_Parcels_Geom_Select_Column {
  /** column name */
  Coord = '_coord',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Order_By = {
  _coord?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Pop_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Pop_Order_By = {
  _coord?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Samp_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Stddev_Samp_Order_By = {
  _coord?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vancouver_X_Property_Tax_Parcels_Geom_Sum_Fields = {
  _coord?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Sum_Order_By = {
  _coord?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vancouver_X_Property_Tax_Parcels_Geom_Var_Pop_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Var_Pop_Order_By = {
  _coord?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vancouver_X_Property_Tax_Parcels_Geom_Var_Samp_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Var_Samp_Order_By = {
  _coord?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vancouver_X_Property_Tax_Parcels_Geom_Variance_Fields = {
  _coord?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vancouver_x_property_tax_parcels_geom" */
export type Vancouver_X_Property_Tax_Parcels_Geom_Variance_Order_By = {
  _coord?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels = {
  _zone_name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  geom?: Maybe<Scalars['geometry']>;
  id: Scalars['Int'];
};

/** aggregated selection of "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Aggregate = {
  aggregate?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Aggregate_Fields>;
  nodes: Array<Vancouver_X_Zoning_Districts_And_Labels>;
};

/** aggregate fields of "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Aggregate_Fields = {
  avg?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Max_Fields>;
  min?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Min_Fields>;
  stddev?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Stddev_Fields>;
  stddev_pop?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Stddev_Samp_Fields>;
  sum?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Sum_Fields>;
  var_pop?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Var_Pop_Fields>;
  var_samp?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Var_Samp_Fields>;
  variance?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Variance_Fields>;
};


/** aggregate fields of "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vancouver_X_Zoning_Districts_And_Labels_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Aggregate_Order_By = {
  avg?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Max_Order_By>;
  min?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Min_Order_By>;
  stddev?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Stddev_Order_By>;
  stddev_pop?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Stddev_Samp_Order_By>;
  sum?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Sum_Order_By>;
  var_pop?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Var_Pop_Order_By>;
  var_samp?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Var_Samp_Order_By>;
  variance?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vancouver_X_Zoning_Districts_And_Labels_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vancouver_x_zoning_districts_and_labels". All fields are combined with a logical 'AND'. */
export type Vancouver_X_Zoning_Districts_And_Labels_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vancouver_X_Zoning_Districts_And_Labels_Bool_Exp>>>;
  _not?: Maybe<Vancouver_X_Zoning_Districts_And_Labels_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vancouver_X_Zoning_Districts_And_Labels_Bool_Exp>>>;
  _zone_name?: Maybe<String_Comparison_Exp>;
  category?: Maybe<String_Comparison_Exp>;
  geom?: Maybe<Geometry_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vancouver_X_Zoning_Districts_And_Labels_Max_Fields = {
  _zone_name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Max_Order_By = {
  _zone_name?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vancouver_X_Zoning_Districts_And_Labels_Min_Fields = {
  _zone_name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Min_Order_By = {
  _zone_name?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Order_By = {
  _zone_name?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  geom?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "vancouver_x_zoning_districts_and_labels" */
export enum Vancouver_X_Zoning_Districts_And_Labels_Select_Column {
  /** column name */
  ZoneName = '_zone_name',
  /** column name */
  Category = 'category',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id'
}

/** aggregate stddev on columns */
export type Vancouver_X_Zoning_Districts_And_Labels_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vancouver_X_Zoning_Districts_And_Labels_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vancouver_X_Zoning_Districts_And_Labels_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vancouver_X_Zoning_Districts_And_Labels_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vancouver_X_Zoning_Districts_And_Labels_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vancouver_X_Zoning_Districts_And_Labels_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vancouver_X_Zoning_Districts_And_Labels_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "vancouver_x_zoning_districts_and_labels" */
export type Vancouver_X_Zoning_Districts_And_Labels_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type SyntheticParcelsQueryVariables = Exact<{
  year?: Maybe<Scalars['bigint']>;
}>;


export type SyntheticParcelsQuery = { synthetic_parcels: Array<Pick<Synthetic_Parcels, 'id' | 'price' | 'rent'>> };

export type SyntheticBlocksQueryVariables = Exact<{
  year?: Maybe<Scalars['bigint']>;
}>;


export type SyntheticBlocksQuery = { synthetic_blocks: Array<Pick<Synthetic_Blocks, 'id' | 'price' | 'rent'>> };

export type RentsHistoricalQueryVariables = Exact<{ [key: string]: never; }>;


export type RentsHistoricalQuery = { data: Array<{ data: Rents_Historical['average'], key: Rents_Historical['year'] }>, incomes: Array<{ data: Incomes['average'], key: Incomes['year'] }> };

export type PricesHistoricalQueryVariables = Exact<{ [key: string]: never; }>;


export type PricesHistoricalQuery = { data: Array<{ data: Prices_Historical['average'], key: Prices_Historical['year'] }>, incomes: Array<{ data: Incomes['average'], key: Incomes['year'] }> };


export const SyntheticParcelsDocument = gql`
    query SyntheticParcels($year: bigint) {
  synthetic_parcels(where: {year: {_eq: $year}}) {
    id
    price
    rent
  }
}
    `;

/**
 * __useSyntheticParcelsQuery__
 *
 * To run a query within a React component, call `useSyntheticParcelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSyntheticParcelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSyntheticParcelsQuery({
 *   variables: {
 *      year: // value for 'year'
 *   },
 * });
 */
export function useSyntheticParcelsQuery(baseOptions?: Apollo.QueryHookOptions<SyntheticParcelsQuery, SyntheticParcelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SyntheticParcelsQuery, SyntheticParcelsQueryVariables>(SyntheticParcelsDocument, options);
      }
export function useSyntheticParcelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SyntheticParcelsQuery, SyntheticParcelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SyntheticParcelsQuery, SyntheticParcelsQueryVariables>(SyntheticParcelsDocument, options);
        }
export type SyntheticParcelsQueryHookResult = ReturnType<typeof useSyntheticParcelsQuery>;
export type SyntheticParcelsLazyQueryHookResult = ReturnType<typeof useSyntheticParcelsLazyQuery>;
export type SyntheticParcelsQueryResult = Apollo.QueryResult<SyntheticParcelsQuery, SyntheticParcelsQueryVariables>;
export const SyntheticBlocksDocument = gql`
    query SyntheticBlocks($year: bigint) {
  synthetic_blocks(where: {year: {_eq: $year}}) {
    id
    price
    rent
  }
}
    `;

/**
 * __useSyntheticBlocksQuery__
 *
 * To run a query within a React component, call `useSyntheticBlocksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSyntheticBlocksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSyntheticBlocksQuery({
 *   variables: {
 *      year: // value for 'year'
 *   },
 * });
 */
export function useSyntheticBlocksQuery(baseOptions?: Apollo.QueryHookOptions<SyntheticBlocksQuery, SyntheticBlocksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SyntheticBlocksQuery, SyntheticBlocksQueryVariables>(SyntheticBlocksDocument, options);
      }
export function useSyntheticBlocksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SyntheticBlocksQuery, SyntheticBlocksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SyntheticBlocksQuery, SyntheticBlocksQueryVariables>(SyntheticBlocksDocument, options);
        }
export type SyntheticBlocksQueryHookResult = ReturnType<typeof useSyntheticBlocksQuery>;
export type SyntheticBlocksLazyQueryHookResult = ReturnType<typeof useSyntheticBlocksLazyQuery>;
export type SyntheticBlocksQueryResult = Apollo.QueryResult<SyntheticBlocksQuery, SyntheticBlocksQueryVariables>;
export const RentsHistoricalDocument = gql`
    query RentsHistorical {
  data: rents_historical(where: {year: {_gte: 2005}}) {
    data: average
    key: year
  }
  incomes {
    data: average
    key: year
  }
}
    `;

/**
 * __useRentsHistoricalQuery__
 *
 * To run a query within a React component, call `useRentsHistoricalQuery` and pass it any options that fit your needs.
 * When your component renders, `useRentsHistoricalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRentsHistoricalQuery({
 *   variables: {
 *   },
 * });
 */
export function useRentsHistoricalQuery(baseOptions?: Apollo.QueryHookOptions<RentsHistoricalQuery, RentsHistoricalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RentsHistoricalQuery, RentsHistoricalQueryVariables>(RentsHistoricalDocument, options);
      }
export function useRentsHistoricalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RentsHistoricalQuery, RentsHistoricalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RentsHistoricalQuery, RentsHistoricalQueryVariables>(RentsHistoricalDocument, options);
        }
export type RentsHistoricalQueryHookResult = ReturnType<typeof useRentsHistoricalQuery>;
export type RentsHistoricalLazyQueryHookResult = ReturnType<typeof useRentsHistoricalLazyQuery>;
export type RentsHistoricalQueryResult = Apollo.QueryResult<RentsHistoricalQuery, RentsHistoricalQueryVariables>;
export const PricesHistoricalDocument = gql`
    query PricesHistorical {
  data: prices_historical(where: {year: {_gte: 2005}}) {
    data: average
    key: year
  }
  incomes {
    data: average
    key: year
  }
}
    `;

/**
 * __usePricesHistoricalQuery__
 *
 * To run a query within a React component, call `usePricesHistoricalQuery` and pass it any options that fit your needs.
 * When your component renders, `usePricesHistoricalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePricesHistoricalQuery({
 *   variables: {
 *   },
 * });
 */
export function usePricesHistoricalQuery(baseOptions?: Apollo.QueryHookOptions<PricesHistoricalQuery, PricesHistoricalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PricesHistoricalQuery, PricesHistoricalQueryVariables>(PricesHistoricalDocument, options);
      }
export function usePricesHistoricalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PricesHistoricalQuery, PricesHistoricalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PricesHistoricalQuery, PricesHistoricalQueryVariables>(PricesHistoricalDocument, options);
        }
export type PricesHistoricalQueryHookResult = ReturnType<typeof usePricesHistoricalQuery>;
export type PricesHistoricalLazyQueryHookResult = ReturnType<typeof usePricesHistoricalLazyQuery>;
export type PricesHistoricalQueryResult = Apollo.QueryResult<PricesHistoricalQuery, PricesHistoricalQueryVariables>;