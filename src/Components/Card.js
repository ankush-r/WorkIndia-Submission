import React from 'react';
import Card from 'react-bootstrap/Card';
import '../index.css';

const CandidateCard = (props) => {
  const { name, last_updated_at, location, gender} = props.data;

  return (
    <Card className='shadow card-width p-2 h-100'>
      <Card.Body className='body-pad'>
        <Card.Title className=" card-title">{name}</Card.Title>
        <ul className="custom-bullet">
          <li>{last_updated_at}</li>
          <li>{location}</li>
          <li>{gender}</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default CandidateCard;