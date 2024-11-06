import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import gatoflor from '../../img/gatoflor.jpg';
import gift from '../../img/649.gif';

const Pag2 = () => {
  const backgroundStyle = {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    background: 'linear-gradient(45deg, rgba(255, 0, 150, 0.7), rgba(0, 204, 255, 0.7))', // Fondo de gradiente fijo
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Centra verticalmente
    textAlign: 'center',
    padding: '0 15px', // Espaciado lateral
  };

  const cardStyle = {
    zIndex: 1, // Asegura que la tarjeta esté por encima del fondo
    borderRadius: '15px', // Bordes redondeados para la tarjeta
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Sombra más suave
    padding: '20px', // Espaciado interno para la tarjeta
    maxWidth: '500px', // Limitar el ancho de la tarjeta
    margin: '0 auto', // Centrar la tarjeta
    maxHeight: '80vh', // Limitar la altura máxima de la tarjeta
    overflowY: 'scroll', // Permitir el desplazamiento vertical
    scrollbarWidth: 'none', // Para Firefox
    '-ms-overflow-style': 'none', // Para Internet Explorer y Edge
  };

  return (
    <div style={backgroundStyle}>
      <style>
        {`
          /* Ocultar barra de desplazamiento para navegadores WebKit */
          ::-webkit-scrollbar {
            display: none; 
          }
        `}
      </style>
      <Row className="justify-content-center" style={{ width: '100%' }}>
        <Col className="d-flex justify-content-center">
          <Card className="shadow" style={cardStyle}>
            <Card.Body>
              <Card.Text className="mb-4" style={{ fontSize: '1.25rem' }}>
                Te quiero para abrazarte, para disfrutar de un rato más juntos, para reír, para cuidarte como tú lo haces. Quiero estar a tu lado en lo bueno y en lo malo, quiero compartir cada paso contigo. Quiero verte crecer y que nuestros éxitos y derrotas se vuelvan nuestros. No importa lo que pase, siempre buscaré tus brazos para otro abrazo.
              </Card.Text>
              <img src={gatoflor} alt="Gato Flor" className="img-fluid mb-4 rounded" style={{ maxWidth: '100%', height: 'auto', width: '250px' }} />
              <Card.Text className="mb-4" style={{ fontSize: '1.25rem' }}>
                Ya ha pasado un mes desde que nos conocimos y quería hacer algo bonito. Gracias, corazón de melón, por ser esa persona maravillosa que llegó a mi vida de forma tan inesperada. Eres el mejor regalo que la vida me pudo dar. Estar contigo siempre es un momento tan hermoso; te quiero tal como eres, con todas tus risas y esos momentos random que tanto disfruto. Siempre logras que quiera pasar un rato más contigo.
              </Card.Text>
              <Card.Text className="mb-4" style={{ fontSize: '1.25rem' }}>
                Aunque estés lejos, nunca estás fuera de mis pensamientos. Ya has ocupado un lugar muy grande en mi corazón y en mi mente. Por eso, y por tantas otras cosas, te quiero muchísimo y me encantas. Adoro tu risa, esos bellos ojitos, todas tus pequitas... en fin, esa carita hermosa que me vuelve loco.
              </Card.Text>
              <Card.Text className="font-weight-bold mb-4" style={{ fontSize: '1.25rem' }}>
                Te quiero mucho, Danielita hermosa.
              </Card.Text>
              <img src={gift} alt="Gift" className="img-fluid mt-3" style={{ maxWidth: '60%', height: 'auto' }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Pag2;
