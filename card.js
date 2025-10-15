import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bimage from '../task3/burger1.jpg';
import Vimage from '../task3/burger-2.jpg';
import Combos from './text.json';

function BasicExample() {
  const [items] = useState(Combos);

  return (
    <div className="container mt-4">
      <Row className="g-4" style={{ justifyContent: 'flex-start' }}>
        
        {/* First Card */}
        <Col xs="auto">
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={Bimage} style={{ width: '15rem', height: '10rem' }} />
            <Card.Body>
              <Card.Title><b>BK Burger Meal</b></Card.Title>
              <Card.Text>
                {items.map(({ item1, item2, item3, item4, item5 }) => (
                  <span>
                    {item1}+{item2}+{item3}+{item4}+{item5}
                  </span>
                ))}
              </Card.Text>
              <>$100</>
              <Button variant="info" style={{ float: 'right' }}>Add +</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col xs="auto">
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={Vimage} style={{ width: '15rem', height: '11rem' }} />
            <Card.Body>
              <Card.Title><b>BK Veggie Burger Meal</b></Card.Title>
              <Card.Text>
                {items.map(({ item1, item2, item4 }) => (
                  <span>
                    {item1}+{item2}+{item4}
                  </span>
                ))}
              </Card.Text>
              <>$70</>
              <Button variant="info" style={{ float: 'right' }}>Add +</Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  );
}

export default BasicExample;
