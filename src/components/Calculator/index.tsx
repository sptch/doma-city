import bg2 from 'assets/images/b2.png';
import { CalculatorWrapper, MapWrapper, Section } from '../styles';
import Map from './Map'
import Sidebar from './Sidebar'

export default function Vancouver(){

  return (
    <Section bg={bg2} id='calculator'>
      <CalculatorWrapper>
        <Sidebar/>
        <MapWrapper><Map/></MapWrapper>

      </CalculatorWrapper>
    </Section>
  )
}