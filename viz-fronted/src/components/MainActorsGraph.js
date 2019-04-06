import React from 'react';
import { view } from 'react-easy-state';
import styled from 'styled-components';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { appStore } from '../state/appStore';

const Div = styled.div`
	margin: 4em 10em;
`;

// TODONOW: get data and store in store
const populateOptions = data => ({
	credits: {
		enabled: false
	},
	chart: {
		type: 'column'
	},
	title: {
		text: 'Central Actors'
	},
	subtitle: {
		text: 'Most relevant tweeter users, based on their tweet count'
	},
	xAxis: {
		type: 'category',
		labels: {
			rotation: -45,
			style: {
				fontSize: '13px',
				fontFamily: 'Verdana, sans-serif'
			}
		}
	},
	yAxis: {
		min: 0,
		title: {
			text: 'Tweets'
		}
	},
	legend: {
		enabled: false
	},
	tooltip: {
		pointFormat: 'Submitted tweets: <b>{point.y:.1f}</b>'
	},
	series: [
		{
			name: 'Tweets',
			data: [
				['Shanghai', 24.2],
				['Beijing', 20.8],
				['Karachi', 14.9],
				['Shenzhen', 13.7],
				['Guangzhou', 13.1],
				['Istanbul', 12.7],
				['Mumbai', 12.4],
				['Moscow', 12.2],
				['São Paulo', 12.0],
				['Delhi', 11.7],
				['Kinshasa', 11.5],
				['Tianjin', 11.2],
				['Lahore', 11.1],
				['Jakarta', 10.6],
				['Dongguan', 10.6],
				['Lagos', 10.6],
				['Bengaluru', 10.3],
				['Seoul', 9.8],
				['Foshan', 9.3],
				['Tokyo', 9.3]
			],
			dataLabels: {
				enabled: true,
				rotation: -90,
				color: '#FFFFFF',
				align: 'right',
				format: '{point.y:.1f}', // one decimal
				y: 10, // 10 pixels down from the top
				style: {
					fontSize: '13px',
					fontFamily: 'Verdana, sans-serif'
				}
			}
		}
	]
});
export const MainActorsGraph = view(() => (
	<Div>
		<HighchartsReact highcharts={Highcharts} options={populateOptions(appStore.dataSets.visualization1)} />
	</Div>
));
