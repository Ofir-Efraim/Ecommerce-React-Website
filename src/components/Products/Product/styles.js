import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    paddingTop: '100%', // 1:1

    marginLeft:'auto',
    marginRight:'auto',
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
    color: '#DEEFE7',
    background:'#002333',
    border: '0',
  },
}));