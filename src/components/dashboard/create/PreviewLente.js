import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export const PreviewLente = ({ fileImage, fileMarca }) => {

    const { active } = useSelector(state => state.lentes)
    const { id, title, precio, description, urlImage, urlMarca, cir, esf, adc } = active;
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
            <div className="col mb-2">
                <div className="card text-center shadow border-light" style={{ minWidth: 250 }}>
                    <h6 className="card-header"><strong>{title}</strong></h6>

                    {
                        (id !== 'id_temp') ?
                            (
                                <img src={urlImage}
                                    className="card-img-top mx-auto d-block mt-1"
                                    alt=""
                                    style={{ width: 120 }} />

                            ) :

                            (
                                <img src={previewLente}
                                    className="card-img-top mx-auto d-block mt-1"
                                    alt=""
                                    style={{ width: 120 }} />
                            )

                    }

                    {
                        (id !== 'id_temp') ?
                            (
                                <img src={urlMarca}
                                    className="card-img-top mx-auto d-block mt-1"
                                    alt=""
                                    style={{ width: 160 }}
                                />
                            ) :
                            (
                                <img src={previewMarca}
                                    className="card-img-top mx-auto d-block mt-1"
                                    alt=""
                                    style={{ width: 160 }}
                                />
                            )
                    }

                    <div className="card-body">

                        <span className="badge badge-pill badge-info mr-2">{cir}</span>
                        <span className="badge badge-pill badge-info mr-2">{esf}</span>
                        <span className="badge badge-pill badge-info">{adc}</span>

                        <div className="list-group bg-light border-light">
                            <span className="card-text">
                                <ul className="list-group list-group-flush">

                                    {
                                        description.map((item, index) => (
                                            <li key={index} className="list-unstyled mb-1">{item}</li>
                                        ))
                                    }

                                </ul>

                            </span>
                        </div>


                    </div>

                    <div className="card-footer ">

                        <label className="control-label"> <strong>$</strong> {precio} </label>

                    </div>
                </div>
            </div>
        </>
    )
}
