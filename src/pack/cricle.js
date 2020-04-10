import React, { useState } from 'react';

export default function Example(props) {
  return (
    <div className="GridCont__Cont">
      {
          props.textContent.map( (el, key) => {
              return (
                  <span key={key} className="GridCont__Ceil">
                      <a href={el[0]}>{ el[1] }</a>
                  </span>
              )
          })
      }
    </div>
  );
}