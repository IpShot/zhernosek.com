import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  socials: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  github: {
    width: 60,
    outline: 'none',
    '& svg': {
      width: '100%',
    }
  },
  linkedin: {
    width: 100,
    outline: 'none',
    '& svg': {
      width: '100%',
    }
  },
}));

function getIconSrc(name) {
  return `/socials/${name}.svg`;
}

function Icon([ name, link ], idx) {
  const classes = useStyles();
  return (
    <a key={idx} href={link} rel="noopener" className={classes[name]}>
      <SvgIcon alt={name} src={getIconSrc(name)} />
    </a>
  );
}

export default function Socials({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.socials}>
      {Object.entries(data).map(Icon)}
    </div>
  );
}
