import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProjectDialog from './ProjectDialog';

const useStyles = makeStyles(() => ({
  media: {
    height: 140,
  },
}));

function getImageUrl(name = 'default') {
  return `/${name.toLowerCase()}.png`;
}

export default function ProjectCard(project, idx) {
  const { name, desc, img, url } = project;
  const classes = useStyles();
  const [isDialogOpen, setDialogVisibility] = React.useState(false);

  function handleClickCard() {
    setDialogVisibility(true);
  }

  function handleCloseDialog() {
    setDialogVisibility(false);
  }

  return (
    <Grid item key={idx} sm={6} xs={12}>
      <Card>
        <CardActionArea onClick={handleClickCard}>
          <CardMedia
            className={classes.media}
            image={getImageUrl(name)}
            title={`${name} logo`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography noWrap variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {isDialogOpen && (
        <ProjectDialog
          project={project}
          open={isDialogOpen}
          onClose={handleCloseDialog} />)}
    </Grid>
  );
}
