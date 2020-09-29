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
import WorkflowDetails from "../../pages/WorkflowDetails/WorkflowDetails";




function Layout(props) {
    let classes = useStyles();

    return (
        <div className={classes.root}>
            <>
                <Header  />
                <Switch>
                    <Route path="/app/workflows" component={Dashboard} />
                    <Route path="/app/dashboard" component={Dashboard} />                    
                    <Route exact path="/app/workflow/:id" component={WorkflowDetails} />
                    <Route exact path="/app/workflow" render={() => <Redirect to="/app/workflow/new" />}/>
                    <Route exact path="/app/dashboard" render={() => <Redirect to="/app/dashboard" />}/>
                </Switch>
            </>
        </div>
    );
}

export default withRouter(Layout);