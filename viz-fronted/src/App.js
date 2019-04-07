import React from 'react';
import styled from 'styled-components';
import './App.css';
import { GeneralOverview } from './components/GeneralOverview';
import { MainActorsGraph } from './components/MainActorsGraph';
import { RetweetRelation } from './components/RetweetRelation';
import { TweetTimeSeries } from './components/TweetTimeSeries';
import { MostUsedDevices } from './components/MostUsedDevices';
import { HashTagWordCloud } from './components/HashTagWordCloud';

const Intro = styled.div`
	background-color: #282c34;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const Wrapper = styled.div`
	min-height: 100vh;
`;

const EntryWrapper = styled.div`

	display: flex;
	justify-content: space-around;
	margin: 0 8em 8em 8em;
`;

const App = () => (
	<div className="App">
		<Wrapper>
		<Intro>
			<p>
				Social Science dataset - Swedish (<b>sudo-su</b>)
			</p>
		</Intro>
		<GeneralOverview />
		</Wrapper>
		<EntryWrapper>
			<MainActorsGraph />
			<MostUsedDevices />
		</EntryWrapper>
		<RetweetRelation />
		<HashTagWordCloud />
		<TweetTimeSeries />
	</div>
);

export default App;
