import React from 'react'
import { CardList } from './CardList'

export const CatalogScreen = () => {



    return (
        <>
            <div className="row px-3 py-2">

                <div className="col-9">
                    <CardList />
                </div>

                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            Personaliza tus Lentes
                            </div>

                        <div className="card-body">

                            <form >

                                <div className="row">
                                    <div className="col mb-3">
                                        <label className="form-label">Esfera</label>
                                        <input type="text" className="form-control form-control-sm" aria-label="First name" />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Cilindro</label>
                                        <input type="text" className="form-control form-control-sm" aria-label="Last name" />
                                    </div>

                                    <div className="col">
                                        <label className="form-label">Adicion</label>
                                        <input type="text" className="form-control form-control-sm" aria-label="First name" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col mb-3">
                                        <label className="form-label">Esfera</label>
                                        <input type="text" className="form-control form-control-sm" aria-label="First name" />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Cilindro</label>
                                        <input type="text" className="form-control form-control-sm" aria-label="Last name" />
                                    </div>

                                    <div className="col">
                                        <label className="form-label">Adicion</label>
                                        <input type="text" className="form-control form-control-sm" aria-label="First name" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label">Consulta: </label>
                                    <div className="form-group">
                                        <div className="input-group input-group-sm mb-2">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input type="text" className="form-control form-control-sm" aria-label="Amount (to the nearest dollar)" />
                                            <div className="input-group-append">
                                                <span className="input-group-text">.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label">Montura: </label>
                                    <div className="form-group">
                                        <div className="input-group input-group-sm mb-2">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input type="text" className="form-control form-control-sm" aria-label="Amount (to the nearest dollar)" />
                                            <div className="input-group-append">
                                                <span className="input-group-text">.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="control-label">Otros: </label>
                                    <div className="form-group">
                                        <div className="input-group input-group-sm mb-2">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">$</span>
                                            </div>
                                            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                            <div className="input-group-append">
                                                <span className="input-group-text">.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <h5>Total : </h5>
                                        </div>
                                        <div className="col">
                                            <label className="control-label"> <strong>$</strong> 10'256.200 </label>
                                        </div>
                                    </div>

                                </div>

                                <button type="submit" className="btn btn-sm btn-primary w-100">Construir Lentes</button>
                            </form>


                        </div>
                    </div>



                </div>
            </div>

        </>
    )
}
