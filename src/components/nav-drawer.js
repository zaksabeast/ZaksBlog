import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import MUIListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { Link } from 'gatsby';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useBlogPostList } from '../utils/use-blog-list';

const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const ListItem = props => {
  return (
    <li>
      <MUIListItem component={Link} {...props} />
    </li>
  );
};

export const NavDrawer = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isLargerScreen = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();
  const blogList = useBlogPostList();

  const guideCategories = blogList.sort().map(({ title, slug }) => {
    const link = slug.slice(-1) === '/' ? slug.slice(0, -1) : slug;
    return (
      <ListItem to={link} key={slug} role='link' button>
        <ListItemText>{title}</ListItemText>
      </ListItem>
    );
  });

  return (
    <Drawer
      className={classes.root}
      variant={isLargerScreen ? 'persistent' : 'temporary'}
      anchor='left'
      open={isOpen}
      onClose={onClose}
      classes={{ paper: classes.root }}
    >
      <Toolbar />
      <nav>
        <List>
          <ListItem component={Link} to='/' role='link' button>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <Divider className={classes.divider} />
          {guideCategories}
        </List>
      </nav>
    </Drawer>
  );
};
