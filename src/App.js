import React, {Component} from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="hi" sub="hello!"></Subject>
        <TOC></TOC>
        <Content title="hi" desc="hi means hi!"></Content>
      </div>
    );
  }
}

export default App;
