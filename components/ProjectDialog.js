import {
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
} from '@material-ui/core';
import Zoom from 'react-medium-image-zoom';
import { Skeleton } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { useImage } from 'react-image';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeBtn: {
    height: 48,
    width: 48,
    marginRight: theme.spacing(1),
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
  const { src, isLoading } = useImage({
    srcList: getScreenshotUrl(project, image),
    useSuspense: false,
  });
  const classes = useStyles();
  return (
    <Grid item sm={6} xs={12} className={classes.screenshotContainer}>
      {isLoading &&
        <Skeleton
          variant="rect"
          animation="wave"
          width="100%"
          height="195px" />}
      {!isLoading &&
        <Zoom overlayBgColorEnd="rgba(0, 0, 0, 0.7)">
          <img
            src={src}
            className={classes.screenshot}
            alt={image}
          />
        </Zoom>}
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
      <Box className={classes.header}>
        <DialogTitle id="dialog-title">
          {name}
        </DialogTitle>
        <IconButton onClick={onClose} className={classes.closeBtn} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>
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
