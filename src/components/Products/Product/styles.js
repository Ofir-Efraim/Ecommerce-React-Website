import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  text: {
    textAlign: 'right'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menu: {
    padding: '6px 8px 6px 10px',
    height: '28px',
    lineHeight: '14px',
    fontSize: '12px',
    color: '#159A9C',
    background:'#DEEFE7',
    border: '0',
  },
}));