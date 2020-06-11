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

const useStyles = makeStyles((theme) => ({
  root: {

  },
  media: {
    height: 140,
  },
}));

function getImageUrl(name = 'default') {
  return `/${name.toLowerCase()}.png`;
}

export default function ProjectCard({ name, desc, img, url }, idx) {
  const classes = useStyles();
  return (
    <Grid item key={idx} sm={6} xs={12}>
      <Card className={classes.root}>
        <CardActionArea>
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
        <CardActions>
          <Button size="small" color="primary">
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
