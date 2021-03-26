import React from 'react'
import { useSelector } from 'react-redux';
import { CardItem } from './CardItem';

export const CardList = () => {

    const { lentes } = useSelector(state => state.lentes);


    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-4 animate__animated animate__fadeInUp">

                {
                    lentes.map(lente => (
                        <CardItem key={lente.id} {...lente} />
                    ))
                }


            </div>
        </div>
    )
}
