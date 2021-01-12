import React, { Component } from "react";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 2,
      subject: { title: "hi", sub: "hello!" },
      welcome: { title: "welcome", desc: "bro" },
      contents: [
        { id: 1, title: "hi", desc: "hi means hi!" },
        { id: 2, title: "hello", desc: "hello means hello!" },
        { id: 3, title: "bye", desc: "bye means oh yeah babe!" },
      ],
    };
  }
  render() {
    let _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      const contents = this.state.contents;
      contents.forEach((element) => {
        if (element.id === this.state.selected_content_id) {
          _title = element.title;
          _desc = element.desc;
        }
      });
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: id
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
