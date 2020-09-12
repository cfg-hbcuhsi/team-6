import React from "react";
import {Container, Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "./Home/styles";

import {ReactComponent as Chart} from './chart.svg';

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
                    Preparing for college as a high school student can be a daunting task. So we've provided data on
                    college and scholarships to help you make the best decision.
                </Typography>
                <br/>
                <Chart/>

                <Typography variant={"h6"} color={"textPrimary"}>
                    The cost of college can vary greatly, and scholarships can reduce the burden quite a bit. To get you
                    started, here's a link compiling scholarships for freshmen.
                    <div><Link
                    href="https://scholarships360.org/scholarships/top-scholarships-for-college-freshmen/" target="_blank" rel="noopener noreferrer">
                    https://scholarships360.org/scholarships/top-scholarships-for-college-freshmen/
                </Link></div>
                    <div><Link
                        href="https://www.unigo.com/scholarships/high-school-students/scholarships-for-high-school-freshman" target="_blank" rel="noopener noreferrer">
                        https://www.unigo.com/scholarships/high-school-students/scholarships-for-high-school-freshman
                    </Link></div>
                </Typography>

            </Container>
        </div>
    )
}