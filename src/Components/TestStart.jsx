import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const TestStart = () => {

  const handleClick = (index) => {
    let url;
    switch (index) {
      case 0:
        url = 'http://localhost:5173/Test/test0';
        break;
      case 1:
        url = 'http://localhost:5173/Test/test1';
        break;
      case 2:
        url = 'http://localhost:5173/Test/test2';
        break;
      case 3:
        url = 'http://localhost:5173/Test/test3';
        break;
      default:
        url = 'http://localhost:5173/Test';
        break;
    }

    const newWindow = window.open(url, '_self', 'width=1000,height=1000');
    if (newWindow) {
      newWindow.focus();
    }
  };
  



  const cardData = [
    {
      title: 'Introduction to Fund Accounting',
      image: 'src/assets/images.png', // Replace with actual image path
      status: 'Completed'
    },
    {
      title: 'Fund Accounting Principles and Concepts',
      image: 'src/assets/test2_img.jpg', // Replace with actual image path
      status: 'Completed'
    },
    {
      title: 'Financial Statements in Fund Accounting',
      image: 'src/assets/test3_img.jpg', // Replace with actual image path
      status: 'Completed'
    },
    {
      title: 'Budgeting in Fund Accounting',
      image: 'src/assets/test1_img.jfif', // Replace with actual image path
      status: 'In Progress'
    }
  ];

  return (
    <container-fluid  >
      <div className='' style={{position:'absolute'}}>
      <Container className=' bg-opacity-10 shadow-none border-0 mt-5 py-2 ' >
        <Row className="mb-4  bg-opacity-10 shadow-none border-0">
          {cardData.slice(0, 3).map((card, index) => (
            <Col key={index} sm={12} md={4} className="mb-3">
              <Card style={{ height: '50%' }} >
                <Card.Img variant="top" src={card.image} style={{ height: '200px' }} />
                <Card.Body style={{ backgroundColor: 'black', color: 'white',height:'100px' }}>
                  <Card.Title><button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={e => handleClick(index)}>{card.title}</button></Card.Title>
                  <Card.Text style={{color:'green'}}>Status: {card.status}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {cardData.slice(3, 4).map((card, index) => (
            <Col key={index} sm={12} md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={card.image} />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title><button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={() => handleClick(index + 3)}>{card.title}</button></Card.Title>
                  <Card.Text style={{color:'red'}}>Status: {card.status}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </container-fluid>
  );
};

export default TestStart;


