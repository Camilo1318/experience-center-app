import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { CreateLenteScreen } from '../components/dashboard/create/CreateLenteScreen'
import { CatalogScreen } from '../components/dashboard/catalog/CatalogScreen'
import { NavBar } from '../components/dashboard/NavBar'
import { MainPage } from '../components/dashboard/MainPage'


export const DashBoardRoutes = () => {
    return (
        <>

            <nav className="navbar navbar-expand-sm navbar-dark p-2 justify-content-between bg-primary">
                <NavBar />
            </nav>

            <div>
                <Switch>

                    <Route exact path="/create-product" component={CreateLenteScreen} />
                    <Route exact path="/catalog" component={CatalogScreen} />
                    <Route path="/" component={MainPage} />


                </Switch>
            </div>
        </>
    )
}
