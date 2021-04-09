import React from 'react'
import { useSelector } from 'react-redux'
import { LentesItem } from './LentesItem'

export const LentesTable = () => {

    const { lentes } = useSelector(state => state.lentes)

    return (
        <div className="row justify-content-center">
            <div className="col-auto">

                <table className="table table-sm table-hover table-responsive-sm" >

                    <thead>
                        <tr>
                            <th scope="col" className="text-center"><strong>ID</strong></th>
                            <th scope="col" className="text-center"><strong>Tipo</strong></th>
                            <th scope="col" className="text-center"><strong>Nombre</strong></th>
                            <th scope="col" className="text-center"><strong>Imagen Lente</strong></th>
                            <th scope="col" className="text-center"><strong>Imagen Marca</strong></th>
                            <th scope="col" className="text-center"><strong>Descripción</strong></th>
                            <th scope="col" className="text-center"><strong>Proteccion</strong></th>
                            <th scope="col" className="text-center"><strong>Formula</strong></th>
                            <th scope="col" className="text-center"><strong>Precio</strong></th>
                            <th scope="col" className="text-center"><strong>Eliminar</strong></th>
                            <th scope="col" className="text-center"><strong>Editar</strong></th>

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

