import React from "react";
// styles
import useStyles from "./styles";
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

function Header() {
    let classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}> <DeviceHubIcon /> Flow App</Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;