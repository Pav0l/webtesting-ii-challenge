import React from 'react';

function Display({ balls, strikes }) {
  return (
    <div>
      <div>Strikes: {strikes}</div>
      <div>Balls: {balls}</div>
    </div>
  );
}

export default Display;
