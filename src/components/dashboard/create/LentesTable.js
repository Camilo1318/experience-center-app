import React from 'react'
import { useSelector } from 'react-redux'
import { LentesItem } from './LentesItem'

export const LentesTable = () => {

    const { lentes } = useSelector(state => state.lentes)

    return (
        <>

            <h2 className="p-2 text-center">Lista de Lentes</h2>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Imagen Lente</th>
                        <th scope="col">Imagen Marca</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>

                {

                    lentes.map((lente, index) => (

                        < LentesItem key={lente.id} {...{ ...lente, index }} />
                    ))


                }

            </table>
        </>

    )
}

