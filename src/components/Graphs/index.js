import React  from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';




function Header() {

  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Covid19 Symptoms Vs Symptoms Estatimate'
    },

  yAxis: {
    min: 0,
    title: {
        text: 'Symptoms Estatimate (%)'
    }
},

xAxis: {
  categories: [
      'Cough',
      'Fever',
      'Headache',
      'Sorethroat',
      'Weaknes',

   
  ],
  crosshair: true
},



    series: [
      {
        name: 'Covid 19',
        data: [1, 2, 1, 4, 3]
      }
    ]
  };




    return (
      <div>
          <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
        
    </div>
    )
}


// class Graph extends Component {
//   constructor() {
//       super()
//       this.state = {
//           loading: false,
//           character: {}
//       }
//   }
  
//   componentDidMount() {
   
//       this.setState({loading: true})
//       var requestOptions = {
//         method: 'GET',
//         mode: 'no-cors',
//         redirect: 'follow',
//         'Content-Type' : 'application/json'
//       };
      
//       fetch("http://covid19sa.azurewebsites.net/api/users/list", requestOptions)
//         .then(response => console.log(response))
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//   }
  
//   render() {
//       const text = this.state.loading ? "loading..." : this.state.character.name
//       return (
//           <div>
//               <p>{text}</p>
//           </div>
//       )
//   }
// }
// export default Graph;

export default Header;




