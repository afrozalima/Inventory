var options = {
    series: [{
    data: [200, 150, 75, 63, 95]
  }],
    chart: {
    type: 'bar',
    height: 300,
    width:400,
    toolbar:{
        show:false,
    }
  },

  colors:[
           "#0A4D68",
           "#088395",
           "#05BFDB",
           "#00FFCA",
           "#ADE4DB",


  ],
  plotOptions: {
    bar: {
        distributed:true,
      borderRadius: 4,
      horizontal: false,
      columnWidth:"30%",
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Bata', 'Lipstic', 'Phone', 'Watch', 'Dress'
      
    ],
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), options);
  chart.render();


  /*area chart*/
  
  var options = {
    series: [{
    name: 'Purchase Order',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
    name: 'Sales Order',
    type: 'line',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
    chart: {
    height: 300,
    width:400,
    type: 'line',
    toolbar:{
        show:false,
    }
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type:'solid',
    opacity: [0.35, 1],
  },
  labels: ['Dec 01', 'Dec 02','Dec 03','Dec 04','Dec 05','Dec 06','Dec 07','Dec 08','Dec 09 ','Dec 10','Dec 11'],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Order',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Order',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if(typeof y !== "undefined") {
          return  y.toFixed(0) + " points";
        }
        return y;
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#area-chart"), options);
  chart.render();