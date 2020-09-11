import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from "@material-ui/core/Paper";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    padding: {}
}));

export default function InputWithIcon() {
    const classes = useStyles();

    const [value, setValue] = React.useState('Mentor');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    return (
        <div>
            <Paper style={{padding: 10, width: 400}}>
                <div>
                    <FormControl className={classes.margin}>
                        <InputLabel>Name</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl className={classes.margin}>
                        <InputLabel>Email</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <EmailIcon/>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel value="mentor" control={<Radio/>} label="I want to be a Mentor"/>
                            <FormControlLabel value="mentee" control={<Radio/>} label="I want to be a Mentee"/>
                        </RadioGroup>
                    </FormControl>
                </div>
            </Paper>
        </div>
    );
}