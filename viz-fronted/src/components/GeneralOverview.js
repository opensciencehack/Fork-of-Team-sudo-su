import React from 'react';
import { view } from 'react-easy-state';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 45em;
`;

const Div = styled.div`
	font-size: calc(10px + 2vmin);
	margin: 2em;
`;

const ImageWrapper = styled.div`
	margin: 6em 0em;
`;

export const GeneralOverview = view(() => (
	<Wrapper>
		<Div>Total count of tweets: <b>11237</b></Div>
		<Div>Recorded days: <b>267</b></Div>
		<Div>Total count participants: <b></b></Div>
		<Div>Dataset covering Swedish mentions to diabetes.</Div>
		<ImageWrapper>
			<iframe src="https://giphy.com/embed/26u6c4ygFTf27qUz6" width="480" height="269" frameBorder="0"
				className="giphy-embed" allowFullScreen></iframe>
		</ImageWrapper>
	</Wrapper>
));
