import React from 'react'
import { Card } from 'react-bootstrap'
import { Route, Switch, useRouteMatch } from 'react-router'
import { NavLink } from 'react-router-dom'
import { AllLentesScreen } from '../components/dashboard/catalog/AllLentesScreen'
import { BifocalesScreen } from '../components/dashboard/catalog/BifocalesScreen'
import { CardList } from '../components/dashboard/catalog/CardList'
import { FormOthersValues } from '../components/dashboard/catalog/FormOthersValues'
import { FormSearchLente } from '../components/dashboard/catalog/FormSearchLente'
import { MonofocalesScreen } from '../components/dashboard/catalog/MonofocalesScreen'
import { OcupacionalesScreen } from '../components/dashboard/catalog/OcupacionalesScreen'
import { ProgresivosScreen } from '../components/dashboard/catalog/ProgresivosScreen'

export const CatalogRoutes = () => {

    const match = useRouteMatch();

    return (
        <>
            <div className="row px-3 py-2">

                <div className="col-1 p-0">

                    <NavLink
                        className="nav-item nav-link"
                        to={`${match.path}`}
                    >
                        Todos
                    </NavLink>
                    <hr></hr>
                    <NavLink
                        className="nav-item nav-link"
                        to={`${match.path}/monofocales`}
                    >
                        Monofocales
                    </NavLink>
                    <hr></hr>
                    <NavLink
                        className="nav-item nav-link"
                        to={`${match.path}/bifocales`}
                    >
                        Bifocales
                    </NavLink>
                    <hr></hr>
                    <NavLink
                        className="nav-item nav-link"
                        to={`${match.path}/ocupacionales`}
                    >
                        Ocupacionales
                    </NavLink>
                    <hr></hr>
                    <NavLink
                        className="nav-item nav-link"
                        to={`${match.path}/progresivos`}
                    >
                        Progresivos
                    </NavLink>


                </div>
                <div className="col-8">

                    {/* CardList type="all" /> */}


                    <Switch>
                        <Route exact path={`${match.path}`} component={AllLentesScreen} />
                        <Route path={`${match.path}/monofocales`} component={MonofocalesScreen} />
                        <Route path={`${match.path}/bifocales`} component={BifocalesScreen} />
                        <Route path={`${match.path}/ocupacionales`} component={OcupacionalesScreen} />
                        <Route path={`${match.path}/progresivos`} component={ProgresivosScreen} />
                    </Switch>
                </div>

                <div className="col">

                    <Card body>
                        <FormSearchLente />
                        <FormOthersValues />
                    </Card>

                </div>
            </div>

        </>
    )
}
