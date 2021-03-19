import React from 'react'
import { useSelector } from 'react-redux'
import { LentesItem } from './LentesItem'

export const LentesTable = () => {

    const { lentes } = useSelector(state => state.lentes)

    return (
        <div className="row justify-content-center">
            <div className="col-auto">


                <h2 className="p-2 text-center">Inventario de Lentes</h2>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col"><strong>ID</strong></th>
                            <th scope="col"><strong>Nombre</strong></th>
                            <th scope="col"><strong>Imagen Lente</strong></th>
                            <th scope="col"><strong>Imagen Marca</strong></th>
                            <th scope="col"><strong>Descripcion</strong></th>
                            <th scope="col"><strong>Precio</strong></th>
                            <th scope="col"><strong>Elimar</strong></th>
                            <th scope="col"><strong>Editar</strong></th>

                        </tr>
                    </thead>

                    {

                        lentes.map((lente, index) => (

                            < LentesItem key={lente.id} {...{ ...lente, index }} />
                        ))


                    }

                </table>
            </div>
        </div>

    )
}

