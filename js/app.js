const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = `
<div class="alert-banner">
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class="alert-banner-close">x</p>
</div>

`;

alertBanner.addEventListener('click', (e) => {
	const element = e.target;
	if (element.classList.contains('alert-banner-close')) {
		alertBanner.style.display = 'none';
	}
});

//							      //
// - - - - - Line Chart - - - - - //
// 							      //

let trafficChart = document.getElementById('trafficChart').getContext('2d');

let massPopChart = new Chart(trafficChart, {
	type    : 'line',
	data    : {
		labels   : [
			'Boston',
			'Worcester',
			'Springfield',
			'Lowell',
			'Cambridge',
			'New Bedford'
		],
		datasets : [
			{
				label : 'Population',
				data  : [
					600000,
					180000,
					150000,
					106000,
					105000,
					95000
				]
			}
		]
	},
	options : {}
});

//							      //
// - - - - - Bar Chart - - - - - //
// 							      //

let dailyTrafficChart = document.getElementById('dailyChart').getContext('2d');

let massPopChart2 = new Chart(dailyTrafficChart, {
	type    : 'bar',
	data    : {
		labels   : [
			'Boston',
			'Worcester',
			'Springfield',
			'Lowell',
			'Cambridge',
			'New Bedford'
		],
		datasets : [
			{
				label : 'Population',
				data  : [
					600000,
					180000,
					150000,
					106000,
					105000,
					95000
				]
			}
		]
	},
	options : {}
});

//							          //
// - - - - - Doughnut Chart - - - - - //
// 							          //

let mobileChart = document.getElementById('mobileChart').getContext('2d');

let massPopChart3 = new Chart(mobileChart, {
	type    : 'doughnut',
	data    : {
		labels   : [
			'Boston',
			'Worcester',
			'Springfield',
			'Lowell',
			'Cambridge',
			'New Bedford'
		],
		datasets : [
			{
				label : 'Population',
				data  : [
					600000,
					180000,
					150000,
					106000,
					105000,
					95000
				]
			}
		]
	},
	options : {}
});
