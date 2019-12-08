import React, {Component} from 'react'
import {Bar, Line, Radar, Pie} from 'react-chartjs-2';

class ChartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chartData : {
                labels : ['Blantyre', 'Zomba', 'Lilongwe', 'Salima', 'Mzimba', 'Nsanje'],
                datasets: [{
                    label : 'Population',
                    position : 'bottom',
                    data : [617594, 181045, 153060, 106519, 105162, 95072],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 100, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 235, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                        
                    ]}]
            }
         };
    }
    render() {
        return (
            <div>
                <Pie
                    data={this.state.chartData}
                    
                    height = {100}
                options = {{
                    
                   title:{
                       display: true,
                       text: "Districts",
                       fontSize : 24,
                       fontColor: "lightBlue",
                   },
                   legend: {
                       position : 'bottom'
                   }
                }}
                />
            </div>
        );
    }
}

export default ChartComponent;