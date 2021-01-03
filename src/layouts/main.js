import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavDrawer } from '../components/nav-drawer';
import { AppBar } from '../components/app-bar';
import { Footer } from '../components/footer';
import { MetaTags } from '../components/meta-tags';
import '../styles/global.css';

const DRAWER_WIDTH = 240;

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  content: {
    flexGrow: 1,
    marginTop: theme.mixins.toolbar.minHeight + theme.spacing(9),
    marginBottom: theme.spacing(5),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      maxWidth: 720,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  contentNavDrawerUnshift: {
    [theme.breakpoints.up('md')]: {
      width: '75%',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  contentNavDrawerShift: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      width: `calc(75% - 4rem - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
}));

export const MainLayout = ({ children, title, description }) => {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = React.useState(false);
  const classes = useStyles();
  const toggleNavDrawer = () => setIsNavDrawerOpen(!isNavDrawerOpen);
  const closeNavDrawer = () => setIsNavDrawerOpen(false);
  const contentClassNames = isNavDrawerOpen
    ? `${classes.content} ${classes.contentNavDrawerShift}`
    : `${classes.content} ${classes.contentNavDrawerUnshift}`;

  return (
    <React.Fragment>
      <MetaTags title={title} description={description} />
      <div className={classes.root}>
        <AppBar toggleDrawer={toggleNavDrawer} />
        <NavDrawer isOpen={isNavDrawerOpen} onClose={closeNavDrawer} />
        <main className={contentClassNames}>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};
