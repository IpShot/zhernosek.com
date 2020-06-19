import {
  Box,
  Grid,
  Typography,
  Link,
  List,
  Divider,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { PROFILE, SKILLS, PORTFOLIO, FEEDBACKS, OWN_PROJECTS } from '../data';
import Layout from '../components/Layout';
import Avatar from '../components/Avatar';
import Socials from '../components/Socials';
import About from '../components/About';
import SkillsSection from '../components/SkillsSection';
import ProjectCard from '../components/ProjectCard';
import Feedback from '../components/Feedback';

const useStyles = makeStyles((theme) => ({
  profile: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  profileDivider: {
    height: 'auto',
    margin: theme.spacing(0, 3),
    [theme.breakpoints.down('xs')]: {
      height: 1,
      margin: 0,
      marginTop: theme.spacing(3),
    },
  },
  skillsList: {
    paddingTop: theme.spacing(1),
    paddingBottom: 0,
  },
  skillsSectionName: {
    padding: theme.spacing(1, 0),
  },
  skillsSectionText: {
    margin: 0,
  },
  skillItem: {
    padding: theme.spacing(0.5, 0),
    paddingLeft: theme.spacing(2),
  },
  portfolioList: {
    paddingTop: theme.spacing(2),
  },
  feedbacksList: {
    paddingTop: theme.spacing(2),
    paddingBottom: 0,
  },
}));

function Profile() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Box className={classes.profile}>
      <Box display="flex" flexDirection="column">
        <Avatar alt={PROFILE.ABOUT.Who} image="/avatar.jpeg" />
        <Socials links={PROFILE.SOCIALS} />
      </Box>
      <Divider
        flexItem
        orientation={isSmallDevice ? 'horizontal' : 'vertical'}
        className={classes.profileDivider}
      />
      <About data={PROFILE.ABOUT} />
    </Box>
  );
}

function Skills() {
  const classes = useStyles();
  return (
    <Box pt={6}>
      <Typography variant="h2" gutterBottom>
        Skills
      </Typography>
      <Divider />
      <List className={classes.skillsList}>
        {Object.entries(SKILLS).map(SkillsSection)}
      </List>
    </Box>
  );
}

function Portfolio() {
  const classes = useStyles();
  return (
    <Box pt={4}>
      <Typography variant="h2" gutterBottom>
        Portfolio
      </Typography>
      <Divider />
      <Grid container spacing={2} className={classes.portfolioList}>
        {PORTFOLIO.map(ProjectCard)}
      </Grid>
    </Box>
  );
}

function Feedbacks() {
  const classes = useStyles();
  return (
    <Box pt={6}>
      <Typography variant="h2" gutterBottom>
        Feedbacks
      </Typography>
      <Divider />
      <List className={classes.feedbacksList}>
        {FEEDBACKS.map(Feedback)}
      </List>
    </Box>
  );
}

function OwnProjects() {
  const classes = useStyles();
  return (
    <Box pt={6}>
      <Typography variant="h2" gutterBottom>
        Own Projects
      </Typography>
      <Divider />
      <Grid container spacing={2} className={classes.portfolioList}>
        {OWN_PROJECTS.map(ProjectCard)}
      </Grid>
    </Box>
  );
}

function Copyright() {
  const classes = useStyles();
  return (
    <Box pt={6}>
    </Box>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <Profile />
      <Skills />
      <Portfolio />
      <Feedbacks />
      <OwnProjects />
      <Copyright />
    </Layout>
  );
}
