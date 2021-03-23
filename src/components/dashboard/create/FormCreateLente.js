import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { activeLente, startAddNewLente } from '../../../actions/lentes';
import { removeError, setError } from '../../../actions/ui';
import { operadorString } from '../../../helpers/operadorString';
import useForm from '../../../hooks/useForm';
import { PreviewLente } from './PreviewLente';
import { PreviewLenteNothing } from './PreviewLenteNothing';

export const FormCreateLente = () => {

    const { active } = useSelector(state => state.lentes)

    const dispatch = useDispatch();

    const [fileImage, setFileImage] = useState('');
    const [fileMarca, setFileMarca] = useState('');

    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        title: 'Lente Monofocal',
        description: 'Antirallas',
        precio: '195.200',
        urlImage: '',
        urlMarca: ''
    });


    const { title, precio, url, description } = formValues;



    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {

            formValues.description = operadorString(description);

            dispatch(startAddNewLente(formValues, fileImage, fileMarca));
        } else {
            console.log('Formulario invalido')
        }
    }

    const isFormValid = () => {
        if (title.length <= 3) {
            dispatch(setError('Titulo debe ser de mayor longitud'))
            return false;
        } else if (!validator.isNumeric(precio)) {
            dispatch(setError('Precio incorrecto'))
            return false;
        } else if (description.length < 5) {
            dispatch(setError('descripcion invalida'))
            return false;
        } else if (!fileImage || !fileMarca) {
            dispatch(setError('Debe cargar una imagen valida'));
            return false;
        }

        dispatch(removeError());
        return true;
    }

    const handlePreview = (e) => {

        if (isFormValid()) {
            dispatch(activeLente('id_temp', formValues));

        }
    }

    const handleFileImageChange = (e) => {

        if (e.target.files[0]) {
            const file = e.target.files[0];
            setFileImage(file);
        } else {
            setFileImage(null)
        }
    }

    const handleFileMarcaChange = (e) => {

        if (e.target.files[0]) {
            const file = e.target.files[0];
            setFileMarca(file);
        } else {
            setFileMarca(null)
        }
    }

    return (
        <>
            <div className="row p-4">
                <div className="col-6">

                    <div className="row justify-content-center my-2 ">
                        <div className="col-auto">
                            <div className="card animate__animated animate__fadeInUp animate__faster">
                                <div className="card-body">

                                    {
                                        (msgError) &&
                                        (<span className="badge badge-danger w-100 mb-2">{msgError}</span>)
                                    }

                                    <form onSubmit={handleSubmit} >
                                        <h4 className="text-center p-2">Añadir Lente</h4>
                                        <div className="form-group form-group-sm mx-auto w-100">
                                            <input
                                                type="text"
                                                className="form-control form-control-sm mb-3"
                                                placeholder="Titulo"
                                                name="title"
                                                value={title}
                                                onChange={handleInputChange}
                                            />


                                            <div className="form-group">
                                                <div className="input-group input-group-sm mb-2">
                                                    <div className="input-group-prepend ">
                                                        <span className="input-group-text">$</span>
                                                    </div>

                                                    <input
                                                        type="text"
                                                        className="form-control form-control-sm "
                                                        placeholder="Precio"
                                                        name="precio"
                                                        value={precio}
                                                        onChange={handleInputChange}
                                                    />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text">.00</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p>Imagen Lente: </p>
                                            <input

                                                className="form-control form-control-sm mb-3"
                                                type="file"
                                                id="formFile"
                                                onChange={handleFileImageChange}
                                                accept=".jpg, .jpeg, .png"
                                            />
                                            <p>Imagen Marca: </p>
                                            <input

                                                className="form-control form-control-sm mb-3"
                                                type="file"
                                                id="formFile"
                                                onChange={handleFileMarcaChange}
                                                accept=".jpg, .jpeg, .png"
                                            />

                                            <div className="input-group mb-3">
                                                <textarea
                                                    type="text"
                                                    className="form-control form-control-sm"
                                                    placeholder="Caracteristicas separadas por (,)"
                                                    name="description"
                                                    value={description}
                                                    onChange={handleInputChange}

                                                />

                                            </div>

                                            <span
                                                className="btn btn-primary d-block w-100 mb-2 mx-auto"
                                                onClick={handlePreview} value={url}
                                            > Vista Previa </span>
                                            <button className="btn btn-primary d-block w-100 mx-auto"> Añadir </button>

                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div >
                </div>


                <div className="col-6">


                    <div className="row justify-content-center my-2">
                        <div className="col-auto">

                            <div className="card p-3 animate__animated animate__fadeInUp animate__faster">
                                <h4 className="text-center p-2">Vista Previa</h4>

                                {
                                    (active)
                                        ? (<PreviewLente {...{ ...formValues, fileImage, fileMarca }} />)
                                        : (<PreviewLenteNothing />)
                                }


                            </div>



                        </div>
                    </div>


                </div>

            </div>


        </>
    )
}
