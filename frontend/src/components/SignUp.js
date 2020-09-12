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
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";


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
            <Dialog open={this.props.open} onClose={this.props.handleClose} style={{padding:20}} aria-labelledby="form-dialog-title">
            {redirectVar}
                <DialogTitle
                    disableTypography
                    id="alert-dialog-title"
                >
                    <Typography variant="h4" color="primary">Sign Up</Typography>

                </DialogTitle>
                <div className="container" style={{ width: "80%", margin: "0 auto" }}>
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

                            <DialogActions>
                                <Button onClick={this.props.handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={this.handleSubmit} color="primary" type={"submit"}>
                                    Submit
                                </Button>
                            </DialogActions>
                </div>
            </Dialog>
        );
    }
}


export default SignUp;

