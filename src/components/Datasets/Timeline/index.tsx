import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip'
import PropTypes from 'prop-types'

function ValueLabelComponent({ children, open, value }:any) {

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

export default function MapDataLayer () {
  const [layers, setLayers] = useRecoilState<object>(atoms.tileLayers);
  const [year] = useRecoilState<any>(atoms.taxesYear)
  
  useEffect(()=>{console.log(layers)},[layers])
  return <div style={{zIndex:10}}><Slider
            
            // ValueLabelComponent={ValueLabelComponent}
            aria-label="custom thumb label"
            defaultValue={20}
          />
        </div>
}