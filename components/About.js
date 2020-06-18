import { List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  about: {
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3),
      width: '100%',
    },
  },
  aboutLine: {
    padding: 0,
    paddingBottom: 4,
    alignItems: 'flex-start',
  },
  aboutLineValue: {
    color: theme.palette.text.highlight,
    paddingLeft: theme.spacing(1),
  },
}));

function getValue(key, data) {
  const value = data[key];
  return Array.isArray(value) ? value[0] : value;
}

function getTypographyComponent(key) {
  switch (key) {
    case 'Profession':
      return 'h1';
    case 'Humor':
      return 'a';
    default:
      return 'span';
  }
}

function getLinkParamsIfUrl(key, data) {
  const value = data[key];
  if (Array.isArray(value) && value[1]) {
    return {
      href: value[1],
      target: '_blank',
      rel: 'noopener',
    };
  } else {
    return {};
  }
}

function AboutLine(key, idx, data) {
  const classes = useStyles();
  return (
    <ListItem disableGutters key={idx} className={classes.aboutLine}>
      <Typography component="span" className={classes.aboutLineKey}>
        {key}:
      </Typography>
      <Typography
        className={classes.aboutLineValue}
        component={getTypographyComponent(key)}
        {...getLinkParamsIfUrl(key, data)}
      >
        {getValue(key, data)}
      </Typography>
    </ListItem>
  );
}

export default function About({ data }) {
  const classes = useStyles();
  return (
    <List disablePadding className={classes.about}>
      {Object.keys(data).map(AboutLine)}
    </List>
  );
}
