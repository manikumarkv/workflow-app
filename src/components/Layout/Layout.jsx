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




function Layout(props) {
    const { match, location, history } = props;

    return (
        <div >
            <>
                <Header  />
                <Switch>
                    <Route path="/app/dashboard" component={Dashboard} />
                </Switch>
                <Route
                exact
                path="/app/workflows"
                render={() => <Redirect to="/app/dashboard" />}
              />
            </>
        </div>
    );
}

export default withRouter(Layout);