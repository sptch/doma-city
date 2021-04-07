import { useQuery, gql } from '@apollo/client'

export const getKeys = (tables:Array<string>)=> gql`
  query GetKeys_${tables.join('_')} {
  ${tables.map((table)=>`
    ${table}: __type(name:"${table.replace('_geom','_data')}") {
        fields {
          name
          type {
            name
          }
        }  
      }
  `)}
  }
`

export const getYearValues = (source:string, properties:string[], limit?:number)=>gql`
  query GetYearValues_${source}($year:bigint) {
    ${source}(where: {year: {_eq: $year}}${limit?`, limit: ${limit}`:''}){
      id
      ${properties.join('\n')}
    }
  }`

export const getChartValues = (source:string, properties:string[], limit?:number)=>gql`
  query GetChartValues_${source} {
    ${source} ${limit?`(limit: ${limit})`:''} {
      id
      ${properties.join('\n')}
    }
  }`

export const getRange = (source:string, property:string)=>gql`
  query GetRange_${source} ($numeric: Boolean!) {
    ${source}(distinct_on: ${property}) @skip(if: $numeric) {
      ${property}
      ${property==='color'?'_name':''}
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

export const getDatum = (source:string, properties:string[])=>gql`
  query GetDatum_${source}($id: bigint, $year: bigint ) {
    ${source}(where: {id: {_eq: $id}, year: {_eq: $year}}) {
      ${properties.join('\n')}
    }
  }`


