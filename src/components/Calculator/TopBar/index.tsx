import HistorySlider from "./HistorySlider"
import IncomeSlider from "./IncomeSlider"
import Toggle from "./Toggle/";
import medianIncomes from 'data/median_incomes.json'
import { Wrapper, Container, SlidersBlock } from "./styles";
import { Text } from "components/styles";

export  default function Sidebar(){

  return <>
    <Wrapper>
      <Container>
        <SlidersBlock>
          <IncomeSlider {...{medianIncomes}}/>
          <HistorySlider/>
        </SlidersBlock>
      </Container>
      <Toggle/>

    </Wrapper>
  </>
}


