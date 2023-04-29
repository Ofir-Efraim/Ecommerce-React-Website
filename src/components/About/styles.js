import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  title:{
      textAlign:'center',
  },  
  image:{
    display:'flex',
    justifyContent:'center',
    width:'200px',
    height:'200px',
    marginRight:'auto',
    marginLeft:'auto',
  },
  toProducts:{
    background: 'crimson',
    borderRadius: '11px',
    marginTop:'30px',
    boxSizing: 'border-box',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'Mija,-apple-system,BlinkMacSystemFont,Roboto,"Roboto Slab","Droid Serif","Segoe UI",system-ui,Arial,sans-serif',
    fontSize: '1.15em',
    fontWeight: '700',
    justifyContent: 'center',
    marginRight:'auto',
    marginLeft:'auto',
    lineHeight: '33.4929px',
    padding: '.8em 1em',
    textAlign: 'center',
    textDecoration: 'none',
    textShadow: 'rgba(0, 0, 0, .3) 1px 1px 1px',
    transition: 'all .2s ease-in-out',
    userSelect: 'none',
    touchAction: 'manipulation',
    width: '50%',
    wordBreak: 'break-word',
    border: '0',
    '&:active':{
    borderBottomStyle: 'none',
    borderColor: '#dadada',
    boxShadow: 'rgba(0, 0, 0, .3) 0 3px 3px inset',
    outline: '0'
    },
    '&:hover':{
    borderBottomStyle: 'none',
    borderColor: '#e62143',
    background:'#FF4858'
    }
  },
}));