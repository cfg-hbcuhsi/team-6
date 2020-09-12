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
import cookie from 'react-cookies';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Link as RouterLink } from 'react-router-dom'
import useStyles from '../Home/styles';
import NavBar from '../NavBar/NavBar'

class MentorHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            majors:"",
            phoneNumber:"",
            avatar:"",
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

    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(this.state)

        
        
    //     axios
    //         .post('http://localhost:3001/mentorhome', formInfo)
    //         .then((response) => {

    //             console.log('Data: ', response.data)
    //             if (response.status == 200) {
    //                 if (response.data == "Success") {
    //                     console.log("Succesfull")
    //                     this.setState({
    //                         authFlag: true
    //                     })
    //                     sessionStorage.setItem('authFlag', 'true')
    //                 }
    //                 else {
    //                     alert("Email ID already exists. Please try with new email Id.")
    //                 }
    //             }
    //             else {
    //                 this.setState({
    //                     authFlag: false,
    //                     error: 'Please try again'
    //                 })
    //                 console.log(this.state.error)
    //             }
    //         })
    //         .catch(console.log);
    // };

    render() {        
        return (
            <div>
                <NavBar/>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '70vh' }}
                >

                    <Grid item xs={3}>
                        <Paper style={{ width: 400, height: 300, padding: 10 }}>

                            <Typography variant="h4" align="center" color="primary" gutterBottom>Create Your Profile</Typography>
                            <div className="container" style={{ width: "80%", margin: "0 auto" }}>
                                <form onSubmit={this.handleSubmit}>

                                    <TextField
                                        fullWidth={true}
                                        required label={"Provide your interested field to advise"}
                                        name={"majors"}
                                        value={this.state.majors}
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
                                        required label={"Please provide best number to reach you"}
                                        name={"email"}
                                        value={this.state.phoneNumber}
                                        type={"text"}
                                        onChange={this.handleInputChange}
                                        id="input-with-icon-adornment"
                                        startAdornment={
                                            <InputAdornment position="start">
                                            </InputAdornment>
                                        }
                                    />

                                    <Grid container justify="center" style={{ marginTop: '20px' }}>
                                        <Button
                                            variant="contained"
                                            component="label"

                                        >
                                            Upload Photo
                                        <input
                                                type="file"
                                                name="avatar"
                                                style={{ display: "none" }}
                                            />
                                        </Button>
                                    </Grid>

                                    <Grid container justify="center" style={{ marginTop: '20px' }}>
                                        <Button variant="outlined" color="primary" style={{ textTransform: "none" }}
                                            type={"submit"}>Submit</Button>
                                    </Grid>
                                </form>
                            </div>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
        );
    }
}


export default MentorHome;

