import React from 'react';
import Option from './Option';

const Options = (props) => {
      return (
        <div>
          <div className="widget-header">
            <h3 className="widget-header--title">Your options</h3>
            <button onClick={props.clear} className="button button--link">Remove All</button>
          </div>

          {!props.option.length &&  <p className="widget--message">Add an option to start</p>}
          {
              props.option.map((op, index) => {
              return <Option data={op} key={op} removed={props.removed} count={index+1}/>   ;
            })
          }
        </div>
      )
  }

export default Options;
