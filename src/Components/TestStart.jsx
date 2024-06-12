import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const TestStart = () => {
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
    <container-fluid style={{backgroundImage:"url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png'')"}}>
    <Container className='mt-5 py-2'>
      <Row className="mb-4">
        {cardData.slice(0, 3).map((card, index) => (
          <Col key={index} sm={12} md={4} className="mb-3">
            <Card style={{height:'50'}} >
              <Card.Img variant="top" src={card.image} style={{height:'350'}} />
              <Card.Body style={{backgroundColor:'black', color:'white'}}>
                <Card.Title>{card.title}</Card.Title>
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
              <Card.Body style={{backgroundColor:'black', color:'white'}}>
                <Card.Title>{card.title}</Card.Title>
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
