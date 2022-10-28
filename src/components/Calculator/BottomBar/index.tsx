import { atoms, useLayout } from "misc";
import { useRecoilState } from "recoil";
import { format } from 'd3-format'
import { useEffect, useState } from "react";
import { Wrapper, Container, Number, Handle, Gradient } from "./styles";
import { Text } from "components/styles";
import Draggable from 'react-draggable'
import { useWindowSize } from "react-use-size";
import medianIncomes from 'data/median_incomes.json'
import pricesHistorical from 'data/prices_historical.json'
import rentsHistorical from 'data/rents_historical.json'
import blocksData from 'data/blocks_data.json'
import medianHouseholdIncomes from 'data/median_household_incomes.json'

const formatter = format(",.2r")
const percentFormatter = format(",.2r")

export  default function BottomBar(){
  const [ mode ] = useRecoilState(atoms.mode)
  const [ year ] = useRecoilState(atoms.year)
  const [ income ] = useRecoilState(atoms.income)

  const rentPercentage = (((12*(rentsHistorical.find(d=>d.year===year)?.rent_median||0))/income)*100)
  const incomeRatio = income/(medianIncomes.find(d=>d.year===year)?.median_income||0)
  const incomeHouseholdRatio = income/(medianHouseholdIncomes.find(d=>d.year===year)?.household_income_median||0)

  const [ percentAffordableRent, setPercentAffordableRent ] = useState(0)
  const rentAffordabilityThreshold = income/12*0.3;

  const affordableMortgage = income*4.5

  const [ percentAffordablePrice, setPercentAffordablePrice ] = useState(0)

  useEffect(()=>{
    const relevant = blocksData
      ?.[(year||2022) as unknown as keyof typeof blocksData] as {
        id: number;
        price: number;
        rent: number;
    }[];

    const percent = (relevant.filter(v=>v.rent<rentAffordabilityThreshold).length||0)/(relevant.length||0)*100
    setPercentAffordableRent(percent)
  },[year, rentAffordabilityThreshold])

  useEffect(()=>{
    const relevant = blocksData
      ?.[(year||2022) as unknown as keyof typeof blocksData] as {
        id: number;
        price: number;
        rent: number;
    }[];
    const percent = (relevant.filter(v=>v.price<affordableMortgage).length||0)/
      (relevant.length)*100
    setPercentAffordablePrice(percent)
  },[year, affordableMortgage])

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
      cancel='.link'
    >
      <Container>
        <Handle/>
        <Text style={{padding: '24px', alignItems: 'start'}}>
        <div>
          <h4 style={{color:'black', padding: 0, margin: '0 0 0.8rem 0'}}>Affordability heatmap</h4>
          <p>
          - This income is {
                incomeRatio===1?
                <><Number>equal</Number> to </>:
                incomeRatio<1?
                <><Number>{percentFormatter((1-incomeRatio)*100)}%</Number> lower then </>:
                <><Number>{percentFormatter((incomeRatio-1)*100)}%</Number> higher then </>} 
                the median individual income and {' '}
                {
                incomeHouseholdRatio===1?
                <><Number>equal</Number> to </>:
                incomeHouseholdRatio<1?
                <><Number>{percentFormatter((1-incomeHouseholdRatio)*100)}%</Number> lower then </>:
                <><Number>{percentFormatter((incomeHouseholdRatio-1)*100)}%</Number> higher then </>} 
                the median household income in Vancouver.
          </p>
          {mode==='rent'?
          <>
            <p>
              - Average annual rent in Vancouver is <Number>{formatter(12* (rentsHistorical.find(d=>d.year===year)?.rent_median||0))+' CAD '} </Number>
              which is <Number>{
                rentPercentage.toFixed(1)
              }%</Number> of selected annual income.
            </p>
            <p>
              - <Number>{
                percentFormatter(percentAffordableRent)
              }%</Number> of rental homes are considered affordable for selected income.
            </p>
            <p>
              - Finding affordable rental home for this income is {
                rentPercentage>=30?'hard':'easy'}.
            </p>

          </>:
          <>
            <p>
              - Median property price in Vancouver is <Number>{formatter((pricesHistorical.find(d=>d.year===year)?.price_median||0))+' CAD '} </Number>
              which is <Number>x{
                ((pricesHistorical.find(d=>d.year===year)?.price_median||0)/income).toFixed(1)
              }</Number> the selected annual income.
            </p>
            <p>
              - With a typical 20% down payment, the approximate home price you'd be able to afford is <Number>{' '+formatter(income*4)+' CAD'}</Number>
                , which is <Number>{percentFormatter(percentAffordablePrice)}%</Number> homes in Vancouver.
            </p>
            <p>
              - Finding affordable property with such income is {percentAffordablePrice>=20?'easy':'hard'}.
            </p>
          </>}
          <br/>
          <a className='link' style={{ color: 'black', textDecoration: 'underline', pointerEvents: 'all' }} href="https://spatialtech.notion.site/Methodology-75e4b010047d429e936b1d3ab6193ccf">Read more on our methodology</a>

          </div>
        </Text>
      </Container>
      </Draggable>
      <Gradient/>
    </Wrapper>
  </>
}


