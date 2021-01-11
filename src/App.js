import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mode: 'welcome',
			subject: { title: 'hi', sub: 'hello!' },
			welcome: { title: 'welcome', desc: 'bro' },
			contents: [
				{ id: 1, title: 'hi', desc: 'hi means hi!' },
				{ id: 2, title: 'hello', desc: 'hello means hello!' },
				{ id: 3, title: 'bye', desc: 'bye means oh yeah babe!' },
			],
		};
	}
	render() {
		let _title,
			_desc = null;
		if (this.state.mode === 'welcome') {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
		} else if (this.state.mode === 'read') {
			_title = this.state.contents[0].title;
			_desc = this.state.contents[0].desc;
		}
		return (
			<div className="App">
				{/* <Subject title="hi" sub="hello!"></Subject> */}
				<Subject
					title={this.state.subject.title}
					sub={this.state.subject.sub}
				></Subject>
				<TOC data={this.state.contents}></TOC>
				<Content title="hi" desc="hi means hi!"></Content>
			</div>
		);
	}
}

export default App;
