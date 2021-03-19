import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { startAddNewLente, startUploadImageFirebase } from '../../../actions/lentes';
import { removeError, setError } from '../../../actions/ui';
import useForm from '../../../hooks/useForm';
import { PreviewLente } from './PreviewLente';

export const FormCreateLente = () => {

    const dispatch = useDispatch();

    const [File, setFile] = useState('');

    const { msgError } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        title: 'Lente Monofocal',
        description: 'Antirallas',
        precio: '195.200',
    });

    const { title, description, precio } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startAddNewLente(formValues));
            dispatch(startUploadImageFirebase(File))
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
        } else if (!File) {
            dispatch(setError('Debe cargar una imagen valida'));
            return false;
        }

        dispatch(removeError());
        return true;
    }

    const handleFileChange = (e) => {

        if (e.target.files[0]) {
            const file = e.target.files[0];
            setFile(file);
        } else {
            setFile(null)
        }
    }

    return (
        <>
            <div className="card">
                <div className="card-body">

                    {
                        (msgError) &&
                        (<span className="badge badge-danger w-100 mb-2">{msgError}</span>)
                    }

                    <form onSubmit={handleSubmit} >
                        <h3 className="text-center p-2">Añadir Lente</h3>
                        <div className="form-group mx-auto w-75">
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Titulo"
                                name="title"
                                value={title}
                                onChange={handleInputChange}
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Precio"
                                name="precio"
                                value={precio}
                                onChange={handleInputChange}
                            />

                            <input

                                className="form-control form-control-sm mb-3"
                                type="file"
                                id="formFile"
                                onChange={handleFileChange}
                                accept=".jpg, .jpeg, .png"
                            />

                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Caracteristicas"
                                    name="description"
                                    value={description}
                                    onChange={handleInputChange}

                                />

                            </div>

                            <button type="submit" className="btn btn-primary d-block w-100"> Añadir </button>

                        </div>
                    </form>
                </div>
            </div>

            <div className="row justify-content-center my-2">
                <div className="col-auto">

                    <h3 className="text-center p-2">Vista Previa</h3>

                    <PreviewLente {...{ ...formValues, File }} />


                </div>
            </div>
        </>
    )
}
