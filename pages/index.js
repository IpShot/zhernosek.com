import { Grid, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    flexGrow: 1,
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  gridItem: {
    height: '100%',
    boxSizing: 'border-box',
  },
  avatar: {
    height: 200,
    width: 200,
    [theme.breakpoints.down('xs')]: {
      height: 150,
      width: 150,
    },
    '@media (max-width: 350px)': {
      height: 120,
      width: 120,
    },
  },
}));

function About() {
  return (
    <Typography component="span" gutterBottom>
      Hello my dear visitor
    </Typography>
  );
}

function Profile() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item xs={6} className={classes.gridItem}>
        <Avatar
          alt="Roman Zhernosek"
          src="/avatar.jpeg"
          variant="square"
          className={classes.avatar}
        />
      </Grid>
      <Grid item xs={6} className={classes.gridItem}>
        <About />
      </Grid>
    </Grid>
  );
}

function Skills() {
  return (
    <Typography component="h2" gutterBottom>
      Skills
    </Typography>
  );
}

function Portfolio() {
  return (
    <Typography component="h2" gutterBottom>
      Portfolio
    </Typography>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <Profile />
      <Skills />
      <Portfolio />
    </Layout>
  );
}
