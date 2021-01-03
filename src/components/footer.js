import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  copyrightText: {
    height: '3rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  iconButton: {
    backgroundColor: theme.palette.primary.main,
  },
  navLinkList: {
    display: 'flex',
    justifyContent: 'center',
  },
  navLinkItem: {
    width: 'initial',
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <div className={classes.copyrightText}>
        <Typography align='center' variant='body2'>
          © 2021 zaksabeast
        </Typography>
      </div>
    </footer>
  );
};
