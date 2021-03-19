import React from 'react'
import { useSelector } from 'react-redux';
import { CardItem } from './CardItem';

export const CardList = () => {

    const { lentes } = useSelector(state => state.lentes);


    // const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-4">

                {
                    lentes.map(lente => (
                        <CardItem key={lente.id} {...lente} />
                    ))
                }


            </div>
        </div>
    )
}
