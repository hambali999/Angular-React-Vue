import React from 'react';

export default class AddOptions extends React.Component {
  state = {
    error: undefined
  };

  addIt = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.addIt(option);
    e.target.elements.option.value = '';

    this.setState({error})

  };

  render(){
    return (
      <div>
      {this.state.error && <p className="addOption__error">{this.state.error}</p>}
      <form onSubmit = {this.addIt} className="addOption">
        <input type="text" name="option" className="addOption__input"/>
        <button className="button button--add">Add option</button>
      </form>
      </div>
    );
  }
}
