import React, { useState } from "react";
import Header from "../../components/Header";
import { Grid, Typography, TextField, Button, Card, CardContent, FormControlLabel, Checkbox, InputAdornment } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
// styles
import useStyles from "./styles";
import logo from "../../logo.svg";

function Login() {
    var classes = useStyles();

    //local
    var [loginValue, setLoginValue] = useState("");
    var [passwordValue, setPasswordValue] = useState("");

    return (
        <>
            <Header></Header>
            <Grid container className={classes.container} >

                <div className={classes.formContainer}>
                    <Card className={classes.logincardContainer}>
                        <CardContent className={classes.logincard}>

                            <Typography className={classes.containerHeader}>Login</Typography>
                            <TextField
                                id="email"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                value={loginValue}
                                onChange={e => setLoginValue(e.target.value)}
                                margin="normal"
                                placeholder="Email Adress"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                id="password"
                                InputProps={{
                                    classes: {
                                        underline: classes.textFieldUnderline,
                                        input: classes.textField,
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <VpnKeyIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                value={passwordValue}
                                onChange={e => setPasswordValue(e.target.value)}
                                margin="normal"
                                placeholder="Password"
                                type="password"
                                fullWidth
                            />

                            <div className={classes.formButtons}>

                                <FormControlLabel
                                    control={<Checkbox name="checkedA" />}
                                    label="Remember me"
                                />
                                <Button
                                    disabled={
                                        loginValue.length === 0 || passwordValue.length === 0
                                    }
                                    onClick={() => { }
                                    }
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                >
                                    Login</Button>
                                <Button color="primary">Dont have an account ? Sign up here</Button>


                            </div>
                        </CardContent>
                    </Card>

                </div>
            </Grid>
        </>
    )
}

export default Login;