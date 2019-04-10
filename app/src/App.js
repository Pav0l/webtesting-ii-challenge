import React, { useState, useEffect } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  useEffect(() => {
    if (balls === 4 || strikes === 3) {
      resetBallsAndStrikes();
    }
  }, [balls, strikes]);

  const resetBallsAndStrikes = () => {
    setBalls(0);
    setStrikes(0);
  };

  const strikeClick = () => {
    setStrikes(strikes + 1);
  };

  const ballClick = () => {
    setBalls(balls + 1);
  };

  const foulClick = () => {
    if (strikes === 0) {
      setStrikes(1);
    } else if (strikes === 1 || strikes === 2) {
      setStrikes(2);
    }
  };

  const hitClick = () => {
    resetBallsAndStrikes();
  };

  return (
    <div>
      <Display balls={balls} strikes={strikes} />
      <Dashboard
        strikeClick={strikeClick}
        ballClick={ballClick}
        foulClick={foulClick}
        hitClick={hitClick}
      />
    </div>
  );
}

export default App;
