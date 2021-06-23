import { Slider, withStyles } from "@material-ui/core"

export const StyledSlider = withStyles({
  root: {
    color: '#fff',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: '1rem',
    width: '0.2rem',
    backgroundColor: '#fff',
    borderRadius:0,
    marginTop: '-0.5rem',
    marginLeft: '-0.1rem',
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
  rail: {
    height: 1.5,
    opacity: 0.5,
    backgroundColor: '#bfbfbf',
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