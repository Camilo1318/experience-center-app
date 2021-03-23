import React from 'react'
// import { useSelector } from 'react-redux'

export const CardItem = ({ title, description, precio, urlImage, urlMarca }) => {
    return (
        <>
            <div className="col mb-4">
                <div className="card text-center shadow border-light" style={{ minWidth: 230, maxWidth: 250 }}>
                    <h6 className="card-header">{title}</h6>

                    <img src={urlImage} className="card-img-top mx-auto d-block mt-3" alt="" style={{ width: 130 }} />
                    <img src={urlMarca} className="card-img-top mx-auto d-block mt-3" alt="" style={{ width: 110 }} />


                    <div className="card-body">

                        <div className="list-group bg-light border-light">
                            <span className="card-text"> {description}</span>
                        </div>


                    </div>

                    <div className="card-footer ">
                        <div className="row">
                            <div className="col">
                                <h6>Precio: </h6>
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
