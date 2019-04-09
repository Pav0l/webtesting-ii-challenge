import React from 'react';

function Display({ balls, strikes }) {
  return (
    <div>
      <div>Strikes count: {strikes}</div>
      <div>Balls count: {balls}</div>
    </div>
  );
}

export default Display;
