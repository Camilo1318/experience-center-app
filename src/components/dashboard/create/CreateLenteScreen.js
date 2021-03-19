import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { activeLente, desactiveLente } from '../../../actions/lentes';
import { FormCreateLente } from '../create/FormCreateLente';
import { LentesTable } from './LentesTable';


export const CreateLenteScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(desactiveLente())

    }, [])

    return (
        <>


            <FormCreateLente />




            <LentesTable />

        </>
    )
}
