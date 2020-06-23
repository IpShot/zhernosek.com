import { useState, useEffect } from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import lifetime from '../utils/lifetime';

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
    '&> a:hover, &> a:focus': {
      color: theme.palette.text.gold,
    },
  },
  aboutLineValue: {
    color: theme.palette.text.highlight,
    paddingLeft: theme.spacing(1),
    outline: 'none',
  },
}));

function getValue(key, value) {
  if (key === 'Lifetime') {
    return lifetime(value);
  }
  return Array.isArray(value) ? value[0] : value;
}

function getTypographyComponent(key, value) {
  if (key === 'Who') return 'h1';
  if (Array.isArray(value)) return 'a';
  return 'span';
}

function getLinkParamsIfArray(value) {
  if (Array.isArray(value) && value[1]) {
    return {
      href: value[1],
      target: '_blank',
      rel: 'noopener',
    };
  }
  return {};
}

function AboutLine([ key, value ], idx) {
  const classes = useStyles();
  const [renderValue, setRenderValue] = useState(getValue(key, value));

  useEffect(() => {
    if (key === 'Lifetime') {
      const id = setInterval(() => {
        setRenderValue(lifetime(value));
      }, 1000);
      return () => clearInterval(id);
    }
  }, [key, value]);

  return (
    <ListItem disableGutters key={idx} className={classes.aboutLine}>
      <Typography component="span" className={classes.aboutLineKey}>
        {key}:
      </Typography>
      <Typography
        className={classes.aboutLineValue}
        component={getTypographyComponent(key, value)}
        {...getLinkParamsIfArray(value)}
      >
        {renderValue}
      </Typography>
    </ListItem>
  );
}

export default function About({ data }) {
  const classes = useStyles();
  return (
    <List disablePadding className={classes.about}>
      {Object.entries(data).map(AboutLine)}
    </List>
  );
}
