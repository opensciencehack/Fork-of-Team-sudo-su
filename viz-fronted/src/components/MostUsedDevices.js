import React from 'react';
import { view } from 'react-easy-state';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
	credits: {
		enabled: false
	},
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: 'pie',
		height: (3 / 4) * 100 + '%' // 16:9 ratio
	},
	title: {
		text: 'Device usage'
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: false
			},
			showInLegend: true
		}
	},
	series: [
		{
			name: 'Devices',
			colorByPoint: true,
			data: [
				{
					name: 'Twitter for iPhone',
					y: 4599,
					selected: true
				},
				{
					name: 'Twitter for Android',
					y: 2431
				},
				{
					name: 'Twitter Web Client',
					y: 2227
				},
				{
					name: 'Twitter for iPad',
					y: 332
				},
				{
					name: 'Buffer',
					y: 217
				},
				{
					name: 'TweetDeck',
					y: 178
				},
				{
					name: 'Twitter Lite',
					y: 177
				},
				{
					name: 'Instagram',
					y: 168
				},
				{
					name: 'Facebook',
					y: 135
				},
				{
					name: 'WordPress',
					y: 123
				},
				{
					name: 'Twitter Web App',
					y: 118
				},
				{
					name: 'dlvr.it',
					y: 88
				},
				{
					name: 'Google',
					y: 64
				},
				{
					name: 'Twibble.io',
					y: 43
				},
				{
					name: 'Tweetbot for iOS',
					y: 35
				},
				{
					name: 'Mentalt',
					y: 30
				},
				{
					name: 'IFTTT',
					y: 29
				}
			]
		}
	]
};

export const MostUsedDevices = view(() => (
	<div>
		<HighchartsReact highcharts={Highcharts} options={options} />
	</div>
));
