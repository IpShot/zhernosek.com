import Head from 'next/head';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PROFILE, OG } from '../data';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6, 3, 3, 3),
  },
}));

export default function Layout({
  children,
  title = `${PROFILE.ABOUT.Who} - ${PROFILE.ABOUT.Profession}`,
  ogType = OG.TYPE,
  ogSiteName = OG.SITE_NAME,
  ogTitle = OG.TITLE,
  ogUrl = OG.URL,
  ogImage = OG.IMAGE,
  ogDescription = OG.DESCRIPTION,
}) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={ogSiteName} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:description" content={ogDescription} />
      </Head>
      <Container maxWidth="sm" className={classes.container}>
        {children}
      </Container>
    </div>
  );
}
