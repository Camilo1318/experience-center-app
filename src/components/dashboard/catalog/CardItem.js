import React from 'react'


export const CardItem = ({ title, description, precio, urlImage, urlMarca, cir, esf, adc }) => {
    return (
        <>
            <div className="col mb-4">
                <div className="card text-center shadow py-3" style={{ minWidth: 180, maxWidth: 250 }}>

                    <h6 className="card-title">{title}</h6>

                    <img src={urlImage.url} className="card-img-top mx-auto d-block mt-3" alt="" style={{ width: 80 }} />
                    <img src={urlMarca.url} className="card-img-top mx-auto d-block mt-3" alt="" style={{ width: 120 }} />

                    <div className="my-2">
                        <span className="badge badge-pill badge-info mr-2">{cir}</span>
                        <span className="badge badge-pill badge-info mr-2">{esf}</span>
                        <span className="badge badge-pill badge-info">{adc}</span>
                    </div>


                    <div className="card-body">


                        <div className="list-group bg-light border-light">
                            <span className="card-text">

                                <ul className="list-group list-group-flush">


                                    {
                                        description.map((item, index) => (
                                            <li key={index} className="list-unstyled mb-1">{item}</li>)
                                        )
                                    }

                                </ul>

                            </span>
                        </div>


                    </div>

                    <div className="card-text">

                        <p> $ {precio} </p>

                    </div>
                </div>

            </div>
        </>
    )
}
