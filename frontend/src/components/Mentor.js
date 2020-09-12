import React from "react";
import {Container, Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "./Home/styles";


export default () => {

    const classes = makeStyles();

    return (
        <div className={classes.appbar} style={{background: "white",height:1200}}>
            <AppBar position="relative">
                <Toolbar>
                    <img src='https://i.imgur.com/xTtRCf4.png' className={classes.easypicmini}/>
                </Toolbar>
            </AppBar>
            <Container maxWidth={"md"} style={{marginTop: 20}}>
                <Typography variant={"h6"} color={"textPrimary"}>
                    This page will show potential mentors or mentees registered on this site that may be a good match for you.
                </Typography>


            </Container>
        </div>
    )
}