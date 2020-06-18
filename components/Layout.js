import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PROFILE } from '../data';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6, 3),
  },
}));

export default function Layout({
  children,
  title = `${PROFILE.ABOUT.Who} - ${PROFILE.ABOUT.Profession}`
}) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container maxWidth="sm" className={classes.container}>
        {children}
      </Container>
    </div>
  );
}
