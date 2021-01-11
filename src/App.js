import React, {Component} from 'react';
import logo from "./logo.svg";
import "./App.css";

class Subject extends Component{
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li>hi</li>
          <li>hello</li>
          <li>bye</li>
        </ul>
      </nav>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    )
  }
}
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
