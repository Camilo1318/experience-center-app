import React from 'react'
import { useDispatch } from 'react-redux'
import { activeLente, editingLente, startDeleteLente } from '../../../actions/lentes';
import { resetFormLente } from '../../../actions/ui';

export const LentesItem = ({ id, title, description, precio, urlImage, urlMarca, proteccion, cir, esf, adc, index }) => {


    const dispatch = useDispatch();

    const handleActiveClick = () => {
        dispatch(activeLente(id, {
            title,
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
        console.log('Estamos editando el lente' + id)
        dispatch(editingLente(true));
        dispatch(resetFormLente(true));
    }

    return (
        <>

            <tbody>
                <tr className="table-transparent" role="button" onClick={handleActiveClick}>
                    <th scope="row">{index + 1}</th>
                    <td>{title}</td>
                    <td><img src={urlImage} className="d-block mx-auto img-thumbnail" alt="" style={{ maxWidth: 50 }} /></td>
                    <td><img src={urlMarca} className="d-block mx-auto img-thumbnail" alt="" style={{ maxWidth: 50 }} /></td>

                    <td>

                        <ul className="list-unstyled">

                            {
                                description.map((item, index) => (
                                    <li key={index} className="list-unstyled mb-1">{item}</li>
                                ))
                            }

                        </ul>

                    </td>

                    <td>{proteccion}</td>
                    <td>{cir} - {esf} - {adc}</td>

                    <td>{precio}</td>
                    <td>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDeleteLente(id)}

                        >
                            Eliminar
                        </button>
                    </td>

                    <td>

                        <button
                            className="btn btn-info btn-sm"
                            onClick={() => handleEditLente(id)}

                        >
                            Editar
                        </button>

                    </td>

                </tr>
            </tbody>
        </>
    )
}
