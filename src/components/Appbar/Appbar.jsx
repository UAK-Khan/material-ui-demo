import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Appbar = (props) => {
  const classes = useStyles();

  return (<AppBar position='static'>
    <Toolbar>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
        onClick={(e) => props.toggleDrawer(e, true)}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant='h6' className={classes.title}>
        News
      </Typography>
      <Button color='inherit'>Login</Button>
    </Toolbar>
  </AppBar>);
};

export default Appbar;
