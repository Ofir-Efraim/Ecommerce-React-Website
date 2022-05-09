import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    '@media (max-width:650px)': { 
      marginTop: '20%'
    },
    marginTop: '8.5%',
    marginBottom: '2%',
    marginRight: '2%',
    textAlign: 'right',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
    fontFamily: "Open Sans, sans-serif",
    fontSize: '16px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#000',
    cursor: 'pointer',
    border: '3px solid',
    padding: '0.25em 0.5em',
    boxShadow: '1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
    position: 'relative',
    userSelect: 'none',
    webkitUserSelect: 'none',
    touchAction: 'manipulation',
    '@media (min-width: 768px)': {
      padding: '0.25em 0.75em',
  },
  '&:active': {
    boxShadow: '0px 0px 0px 0px',
    top: '5px',
    left: '5px',
  },
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));