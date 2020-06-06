import {
  Box,
  Grid,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Divider,
} from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { SKILLS } from '../constants';
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
    paddingTop: 8,
    paddingBottom: 0,
  },
  skillsSectionName: {
    padding: '8px 0',
  },
  skillItem: {
    padding: '5px 0 5px 16px',
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
    <Grid container className={classes.gridContainer}>
      <Grid item xs={6} className={classes.gridItem}>
        <Avatar
          alt="Roman Zhernosek"
          src="/avatar.jpeg"
          variant="rounded"
          className={classes.avatar}
        />
      </Grid>
      <Grid item xs={6} className={classes.gridItem}>
        <About />
      </Grid>
    </Grid>
  );
}

function Skill({ name, level }, idx) {
  const classes = useStyles();
  return (
    <ListItem key={idx} alignItems="center" className={classes.skillItem}>
      <ListItemText disableTypography>
        <Typography variant="h4">
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
        className={classes.skillsSectionName}>
        <ListItemText disableTypography>
          <Typography variant="h3">
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
    <Box pt={8}>
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
  return (
    <Box pt={6}>
      <Typography variant="h2" gutterBottom>
        Portfolio
      </Typography>
      <Divider />
    </Box>
  );
}

function Feedback() {
  return (
    <Box pt={6}>
      <Typography variant="h2" gutterBottom>
        Feedback
      </Typography>
      <Divider />
    </Box>
  );
}

function OwnProjects() {
  return (
    <Box pt={6}>
      <Typography variant="h2" gutterBottom>
        Own Projects
      </Typography>
      <Divider />
    </Box>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <Profile />
      <Skills />
      <Portfolio />
      <Feedback />
      <OwnProjects />
    </Layout>
  );
}
