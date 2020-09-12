import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import EmailIcon from '@material-ui/icons/Email';

import React, {Component} from 'react';
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";


class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: '',
            username: '',
            email: "",
            password: ""
        };
    }

    handleInputChange = e => {
        console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)

        const {firstName, lastName, username, email, password} = this.state;
        const formInfo = {
            firstName, lastName, username, email, password
        };

        // axios
        //     .post('http://localhost:3001/create', formInfo)
        //     .then(() => console.log('User created!'))
        //     .catch(console.log);
    };

    render() {
        return (
            <Paper style={{width: 300, padding: 10}}>

                <Typography variant="h4" color="primary" gutterBottom>Sign Up</Typography>
                <div className="container" style={{width:"80%", margin:"0 auto"}}>
                    <form onSubmit={this.handleSubmit}>

                        <TextField
                            fullWidth={true}
                            required label={"Email"}
                            name={"email"}
                            value={this.state.email}
                            type={"text"}
                            onChange={this.handleInputChange}
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                </InputAdornment>
                            }
                        />

                        <TextField
                            fullWidth={true}
                            required
                            label={"Password"}
                            name={"password"}
                            value={this.state.password}
                            type={"password"}
                            onChange={this.handleInputChange}
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                </InputAdornment>
                            }
                        />

                        <TextField
                            fullWidth={true}
                            required
                            label={"First Name"}
                            name={"firstName"}
                            value={this.state.firstName}
                            type={"text"}
                            onChange={this.handleInputChange}
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                </InputAdornment>
                            }
                        />
                        <TextField
                            fullWidth={true}
                            required
                            label={"Last Name"}
                            name={"lastName"}
                            value={this.state.lastName}
                            type={"text"}
                            onChange={this.handleInputChange}
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                </InputAdornment>
                            }
                        />


                        {/*<div>*/}
                        {/*    <FormControl component="fieldset">*/}
                        {/*        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={this.handleInputChange}>*/}
                        {/*            <FormControlLabel value="mentor" control={<Radio/>} label="I want to be a Mentor"/>*/}
                        {/*            <FormControlLabel value="mentee" control={<Radio/>} label="I want to be a Mentee"/>*/}
                        {/*        </RadioGroup>*/}
                        {/*    </FormControl>*/}
                        {/*</div>*/}

                        <Grid container justify="center" style={{marginTop: '10px'}}>
                            <Button variant="outlined" color="primary" style={{textTransform: "none"}}
                                    type={"submit"}>Submit</Button>
                        </Grid>
                    </form>
                </div>
            </Paper>
        );
    }
}


export default SignIn;

