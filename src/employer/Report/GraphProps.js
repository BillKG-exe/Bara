const data = {
    labels: ['Jan', 'Mar', 'May', 'July', 'Oct'],
    datasets: [
      {
        label: 'Clicks',
        data: [400, 1000, 4000, 800, 1500],
        fill: true,
        backgroundColor:"#2e4355",
        pointBorderColor:"#8884d8",
        pointBorderWidth:5,
        pointRadius:8,
        tension: 0.4
      },{
        label: 'Rates',
        data: [32, 21, 11, 75, 89],
        fill: true,
        backgroundColor:"#2e4355",
        pointBorderColor:"#8884d8",
        pointBorderWidth:5,
        pointRadius:8,
        tension: 0.4
      },
    ],
}

  
const options = {
    plugins:{legend:{display:false}},
    layout:{/* padding:{bottom:100} */},
    scales: {
      y:{
        ticks:{
          color:"white",
          font:{
            size:18
          }
        },
        grid:{
          color:"#243240"
        }
      },
      x:{
        ticks:{
          color:"white",
          font:{
            size:18
          }
        }
      }
    },
}


const props = [{
    data: data, 
    options: options
}]

module.exports = props
