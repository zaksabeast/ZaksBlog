import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { MDXProvider } from '@mdx-js/react';
import { MainLayout } from '../layouts/main';
import { mdxComponents } from '../components/mdx-components';
import { formatTimestamp } from '../utils/format-timestamp';

const useStyles = makeStyles(theme => ({
  timestamp: {
    marginBottom: theme.spacing(2),
  },
}));

const PostLayout = ({ children, metadata }) => {
  const classes = useStyles();
  const timestamp = metadata.date ? formatTimestamp(metadata.date) : '';

  return (
    <MainLayout title={metadata.title} description={metadata.description}>
      <Typography variant='subtitle2' className={classes.timestamp}>
        {timestamp}
      </Typography>
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
    </MainLayout>
  );
};

export default PostLayout;
