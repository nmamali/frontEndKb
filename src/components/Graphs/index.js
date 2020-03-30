import React  from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


import highchartsMap from "highcharts/modules/map";
import HighMaps from 'highcharts/highmaps'

import proj4 from "proj4";
import mapDataIE from "@highcharts/map-collection/countries/ie/ie-all.geo.json";


import SAdata from './SAdata';




require('highcharts/modules/map')(Highcharts);

// function Header() {




//     return (
//       <div>
//           <div>
//     <HighchartsReact highcharts={Highcharts} options={options} />
//   </div>

//     </div>
//     )
// }


class Graph extends React.Component {




  constructor() {
      super()
      this.state = {
          loading: false,
          character: {}
      }






      this.mapOptions = {
        chart: {
          map: 'countries/za/za-all'
        },
        title: {
          text: 'SA Map'
        },
        credits: {
            enabled: false
        },
        mapNavigation: {
          enabled: true
        },


        series: [{
          // Use the gb-all map with no data as a basemap
          name: 'SA COVID-19 Symptopms',
          mapData: SAdata,
          states: {
            hover: {
                color: '#BC401A'
            }
        },

        dataLabels: {
            enabled: true,
            format: '{point.name}'
        },
          data:  [
            ['za-ec', ['<br/><br/><b>Cough</b>',0,'<br/><b>fever</b>',7]],
            ['za-np', 1],
            ['za-nl', 2],
            ['za-wc', 3],
            ['za-nc', 4],
            ['za-nw', 5],
            ['za-fs', 6],
            ['za-gt', 7],
            ['za-mp', 8],

        ],
          borderColor: '#BC401A',
          color: 'rgba(200, 200, 200, 0.3)',
          showInLegend: true
        },

      ]
      }













   this.options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Covid19 Symptoms Vs Symptoms Estatimate'
    },

  yAxis: {
    min: 0,
    title: {
        text: 'Number of People '
    }
},

xAxis: {
  title: {
    text: 'Sytomps Scalling[From 0 to 10]'

  },
  categories: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10

  ],
  crosshair: true
},

tooltip: {
  formatter: function () {
      return this.points.reduce(function (s, point) {
          return s + '<br/>' + point.series.name + ': ' +
              point.y + ' People';
      }, '<b>' + this.x + '</b>');
  },
  shared: true
},

    series: [
      {
        name: 'Cough',
        data: [0 , 0 , 0 , 0, 0, 0 , 0 , 0 , 0, 0,0]
      },
      {
        name: 'Fever',
        data: [0 , 0 , 0 , 0, 0, 0 , 0 , 0 , 0, 0,0]
      },
      {
        name: 'Weakness',
        data: [0 , 0 , 0 , 0, 0, 0 , 0 , 0 , 0, 0,0]
      },
      {
        name: 'Breathing',
        data: [0 , 0 , 0 , 0, 0, 0 , 0 , 0 , 0, 0,0]
      },
      {
        name: 'Headache',
        data: [0 , 0 , 0 , 0, 0, 0 , 0 , 0 , 0, 0,0]
      }

    ]
  };

  }

  drawGraph(data){


      data.forEach(element => {
        this.options.series[0].data[element.cough]+= 1;
        this.options.series[1].data[element.fever]+= 1;
        this.options.series[2].data[element.weakness]+= 1;
        this.options.series[3].data[element.breathing]+= 1;
        this.options.series[4].data[element.headache]+= 1;
      });



  }

  componentDidMount() {

      console.log("Entry point");
      this.setState({loading: true})
      fetch("http://corenectbackend.eu-west-1.elasticbeanstalk.com/api/covid/list")
          .then(response => response.json())
          .then(data => {
            console.log(data);
              this.setState({
                  loading: false,
                  character: data
              })

              this.drawGraph(data)
              this.setState({
                loading: false,
                character: data
            })          })
          .then(err=>{
            console.log('PINGG',err);
          })


  }

  render() {

      const text = this.state.loading ? "loading..." : ""
      return (
          <div>
              <p>{text}</p>
              <HighchartsReact highcharts={Highcharts} options={this.options} updateArgs={[true]}
/>




<HighchartsReact
   constructorType ={'mapChart'}
   highcharts={Highcharts}
   options={this.mapOptions}
/>






{/* <HighchartsReact
   constructorType ={'mapChart'}
   highcharts={Highcharts}
   options={mapOptions}
/> */}
          </div>

      )
  }
}
export default Graph;





