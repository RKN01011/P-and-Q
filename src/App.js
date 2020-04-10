import React, { useState, useEffect } from 'react';
import Cricle from './pack/cricle';
import './App.sass';

export default function App() {
  const [count, setCount, data, setData, changeData] = [...useState(1), ...useState([]), (isPlus = true) => {
    if (isPlus) return count === 30 ? 30 : setCount(count + 1)
    return count === 1 ? 1 : setCount(count - 1)
  }];

  useEffect(() => {
    fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
      .then( el => el.json() )
        .then( el => setData(el.map( el => [el.html_url, el.author.login])))
  })

  return (
    <div className="GridTest__gridContainer">
      <Cricle textContent={ data.filter((el, key) => key < count) } />
      <div className="GridTest__gridInterface">
        <div className="GridTest__gridInterface_buttonPlus" onClick={ () => changeData(false) }> - </div>
        <div className="GridTest__gridInterface_count">{ count }</div>
        <div className="GridTest__gridInterface_buttonNeg" onClick={ () => changeData() }> + </div>
      </div>
    </div>
  );
}
