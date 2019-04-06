import React from 'react';
import { view } from 'react-easy-state';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { appStore } from '../state/appStore';

const Div = styled.div`
	color: green;
`;

const populateOptions = (data) => ({
	title: {
		text: 'Visualization1'
	},
	series: [
		{
			data
		}
	]
});
export const Visualization1 = view(() => (
	<div>
		<Div>The first Viz of team {appStore.team}</Div>
		<HighchartsReact highcharts={Highcharts} options={populateOptions(appStore.dataSets.visualization1)} />
	</div>
));
