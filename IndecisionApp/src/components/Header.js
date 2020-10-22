import React from 'react';

const Header = (props) => { //stateless function
    return (
      <div className="Header">
        <div className="container">
          <h1 className="Header__title">
            {props.title}
          </h1>
          <h2 className="Header__subTitle">
            {props.subtitle}
          </h2>
        </div>
      </div>
    )
}

export default Header;
