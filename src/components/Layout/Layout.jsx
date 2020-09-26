import React from "react";
import {
    Route,
    Switch,
    withRouter,
    Redirect,
} from "react-router-dom";
// components
import Header from "../Header";
import Dashboard from "../../pages/Dashboard";

// styles
import useStyles from "./styles";




function Layout(props) {
    let classes = useStyles();

    return (
        <div className={classes.root}>
            <>
                <Header  />
                <Switch>
                    <Route path="/app/dashboard" component={Dashboard} />
                    <Route exact path="/app/workflows" render={() => <Redirect to="/app/dashboard" />}/>
                </Switch>
                
            </>
        </div>
    );
}

export default withRouter(Layout);