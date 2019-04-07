import React from 'react';
import { view } from 'react-easy-state';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 45em;
`;

const Div = styled.div`
	font-size: calc(10px + 2vmin);
	margin: 1.5em;
`;

const GifWrapper = styled.div`
	margin: 6em 0em;
`;

export const GeneralOverview = view(() => (
	<Wrapper>
		<GifWrapper>
			<iframe src="https://giphy.com/embed/26u6c4ygFTf27qUz6" width="640" height="350" frameBorder="0"
					className="giphy-embed" allowFullScreen></iframe>
		</GifWrapper>
		<Div>Total count of tweets: <b>11237</b></Div>
		<Div>Recorded days: <b>267</b></Div>
		<Div>Total count participants: <b>5722</b></Div>
	</Wrapper>
));
