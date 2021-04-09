import React from 'react';
import ReactPlayer from 'react-player';
import { Col, Container, Image, Row } from 'react-bootstrap'

export const MainPage = () => {

    return (
        <>

            <Row className="justify-content-center m-0 bg-dark" >
                <Col className="p-0" >
                    <Image src="http://www.latinspots.com/files/notas/GTransitionsGEN8_20lentes_web.jpg" fluid />
                    <Image src="https://i.pinimg.com/originals/95/d0/b0/95d0b031d82bb79aec8aae0ed1bba98b.jpg" fluid />
                    <Image src="https://visionyoptica.com/wp-content/uploads/2020/08/Visual2-Pareja-Perfecta-min.png" fluid />


                </Col>
                <Col className="mt-5">
                    <Row className="align-items-center">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=PqOJVazCUaM&list=PLyuXbzHGJqT963obq1qUi8M9YUX2StAoH"
                            controls={true}
                            playing={true}
                            height="500px"
                            width="1035px"
                        />
                    </Row>


                </Col>

                <Col className="p-0" >
                    <Image src="https://visionyoptica.com/wp-content/uploads/2020/05/Younger-2020-2da-2020-And-3-min-856x1024.jpg" fluid className="w-100 d-block" />
                    <Image src="https://www.cambialacara.com.co/img/slick01.jpg" fluid className="w-100 d-block" />
                    <Image src="https://2.bp.blogspot.com/-EHipbqXOtRM/VdCWWmNj3AI/AAAAAAAABLY/atRZVjCA8Rg/s1600/infografia_luzazul.jpg" fluid className="w-100 d-block" />
                </Col>

            </Row>

            <div>

                <div className="alert alert-dismissible alert-info mt-3">

                    <h4 className="alert-heading">Version Beta !</h4>
                    <p className="mb-0">Gracias por la Paciencia, actualmente estamos incluyendo nuevas funcionalidades, puede que experimentes algunos cambios...</p>
                </div>

                <div className="jumbotron mt-5">
                    <h1 className="display-3">Bienvenido</h1>
                    <p className="lead">En este espacio estarás al tanto de los mantenimientos y actualizaciones de nuestra App ExP Center</p>
                    <p>Soporte: (+57) 3213353173  </p>
                    <p>Cristian Camilo Pérez Sandoval... Desarrollador de Software  </p>

                </div>
            </div >
        </>
    )
}
