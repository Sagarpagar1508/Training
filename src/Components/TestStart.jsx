import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const TestStart = () => {

  const handleClick = (index) => {
    const newWindow = window.open(
      `http://localhost:5173/Test/test${index}`, // URL to open
      '_self', // Open in a new tab or window
      'width=1000,height=1000' // Optional specs: width and height of the new window
    );

    // Optional: You can add additional functionality here, like focusing the new window
    if (newWindow) {
      newWindow.focus();
    }
  }
  const secondrowClick = (e) => {
    const newWindow = window.open(
      `http://localhost:5173/Test/${e}`, // URL to open
      '_self', // Open in a new tab or window
      'width=1000,height=1000' // Optional specs: width and height of the new window
    );

    // Optional: You can add additional functionality here, like focusing the new window
    if (newWindow) {
      newWindow.focus();
    }
  }



  const cardData = [
    {
      title: 'Introduction to Fund Accounting',
      image: 'src/assets/test1_img.jfif', // Replace with actual image path
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
    <container-fluid className=' border ' style={{position:'absolute'}}>
      <Container className='bg-primary bg-opacity-10 shadow-none border-0 mt-5 py-2 ' style={{ backgroundColor: 'red' }}>
        <Row className="mb-4  bg-opacity-10 shadow-none border-0">
          {cardData.slice(0, 3).map((card, index) => (
            <Col key={index} sm={12} md={4} className="mb-3">
              <Card style={{ height: '25%' }} >
                <Card.Img variant="top" src={card.image} style={{ height: '100px' }} />
                <Card.Body style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Title><button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={e => handleClick(index)}>{card.title}</button></Card.Title>
                  <Card.Text>Status: {card.status}</Card.Text>
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
                  <Card.Title><button className='bg-success bg-opacity-10 shadow-none border-0 text-light' onClick={e => secondrowClick(index)}>{card.title}</button></Card.Title>
                  <Card.Text>Status: {card.status}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </container-fluid>
  );
};

export default TestStart;


