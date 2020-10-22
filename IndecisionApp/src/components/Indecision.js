import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOptions';
import SelectedModal from './SelectedModal';



export default class Indecision extends React.Component{
  state = {
    options: [],
    selected: undefined
  };
  close =() =>{
    this.setState({selected: undefined})
  }
    removed = (removedOption) => {
      this.setState((prev) => {
        return {
          options: prev.options.filter((option) => {
            return removedOption !== option;
          })
        }})
    };

    addIt = (option) => {
      if(!option){
        return "THIS IS NOT VALID";
      }
      else if (this.state.options.indexOf(option) > -1) {
        return "ALREADY EXISTS";
      }
      this.setState((prev) => {
        return {
          options: prev.options.concat(option)
        }
      })
    };

    luckyDice = () => {
      const rnum = Math.floor(Math.random() * this.state.options.length);
      const selected = this.state.options[rnum];
      this.setState({selected});
    };

    clear = () => {
      this.setState({options: []})
    };

  componentDidMount(){
      try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options)
          this.setState({options});
      }catch(e){
        //do nothing
      }
  }

  componentDidUpdate(prevProps, prevStat){
    if(prevStat.options.length !== this.state.options.length)
    {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount(){
      const json = localStorage.getItem('options');
      this.state.options = JSON.parse(json);
      console.log("unmount");
  }

  render(){
    const title = "Indecision App";
    const subtitle = "Roll the dice! and know what you gonna do next :D";
    return (
      <div>
        <Header title ={title} subtitle={subtitle}/>
        <div className="container">
          <Action checker={this.state.options.length > 0} luckyDice={this.luckyDice}/>
          <div className="widget">
            <Options option={this.state.options} clear={this.clear} removed={this.removed}/>
            <AddOptions addIt={this.addIt}/>
          </div>
        </div>
        <SelectedModal selected={this.state.selected} close={this.close}/>
      </div>
    )
  }
}
