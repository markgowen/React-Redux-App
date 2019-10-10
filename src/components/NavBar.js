import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    navBar: {
        backgroundColor: '#8C1313'
    },
    
  }));

export default function NavBar() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <AppBar className={classes.navBar} position="static">
            <Toolbar className={classes.toolBar} variant="dense">
            <Typography variant="h6" color="inherit">
                BrewTime
            </Typography>
            </Toolbar>
        </AppBar>
    </div>
    );
}