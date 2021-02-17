import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import MUILink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Highlight, { defaultProps } from 'prism-react-renderer';
import prismTheme from 'prism-react-renderer/themes/vsDark';

const useStyles = makeStyles(theme => ({
  h1: {
    marginBottom: theme.spacing(5),
  },
  h2: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(3),
  },
  h3: {
    marginTop: theme.spacing(2),
  },
  preContainer: {
    overflow: 'auto',
    backgroundColor: prismTheme.plain.backgroundColor,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  preContent: {
    // Using float feels gross, but it's used due to its overflow behavior
    float: 'left',
    padding: theme.spacing(2),
  },
  ul: {
    listStyleType: 'disc',
    marginTop: theme.spacing(0.6),
    marginBottom: theme.spacing(2),
    marginLeft: 0,
    marginRight: 0,
  },
  li: {
    marginTop: 0,
    marginBottom: theme.spacing(0.6),
    marginLeft: 0,
    marginRight: 0,
  },
  p: {
    marginBottom: theme.spacing(2),
  },
  a: {
    color: theme.palette.link.main,
  },
  img: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: '100%',
  },
}));

const H1 = props => {
  const classes = useStyles();
  return (
    <Typography variant='h3' component='h1' className={classes.h1} {...props} />
  );
};

const H2 = props => {
  const classes = useStyles();
  return (
    <Typography
      variant='h4'
      component='h2'
      className={classes.h2}
      gutterBottom
      {...props}
    />
  );
};

const H3 = props => {
  const classes = useStyles();
  return (
    <Typography
      variant='h5'
      component='h3'
      className={classes.h3}
      gutterBottom
      {...props}
    />
  );
};

const Pre = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.preContainer} variant='elevation' elevation={4}>
      <div className={classes.preContent} {...props} />
    </Paper>
  );
};

const UnorderedList = props => {
  const classes = useStyles();
  return <Typography component='ul' className={classes.ul} {...props} />;
};

const ListItem = props => {
  const classes = useStyles();
  return <Typography component='li' className={classes.li} {...props} />;
};

const TableHead = props => <TableCell variant='head' {...props} />;

const Paragraph = props => {
  const classes = useStyles();
  return <Typography className={classes.p} {...props} />;
};

const Link = props => {
  const classes = useStyles();
  return <MUILink className={classes.a} {...props} />;
};

const Code = ({ className, children }) => {
  const language = className?.replace('language-', '');

  return (
    <Highlight
      {...defaultProps}
      language={language}
      code={children}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const Image = props => {
  const classes = useStyles();
  return (
    <Paper elevation={4} {...props} component='img' className={classes.img} />
  );
};

export const mdxComponents = {
  Image,
  h1: H1,
  h2: H2,
  h3: H3,
  p: Paragraph,
  a: Link,
  pre: Pre,
  code: Code,
  li: ListItem,
  table: Table,
  tr: TableRow,
  td: TableCell,
  th: TableHead,
  ul: UnorderedList,
};
