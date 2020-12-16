genres = ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy',
        'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir',
        'History', 'Horror', 'Music', 'Musical', 'Mystery', 'News',
        'Reality-TV', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 'War',
        'Western']
        score = [5.62,
         4.55,
         5.84,
         6.38,
         6.62,
         5.86,
         6.02,
         7.30,
         6.23,
         5.92,
         5.74,
         6.64,
         6.54,
         4.83,
         6.24,
         6.24,
         5.82,
         6.40,
         3.80,
         6.13,
         5.07,
         6.04,
         5.47,
         6.42,
         5.97]
        new Chart(document.getElementById("bar-chart"), {
         type: 'bar',
         
         data: {
         labels: genres,
         datasets: [
          {
          label: "Average Weighted Rating",
          backgroundColor: ["#FBE870", 
          "#F2BA49", "#FFAE42","#E77200","#ECB176","#FFB97B",
          "#FF8833", "#FF681F","#FF7F49","#E58E73","#FF9980","#E6735C", 
          "#CC553D","#B33B24","#FE6F5E","#FE4C40","#FF5349", 
          "#B94E48","#D92121","#E12C2C","#CC3336","#CC474B", 
          "#C62D42","#FD0E35","#C32148"],
          data: score
          }
         ]
         },
         options: {
         legend: { display: false },
         title: {
          display: true,
          text: 'Average Weighted Rating by Genres',
          fontSize: 20,
          fontFamily: 'monospace',
        
         },
         scales: {
                xAxes: [ {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Average Weighted Rating',
                    fontSize: 15,
                  },
                } ],
                yAxes: [ {
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Genres',
                    fontSize: 15,
                  }
                } ]
              }
         }
        });