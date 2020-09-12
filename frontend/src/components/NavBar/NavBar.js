import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import axios from 'axios'
import { Redirect } from 'react-router';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Link as RouterLink } from 'react-router-dom'
import useStyles from '../Home/styles';
import { Grid, Grow, Typography } from '@material-ui/core';

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="relative">
        <Toolbar>
          <Grid
          justify="space-between" // Add it here :)
          container 
          spacing={24}>
            <Grid item>
              <img src='https://i.imgur.com/xTtRCf4.png' className={classes.easypicmini} />
            </Grid>
            <Grid item>
              <Button component={RouterLink} onClick={() => { sessionStorage.removeItem("authFlag")}} color="inherit" to='/login'>
                Logout
              </Button>
            </Grid>
          </Grid>          
        </Toolbar>
      </AppBar>
    );

}


export default NavBar;

