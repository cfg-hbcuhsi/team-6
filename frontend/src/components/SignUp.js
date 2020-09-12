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
import { Redirect } from 'react-router';


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: '',
            email: "",
            password: "",
            role: "",
            authFlag: false,
            error: ''
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

        const { firstname, lastname, email, password, role } = this.state;
        const formInfo = {
            firstname, lastname, email, password, role
        };

        axios
            .post('http://localhost:3001/signup', formInfo)
            .then((response) => {

                console.log('Status code: ', response.status)
                if (response.status == 200) {
                    if (response.data == "Success") {
                        this.setState({
                            authFlag: true
                        })
                    }
                    else {
                        alert("Email ID already exists. Please try with new email Id.")
                    }
                }
                else {
                    this.setState({
                        authFlag: false,
                        error: 'Please try again'
                    })
                    console.log(this.state.error)
                }
            })
            .catch(console.log);
    };

    render() {
        let redirectVar = null;
        if (this.state.authFlag) {
            redirectVar = <Redirect to="/login" />
        }
        else {
            redirectVar = <Redirect to="/" />
        }
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '70vh' }}
            >

                <Grid item xs={3}>
                    <Paper style={{ width: 300, padding: 10 }}>
                        {redirectVar}
                        <Typography variant="h4" align="center" color="primary" gutterBottom>Sign Up</Typography>
                        <div className="container" style={{ width: "80%", margin: "0 auto" }}>
                            <form onSubmit={this.handleSubmit}>

                                <TextField
                                    fullWidth={true}
                                    required
                                    label={"First Name"}
                                    name={"firstname"}
                                    value={this.state.firstname}
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
                                    name={"lastname"}
                                    value={this.state.lastname}
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


                                <div>
                                    <FormControl component="fieldset">
                                        <RadioGroup aria-label="gender" name="role" value={this.state.role} onChange={this.handleInputChange}>
                                            <FormControlLabel value="Mentor" control={<Radio />} label="I want to be a Mentor" />
                                            <FormControlLabel value="Mentee" control={<Radio />} label="I want to be a Mentee" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>

                                <Grid container justify="center" style={{ marginTop: '10px' }}>
                                    <Button variant="outlined" color="primary" style={{ textTransform: "none" }}
                                        type={"submit"}>Submit</Button>
                                </Grid>
                            </form>
                        </div>
                    </Paper>
                </Grid>

            </Grid>

        );
    }
}


export default SignUp;

