import bg2 from 'assets/images/b2.png';
import vancouver from 'assets/videos/vancouver.mp4';
import { useWindowSize } from 'react-use-size';
import { Section, TextLeft, Video } from '../styles';

export default function Vancouver(){
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
      <TextLeft>
        <div>
          <h2>Affordability heatmap</h2>
          <p>
            It's harder and harder for people to access affordable housing. Prices have been growing much faster than wages; domestic spaces are treated as assets rather than homes.

          </p>
          <p>
            CST with the support of 221a developed a prototype for a dashboard, that helps see how it feels to live in a city amidst housing crises, using the city of Vancouver as a case study.
          </p>

        </div>
      </TextLeft>
    </Section>
  )
}