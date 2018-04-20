$(document).ready(function(){
	$.ajax({
		url: "http://localhost/chart/data.php",
		type: "GET",
		success: function(data) {
			console.log(data);

			var userid = [];
			var facebook_follower = [];
			var twitter_follower = [];
			var instagram_follower = [];

			for (var i in data){
				userid.push('UserID ' + data[i].userid);
				facebook_follower.push(data[i].facebook);
				twitter_follower.push(data[i].twitter);
				instagram_follower.push(data[i].instagram);
			}

			var chartdata = {
				labels: userid,
				datasets: [
					{
						label: 'facebook',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(59, 89, 152, 0.75)',
						borderColor: 'rgba(59, 89, 152, 1)',
						pointHoverBackgroundColor: 'rgba(59, 89, 152, 1)',
						pointHoverBorderColor: 'rgba(59, 89, 152, 1)',
						data: facebook_follower
					},
					{
						label: 'twitter',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(29, 202, 255, 0.75)',
						borderColor: 'rgba(29, 202, 255, 1)',
						pointHoverBackgroundColor: 'rgba(29, 202, 255, 1)',
						pointHoverBorderColor: 'rgba(29, 202, 255, 1)',
						data: twitter_follower
					},
					{
						label: 'instagram',
						fill: false,
						lineTension: 0.1,
						backgroundColor: 'rgba(211, 72, 54, 0.75)',
						borderColor: 'rgba(211, 72, 54, 1)',
						pointHoverBackgroundColor: 'rgba(211, 72, 54, 1)',
						pointHoverBorderColor: 'rgba(211, 72, 54, 1)',
						data: instagram_follower
					}
				]
			};

			var ctx = $('#mycanvas');

			var LineGraph = new Chart(ctx, {
				type: 'line',
				data: chartdata
			});
		},
		error: function(data) {
			console.log('error', data);
		}
	});
});