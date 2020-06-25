import { useState, useCallback } from 'react';
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
import Label from './Label';

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
  const { name, desc, logo, url, label } = project;
  const classes = useStyles({ name });
  const [isDialogOpen, setDialogVisibility] = useState(false);

  const handleClickCard = useCallback(() => {
    setDialogVisibility(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setDialogVisibility(false);
  }, []);

  return (
    <Grid item key={idx} sm={6} xs={12}>
      <Card>
        <CardActionArea onClick={handleClickCard}>
          {label && <Label text={label} />}
          <CardMedia
            className={classes.media}
            image={getLogoUrl(name, logo)}
            title={`${name} logo`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {name}
            </Typography>
            <Typography noWrap variant="body2" component="p">
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
