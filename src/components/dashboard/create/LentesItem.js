import React from 'react'
import { useDispatch } from 'react-redux'
import { activeLente, startDeleteLente } from '../../../actions/lentes';

export const LentesItem = ({ id, title, description, precio, urlImage, urlMarca, index }) => {


    const dispatch = useDispatch();

    const handleActiveClick = () => {
        dispatch(activeLente(id, {
            title, description, precio
        }))
    }

    const handleDeleteLente = (id) => {
        console.log('Estamos eliminando el lente' + id)
        dispatch(startDeleteLente(id))
    }

    const handleEditLente = (id) => {
        console.log('Estamos editando el lente' + id)
    }

    return (
        <>

            <tbody>
                <tr className="table-transparent" role="button" onClick={handleActiveClick}>
                    <th scope="row">{index + 1}</th>
                    <td>{title}</td>
                    <td><img src={urlImage} className="d-block mx-auto img-thumbnail" alt="" style={{ maxWidth: 50 }} /></td>
                    <td><img src={urlMarca} className="d-block mx-auto img-thumbnail" alt="" style={{ maxWidth: 50 }} /></td>
                    <td>{description}</td>
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
