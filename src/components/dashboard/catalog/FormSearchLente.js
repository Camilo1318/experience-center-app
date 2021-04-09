
import React from 'react'
import { Button, Card, Col, Form, FormControl, FormGroup, Row } from 'react-bootstrap'

export const FormSearchLente = () => {
    return (


        <Form>
            <FormGroup>
                <Form.Label className="mb-2">Ojo Derecho</Form.Label>
                <Row>
                    <Col>
                        <FormControl type="text" placeholder="Cir" size="sm" />

                    </Col>
                    <Col>
                        <FormControl type="text" placeholder="Esf" size="sm" />
                    </Col>

                    <Col>
                        <FormControl type="text" placeholder="Adc" size="sm" />
                    </Col>
                </Row>
            </FormGroup>

            <FormGroup>
                <Form.Label className="mb-2">Ojo Izquierdo</Form.Label>
                <Row>
                    <Col>
                        <FormControl type="text" placeholder="Cir" size="sm" />
                    </Col>
                    <Col>
                        <FormControl type="text" placeholder="Esf" size="sm" />
                    </Col>
                    <Col>
                        <FormControl type="text" placeholder="Adc" size="sm" />
                    </Col>
                </Row>
            </FormGroup>

            <Button type="submit" variant="primary" block size="sm">Construir Lentes</Button>
        </Form>
    )

}