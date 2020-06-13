import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import Zoom from 'react-medium-image-zoom';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
  },
  screenshotContainer: {
    paddingTop: theme.spacing(3),
    '& [aria-label="Zoom image"]': {
      outline: 'none',
      transitionDuration: '0.25s',
      '&:focus,&:hover': {
        backgroundColor: `rgba(0, 0, 0, 0.25)`,
      },
    },
  },
  screenshot: {
    width: '100%',
    height: '100%',
  },
}));

function getScreenshotUrl(project, image) {
  return `/${project.toLowerCase()}/${image}.png`;
}

function Screenshot({ project, image }) {
  const classes = useStyles();
  return (
    <Grid item sm={6} xs={12} className={classes.screenshotContainer}>
      <Zoom overlayBgColorEnd="rgba(0, 0, 0, 0.7)">
        <img
          src={getScreenshotUrl(project, image)}
          className={classes.screenshot}
        />
      </Zoom>
    </Grid>
  );
}

export default function ProjectDialog({ project, open, onClose }) {
  const { name, desc, details, url, images } = project;
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="body"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">{name}</DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          {details}
        </DialogContentText>
        <Grid container spacing={1}>
          {images && images.map((img, idx) =>
            <Screenshot key={idx} project={name} image={img} />
          )}
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
