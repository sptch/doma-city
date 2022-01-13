import bg2 from 'assets/images/2.png';
import video1 from 'assets/videos/1.mp4';
import { useWindowSize } from 'react-use-size';
import { Section, TextLeft, Video } from '../styles';
import { Waypoint } from 'react-waypoint';

export default function SmartContract(){
  const {width,height} = useWindowSize()

  return (
    <Section bg={bg2} id='smart-contract'>
      <Waypoint
        onEnter={()=>console.log('smart enter')}
        onLeave={()=>console.log('smart leave')}
      />
      <div>
        <Video
          id="smart-contract-video"
          {...{width, height}}
        >
          <source src={video1} />
        </Video>
      </div>
      <TextLeft>
        <div>
          <h2>A platform for equitable housing</h2>
          <p>
            All around the world, real estate markets are hurting real
            people. With no prospect of ever owning a home, an entire
            generation has resigned itself to a lifetime of rent. It is
            time we change this unsustainable mode of urban living.
          </p>
          <p>
            Bridging the great divide between renting and owning a home,
            DOMA leverages the principles of the new token economy to make
            housing accessible to everyone. Designed for a fair
            distribution of urban value, DOMA works as a platform
            cooperative, owned and run by its users.
          </p>
          <p>
            A flexible and secure investment into the sharing economy of
            tomorrow, DOMA triggers a shift towards affordable, inclusive,
            and sustainable cities.
          </p>
        </div>
      </TextLeft>
    </Section>
  )
}