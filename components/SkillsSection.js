import { useState } from 'react';
import {
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

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

export default function SkillsSection([ section, skills ], idx) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

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
