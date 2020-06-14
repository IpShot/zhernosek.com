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
  media: ({ name }) => ({
    height: 140,
    backgroundSize: name === 'MiID' ? 'auto' : 'contain',
    backgroundColor: 'white',
  }),
}));

function getLogoUrl(project = 'default', logo = 'logo.png') {
  return `/${project.toLowerCase()}/${logo}`;
}

export default function ProjectCard(project, idx) {
  const { name, desc, logo, url } = project;
  const classes = useStyles({ name });
  const [isDialogOpen, setDialogVisibility] = React.useState(false);

  const handleClickCard = React.useCallback(() => {
    setDialogVisibility(true);
  }, []);

  const handleCloseDialog = React.useCallback(() => {
    setDialogVisibility(false);
  }, []);

  return (
    <Grid item key={idx} sm={6} xs={12}>
      <Card>
        <CardActionArea onClick={handleClickCard}>
          <CardMedia
            className={classes.media}
            image={getLogoUrl(name, logo)}
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
      <ProjectDialog
        project={project}
        open={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </Grid>
  );
}
