import React, { Component } from 'react';
import Mycomponent from './Components/MyComponent';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: 'App Title'
    }
    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onClick() {
    this.setState({
      title : 'New App Title'
    })
  }

  //onClick(){
  //  alert('clicked')
  //}

   onChange(event){
      console.log(event.target.value)
   }

   onSubmit(event){
    event.preventDefault()

    console.log(this.input.value)
   }
  render(){

    //const title = 'My name is Abhishek';
    //const anotherTitle = 'Another Title';
    
    const list = [
      'item 1',
      'item 2',
      'item 3'
    ];

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <h1>
          {
            //true ? title : anotherTitle
            list.map(item => {
              return (
                <div key={item} onClick={this.onClick}>{item}</div>
              );
            })
          }
        </h1>
        <form onSubmit={this.onSubmit} >
          <input onChange={this.onChange} ref={input => this.input=input} />
        </form>
        <h1>{this.state.title}</h1>
        <div onClick={this.onClick}>Click here!</div>
        <Mycomponent 
          title="this is the component title"
          name="Abhishek"
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default App;
