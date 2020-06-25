import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tape: {
    position: 'absolute',
    top: 14,
    right: -24,
    height: 0,
    width: 100,
    borderBottom: `25px solid ${theme.palette.primary.dark}`,
    borderLeft: '25px solid transparent',
    borderRight: '25px solid transparent',
    transform: 'rotate(45deg)',
  },
  text: {
    display: 'block',
    position: 'absolute',
    top: 18,
    right: 10,
    transform: 'rotate(45deg)',
    color: theme.palette.text.highlight,
  },
}));


export default function Label({ text }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.tape} />
      <span className={classes.text}>{text}</span>
    </div>
  );
}
