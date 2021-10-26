import { Typography } from "@material-ui/core"
import { atoms } from "misc";
import { useRecoilState } from "recoil";
import HistorySlider from "./HistorySlider"
import IncomeSlider from "./IncomeSlider"
import { useComponentSize } from "react-use-size"
import Toggle from "./Toggle";
import { usePricingQuery, useSalariesQuery, useAffordableRentQuery, useAffordablePriceQuery } from "generated";
import { format } from 'd3-format'
import { useEffect, useState } from "react";
const formatter = format(",.2r")
const percentFormatter = format(",.2r")

export  default function Sidebar(){
  const [mode, setMode] = useRecoilState(atoms.mode)
  const [ year ] = useRecoilState(atoms.year)
  const [ income, setIncome ] = useRecoilState(atoms.income)

  const { ref, height, width } = useComponentSize()
  const { data:salaries } = useSalariesQuery()
  const { data:pricing } = usePricingQuery()
  const rentPercentage = (((12*pricing?.rents_historical.find(d=>d.year===year)?.average)/income)*100)
  const mortgagePercentage = (((12*pricing?.prices_historical.find(d=>d.year===year)?.median/10)/(income*4.5))*100)

  const incomeRatio = income/salaries?.incomes?.find(d=>d.year===year)?.income
  
  const [percentAffordableRent, setPercentAffordableRent] = useState(0)
  const {data:affordableRent} = useAffordableRentQuery({skip:mode!=='rent', variables:{thirty_percent_of_income:income/12*0.3,year}})
  useEffect(()=>{
    if(affordableRent?.sample?.aggregate && affordableRent.total.aggregate?.count){
      const percent = (affordableRent.sample.aggregate?.count||0)/
        (affordableRent.total.aggregate.count)*100
        setPercentAffordableRent(percent)
    }
  },[affordableRent])

  const [percentAffordablePrice, setPercentAffordablePrice] = useState(0)
  const {data:affordablePrice} = useAffordablePriceQuery({skip:mode!=='price', variables:{mortgage:income*4.5,year}})
  useEffect(()=>{
    if(affordablePrice?.sample?.aggregate && affordablePrice.total.aggregate?.count){
      const percent = (affordablePrice.sample.aggregate?.count||0)/
        (affordablePrice.total.aggregate.count)*100
        setPercentAffordablePrice(percent)
    }
  },[affordablePrice])


  return <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    minWidth:'400px',
    maxWidth:'450px',
    width: '33vw',
    backgroundColor: 'white',
    borderRight: 'solid rgba(255,255,255,0.3) 1px',
    boxShadow: '15px 0px 30px rgba(0,0,0,0.1)',
    color:'#999',
    overflowX:'visible',
    boxSizing:'border-box'
  }}>
    <div style={{
      overflowY:'scroll',
      padding: '4rem 4rem',
      boxSizing:'border-box',
      height:'100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography variant='h6' style={{color:'black'}}>
      Select income and year
      </Typography>
      <div style={{width:'100%', margin: '1.5rem 0', paddingTop:'2.5rem', boxSizing:'border-box'}}>
        <IncomeSlider {...{salaries}}/>
        <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
          The map shows a personalised view towards Vancouver's real estate market,
          depending on selected houshold income and year. 
        </Typography>
        <HistorySlider/>
      </div>
      <Toggle/>

      <br/>
      <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
          - Selected income is {
              incomeRatio===1?
              <><span style={{color:'#aa624f'}}>equal</span> to the </>:
              incomeRatio<1?
              <><span style={{color:'#aa624f'}}>{percentFormatter((1-incomeRatio)*100)}%</span> lower then </>:
              <><span style={{color:'#aa624f'}}>{percentFormatter((incomeRatio-1)*100)}%</span> higher then </>} 
              Vancouver's median.
      </Typography>
      {mode==='rent'?
       <>
        <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
          - Average annual rent in Vancouver is {formatter(12*pricing?.rents_historical.find(d=>d.year===year)?.average)+' CAD '} 
          which is <span style={{color:'#aa624f'}}>{
            rentPercentage.toFixed(1)
          }%</span> of selected annual household income.
        </Typography>
        <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
          - <span style={{color:'#aa624f'}}>{
            percentFormatter(percentAffordableRent)
          }%</span> of rental homes are considered affordable for selected income.
        </Typography>
        <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
            - Finding affordable rental home for a housefold with such income is {
            rentPercentage>=30?'hard':'easy'}.
        </Typography>
      </>:
      <>
        <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
            - Median property price in Vancouver is {formatter(pricing?.prices_historical.find(d=>d.year===year)?.median)+' CAD '} 
            which is x{
              ((pricing?.prices_historical.find(d=>d.year===year)?.median)/income).toFixed(0)
            } the selected annual income.
        </Typography>
        <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
            - The maximum mortgage amount this household can qualify for is 
            {' '+formatter(income*4)+' CAD'}. This can cover {percentFormatter(percentAffordablePrice)}% of homes in Vancouver.
        </Typography>
        <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
            - Finding affordable property for a housefold with such income is {percentAffordablePrice>0?'easy':'hard'}.
        </Typography>
      </>}
    </div>
  </div>
}


