<template>
  <main>
    <h2>Beautiful Google Charts</h2>
    <h5>Daily Page Hits</h5>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Party</th>
          <th scope="col">Votes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, name, index) of candidates" :key="index">
          <th scope="row">1</th>
          <td>{{ value.name }}</td>
          <td>{{ value.party }}</td>
          <td>{{ votes[name] }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
/*const google = window.google;
google.load('visualization', '1', {packages: ['corechart']});
google.setOnLoadCallback(drawCharts);
function drawCharts() {
  // BEGIN BAR CHART
  
  // create zero data so the bars will 'grow'
  var barZeroData = google.visualization.arrayToDataTable([
    ['Day', 'Page Views', 'Unique Views'],
    ['Sun',  0,      0],
    ['Mon',  0,      0],
    ['Tue',  0,      0],
    ['Wed',  0,      0],
    ['Thu',  0,      0],
    ['Fri',  0,      0],
    ['Sat',  0,      0]
  ]);
	
  // actual bar chart data
  var barData = google.visualization.arrayToDataTable([
    ['Day', 'Page Views', 'Unique Views'],
    ['Sun', 1050, 600],
    ['Mon', 1370, 910],
    ['Tue', 660, 400],
    ['Wed', 1030, 540],
    ['Thu', 1000, 480],
    ['Fri', 1170, 960],
    ['Sat', 660, 320],
  ]);
  // set bar chart options
  var barOptions = {
    focusTarget: 'category',
    backgroundColor: 'transparent',
    colors: ['cornflowerblue', 'tomato'],
    fontName: 'Open Sans',
    chartArea: {
      left: 50,
      top: 10,
      width: '100%',
      height: '70%',
    },
    bar: {
      groupWidth: '80%',
    },
    hAxis: {
      textStyle: {
        fontSize: 11,
      },
    },
    vAxis: {
      minValue: 0,
      maxValue: 1500,
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 4,
      },
      textStyle: {
        fontSize: 11,
      },
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12,
      },
    },
    animation: {
      duration: 1200,
      easing: 'out',
      startup: true,
    },
  };
  // draw bar chart twice so it animates
  var barChart = new google.visualization.ColumnChart(
    document.getElementById('bar-chart')
  );
  //barChart.draw(barZeroData, barOptions);
  barChart.draw(barData, barOptions);

  // BEGIN LINE GRAPH

  function randomNumber(base, step) {
    return Math.floor(Math.random() * step + base);
  }
  function createData(year, start1, start2, step, offset) {
    var ar = [];
    for (var i = 0; i < 12; i++) {
      ar.push([
        new Date(year, i),
        randomNumber(start1, step) + offset,
        randomNumber(start2, step) + offset,
      ]);
    }
    return ar;
  }
  var randomLineData = [['Year', 'Page Views', 'Unique Views']];
  for (var x = 0; x < 7; x++) {
    var newYear = createData(2007 + x, 10000, 5000, 4000, 800 * Math.pow(x, 2));
    for (var n = 0; n < 12; n++) {
      randomLineData.push(newYear.shift());
    }
  }
  var lineData = google.visualization.arrayToDataTable(randomLineData);

  
  var animLineData = [
    ['Year', 'Page Views', 'Unique Views']
  ];
  for (var x = 0; x < 7; x++) {
    var zeroYear = createData(2007+x, 0, 0, 0, 0);
    for (var n = 0; n < 12; n++) {
      animLineData.push(zeroYear.shift());
    }
  }
  var zeroLineData = google.visualization.arrayToDataTable(animLineData);
	

  var lineOptions = {
    backgroundColor: 'transparent',
    colors: ['cornflowerblue', 'tomato'],
    fontName: 'Open Sans',
    focusTarget: 'category',
    chartArea: {
      left: 50,
      top: 10,
      width: '100%',
      height: '70%',
    },
    hAxis: {
      //showTextEvery: 12,
      textStyle: {
        fontSize: 11,
      },
      baselineColor: 'transparent',
      gridlines: {
        color: 'transparent',
      },
    },
    vAxis: {
      minValue: 0,
      maxValue: 50000,
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 4,
      },
      textStyle: {
        fontSize: 11,
      },
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12,
      },
    },
    animation: {
      duration: 1200,
      easing: 'out',
      startup: true,
    },
  };

  var lineChart = new google.visualization.LineChart(
    document.getElementById('line-chart')
  );
  //lineChart.draw(zeroLineData, lineOptions);
  lineChart.draw(lineData, lineOptions);

  // BEGIN PIE CHART

  // pie chart data
  var pieData = google.visualization.arrayToDataTable([
    ['Country', 'Page Hits'],
    ['USA', 7242],
    ['Canada', 4563],
    ['Mexico', 1345],
    ['Sweden', 946],
    ['Germany', 2150],
  ]);
  // pie chart options
  var pieOptions = {
    backgroundColor: 'transparent',
    pieHole: 0.4,
    colors: [
      'cornflowerblue',
      'olivedrab',
      'orange',
      'tomato',
      'crimson',
      'purple',
      'turquoise',
      'forestgreen',
      'navy',
      'gray',
    ],
    pieSliceText: 'value',
    tooltip: {
      text: 'percentage',
    },
    fontName: 'Open Sans',
    chartArea: {
      width: '100%',
      height: '94%',
    },
    legend: {
      textStyle: {
        fontSize: 13,
      },
    },
  };
  // draw pie chart
  var pieChart = new google.visualization.PieChart(
    document.getElementById('pie-chart')
  );
  pieChart.draw(pieData, pieOptions);
}*/

import {ethers} from 'ethers';
const abi = require('../assets/contracts/abi.json');
const contractAddress = '0x8a60150D62CC27b17a3Ca44249C8ebfDF8692C23';
export default {
  name: 'Graph',
  data() {
    return {
      candidates: [],
      votes: [],
    };
  },
  created() {
    const _this = this;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    contract.getCandidates().then((data) => {
      for (var i = 0; i < data.length; i++) {
        var addressSelected = data[i];

        contract.votes(addressSelected).then((votes) => {
          _this.votes.push(Number(votes));
        });

        contract.candidateData(addressSelected).then((candidate) => {
          _this.candidates.push({
            name: candidate.name,
            party: candidate.party,
          });
        });
      }
      console.log(_this.candidates);
      console.log(_this.votes);
    });
  },
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400, 700);

body {
  font-family: 'Open Sans', Arial;
  background: #ededed;
}
main {
  width: 600px;
  margin: 10px auto;
  padding: 100px 20px 30px 0px;
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
}
p {
  margin-top: 2rem;
  font-size: 13px;
}
#bar-chart {
  width: 500px;
  height: 300px;
  position: relative;
}
#line-chart {
  width: 500px;
  height: 300px;
  position: relative;
}
#bar-chart::before,
#line-chart::before {
  content: '';
  position: absolute;
  display: block;
  width: 240px;
  height: 30px;
  left: 155px;
  top: 254px;
  background: #fafafa;
  box-shadow: 1px 1px 0 0 #ddd;
}
#pie-chart {
  width: 500px;
  height: 250px;
  position: relative;
}
#pie-chart::before {
  content: '';
  position: absolute;
  display: block;
  width: 120px;
  height: 115px;
  left: 315px;
  top: 0;
  background: #fafafa;
  box-shadow: 1px 1px 0 0 #ddd;
}
#pie-chart::after {
  content: '';
  position: absolute;
  display: block;
  top: 260px;
  left: 70px;
  width: 170px;
  height: 2px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  box-shadow: 0 0 3px 4px rgba(0, 0, 0, 0.1);
}
</style>
