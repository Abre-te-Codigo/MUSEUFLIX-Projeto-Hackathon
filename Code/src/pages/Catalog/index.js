import React from 'react';

import {}  from 'react-dom'

import { Container, Row, Col , Button, Image, Card  } from 'react-bootstrap';


import bgCarrosel01 from '../../assets/img/carrosel01.png';
import imgCarrossel from '../../assets/img/carrosel-image-01.png';
import imgMobile from '../../assets/img/mobile.png';

var sectionStyle = {
   background: `#CCC`,
}

function catalog() {
  return (
    <>
    <Container fluid style={sectionStyle} className='pt-5'>
      <Row>
      <Col lg={1} />
      <Col lg={5} style={{justifyContent:'center'}}>
        <Card style={{ background:'#CCC', border: 'none', marginTop:45 }}>
          <Card.Img variant="top" src={imgCarrossel} />
          <Card.Body>
            <Card.Text>
              Cerâmicas peruanas na exposição Museu Nacional Vive - Arqueologia do Resgate, a primeira com peças retiradas do incêndio, no Centro Cultural Banco do Brasil.
            </Card.Text>
            <div style={{textAlign:'center'}}> 
              <span style={{ background: '#FC6767', padding:10,margin:10, color:'#FFF' }}>Arqueologia</span>
              <span style={{ background: '#FC6767', padding:10,margin:10,  color:'#FFF' }}>Peru</span>
              <span style={{ background: '#FC6767', padding:10,margin:10,  color:'#FFF' }}>Museu Nacional Vive</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={5} style={{justifyContent:'center'}}>
        <Card style={{ background:'#CCC', border: 'none', marginTop:45 }}>
          <Card.Img variant="top" src={imgCarrossel} />
          <Card.Body>
            <Card.Text>
              Cerâmicas peruanas na exposição Museu Nacional Vive - Arqueologia do Resgate, a primeira com peças retiradas do incêndio, no Centro Cultural Banco do Brasil.
            </Card.Text>
            <div style={{textAlign:'center'}}> 
              <span style={{ background: '#FC6767', padding:10,margin:10, color:'#FFF' }}>Arqueologia</span>
              <span style={{ background: '#FC6767', padding:10,margin:10,  color:'#FFF' }}>Peru</span>
              <span style={{ background: '#FC6767', padding:10,margin:10,  color:'#FFF' }}>Museu Nacional Vive</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={1} />
      </Row>

      <Row>
      <Col lg={1} />
      <Col lg={5} style={{justifyContent:'center'}}>
        <Card style={{ background:'#CCC', border: 'none', marginTop:45 }}>
          <Card.Img variant="top" src={imgCarrossel} />
          <Card.Body>
            <Card.Text>
              Cerâmicas peruanas na exposição Museu Nacional Vive - Arqueologia do Resgate, a primeira com peças retiradas do incêndio, no Centro Cultural Banco do Brasil.
            </Card.Text>
            <div style={{textAlign:'center'}}> 
              <span style={{ background: '#FC6767', padding:10,margin:10, color:'#FFF' }}>Arqueologia</span>
              <span style={{ background: '#FC6767', padding:10,margin:10,  color:'#FFF' }}>Peru</span>
              <span style={{ background: '#FC6767', padding:10,margin:10,  color:'#FFF' }}>Museu Nacional Vive</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={5} style={{justifyContent:'center'}}>
        <Card style={{ background:'#CCC', border: 'none', marginTop:45 }}>
          <Card.Img variant="top" src={imgCarrossel} />
          <Card.Body>
            <Card.Text>
              Cerâmicas peruanas na exposição Museu Nacional Vive - Arqueologia do Resgate, a primeira com peças retiradas do incêndio, no Centro Cultural Banco do Brasil.
            </Card.Text>
            <div style={{textAlign:'center'}}> 
              <span style={{ background: '#FC6767', padding:10,margin:10, color:'#FFF' }}>Arqueologia</span>
              <span style={{ background: '#FC6767', padding:10,margin:10,  color:'#FFF' }}>Peru</span>
              <span style={{ background: '#FC6767', padding:10,margin:10,  color:'#FFF' }}>Museu Nacional Vive</span>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={1} />
      </Row>
    </Container>

    </>
  );
}

export default catalog;