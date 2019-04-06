Highcharts.chart('container', {
	credits: {
		enabled: false
	},
	exporting: { enabled: false },
	title: {
		text: 'Retweet based dependency wheel'
	},
	subtitle: {
		text: '<b>DiabetesSverige</b> is missing!'
	},
	chart: {
		height: (9 / 16) * 70 + '%' // 16:9 ratio
	},
	series: [
		{
			keys: ['from', 'to', 'weight'],
			data: [
				['veronikapso', 'ssdf12diabetes', 16],
				['biljettfrmedlin', 'Diamyd', 11],
				['diabetesliitto', 'DiabetesLUDC', 11],
				['HashtagBajen', 'Hammarbyfotboll', 10],
				['medfak_LU', 'DiabetesLUDC', 10],
				['traningslara', 'JacobGudiol', 10],
				['Koltrast3', 'Diamyd', 8],
				['KajsaAspJonson', 'DietisternasRF', 8],
				['Ingrid_Helander', 'LmVarlden', 7],
				['possobollotos', 'ssdf12diabetes', 6],
				['BlottGott', 'BlottGott', 6],
				['eve_sweden', 'Ardalsberget', 6],
				['goteborgsuni', 'SahlgrenskaAcad', 5],
				['BMrck', 'SahlgrenskaAcad', 5],
				['GothiaForum', 'SahlgrenskaAcad', 5],
				['Hassel2011', 'kvalitetsregist', 5],
				['HashtagBajen', 'samhallsmatchen', 5],
				['ankarklo', 'StEriksogon', 5],
				['HjartLung', 'ssdf12diabetes', 4],
				['MariaJonsson1', 'DiabetesLUDC', 4]
			],
			type: 'dependencywheel',
			name: 'Amount of RT',
			dataLabels: {
				color: '#333',
				textPath: {
					enabled: true,
					attributes: {
						dy: 5
					}
				},
				distance: 10
			},
			size: '95%'
		}
	]
});
