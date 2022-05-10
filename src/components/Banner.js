import imagenes from "../assets/imagenes";
import Carousel from 'react-bootstrap/Carousel'

function Banner() {
  return (
    <Carousel>
  <Carousel.Item>
    <img src={imagenes.fondo_azul} alt="" className="d-block w-100" height="350px"/>
    <Carousel.Caption>

    <div className="container">
				<div className="row">
					<div className="mx-auto col-md-10 col-lg-6 order-lg-last">
                    <img src={imagenes.MT} alt="" height="225px"/>
					</div>
					<div className="col-lg-6 mb-0 d-flex align-items-center">
						<div className="text-align-left">
							<h1 className="h1 text-black">
								<b>MTs</b>
							</h1>
							<h3 className="h2 text-black">Ullamco laboris nisi ut</h3>
							<p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
						</div>
					</div>
				</div>
			</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   <img src={imagenes.fondo_verde} className="d-block w-100" alt="" height="350px"/>

    <Carousel.Caption>
    <div className="container">
				<div className="row">
					<div className="mx-auto col-md-10 col-lg-6 order-lg-last">
                    <img src={imagenes.pokeball} alt="" height="225px"/>
					</div>
					<div className="col-lg-6 mb-0 d-flex align-items-center">
						<div className="text-align-left">
							<h1 className="h1 text-black">
								<b>Pokeballs</b>
							</h1>
							<h3 className="h2 text-black">Ullamco laboris nisi ut</h3>
							<p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
						</div>
					</div>
				</div>
			</div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>

    <img src={imagenes.fondo_rojo} className="d-block w-100" alt="" height="350px"/>

    <Carousel.Caption>
    <div className="container">
				<div className="row">
					<div className="mx-auto col-md-10 col-lg-6 order-lg-last">
                    <img src={imagenes.Hiperpocion_GO} alt="" height="225px"/>
					</div>
					<div className="col-lg-6 mb-0 d-flex align-items-center">
						<div className="text-align-left">
							<h1 className="h1 text-black">
								<b>Botiquin</b>
							</h1>
							<h3 className="h2 text-black">Ullamco laboris nisi ut</h3>
							<p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
						</div>
					</div>
				</div>
			</div>
    </Carousel.Caption>
  </Carousel.Item>

     <Carousel.Item>

    <img src={imagenes.fondo_morado} className="d-block w-100" alt="" height="350px"/>

    <Carousel.Caption>
    <div className="container">
				<div className="row">
					<div className="mx-auto col-md-10 col-lg-6 order-lg-last">
                    <img src={imagenes.proteina} alt="" height="225px"/>
					</div>
					<div className="col-lg-6 mb-0 d-flex align-items-center">
						<div className="text-align-left">
							<h1 className="h1 text-black">
								<b>Mejoras</b>
							</h1>
							<h3 className="h2 text-black">Ullamco laboris nisi ut</h3>
							<p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
						</div>
					</div>
				</div>
			</div>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
  );
}

export default Banner;


