
$(document).ready(function(){
	console.log("Document onReady");
	my_chart();
	
	$('#button1').puipanelmenu();
	console.log($('#button1'));
	});
	


function menu_on()
{ 
	console.log(event.srcElement.id);
	if(event.srcElement.innerHTML != "On")
	{
		event.srcElement.innerHTML = "On";
	}
	else{
		event.srcElement.innerHTML = "Off";
	}
};

function otherRand(min, max){
	return Math.random() * (max - min) + min;
};

/*function func_init(){
	if(evebutton1 ){
		
	}
	else{
		
	}
	
}*/

function my_chart() {
	
	console.log("Setup chart");
        chart = Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#chart').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 1,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Live random data'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Value'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Random data',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()
                        });
                    }
                    return data;
                }())
            }]
        });
    };
//document.addEventListener('#button1', onclick() )



/*function paint_chart() {
	margin: {top : 5}
	series:[
		{
			axis: "y",
			dataset: "numerical",
			key: "val0",
			label: "Line series",
			color: "hsla(88, 48%, 48%, 1)",
		type: ["line"],
		id:"my_Series"
		}
	],
	axes:{x:{key: "x", type: "date"}}
};*/