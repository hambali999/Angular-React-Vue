import React from 'react';

const Option = (props) => {
    return (
      <div className="option">
        <p className="option__text">{props.count}.{props.data}</p>
        <button className="button" onClick={(e) => {
          props.removed(props.data)
        }}> remove </button>
      </div>
    )
};

export default Option;
