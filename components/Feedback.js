import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'flex-start',
    borderRadius: theme.borderRadius,
    marginTop: theme.spacing(2),
    '&:first-child': {
      marginTop: 0,
    },
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    height: 60,
    width: 60,
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      height: 40,
      width: 40,
    },
  },
}));

function getAvatarUrl(project = 'default') {
  return `/${project.toLowerCase()}/owner.jpeg`;
}

export default function Feedback(data, idx) {
  const { project, feedback, owner } = data;
  const classes = useStyles();
  return (
    <ListItem key={idx} alignItems="center" className={classes.container}>
      <ListItemIcon>
        <Avatar
          alt={owner}
          src={getAvatarUrl(project)}
          className={classes.avatar} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography component="span" variant="h6" display="block">
            {owner} @&nbsp;{project}
          </Typography>}
        secondary={
          <Typography component="span">
            {feedback}
          </Typography>} />
    </ListItem>
  );
}
