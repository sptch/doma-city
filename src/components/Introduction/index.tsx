import { Close, Player, Section, Video, YouTube } from "../styles";
import bg1 from 'assets/images/1.png';
import play from 'assets/images/play.png';
import video2 from 'assets/videos/2.mp4';
import { useWindowSize } from "react-use-size";
import { useState } from "react";
import { Waypoint } from 'react-waypoint';

export default function Introduction(){
  const {width,height} = useWindowSize()
  const [open, setOpen] = useState(false);
  return (

    <Section bg={bg1} id='introduction'>
      <Waypoint
        onEnter={()=>console.log('intro enter')}
        onLeave={()=>console.log('intro leave')}
      />
      {open &&
        <>
          <Close onClick={()=>setOpen(false)}/>
          <YouTube
            videoId={'5G_1yGRldOM'}
            opts={{
              width: String(width),
              height: String(height)
            }}              
            onEnd={()=>setOpen(false)}
            onError={()=>setOpen(false)} 
          />
        </>}
        <>
          <div>
            <Video
              id="introduction-video"
              {...{width, height}}
            >
              <source src={video2} />
            </Video>
          </div>
          {!open && <Player>
            <div>
                <img src={play} onClick={()=>setOpen(true)} />
            </div>
          </Player>}
        </>
    </Section>
  )
}