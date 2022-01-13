import { atoms, useLayout } from "misc";
import { useRecoilState } from "recoil";
import HistorySlider from "./HistorySlider"
import IncomeSlider from "./IncomeSlider"
import Toggle from "./Toggle/";
import { usePricingQuery, useSalariesQuery, useAffordableRentQuery, useAffordablePriceQuery } from "generated";
import { format } from 'd3-format'
import { useEffect, useState } from "react";
import { Wrapper, Container, SlidersBlock, Number, LogoContainer, Footer } from "./styles";
import { Section, Text } from "components/styles";
import {ReactComponent as Logo} from 'assets/icons/logo.svg'

const formatter = format(",.2r")
const percentFormatter = format(",.2r")

export  default function Sidebar(){
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

  return <Wrapper>
    <Container>
      <Text>
      <div>
  
        <h2>Select income and year</h2>   

        <SlidersBlock>
          <IncomeSlider {...{salaries}}/>
          <p>
            The map shows a personalised view towards Vancouver's real estate market,
            depending on selected houshold income and year. 
          </p>
          <HistorySlider/>
        </SlidersBlock>
        <Toggle/>

        <br/>
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
        <Footer>
          {layout==='desktop' && <LogoContainer href="http://doma.city/" rel="home">
            <Logo color='black'/>
          </LogoContainer>}
          <a style={{ color: 'black', textDecoration: 'underline' }} href="https://spatialtech.notion.site/Methodology-75e4b010047d429e936b1d3ab6193ccf">Read more on our methodology</a>

        </Footer> 

        </div>
      </Text>
    </Container>
  </Wrapper>
}


