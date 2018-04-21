$(document).ready(function(){
	$.ajax({
		url: "http://localhost/chart/chartTest/data.php",
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

	var ctx = $('#huge-canvas');


			for (var a=[],i=0;i<20;++i) a[i]=i;
// http://stackoverflow.com/questions/962802#962890
			function shuffle(array) {
			  var tmp, current, top = array.length;
			  if(top) while(--top) {
			    current = Math.floor(Math.random() * (top + 1));
			    tmp = array[current];
			    array[current] = array[top];
			    array[top] = tmp;
			  }
			  return array;
			}

			a = shuffle(a);

	var myArr = Array.apply(null, Array(100)).map(function() { return Math.floor(Math.random() * 9 % 100); })
	console.log(myArr)
		var data = {
			labels : myArr,
			datasets: [
			{
				label: "TeamA score",
				data: myArr,
				backgroundColor: 'blue',
				borderColor: 'lightblue',
				fill: false,
				lineTension: 0.2,
				pointRadius: 5,
			}]
		}

		var chart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: {}
	});

	//amCharts
	var chartData = generateChartData();

	var chart = AmCharts.makeChart("chartdiv",{
		"type": "serial",
  		"theme" : "light",
  		"mouseWheelZoomEnabled":true,
		"legend": {
  			"useGraphSettings": true
  		},
  		"dataProvider": chartData,
  		"synchronizeGrid":true,
  		"valueAxes": [{
    		'id':'v1',
    		'axisColor':'#FF6600',
    		'axisThickness': 2,
    		'axisAlpha': 1,
    		'position': 'right'
    	}, {
 			"id":"v2",
        	"axisColor": "#FCD202",
        	"axisThickness": 2,
        	"axisAlpha": 1,
        	"position": "left"
    	}],
    	"graphs": [{
	    	"valueAxis": "v1",
	        "lineColor": "#FF6600",
	        "bullet": "round",
	        "bulletBorderThickness": 1,
	        "hideBulletsCount": 30,
	        "title": "benchmark",
	        "valueField": "benchAmptitude",
			"fillAlphas": 0
    	},
    	{
	    	"valueAxis": "v2",
	        "lineColor": "#FCD202",
	        "bullet": "square",
	        "bulletBorderThickness": 1,
	        "hideBulletsCount": 30,
	        "title": "patient",
	        "valueField": "amptitude",
			"fillAlphas": 0	
    	}],
    	"chartScrollbar": {},
		"chartCursor": {
		   	"pan": true,
		    "valueLineEnabled": true,
		    "valueLineBalloonEnabled": true,
		    "cursorAlpha":1,
		    "cursorColor":"#258cbb",
		    "valueLineAlpha":0.2,
		   	"valueZoomable":true
		},
		"categoryField": "time",
		"categoryAxis": {
   			"gridPosition": "start"
  		},
  		"export": {
    		"enabled" : true,
    		"postion" : "bottom-right"
		},
		"marginRight": 40,
		"marginLeft": 40,
		"autoMarginOffset": 20,
	   	"balloon": {
	  	     "borderThickness": 1,
	   	     "shadowAlpha": 0
	   	 },
	    "titles": [{
     	 		"size": 15,
     	 		"text": "Sacade"
     	 	}],
	    "valueScrollbar":{
	      "oppositeAxis":false,
	      "offset":50,
	      "scrollbarHeight":10
	    }
	});

	chart.addListener("dataUpdated", zoomChart);
	zoomChart();

	function generateChartData(){
		var time = "33:12";
		var benchAmptitude = 2;
		var amptitude = 12;

		time += "53:13";
		benchAmptitude += 4;
		amptitude += 201;

		var chartData = [];
		chartData.push({
			time: time,
			benchAmptitude: benchAmptitude,
			amptitude: amptitude
		});

		return chartData;
	};
	
	function zoomChart(){
    	chart.zoomToIndexes(chart.dataProvider.length - 20, chart.dataProvider.length - 1);
	};
})