import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { CreateLenteScreen } from '../components/dashboard/create/CreateLenteScreen'
import { CatalogRoutes } from './CatalogRoutes'
import { NavBar } from '../components/dashboard/NavBar'
import { MainPage } from '../components/dashboard/MainPage'
/* import { MonofocalesScreen } from '../components/dashboard/catalog/MonofocalesScreen'
import { BifocalesScreen } from '../components/dashboard/catalog/BifocalesScreen'
import { OcupacionalesScreen } from '../components/dashboard/catalog/OcupacionalesScreen'
import { ProgresivosScreen } from '../components/dashboard/catalog/ProgresivosScreen' */


export const DashBoardRoutes = () => {
    return (
        <>

            <nav className="navbar navbar-expand-sm navbar-dark p-2 justify-content-between bg-primary">
                <NavBar />
            </nav>

            <div>
                <Switch>

                    <Route exact path="/" component={MainPage} />
                    <Route path="/catalog" component={CatalogRoutes} />
                    {/*  <Route path="/monofocales" component={MonofocalesScreen} />
                    <Route path="/bifocales" component={BifocalesScreen} />
                    <Route path="/ocupacionales" component={OcupacionalesScreen} />
                    <Route path="/progresivos" component={ProgresivosScreen} /> */}
                    <Route path="/create-product" component={CreateLenteScreen} />

                </Switch>

            </div>
        </>
    )
}
