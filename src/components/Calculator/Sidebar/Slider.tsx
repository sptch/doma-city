import { Slider } from "@material-ui/core"
import { withStyles } from '@material-ui/styles'

export const StyledSlider = withStyles({
  root: {
    color: '#ccc',
    height: 5,
    padding: '15px 0',
  },
  thumb: {
    height: '0.8rem',
    width: '0.8rem',
    backgroundColor: '#000',
    borderRadius: '0.4rem',
    marginTop: '-0.3rem',
    boxSizing: 'border-box',
    marginLeft: '-0.4rem',
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
  },
  valueLabel:{
    backgroundColor: 'none',
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
    height: 5,
    opacity: 1,
    backgroundColor: '#ccc',
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