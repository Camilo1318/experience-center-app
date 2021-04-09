import React from 'react'
import { useDispatch } from 'react-redux'
import { activeLente, editingLente, startDeleteLente } from '../../../actions/lentes';
import { resetFormLente, setShowHideModal } from '../../../actions/ui';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib';

export const LentesItem = ({ id, lenteType, title, description, precio, urlImage, urlMarca, proteccion, cir, esf, adc, index }) => {

    const dispatch = useDispatch();

    const handleActiveClick = () => {
        dispatch(activeLente(id, {
            title,
            lenteType,
            description,
            precio,
            urlImage,
            urlMarca,
            proteccion,
            cir,
            esf,
            adc

        }))
    }

    const handleDeleteLente = (id) => {

        dispatch(startDeleteLente(id))

    }

    const handleEditLente = (id) => {

        dispatch(editingLente(id));
        dispatch(resetFormLente(true));
        dispatch(setShowHideModal(true))

    }

    return (
        <>

            <tbody>
                <tr className="table-transparent " role="button" onClick={handleActiveClick}>
                    <th scope="row" className="align-middle">{index + 1}</th>
                    <td className="align-middle">{lenteType}</td>
                    <td className="align-middle">{title}</td>
                    <td><img src={urlImage.url} className=" img-thumbnail mt-4" alt="" style={{ maxWidth: 50 }} /></td>
                    <td><img src={urlMarca.url} className=" img-thumbnail mt-4" alt="" style={{ maxWidth: 50 }} /></td>

                    <td className="align-middle">

                        <ul className="list-unstyled">

                            {
                                description.map((item, index) => (
                                    <li key={index} className="badge rounded-pill bg-light d-block mb-1">{item}</li>
                                ))
                            }

                        </ul>

                    </td>

                    <td className="align-middle">{proteccion}</td>
                    <td className="align-middle">
                        <ul>
                            <li className="badge rounded-pill bg-light mb-1 d-block">Cir: {cir}</li>
                            <li className="badge rounded-pill bg-light mb-1 d-block">Esf: {esf}</li>
                            <li className="badge rounded-pill bg-light d-block" >Adc: {adc}</li>


                        </ul>


                    </td>

                    <td className="align-middle">${precio}</td>
                    <td className="align-middle">
                        <button
                            className="btn btn-danger w-100 btn-sm"
                            onClick={() => handleDeleteLente(id)}

                        >
                            <IconContext.Provider value={{ size: "1.5em" }}>
                                <div>
                                    <AiOutlineDelete />
                                </div>
                            </IconContext.Provider>

                        </button>
                    </td>

                    <td className="align-middle">

                        <button
                            className="btn btn-info btn-sm w-100"
                            onClick={() => handleEditLente(id)}

                        >
                            <IconContext.Provider value={{ size: "1.5em" }}>
                                <div>
                                    <AiOutlineEdit />
                                </div>
                            </IconContext.Provider>
                        </button>

                    </td>

                </tr>
            </tbody>
        </>
    )
}
