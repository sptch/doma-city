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
