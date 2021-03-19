import React from 'react'
import { useDispatch } from 'react-redux'
import { activeLente } from '../../../actions/lentes';

export const LentesItem = ({ id, title, description, precio, index }) => {


    const dispatch = useDispatch();

    const handleActiveClick = () => {
        dispatch(activeLente(id, {
            title, description, precio
        }))
    }

    const handleDeleteLente = (id) => {
        console.log(id)
    }

    return (
        <>

            <tbody>
                <tr className="table-transparent" role="button" onClick={handleActiveClick}>
                    <th scope="row">{index + 1}</th>
                    <td>{title}</td>
                    <td>(Imagen Lente)</td>
                    <td>(Imagen Marca)</td>
                    <td>{description}</td>
                    <td>{precio}</td>
                    <td><button
                        className="btn btn-danger"
                        onClick={() => handleDeleteLente(id)}

                    >Eliminar</button></td>
                    <td><button
                        className="btn btn-info"
                        onClick={() => handleDeleteLente(id)}

                    >Editar</button></td>

                </tr>
            </tbody>
        </>
    )
}
