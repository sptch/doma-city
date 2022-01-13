import bg2 from 'assets/images/b2.png';
import { useLayout } from 'misc';
import { CalculatorWrapper, MapWrapper, Section } from '../styles';
import BottomBar from './BottomBar';
import { BottomBarPlaceholder } from './BottomBar/styles';
import Map from './Map'
import Sidebar from './Sidebar'
import TopBar from './TopBar';

export default function Vancouver(){
  const layout = useLayout()
  return (
    <Section bg={bg2} id='calculator'>
      <CalculatorWrapper>
        {layout==='desktop' && <Sidebar/>}
        {layout==='mobile' && <TopBar/>}
        <MapWrapper><Map/></MapWrapper>
        {layout==='mobile' && <BottomBar/>}
        {layout==='mobile' && <BottomBarPlaceholder/>}

      </CalculatorWrapper>
    </Section>
  )
}