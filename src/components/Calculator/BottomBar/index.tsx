import { atoms, useLayout } from "misc";
import { useRecoilState } from "recoil";
import { usePricingQuery, useSalariesQuery, useAffordableRentQuery, useAffordablePriceQuery } from "generated";
import { format } from 'd3-format'
import { useEffect, useState } from "react";
import { Wrapper, Container, Number, Handle, Gradient } from "./styles";
import { Text } from "components/styles";
import Draggable from 'react-draggable'
import { useWindowSize } from "react-use-size";

const formatter = format(",.2r")
const percentFormatter = format(",.2r")

export  default function BottomBar(){
  const [ mode ] = useRecoilState(atoms.mode)
  const [ year ] = useRecoilState(atoms.year)
  const [ income ] = useRecoilState(atoms.income)

  const { data:salaries } = useSalariesQuery()
  const { data:pricing } = usePricingQuery()

  const rentPercentage = (((12*pricing?.rents_historical.find(d=>d.year===year)?.average)/income)*100)
  const incomeRatio = income/salaries?.incomes?.find(d=>d.year===year)?.median
  
  const [ percentAffordableRent, setPercentAffordableRent ] = useState(0)
  const { data:affordableRent } = useAffordableRentQuery({skip:mode!=='rent', variables:{thirty_percent_of_income:income/12*0.3,year}})
  
  useEffect(()=>{
    if(affordableRent?.sample?.aggregate && affordableRent.total.aggregate?.count){
      const percent = (affordableRent.sample.aggregate?.count||0)/
        (affordableRent.total.aggregate.count)*100
        setPercentAffordableRent(percent)
    }
  },[ affordableRent ])

  const [ percentAffordablePrice, setPercentAffordablePrice ] = useState(0)
  const { data:affordablePrice } = useAffordablePriceQuery({skip:mode!=='price', variables:{mortgage:income*4.5,year}})
  
  useEffect(()=>{
    if(affordablePrice?.sample?.aggregate && affordablePrice.total.aggregate?.count){
      const percent = (affordablePrice.sample.aggregate?.count||0)/
        (affordablePrice.total.aggregate.count)*100
        setPercentAffordablePrice(percent)
    }
  },[ affordablePrice ])

  const layout = useLayout()
  const {width, height} = useWindowSize()
  const [position, setPosition] = useState({x:0, y:0});

  return <>

    <Wrapper>
    <Draggable
      axis="y"
      handle=".draggable"
      disabled={layout==='desktop'}
      bounds={{top:120, bottom: height-140}}
      defaultPosition={{x:0, y:height-140}}
      scale={1}
      defaultClassName="draggable"
    >
      <Container>
        <Handle/>
        <Text style={{padding: '24px', alignItems: 'start'}}>
        <div>
          <h4 style={{color:'black', padding: 0, margin: '0 0 0.8rem 0'}}>Affordability heatmap</h4>
          <p>
              - Selected income is {
                  incomeRatio===1?
                  <><Number>equal</Number> to the </>:
                  incomeRatio<1?
                  <><Number>{percentFormatter((1-incomeRatio)*100)}%</Number> lower then </>:
                  <><Number>{percentFormatter((incomeRatio-1)*100)}%</Number> higher then </>} 
                  Vancouver's median.
          </p>
          {mode==='rent'?
          <>
            <p>
              - Average annual rent in Vancouver is <Number>{formatter(12*pricing?.rents_historical.find(d=>d.year===year)?.average)+' CAD '} </Number>
              which is <Number>{
                rentPercentage.toFixed(1)
              }%</Number> of selected annual household income.
            </p>
            <p>
              - <Number>{
                percentFormatter(percentAffordableRent)
              }%</Number> of rental homes are considered affordable for selected income.
            </p>
            <p>
                - Finding affordable rental home for a household with such income is {
                rentPercentage>=30?'hard':'easy'}.
            </p>

          </>:
          <>
            <p>
                - Median property price in Vancouver is <Number>{formatter(pricing?.prices_historical.find(d=>d.year===year)?.median)+' CAD '} </Number>
                which is <Number>x{
                  ((pricing?.prices_historical.find(d=>d.year===year)?.median)/income).toFixed(1)
                }</Number> the selected annual income.
            </p>
            <p>
                - The maximum mortgage amount this household can qualify for is 
                <Number>{' '+formatter(income*4)+' CAD'}</Number>. This can cover <Number>{percentFormatter(percentAffordablePrice)}%</Number> of homes in Vancouver.
            </p>
            <p>
                - Finding affordable property for a household with such income is {percentAffordablePrice>=20?'easy':'hard'}.
            </p>
          </>}
          <br/>
          <a style={{ color: 'black', textDecoration: 'underline' }} href="https://spatialtech.notion.site/Methodology-75e4b010047d429e936b1d3ab6193ccf">Read more on our methodology</a>

          </div>
        </Text>
      </Container>
      </Draggable>
      <Gradient/>
    </Wrapper>
  </>
}


