import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const PreviewLente = ({ title, precio, File }) => {

    const { lentes: note } = useSelector(state => state.lentes)

    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (File) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(File)
        } else {
            setPreview(null)
        }
    }, [File]);

    return (
        <>
            <div className="col mb-4">
                <div className="card text-center shadow border-light" style={{ minWidth: 210, maxWidth: 250 }}>
                    <h6 className="card-header"><strong>{title}</strong></h6>
                    <h2>{ }</h2>
                    {
                        (preview)
                            ? (
                                <img src={preview}
                                    className="card-img-top mx-auto d-block mt-3"
                                    style={{ width: 120 }} />
                            )
                            : (
                                <img src="https://i.ibb.co/WDC80yX/Screenshot-1.png"
                                    className="card-img-top mx-auto d-block mt-3"
                                    style={{ width: 120 }} />
                            )
                    }


                    <div className="card-body">
                        <img src="https://i.ibb.co/7GcYX9R/Screenshot-2.png" alt="BlueSafe" className="img-fluid" />

                        <div className="list-group bg-light border-light">
                            <span className="card-text"> { }</span>
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
                                <label className="control-label"> <strong>$</strong> {precio}</label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
