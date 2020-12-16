/*
  Highcharts.chart('pie', {
   chart: {
    type: 'pie',
    // options3d: {
    //  enabled: true,
    //  alpha: 45,
    //  beta: 0
    // }
   },
   title: {
    text: 'Votes and Ratings for each Production Company'
   },
   accessibility: {
    point: {
     valueSuffix: '%'
    }
   },
   tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
                pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
   },
   plotOptions: {
    pie: {
    allowPointSelect: true,
    cursor: 'pointer',
    depth: 35,
    dataLabels: {
     enabled: true,
     format: '{point.name}'
    }
    }
   },
   series: [{
    type: 'pie',
    name: 'Votes Percentage',
    data: [
    ['Canal+ <br /> Average rating: 6.07', 4439],
    ['Columbia Pictures <br /> Average rating: 6.37', 46026],
    // {
    //  name: 'Chrome',
    //  y: 12.8,
    //  sliced: true,
    //  selected: true
    // },
    ['Metro-Goldwyn-Mayer (MGM) <br /> Average rating: 6.38', 9359],
    ['Mosfilm <br /> Average rating: 7.10', 2169],
    ['Paramount Pictures <br /> Average rating: 6.46', 50537],
    ['RKO Radio Pictures <br /> Average rating: 6.25', 2316],
    ['Twentieth Century Fox <br /> Average rating: 6.47', 42714],
    ['Universal International Pictures (UI) <br /> Average rating: 6.42', 1808],
    ['Universal Pictures <br /> Average rating: 6.39', 67081],
    ['Warner Bros. <br /> Average rating: 6.43', 56657]

    ]
   }]
  });
*/
  Highcharts.chart('pie', {
    chart: {
     type: 'pie',
     backgroundColor: "#faebd7"
     // options3d: {
     //  enabled: true,
     //  alpha: 45,
     //  beta: 0
     // }
    },
    title: {
     text: 'Votes and Ratings for each Production Company'
    },
    accessibility: {
     point: {
      valueSuffix: '%'
     }
    },
    tooltip: {
                 // pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
                 pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
    },
    plotOptions: {
     pie: {
     allowPointSelect: true,
     cursor: 'pointer',
     depth: 35,
     dataLabels: {
      enabled: true,
      format: '{point.name}'
     }
     }
    },
    series: [{
     type: 'pie',
     name: 'Votes Percentage',
     data: [
     ['Canal+ <br /> Average rating: 6.07', 4439],
     ['Columbia Pictures <br /> Average rating: 6.37', 46026],
     // {
     //  name: 'Columbia Pictures <br /> Average rating: 6.37',
     //  y: 46026,
     //  sliced: true,
     //  selected: true
     // },
     ['Metro-Goldwyn-Mayer (MGM) <br /> Average rating: 6.38', 9359],
     ['Mosfilm <br /> Average rating: 7.10', 2169],
     ['Paramount Pictures <br /> Average rating: 6.46', 50537],
     ['RKO Radio Pictures <br /> Average rating: 6.25', 2316],
     ['Twentieth Century Fox <br /> Average rating: 6.47', 42714],
     ['Universal International Pictures (UI) <br /> Average rating: 6.42', 1808],
     ['Universal Pictures <br /> Average rating: 6.39', 67081],
     ['Warner Bros. <br /> Average rating: 6.43', 56657]
 
     ]
    }]
   });
 
