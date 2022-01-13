import HistorySlider from "./HistorySlider"
import IncomeSlider from "./IncomeSlider"
import Toggle from "./Toggle/";
import { useSalariesQuery } from "generated";
import { Wrapper, Container, SlidersBlock } from "./styles";
import { Text } from "components/styles";

export  default function Sidebar(){

  const { data:salaries } = useSalariesQuery()

  return <>
    <Wrapper>
      <Container>
        <SlidersBlock>
          <IncomeSlider {...{salaries}}/>
          <HistorySlider/>
        </SlidersBlock>
      </Container>
      <Toggle/>

    </Wrapper>
  </>
}


