import React from 'react';
import { view } from 'react-easy-state';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 8em
`;

export const TopicBubbleGraph = view(() => (
    <Wrapper>
        <div id="topic-bubble-graph" />
    </Wrapper>
));
