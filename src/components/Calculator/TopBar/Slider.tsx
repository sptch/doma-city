import { Slider } from "@material-ui/core"
import { withStyles } from '@material-ui/styles'

export const StyledSlider = withStyles({
  root: {
    color: 'rgba(0,0,0,0)',
    height: 5,
    padding: '15px 0',
  },
  thumb: {
    height: '20px',
    width: '20px',
    backgroundColor: '#000',
    borderRadius: '10px',
    marginTop: '-5px',
    boxSizing: 'border-box',
    marginLeft: '-10px',
    // boxShadow: BoxShadowActive,
    '&:focus, &:hover, &$active': {
      // boxShadow: BoxShadowInactive,
      '@media (hover: none)': {
        // boxShadow: BoxShadowActive,
      },
    },
  },
  active: {},
  track: {
    height: 1.5,
    visibility: 'hidden'
  },
  valueLabel:{
    backgroundColor: 'black',
    padding: '0 1.5rem',
    borderRadius: '5px',
    textTransform: 'uppercase'
  },
  rail: {
    height: 8,
    borderRadius: 4,
    opacity: 1,
    background: 'linear-gradient(to left,  rgb(103, 180, 186), rgb(95, 143, 197), rgb(80, 140, 62), rgb(121, 146, 28), rgb(171, 161, 14), rgb(223, 177, 6), rgb(243, 150, 6), rgb(236, 95, 21), rgb(190, 65, 18), rgb(138, 43, 10), rgb(138, 43, 10))',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 0,
    width: 0,
    marginTop: 0,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);

export const StyledSliderReverse = withStyles({
  root: {
    color: 'rgba(0,0,0,0)',
    height: 5,
    padding: '15px 0',
  },
  thumb: {
    height: '20px',
    width: '20px',
    backgroundColor: '#000',
    borderRadius: '10px',
    marginTop: '-5px',
    boxSizing: 'border-box',
    marginLeft: '-10px',
    // boxShadow: BoxShadowActive,
    '&:focus, &:hover, &$active': {
      // boxShadow: BoxShadowInactive,
      '@media (hover: none)': {
        // boxShadow: BoxShadowActive,
      },
    },
  },
  active: {},
  track: {
    height: 1.5,
    visibility: 'hidden'
  },
  valueLabel:{
    backgroundColor: 'black',
    padding: '0 1rem',
    borderRadius: '5px',
  },
  valueLabelCircle:{
    backgroundColor: 'none',
    opacity: 0,
    visibility: 'hidden',
  },
  valueLabelLabel:{
    color: 'black',
  },
  rail: {
    height: 8,
    borderRadius: 4,
    opacity: 1,
    background: 'linear-gradient(to right, rgb(80, 140, 62), rgb(121, 146, 28), rgb(171, 161, 14), rgb(223, 177, 6), rgb(243, 150, 6), rgb(236, 95, 21), rgb(190, 65, 18), rgb(138, 43, 10), rgb(138, 43, 10))',
  },
  mark: {
    backgroundColor: '#ff0000',
    height: 0,
    width: 0,
    marginTop: 0,
  },
  markActive: {
    opacity: 1,
    backgroundColor: 'currentColor',
  },
})(Slider);