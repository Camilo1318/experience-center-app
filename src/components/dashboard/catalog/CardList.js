import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getLenteByType } from '../../../selectors/getLenteByType';
import { CardItem } from './CardItem';


export const CardList = ({ type }) => {

    const { lentes } = useSelector(state => state.lentes);

    const [newLentes, setNewLentes] = useState([])

    useEffect(() => {

        setNewLentes(getLenteByType(lentes, type))

    }, [lentes, type])

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-4">

                {
                    newLentes.map(lente => (


                        <div className="animate__animated animate__fadeIn">
                            <CardItem key={lente.id} {...lente} />

                        </div>


                    ))
                }


            </div>
        </div >



    )
}
