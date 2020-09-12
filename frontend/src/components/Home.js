import InputAdornment from '@material-ui/core/InputAdornment';
import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import axios from 'axios'
import {Redirect} from 'react-router';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: '',
            email: "",
            password: "",
            role: "",
            authFlag:false,
            error:''
        };
    }  
  
    render() {
        return (
            <div>
                Welcome to Home
            </div>
        );
    }
}


export default Home;

