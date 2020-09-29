import React, { useState } from "react";
// styles
import useStyles from "./styles";
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { logout } from "../../actions/user.actions";
import { Redirect } from "react-router-dom";

function Header(props) {
    let classes = useStyles();
    const [home, setHome] = useState(false)
    const signout = () => {
        props.logout()
    }
    const homeClick = () => {
        setHome(true)
    }
    if(home === true) {
        return <Redirect to='/app'/>;
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography onClick={homeClick} variant="h6" className={classes.title}> <DeviceHubIcon /> Flow App</Typography>
                    {props.isAuthenticated ? <Button onClick={signout} color="inherit">Logout</Button> : null}
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.userReducer.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    logout:() => dispatch(logout())
})

export default connect( mapStateToProps,
    mapDispatchToProps)(Header);