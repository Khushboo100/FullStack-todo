/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/FirstComponent';
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import Counter from './components/counter/counter';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* unxcomment the below line to practice*/}
        {/* <LearningComponents></LearningComponents> */}
        {/* <Counter></Counter> */}

        <TodoApp></TodoApp>
      </div>
    );
  }
}


class LearningComponents extends Component{
  render() {
    return (
      <div className="LearningComponents">
        My Hello world
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        {/* <FourthComponent></FourthComponent> */}
      </div>
    );
  }
}

export default App;