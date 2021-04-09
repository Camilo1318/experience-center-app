import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { activeLente, startAddNewLente, startUpdateLente, editingLente, desactiveLente, startDeleteAllLentes } from '../../../actions/lentes';
import { removeError, resetFormLente, setError, setShowHideModal } from '../../../actions/ui';
import { arrayToString } from '../../../helpers/arrayToString';
import { stringToArray } from '../../../helpers/stringToArray';
import useForm from '../../../hooks/useForm';
import { PreviewLente } from './PreviewLente';
import { PreviewLenteNothing } from './PreviewLenteNothing';
import { getUrlDownloadAssets } from '../../../helpers/getUrlDownloadAssets'

import { IoMdAddCircleOutline } from 'react-icons/io'
import { FaCloudUploadAlt, FaCloudDownloadAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Col, Form, FormControl, FormGroup, InputGroup, Button, Row, Modal, Badge } from 'react-bootstrap';

export const FormCreateLente = () => {

    const { active } = useSelector(state => state.lentes)
    const { idEditing } = useSelector(state => state.lentes)
    const { resetForm } = useSelector(state => state.ui)
    const { ModalShowHide } = useSelector(state => state.ui)

    const dispatch = useDispatch();

    const [ableButton, setableButton] = useState(false)
    const [dataToSend, setdataToSend] = useState({})

    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange, reset] = useForm({
        lenteType: '',
        title: '',
        description: '',
        precio: '',
        urlImage: '',
        urlMarca: '',
        proteccion: '',
        cir: '',
        esf: '',
        adc: ''

    });

    const { lenteType, title, precio, description, cir, esf, adc, proteccion, urlImage, urlMarca } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {

            if (idEditing) {
                dispatch(startUpdateLente(dataToSend));
            } else {
                dispatch(startAddNewLente(dataToSend));
            }
            setableButton(false);
            dispatch(desactiveLente())
            dispatch(setShowHideModal(false));
            reset();

        } else {
            console.log('Formulario invalido');
        }
    }

    const isFormValid = () => {

        if (title.length <= 3) {
            dispatch(setError('Titulo debe ser de mayor longitud'))
            return false;
        } else if (validator.isEmpty(lenteType)) {
            dispatch(setError('Debe Seleccionar un Tipo'))
            return false;
        } else if (!validator.isNumeric(precio)) {
            dispatch(setError('Precio incorrecto'))
            return false;
        } else if (validator.isEmpty(urlImage)) {
            dispatch(setError('Debe Seleccionar un color de Lente'))
            return false;
        } else if (validator.isEmpty(urlMarca)) {
            dispatch(setError('Debe Seleccionar una Marca'))
            return false;
        } else if (validator.isEmpty(cir) || validator.isEmpty(esf) || validator.isEmpty(adc)) {
            dispatch(setError('Error en Formula'))
            return false;
        } else if (validator.isEmpty(proteccion)) {
            dispatch(setError('Debe Seleccionar una proteccion'))
            return false;
        } else if (description.length < 2) {
            console.log(description.length);
            dispatch(setError('descripcion invalida'))
            return false;
        }
        dispatch(removeError());
        return true;
    }

    const handlePreview = (e) => {

        if (isFormValid()) {

            setableButton(true);

            const formValuesToSend = { ...formValues };

            getUrlDownloadAssets(urlImage, urlMarca).then(urls => {
                formValuesToSend.urlImage = {
                    name: urlImage,
                    url: urls[0]
                }
                formValuesToSend.urlMarca = {
                    name: urlMarca,
                    url: urls[1]
                }

                formValuesToSend.description = stringToArray(formValues.description);

                setdataToSend(formValuesToSend);

                dispatch(activeLente('id_temp', formValuesToSend));
            }
            )
        }
    }

    const handleCloseModal = () => {

        setableButton(false)
        dispatch(setShowHideModal(false))
        dispatch(editingLente(false))
        reset();

    };

    const handleShowModal = () => {
        dispatch(desactiveLente())
        dispatch(setShowHideModal(true))

    };

    useEffect(() => {

        if (active && resetForm) {

            const stringDescription = arrayToString(active.description);

            reset({
                title: active.title,
                lenteType: active.lenteType,
                description: stringDescription,
                precio: active.precio,
                urlImage: active.urlImage.name,
                urlMarca: active.urlMarca.name,
                proteccion: active.proteccion,
                cir: active.cir,
                esf: active.esf,
                adc: active.adc
            })

            dispatch(resetFormLente(false))
        }

    }, [active, reset, dispatch, resetForm])

    return (
        <>

            <Button variant="primary" size="sm" className="mr-2" onClick={handleShowModal}>
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <div>
                        Añadir Lente <IoMdAddCircleOutline />
                    </div>
                </IconContext.Provider>
            </Button>

            {/* <Button variant="primary" size="sm" className="mr-2" onClick={handleAddBaseDataLentes}>
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <div>
                        Borrar Lentes <RiDeleteBin5Line />
                    </div>
                </IconContext.Provider>
            </Button>

            <Button variant="primary" size="sm" className="mr-2" onClick={handleAddBaseDataLentes}>
                <IconContext.Provider value={{ size: "1.5em" }}>
                    <div>
                        Cargar Lentes <FaCloudUploadAlt />
                    </div>
                </IconContext.Provider>
            </Button>

            <Button variant="primary" size="sm" className="mr-2" onClick={handleAddBaseDataLentes}>
                <IconContext.Provider value={{ size: "1.5em" }} >
                    <div>
                        Descargar Lentes <FaCloudDownloadAlt />
                    </div>
                </IconContext.Provider>
            </Button> */}

            <Modal
                show={ModalShowHide}
                onHide={handleCloseModal}
                size="lg"
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title>Agregar Lente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>

                            <Form className="w-75 mx-auto" >


                                <FormGroup>
                                    <Form.Label>Tipo de Lente</Form.Label>
                                    <FormControl
                                        as='select'
                                        size="sm"
                                        onChange={handleInputChange}
                                        name="lenteType"
                                        value={lenteType}
                                    >

                                        <option value="">Seleccionar...</option>
                                        <option value="Monofocales">Monofocal</option>
                                        <option value="Bifocales">Bifocal</option>
                                        <option value="Ocupacionales">Ocupacional</option>
                                        <option value="Progresivos">Progresivo</option>



                                    </FormControl>
                                </FormGroup>

                                <FormGroup>
                                    <FormControl
                                        size="sm"
                                        type="text"
                                        placeholder="Titulo"
                                        name="title"
                                        value={title}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>

                                <FormGroup >

                                    <InputGroup size="sm">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>
                                                $
                                                    </InputGroup.Text>
                                        </InputGroup.Prepend>

                                        <FormControl
                                            type="text"
                                            placeholder="Precio"
                                            name="precio"
                                            value={precio}
                                            onChange={handleInputChange}
                                        />
                                        <InputGroup.Append>
                                            <InputGroup.Text>
                                                .00
                                                </InputGroup.Text>
                                        </InputGroup.Append>

                                    </InputGroup>
                                </FormGroup>

                                <FormGroup>
                                    <Form.Label>Color de Lente</Form.Label>
                                    <FormControl
                                        as="select"
                                        onChange={handleInputChange}
                                        size="sm"
                                        name="urlImage"
                                        value={urlImage}
                                    >
                                        <option value="">Seleccionar...</option>
                                        <option value="lenteBlanco">Blanco</option>
                                        <option value="verdeAzulado">Verde Azulado</option>


                                    </FormControl>

                                </FormGroup>
                                <FormGroup>
                                    <Form.Label>Marca</Form.Label>
                                    <FormControl
                                        as="select"
                                        onChange={handleInputChange}
                                        size="sm"
                                        name="urlMarca"
                                        value={urlMarca}
                                    >
                                        <option value="">Seleccionar...</option>
                                        <option value="lightSensor_logo">LightSensor</option>
                                        <option value="iFree_logo">iFree</option>
                                        <option value="iFreeBlue_logo">IFreeBlue</option>
                                        <option value="blueSage_logo">BlueSafe</option>
                                        <option value="Superfelex_logo">SuperFlex</option>


                                    </FormControl>

                                </FormGroup>

                                <Form.Row className="mb-3">

                                    <Col>
                                        <FormControl
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Esfera"
                                            name="cir"
                                            onChange={handleInputChange}
                                            value={cir}>
                                        </FormControl>
                                    </Col>

                                    <Col>
                                        <FormControl
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Circulo"
                                            name="esf"
                                            onChange={handleInputChange}
                                            value={esf}

                                        />
                                    </Col>


                                    <Col>
                                        <FormControl
                                            type="text"
                                            className="form-control form-control-sm"
                                            placeholder="Adicion"
                                            name="adc"
                                            onChange={handleInputChange}
                                            value={adc}
                                        />
                                    </Col>

                                </Form.Row>

                                <FormGroup>
                                    <Form.Label>Tipo de Proteccion</Form.Label>
                                    <FormControl
                                        as="select"
                                        value={proteccion}
                                        onChange={handleInputChange}
                                        size="sm"
                                        name="proteccion"
                                    >
                                        <option value="">Seleccionar...</option>
                                        <option value="Blancos">Blancos</option>
                                        <option value="Luz Azul">Luz Azul</option>
                                        <option value="Fotosensibles">Fotosensibles</option>
                                        <option value="Fotosensibles y Luz Azul">Fotosensibles y Luz Azul</option>


                                    </FormControl>

                                </FormGroup>

                                <FormGroup>
                                    <FormControl as="textarea"
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="Caracteristicas separadas por (,)"
                                        name="description"
                                        value={description}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>

                                {
                                    (msgError) &&
                                    (<Badge pill variant="danger" className="d-block mx-auto mb-2">{msgError}</Badge>)
                                }

                                <span
                                    className="btn btn-primary d-block w-100 mb-2 mx-auto"
                                    onClick={handlePreview}
                                > Vista Previa </span>
                            </Form>

                        </Col>
                        <Col>

                            {
                                (active)
                                    ? (<PreviewLente {...{ ...formValues, handlePreview }} />)
                                    : (<PreviewLenteNothing />)
                            }
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSubmit} disabled={!ableButton}>
                        {
                            (idEditing) ? `Actualizar Lente` : `Añadir Lente`
                        }
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Cancelar
                     </Button>
                </Modal.Footer>
            </Modal>



        </>
    )
}
