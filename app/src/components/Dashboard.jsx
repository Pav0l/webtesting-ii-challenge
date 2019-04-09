import React from 'react';

function Dashboard({ strikeClick, ballClick, foulClick, hitClick }) {
  return (
    <div>
      <button onClick={strikeClick}>Strike</button>
      <button onClick={ballClick}>Ball</button>
      <button onClick={foulClick}>Foul</button>
      <button onClick={hitClick}>Hit</button>
    </div>
  );
}

export default Dashboard;
