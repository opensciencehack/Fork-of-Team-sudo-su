import React from 'react';
import './App.css';
import { GeneralOverview } from './components/GeneralOverview';
import { MainActorsGraph } from './components/MainActorsGraph';

// TODONOW: Central actors -> column chart
// TODONOW: Relations between nodes -> node graph
// TODONOW: tweet popularity over time, for the top 5 most popular users ->
// TODONOW: which are the most used devices? -> pie chart
// TODONOW: most popular hashtags
// TODONOW: emoji analysis on the tweets

const App = () => (
	<div className="App">
		<header className="App-header">
			<p>
				Social Science dataset - Swedish (<b>sudo-su</b>)
			</p>
		</header>
		<GeneralOverview />
		<MainActorsGraph />
	</div>
);

export default App;
