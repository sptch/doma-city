import bg2 from 'assets/images/4.png';
import vancouver from 'assets/videos/vancouver.mp4';
import { useWindowSize } from 'react-use-size';
import { Section, Text, Video } from '../styles';

export default function Loading(){
  const {width,height} = useWindowSize()

  return (
    <Section bg={bg2} id='smart-contract'>
      <div>
        <Video
          id="affordability-map"
          {...{width, height}}
        >
          <source src={vancouver} />
        </Video>
      </div>
      <div style={{
        position:'fixed', 
        zIndex: 100, 
        justifyContent: 'center', 
        alignItems:'center', 
        display:'flex',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }}>
        <Text style={{color: 'black', width: 'fit-content'}}>
          <h2>Loading...</h2>
        </Text>
      </div>
    </Section>
  )
}