import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { MDXProvider } from '@mdx-js/react';
import { MainLayout } from '../layouts/main';
import { mdxComponents } from '../components/mdx-components';
import { formatTimestamp } from '../utils/format-timestamp';
import { useFileDownloads } from '../utils/use-file-downloads';

const useStyles = makeStyles(theme => ({
  timestamp: {
    marginBottom: theme.spacing(2),
  },
}));

const DownloadButton = ({ download }) => {
  const downloadFileName = `${download.name}.${download.extension}`;
  return (
    <Button
      component='a'
      href={download.publicURL}
      color='primary'
      variant='contained'
      download={downloadFileName}
    >
      Download {downloadFileName}
    </Button>
  );
};

const PostLayout = ({ children, metadata, path }) => {
  const classes = useStyles();
  const slug = path.replace(/\//g, '');
  const postDownloads = useFileDownloads(slug);

  const timestamp = metadata.date ? formatTimestamp(metadata.date) : '';

  return (
    <MainLayout title={metadata.title} description={metadata.description}>
      <Typography variant='subtitle2' className={classes.timestamp}>
        {timestamp}
      </Typography>
      <MDXProvider components={mdxComponents}>
        {children}
        {postDownloads.map(download => (
          <DownloadButton key={download.id} download={download} />
        ))}
      </MDXProvider>
    </MainLayout>
  );
};

export default PostLayout;
