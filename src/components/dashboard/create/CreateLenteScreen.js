import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
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
            <Container>
                <h2 className="mt-4 text-center">Inventario de Lentes</h2>
                <Row className="justify-content-around my-4" >
                    <FormCreateLente />
                </Row>
                <Row>
                    <LentesTable />
                </Row>

            </Container>
        </>
    )
}
