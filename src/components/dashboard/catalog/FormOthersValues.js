import React from 'react'
import { Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'

export const FormOthersValues = () => {
    return (
        <>
            <Form className="mt-3">

                <FormGroup>
                    <label>Consulta: </label>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number" />
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>

                <FormGroup>
                    <label>Montura: </label>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number" />
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>

                <FormGroup>
                    <label>Otros: </label>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="number" />
                        <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>
            </Form>
            <div>
                <p className="text-center">TOTAL: $ 1'200.500</p>
            </div>
        </>

    )
}

