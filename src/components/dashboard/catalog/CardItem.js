import React from 'react'
// import { useSelector } from 'react-redux'

export const CardItem = ({ title, description, precio }) => {
    return (
        <>
            <div className="col mb-4">
                <div className="card text-center shadow border-light" style={{ minWidth: 230, maxWidth: 250 }}>
                    <h6 className="card-header">{title}</h6>
                    <img src="https://i.ibb.co/WDC80yX/Screenshot-1.png" className="card-img-top mx-auto d-block mt-3" style={{ width: 120 }} />
                    <div className="card-body">
                        <img src="https://i.ibb.co/7GcYX9R/Screenshot-2.png" alt="BlueSafe" className="img-fluid" />

                        <div className="list-group bg-light border-light">
                            <span className="card-text"> {description}</span>
                            <span className="card-text"> Calidad Optica</span>
                            <span className="card-text"> Resistencia</span>
                            <span className="card-text"> Super Hidrofóbico</span>
                            <span className="card-text"> Antirallas</span>
                        </div>


                    </div>

                    <div className="card-footer ">
                        <div className="row">
                            <div className="col">
                                <h6>Precio : </h6>
                            </div>
                            <div className="col">
                                <p className="control-label"> <strong>$</strong> {precio}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
