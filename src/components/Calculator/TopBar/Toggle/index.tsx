import { atoms } from "misc";
import { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { useRecoilState } from "recoil";
import { Handle, HandleOutline, ToggleComponent, Wrapper } from "./styles";


export default function Toggle(){
  const [hovered, setHovered] = useState(false)
  const [mode, setMode] = useRecoilState(atoms.mode)

  const { left } = useSpring({left: mode==='price'?'calc( 0% - 0rem )':'calc( 100% - 1.3rem )'})
  const { opacity } = useSpring({opacity: hovered?'1':'0'})

  return (
    <Wrapper>
      <h4>
        Buy
      </h4>

      <ToggleComponent onPointerOver={()=>setHovered(true)} onPointerLeave={()=>setHovered(false)} onClick={()=>setMode(mode==='rent'?'price':'rent')}>
        <HandleOutline style={{
          opacity,
          left
        }}/>
        <Handle style={{
          left
        }}/>
      </ToggleComponent>

      <h4>
        Rent
      </h4>
    </Wrapper>
  )
}