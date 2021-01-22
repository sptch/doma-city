import { useQuery, gql } from '@apollo/client'

export const getKeys = (table:string)=>gql`
  query GetKeys_${table} {
    __type(name:"${table}") {
      fields {
          name
          type {
            name
          }
      }  
    }
  }`

export const getYearValues = (source:string, property:string)=>gql`
  query GetYearValues_${source}($year:bigint) {
    ${source}(where: {report_year: {_eq: $year}}){
      id
      ${property}
    }
  }`

export const getRange = (source:string, property:string)=>gql`
  query GetRange_${source} ($numeric: Boolean!) {
    ${source}(distinct_on: ${property}) @skip(if: $numeric) {
      ${property}
    }
    ${source}_aggregate @include(if: $numeric) {
      aggregate {
        min {
          ${property}
        }
        max {
          ${property}
        }
      }
    }
  }`

export const getNTiles = gql`
  query GetNTiles($table_id:String!, $column_id: String!, $ntiles: Int!, $mode: String ) {
    get_tiles(
      args: {
        table_id: $table_id, 
        column_id:$column_id,
        ntiles: $ntiles,
        mode: $mode
      }
    ){
      tile
    }
  }`

export const getDatum = (source:string, properties:any)=>gql`
  query GetDatum_${source}($id: bigint, $year: bigint ) {
    ${source}(where: {id: {_eq: $id}, report_year: {_eq: $year}}) {
      ${properties.join('\n')}
    }
  }`


