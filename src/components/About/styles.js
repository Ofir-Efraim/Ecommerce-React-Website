import {
  makeStyles
} from '@material-ui/core/styles';

export default makeStyles(() => ({
  title: {
    textAlign: 'center',
    direction: "rtl",
    color: "#181818",

  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: "100%",
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media (min-width: 780px)': {
      width: '500px',
      height: '500px',
    },
  },
  toProducts: {
    background: '#5e8749',
    borderRadius: '11px',
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'Mija,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif',
    fontSize: '1.15em',
    fontWeight: '700',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    lineHeight: '33.4929px',
    padding: '.8em 1em',
    textAlign: 'center',
    textDecoration: 'none',
    textShadow: 'rgba(0, 0, 0, .3) 1px 1px 1px',
    transition: 'all .2s ease-in-out',
    userSelect: 'none',
    touchAction: 'manipulation',
    width: '100%',
    wordBreak: 'break-word',
    border: '0',
    '&:active': {
      borderBottomStyle: 'none',
      borderColor: '#dadada',
      boxShadow: 'rgba(0, 0, 0, .3) 0 3px 3px inset',
      outline: '0'
    },
    '&:hover': {
      borderBottomStyle: 'none',
      borderColor: '#72bf6a',
      background: '#72bf6a'
    }
  },
}));