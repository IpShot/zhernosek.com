import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useXMLHttpRequest from '../utils/useXMLHttpRequest';

const useStyles = makeStyles((theme) => ({
  box: {
    background: theme.palette.background.dark,
    textAlign: 'center',
  },
  status: {
    color: theme.palette.text.gold,
  },
  text: {
    display: 'inline-block',
    minWidth: 120,
    textAlign: 'left',
    color: theme.palette.secondary.main,
  },
}));

function getStatus(response, status) {
  switch (status) {
    case 'success':
      return response;
    case 'error':
    default:
      return 'looking for work';
    case 'loading':
      return 'checking...';
  }
}

export default function Status() {
  const [response, requestStatus] = useXMLHttpRequest('GET', '/status');
  const status = getStatus(response, requestStatus);
  const classes = useStyles();
  return (
    <Box py={1} className={classes.box}>
      <Typography component="span" className={classes.status}>Status: </Typography>
      <Typography component="span" className={classes.text}>{status}</Typography>
    </Box>
  );
}
