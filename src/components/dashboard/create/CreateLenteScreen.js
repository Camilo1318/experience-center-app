import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { desactiveLente } from '../../../actions/lentes';
import { FormCreateLente } from '../create/FormCreateLente';
import { LentesTable } from './LentesTable';


export const CreateLenteScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(desactiveLente())

    }, [dispatch])

    return (
        <>


            <FormCreateLente />


            <LentesTable />

        </>
    )
}
