import React from 'react';
import styled from 'styled-components';
import './App.css';
import { GeneralOverview } from './components/GeneralOverview';
import { MainActorsGraph } from './components/MainActorsGraph';
import { RetweetRelation } from './components/RetweetRelation';
import { TweetTimeSeries } from './components/TweetTimeSeries';
import { MostUsedDevices } from './components/MostUsedDevices';
import { PopularHashtags } from './components/PopularHashtags';

const Intro = styled.div`
	background-color: #282c34;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const App = () => (
	<div className="App">
		<Intro>
			<p>
				Social Science dataset - Swedish (<b>sudo-su</b>)
			</p>
		</Intro>
		<GeneralOverview />
		<MainActorsGraph />
		<MostUsedDevices />
		<RetweetRelation />
		<PopularHashtags />
		<TweetTimeSeries />
	</div>
);

export default App;
