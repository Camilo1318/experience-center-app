import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { DashBoard } from '../components/dashboard/DashBoard'

export const AppRouter = () => {

    //const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <Router>
            <div>
                <Switch>
                    {/* <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAutenticated={isLoggedIn}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        isAutenticated={isLoggedIn}
                        component={DashBoardScreen}
                    /> */}

                    <Route path="/login" component={LoginScreen} />
                    <Route exact path="/" component={DashBoard} />

                    <Redirect to="/login" />
                </Switch>
            </div>
        </Router>
    )
}


