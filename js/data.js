function makeChart(players) {
    
    var playerLabels = players.map(function(d) {return d.Date});
    var weeksData = players.map(function(d) {return +d.TotalCases});
    var playerColors = '#19A0AA';
    var deathcolor = '#F15F36';
    var playerdata = players.map(function(d) {return d.Deaths});
    var chart = new Chart('chart', {
      type: 'line',
      options: {
        responsive: true,
					hoverMode: 'index',
                    stacked: false,
                    maintainAspectRatio: true,
                    legend: {
                        display: false,
                    },
					title: {
						display: true,
						text: 'SA Coronavirus Infections'
					},
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Date ',
                fontSize: 16
              },
              gridLines: {
                drawOnChartArea: false, 
            },
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'Cases',
                fontSize: 16
              },
              gridLines: {
                drawOnChartArea: false, 
            },
            }
          ]
        }
      },
      data: {
        labels: playerLabels,
        datasets: [
          { label: 'Cases',
            data: weeksData,
            borderColor: playerColors,
            order: 1
        },
        { label: 'Deaths',
        data: playerdata,
        borderColor: deathcolor,
        backgroundColor: deathcolor,
        type: 'line',
        
        order: 2
          }
        ]
      }
      
    })
  }
  
  // Request data using D3
  d3.csv('https://raw.githubusercontent.com/grantf28/Python-Wikipedia-Table-Scrapper/master/data.csv')
    .then(makeChart);