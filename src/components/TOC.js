import React, { Component } from "react";

class TOC extends Component {
  render() {
    let lists=[];
    const data=this.props.data;
    data.forEach(element => {
      lists.push(<li key={element.id}><a href={"/content/"+element.id}>{element.title}</a></li>);
    });
    return (
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC;
