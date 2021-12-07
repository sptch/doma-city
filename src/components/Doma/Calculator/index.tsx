import bg2 from 'assets/images/b2.png';
import vancouver from 'assets/videos/vancouver.mp4';
import Calculator from 'components/Calculator';
import { useWindowSize } from 'react-use-size';
import { Section, TextLeft, Video } from '../styles';

export default function CalculatorComponent(){
  const {width,height} = useWindowSize()

  return (
    <Section bg={bg2} id='calculator'>
      <Calculator/>
    </Section>
  )
}