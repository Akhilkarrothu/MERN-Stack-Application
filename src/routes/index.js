import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import exit from "../pages/Exit/closeApllication";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/exit" component={exit}/>


            {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
            <Route component={SignIn} />
        </Switch>
    );
}
