import React from 'react';

import {}  from 'react-dom'

import { Container, Row, Col , Button,  } from 'react-bootstrap';

import Image from 'react-bootstrap/Image'

import bgCarrosel01 from '../../assets/img/carrosel01.png';
import imgCarrossel from '../../assets/img/carrosel-image-01.png';
import imgMobile from '../../assets/img/mobile.png';

var sectionStyle = {
   backgroundImage: `url(${bgCarrosel01})`,
}

function catalog() {
  return (
    <>
    <Container fluid style={sectionStyle} className='pt-5'>
      <Row>
         <Col lg={7}>
            <h1 style={{paddingLeft:70, paddingTop:100, fontFamily: 'Yeseva One', fontSize:60, fontWeight: '400'}}>
            Acervos Culturais e conteúdos prontos para o Ensino 
            </h1>
            <h5 style={{paddingLeft:70, paddingTop:25, fontFamily: 'Yeseva One', fontSize:30, fontWeight: '100'}}>
            Navegue sozinho ou escolha uma rota compartilhada e avaliada pela comunidade   
            </h5>
            <Button style={{marginLeft:70, marginTop:25, marginBottom:50, background: '#FC6767', fontSize:20}}>acessar</Button>    
         </Col>
         <Col lg={5} style={{margin: 'auto', }}>
            <Image src={imgCarrossel} fluid style={{padding:25}}/> 
          </Col>

      </Row>

      <Row>
      </Row>
    </Container>

    <Container fluid style={{background:'#FFF'}} className=''>
    <Row >
    <Col lg={7} className="card" style={{border: 'none', paddingLeft:70, justifyContent:'center', background:"-webkit-gradient(linear, left top, left bottom, from(#FFF), color-stop(10%, #FFF), color-stop(10%, #FC6767),color-stop(90%, #FC6767), color-stop(90%, #FFF))"}}>
          <h1 style={{paddingLeft:0, paddingTop:0, fontFamily: 'Yeseva One', fontSize:60, fontWeight: '700', color: '#FFF', }}>
          Prepare suas aulas na palma onde estiver
          </h1>
          <h5 style={{paddingLeft:0, paddingTop:25, fontFamily: 'Yeseva One', fontSize:30, color: '#FFF',}}>
          Ferramenta indispensável para professores de Artes e História ou para amantes da Cultura
          </h5>
      </Col>
    <Col lg={5} className="card" style={{border: 'none', margin: 'auto', background:"-webkit-gradient(linear, left top, left bottom, from(#FFF), color-stop(10%, #FFF), color-stop(10%, #FC6767),color-stop(90%, #FC6767), color-stop(90%, #FFF))"}}>
          <Image src={imgMobile} width={400} height={500} /> 
        </Col>

    </Row>

    <Row>
    </Row>
    </Container>
    </>
  );
}

export default catalog;