import * as React from 'react';
import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 50,
  },
}));

export default function Layout({ children, title = 'Roman Zhernosek - Full stack web developer' }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Container maxWidth="sm" className={classes.container}>
        {children}
      </Container>
    </div>
  );
}
