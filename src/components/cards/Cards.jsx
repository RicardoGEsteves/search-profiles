import React from 'react';

import cards from './cards.module.scss';
import Card from '../card/Card';

const Cards = props => {
  return (
    <div className={cards.container}>
      {' '}
      {props.profiles.map(user => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Cards;
