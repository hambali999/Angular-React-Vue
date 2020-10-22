import React from 'react';

const Action = (props) => {
    return (
      <button disabled = {!props.checker} onClick={props.luckyDice} className="big-button">
        Ask the Dice
      </button>
    )
}

export default Action;
