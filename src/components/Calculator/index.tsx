import bg2 from 'assets/images/b2.png';
import vancouver from 'assets/videos/vancouver.mp4';
import { useWindowSize } from 'react-use-size';
import { Section, TextLeft, Video } from '../styles';
import Map from './Map'
import Sidebar from './Sidebar'

export default function Vancouver(){
  const {width,height} = useWindowSize()

  return (
    <Section bg={bg2} id='smart-contract'>
      <div>
        <Map/>
      </div>
      <Sidebar/>
    </Section>
  )
}