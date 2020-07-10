import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*
// Introduction
ReactDOM.render(
  <h1>Krishna Srikar Durbha!</h1>,
  document.getElementById('root')
);

// Constants
const name = "David";
const el = <p>Hello, {name}</p>;

ReactDOM.render(
  el,
  document.getElementById('root')
);

// Page Update
let counter = 0;

function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(
    el, document.getElementById('root')
  );
}

setInterval(show, 1000); 

// Function
function Hi(){
  return <h1>Hi.</h1>;
}
const l = <Hi/>;
ReactDOM.render(
  l, 
  document.getElementById('root')
);

// Classes
class Greeting extends React.Component {
  render() {
    return <h1>Hello world.</h1>;
  }
}

// Props
function Hello(props) {
  return <p>Hello, {props.name}!</p>;
}
const e = <Hello name='Tony'/>;
ReactDOM.render(
  e, 
  document.getElementById('root')
);

function Apple() {
  return <div>
    <Hello name="David" />
    <Hello name="James" />
    <Hello name="Amy" />
  </div>;
}

const ele  = <Apple/>;
ReactDOM.render(
  ele,
  document.getElementById('root')
)

function Item(props){
  return <div className="item">
  <b>Name:</b> {props.name} <br/>
  <b>Price:</b> {props.price}
  </div>;
}

function Call(){
  return <div>
    <Item name="Cheese" price="4.99" />
    <Item name="Bread" price="1.5" />
    <Item name="Ice cream" price="24" />
  </div>;
}

const al = <Call/>;
ReactDOM.render(
  al, 
  document.getElementById('root')
);

// States
class StateName extends React.Component{
  state = {
    name: "James",
    age: 25
  }

  render(){
    return <h1>Hello {this.state.name}</h1>
  }
}

const sn = <StateName />; 
ReactDOM.render(
  sn, 
  document.getElementById('root')
);
*/

// Counter Application
class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({
     counter: this.state.counter+1});
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const c = <Counter/>; 
ReactDOM.render(
  c, 
  document.getElementById('root')
);







// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
