import React, { useState } from 'react';
// import Editor from './Editor';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    editor: null
  }

  handleClick = () => {
    import('./Editor')
      .then(({ default: editor }) => {
        this.setState({ editor });
      })
      .catch(err => {
        // Handle failure
      });
  };
  render() {
    const { editor: Editor } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.handleClick}>Load</button>
        </header>
        {
          Editor && <Editor />
        }
      </div>
    );

  }
}

export default App;
