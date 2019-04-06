import React from 'react';
import { view } from 'react-easy-state';
import styled from 'styled-components';

const Div = styled.div`
	font-size: calc(10px + 2vmin);
	margin: 2em;
`;


export const GeneralOverview = view(() => (
	<div>
		<Div>Total count of tweets: <b>11237</b></Div>
		<Div>Recorded days: <b></b></Div>
		<Div>Total count participants: <b></b></Div>
		<Div>TODONOW - description</Div>
	</div>
));
