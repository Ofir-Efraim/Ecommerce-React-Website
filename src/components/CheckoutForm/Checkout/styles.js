import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link:{
  backgroundColor: '#0078d0',
  margin:'20px 0',
  border: '0',
  borderRadius: '56px',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'system-ui,-apple-system,system-ui,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif',
  fontSize: '18px',
  fontWeight: '600',
  outline: '0',
  padding: '16px 21px',
  position: 'relative',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'all .3s',
  userSelect: 'none',
  webkitUserSelect: 'none',
  touchAction: 'manipulation',
  '&:before':{
  backgroundColor: 'initial',
  backgroundImage: 'linear-gradient(#fff 0, rgba(255, 255, 255, 0) 100%)',
  borderRadius: '125px',
  content: "",
  height: '50%',
  left: '4%',
  opacity: '.5',
  position: 'absolute',
  top: '0',
  transition: 'all .3s',
  width: '92%',
  },
  '&:hover':{
    boxShadow: 'rgba(255, 255, 255, .2) 0 3px 15px inset, rgba(0, 0, 0, .1) 0 3px 5px, rgba(0, 0, 0, .1) 0 10px 13px',
    transform: 'scale(1.05)',
  }
  }
}));