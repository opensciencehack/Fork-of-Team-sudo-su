import React, { Component } from 'react';
import './App.css';
import { Visualization1 } from './components/Visualization1';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						<b>sudo-su</b> visualization
					</p>
				</header>
				<Visualization1 />
			</div>
		);
	}
}

export default App;
