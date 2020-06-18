import { makeStyles } from '@material-ui/core/styles';
import { GithubIcon, LinkedinIcon } from './Icons';
import classnames from '../utils/classnames';

const useStyles = makeStyles((theme) => ({
  socials: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    marginTop: theme.spacing(2),
    outline: 'none',
    '&.github-link': {
      height: 40.96,
      '&:hover, &:focus': {
        '& .github-icon': {
          fill: theme.palette.text.primary,
        },
      },
    },
    '&.linkedin-link': {
      height: 25.39,
      '&:hover, &:focus': {
        '& .linkedin-icon-letter': {
          fill: theme.palette.text.primary,
        },
      },
    },
  },
}));

function Link({ href, className, children }) {
  const classes = useStyles();
  return (
    <a
      href={href}
      className={classnames(classes.link, className)}
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
      <Link href={links.linkedin} className="linkedin-link">
        <LinkedinIcon />
      </Link>
      <Link href={links.github} className="github-link">
        <GithubIcon />
      </Link>
    </div>
  );
}
