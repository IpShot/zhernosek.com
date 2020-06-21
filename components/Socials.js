import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { EmailIcon, GithubIcon, LinkedinIcon } from './Icons';

const useStyles = makeStyles((theme) => ({
  socials: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  email: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: '1.15em',
    fontStyle: 'normal',
    marginTop: theme.spacing(1),
    outline: 'none',
    color: theme.palette.text.highlight,
    '&:hover, &:focus': {
      color: theme.palette.text.primary,
    },
  },
  linkedin: {
    marginTop: theme.spacing(2.5),
    outline: 'none',
    height: 22.2,
    color: theme.palette.text.highlight,
    '&:hover, &:focus': {
      color: theme.palette.text.primary,
    },
  },
  github: {
    marginTop: theme.spacing(2),
    outline: 'none',
    height: 35,
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
      <address>
        <Link social="email" href={`mailto:${links.email}`}>
          <EmailIcon />&nbsp;{links.email}
        </Link>
      </address>
      <Link social="linkedin" href={links.linkedin}>
        <LinkedinIcon />
      </Link>
      <Link social="github" href={links.github}>
        <GithubIcon />
      </Link>
    </div>
  );
}
