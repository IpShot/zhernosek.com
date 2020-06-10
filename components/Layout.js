import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 50,
  },
}));

export default function Layout({
  children,
  title = 'Roman Zhernosek - Full stack web developer'
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
