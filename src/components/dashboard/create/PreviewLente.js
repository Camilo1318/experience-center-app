import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const PreviewLente = ({ fileImage, fileMarca }) => {

    const { active } = useSelector(state => state.lentes)
    const { title, description, precio } = active

    const [previewLente, setPreviewLente] = useState(null);
    const [previewMarca, setPreviewMarca] = useState(null);

    useEffect(() => {
        if (fileImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewLente(reader.result);
            };
            reader.readAsDataURL(fileImage)
        } else {
            setPreviewLente(null)
        }
    }, [fileImage]);

    useEffect(() => {
        if (fileMarca) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewMarca(reader.result);
            };
            reader.readAsDataURL(fileMarca)
        } else {
            setPreviewMarca(null)
        }
    }, [fileMarca]);


    return (
        <>
            <div className="col mb-4">
                <div className="card text-center shadow border-light" style={{ minWidth: 210, maxWidth: 250 }}>
                    <h6 className="card-header"><strong>{title}</strong></h6>
                    <h2>{ }</h2>

                    {/* Condicion pregunta por id =! 'id_temp' muestra url si no previewLente */}
                    <img src={previewLente}
                        className="card-img-top mx-auto d-block mt-2"
                        style={{ width: 120 }} />

                    <img src={previewMarca}
                        className="card-img-top mx-auto d-block mt-2"
                        style={{ width: 120 }}
                    />

                    <div className="card-body">

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
                                <label className="control-label"> <strong>$</strong> {precio}</label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
