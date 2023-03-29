import { Component } from 'react'
// le parentesi graffe servono quando dovete importare un qualcosa
// che NON È l'export di default del pacchetto

// import MIGLIORE per un componente react-bootstrap
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import dishes from '../data/menu.json'
// dishes è un array di piatti

// import meno efficiente: (non usare)
// import { Carousel } from 'react-bootstrap'

class Home extends Component {
  // render è l'unico metodo OBBLIGATORIO
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={12} md={8} lg={6}>
            {/* col-12 col-md-8 col-lg-6 */}
            <Carousel>
              {dishes.map((dish) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://placekitten.com/300"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
