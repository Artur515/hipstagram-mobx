import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {authRoutes, hipstaRoutes} from "../../routes/routes";
import {CURRENT_USER_ROUTE, LOGIN_ROUTE} from "../../utils/consts";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {auth} = useContext(Context)

    return (
        <Switch>
            {authRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} component={Component} exact/>
            })}
            {auth.isAuth && hipstaRoutes.map(({path, Component}) => {
                return <Route key={path} path={path} component={Component} exact/>
            })}
            {auth.isAuth ? <Redirect to={CURRENT_USER_ROUTE}/> : <Redirect to={LOGIN_ROUTE}/>}
        </Switch>
    );
});

export default AppRouter;