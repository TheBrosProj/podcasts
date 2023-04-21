import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPlus } from '@fortawesome/free-solid-svg-icons'

export const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className='play-button'>
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

const CardShowcase = ({ items }) => {
  return (
    <div className="card-showcase">
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CardShowcase;