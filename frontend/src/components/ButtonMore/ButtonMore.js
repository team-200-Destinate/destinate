import React from 'react';
import './buttonMore.scss'

function ButtonMore() {
  return (
    <button className="cta">
      <span>More news</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
}

export default ButtonMore;
