import React, { useEffect, useState } from 'react';
import './App.sass';

function App() {
  const count = '{{ value }}';

  return (
    <div className="Box-runner">{ count }</div>
  );
}

export default App;
