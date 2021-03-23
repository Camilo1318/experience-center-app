

export const PreviewLenteNothing = () => {

    return (
        <>
            <div className="col mb-4">
                <div className="card text-center shadow border-light" style={{ minWidth: 210, maxWidth: 300 }}>
                    <h6 className="card-header"><strong>Titulo del Lente</strong></h6>
                    <h2>{ }</h2>


                    <img src="./assets/lentePreview.jpg"
                        className="card-img-top mx-auto d-block mt-3"
                        alt=""
                        style={{ width: 120 }} />


                    <img src="./assets/marcaPreview.png"
                        className="card-img-top mx-auto d-block mt-3"
                        alt=""
                        style={{ width: 120 }} />


                    <div className="card-body">

                        <div className="list-group bg-light border-light">
                            <span className="card-text"> { }</span>
                            <span className="card-text"> Caracteristica 1</span>
                            <span className="card-text"> Caracteristica 2</span>
                            <span className="card-text"> Caracteristica 3</span>
                            <span className="card-text"> (...))</span>
                        </div>


                    </div>

                    <div className="card-footer ">
                        <div className="row">
                            <div className="col">
                                <h6>Precio: </h6>
                            </div>
                            <div className="col">
                                <label className="control-label"> <strong>$</strong> 0.00 </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
