import React from 'react';
import { view } from 'react-easy-state';
import  styled from 'styled-components';
import { appStore } from '../state/appStore';

const Div = styled.div`
	color: green;
`;

export const Visualization1 = view(() => (
	<Div>The first Viz of team {appStore.team}</Div>
));