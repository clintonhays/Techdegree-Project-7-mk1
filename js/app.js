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

let myChart = document.getElementById('trafficChart').getContext('2d');

let massPopChart = new Chart(myChart, {
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
