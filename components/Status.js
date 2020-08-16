import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useXMLHttpRequest from '../utils/useXMLHttpRequest';

const useStyles = makeStyles((theme) => ({
  box: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  status: {
    color: theme.palette.text.gold,
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
    <Box pb={1} className={classes.box}>
      <Typography component="span" className={classes.status}>Status: </Typography>
      <Typography component="span" color="secondary">{status}</Typography>
    </Box>
  );
}
