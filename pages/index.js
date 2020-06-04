import {
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
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
  skillsList: {

  },
  skillItem: {
    padding: '8px 0',
  },
  skillItemText: {
    fontSize: 20,
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

function Skill({ name, level }) {
  const classes = useStyles();
  return (
    <ListItem alignItems="space-between" className={classes.skillItem}>
        <ListItemText primary={name} primaryTypographyProps={{ className: classes.skillItemText }}/>
        <ListItemIcon>
          <Rating value={level} readOnly />
        </ListItemIcon>
    </ListItem>
  );
}

function Skills() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Skills
      </Typography>
      <List className={classes.skillsList}>
        <Skill name="React" level={5} />
      </List>
    </div>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <Profile />
      <Skills />
    </Layout>
  );
}
