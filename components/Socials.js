import { makeStyles } from '@material-ui/core/styles';
import { GithubIcon, LinkedinIcon } from './Icons';
import classnames from '../utils/classnames';

const useStyles = makeStyles((theme) => ({
  socials: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  github: {
    marginTop: theme.spacing(2),
    outline: 'none',
    height: 40.96,
    color: theme.palette.text.highlight,
    '&:hover, &:focus': {
      color: theme.palette.text.primary,
    },
  },
  linkedin: {
    marginTop: theme.spacing(2),
    outline: 'none',
    height: 25.39,
    color: theme.palette.text.highlight,
    '&:hover, &:focus': {
      color: theme.palette.text.primary,
    },
  },
}));

function Link({ social, href, children }) {
  const classes = useStyles();
  return (
    <a
      href={href}
      className={classes[social]}
      rel="noopener"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Socials({ links }) {
  const classes = useStyles();
  return (
    <div className={classes.socials}>
      <Link social="linkedin" href={links.linkedin}>
        <LinkedinIcon />
      </Link>
      <Link social="github" href={links.github}>
        <GithubIcon />
      </Link>
    </div>
  );
}
