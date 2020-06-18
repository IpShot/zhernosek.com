import {
  Box,
  Grid,
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
import Avatar from '../components/Avatar';
import About from '../components/About';
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
    background: 'transparent',
    margin: theme.spacing(0, 3),
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
      <Box flexDirection="column">
        <Avatar alt={PROFILE.Who} image="/avatar.jpeg" />
      </Box>
      <Divider
        flexItem
        orientation={isSmallDevice ? 'horizontal' : 'vertical'}
        className={classes.profileDivider}
      />
      <About data={PROFILE} />
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
