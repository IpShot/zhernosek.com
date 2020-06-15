import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function getAvatarPadding(project, theme) {
  switch (project) {
    case 'Teem':
      return 10;
    case 'JobNinja':
      return 8;
    case 'MiID':
      return 4;
    case 'LightYear':
      return 2;
    default:
      return 0;
  }
}

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
  avatar: ({ project }) => ({
    height: 60,
    width: 60,
    padding: getAvatarPadding(project, theme),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    backgroundColor: '#fff',
    '& img': {
      objectFit: 'contain',
    }
  }),
}));

function getLogoUrl(project = 'default', logo = 'logo.png') {
  return `/${project.toLowerCase()}/${logo}`;
}

export default function Feedback(data, idx) {
  const { project, logo, feedback } = data;
  const classes = useStyles({ project });
  return (
    <ListItem key={idx} alignItems="center" className={classes.container}>
      <ListItemIcon>
        <Avatar
          alt={project}
          src={getLogoUrl(project, logo)}
          className={classes.avatar} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography component="span" variant="h6" display="block">
            {project}
          </Typography>}
        secondary={
          <Typography component="span">
            {feedback}
          </Typography>} />
    </ListItem>
  );
}
