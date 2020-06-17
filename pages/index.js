import {
  Box,
  Grid,
  Avatar,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Divider,
  useMediaQuery,
} from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { PROFILE, SKILLS, PORTFOLIO, FEEDBACKS, OWN_PROJECTS } from '../data';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import Feedback from '../components/Feedback';

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 200,
    width: 200,
    '@media (max-width: 350px)': {
      height: 150,
      width: 150,
    },
  },
  profile: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  about: {
    paddingLeft: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3),
      paddingLeft: 0,
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

function getAboutValue(key) {
  const value = PROFILE[key];
  return Array.isArray(value) ? value[0] : value;
}

function getAboutValueTypographyComponent(key) {
  switch (key) {
    case 'Profession':
      return 'h1';
    case 'Humor':
      return 'a';
    default:
      return 'span';
  }
}

function getAboutValueLinkParamsIfUrl(key) {
  const value = PROFILE[key];
  if (Array.isArray(value) && value[1]) {
    return {
      href: 'https://youtu.be/p3PfKf0ndik',
      target: '_blank',
      rel: 'noopener',
    };
  } else {
    return {};
  }
}

function AboutLine(key, idx) {
  const classes = useStyles();
  return (
    <ListItem disableGutters key={idx} className={classes.aboutLine}>
      <Typography component="span" className={classes.aboutLineKey}>
        {key}:
      </Typography>
      <Typography
      className={classes.aboutLineValue}
        component={getAboutValueTypographyComponent(key)}
        {...getAboutValueLinkParamsIfUrl(key)}
      >
        {getAboutValue(key)}
      </Typography>
    </ListItem>
  );
}

function About() {
  const classes = useStyles();
  return (
    <List disablePadding className={classes.about}>
      {Object.keys(PROFILE).map(AboutLine)}
    </List>
  );
}

function Profile() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Box className={classes.profile}>
      <Avatar
        alt={PROFILE.Who}
        src="/avatar.jpeg"
        variant="rounded"
        className={classes.avatar}
      />
      <Divider orientation={isSmallDevice ? 'horizontal' : 'vertical'} />
      <About />
    </Box>
  );
}

function Skill({ name, level }, idx) {
  const classes = useStyles();
  return (
    <ListItem key={idx} alignItems="center" className={classes.skillItem}>
      <ListItemText disableTypography>
        <Typography component="span" variant="h3">
          {name}
        </Typography>
      </ListItemText>
      <ListItemIcon>
        <Rating value={level} precision={0.5} readOnly />
      </ListItemIcon>
    </ListItem>
  );
}

function SkillsSection([ section, skills ], idx) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <List key={idx} disablePadding>
      <ListItem
        button
        onClick={handleClick}
        className={classes.skillsSectionName}
      >
        <ListItemText disableTypography className={classes.skillsSectionText}>
          <Typography component="h3" variant="h3">
            {section}
          </Typography>
        </ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List>
          {skills.map(Skill)}
        </List>
      </Collapse>
    </List>
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

export default function HomePage() {
  return (
    <Layout>
      <Profile />
      <Skills />
      <Portfolio />
      <Feedbacks />
      <OwnProjects />
    </Layout>
  );
}
