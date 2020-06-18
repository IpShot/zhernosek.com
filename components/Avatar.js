import { Avatar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { useImage } from 'react-image';

const useStyles = makeStyles((theme) => ({
  avatar: {
    borderRadius: theme.borderRadius,
    height: 200,
    width: 200,
    '@media (max-width: 350px)': {
      height: 150,
      width: 150,
    },
  },
}));


export default function Ava({ image, alt }) {
  const { src, isLoading } = useImage({
    srcList: image,
    useSuspense: false,
  });
  const classes = useStyles();

  return (
    <>
      {isLoading &&
        <Skeleton
          className={classes.avatar}
          variant="rect"
          animation="wave" />}
      {!isLoading &&
        <Avatar
          alt={alt}
          src={src}
          className={classes.avatar}
          variant="rounded" />}
    </>
  );
}
