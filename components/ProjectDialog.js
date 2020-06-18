import {
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import Zoom from 'react-medium-image-zoom';
import { Skeleton } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useImage } from 'react-image';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  closeBtn: {
    height: 48,
    width: 48,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  url: {
    color: theme.palette.text.secondary,
    outline: 'none',
    '&:focus,&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  pTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: theme.palette.text.gold,
    paddingTop: 10,
    paddingRight: theme.spacing(1),
  },
  stack: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  stackArray: {
    display: 'flex',
    flexWrap: 'wrap',
    color: theme.palette.text.highlight,
  },
  tagContainer: {
    display: 'inline-block',
    padding: theme.spacing(0.5),
  },
  tag: {
    display: 'block',
    padding: theme.spacing(1),
    borderRadius: theme.borderRadius,
    backgroundColor: theme.palette.action.hover,
  },
  description: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  screenshotContainer: {
    paddingTop: theme.spacing(3),
    '& [aria-label="Zoom image"]': {
      outline: 'none',
      transitionDuration: '0.25s',
      '&:focus,&:hover': {
        backgroundColor: theme.palette.image.hover,
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
  const theme = useTheme();

  return (
    <Grid item sm={6} xs={12} className={classes.screenshotContainer}>
      {isLoading &&
        <Skeleton
          variant="rect"
          animation="wave"
          width="100%"
          height="195px" />}
      {!isLoading &&
        <Zoom
          overlayBgColorEnd="rgba(0, 0, 0, 0.7)"
          wrapStyle={{ border: theme.imageBorder }}>
          <img
            src={src}
            className={classes.screenshot}
            alt={image}
          />
        </Zoom>}
    </Grid>
  );
}

function Tag(tag, idx) {
  const classes = useStyles();
  return (
    <span key={idx} className={classes.tagContainer}>
      <span className={classes.tag}>
        {tag}
      </span>
    </span>
  );
}

function Stack({ array }) {
  const classes = useStyles();
  return Array.isArray(array) && array.length > 0 && (
    <Typography component="p" className={classes.stack}>
      <span className={classes.pTitle}>Stack: </span>
      <span className={classes.stackArray}>{array.map(Tag)}</span>
    </Typography>
  );
}

export default function ProjectDialog({ project, open, onClose }) {
  const { name, desc, stack, details, url, images } = project;
  const classes = useStyles();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="body"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      fullScreen={isSmallDevice}
      transitionDuration={200}
    >
      <Box className={classes.header}>
        <DialogTitle id="dialog-title" disableTypography>
          <Typography component="h3" variant="h5">
            {name}
          </Typography>
          {url &&
            <a href={url} className={classes.url} target="_blank">
              {url}
            </a>}
          {!url &&
            <Typography variant="body2" color="secondary">
              (project closed)
            </Typography>}
        </DialogTitle>
        <IconButton onClick={onClose} className={classes.closeBtn} aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>
        <Stack array={stack} />
        <DialogContentText id="dialog-description" className={classes.description}>
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
