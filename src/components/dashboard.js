import React, { Component } from 'react';
import Api from '../api';
import ChartComponent from './ChartComponent';



export default class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
            dashboards : []
        }
    }

    componentDidMount(){

        Api.getTheDashboard().then(data =>{
           this.setState({
               dashboards: data.dashboardItems
           })
        });
    }

    render() {
        

        return (
            <div>
                {
                    this.state.dashboards.map((h, j) =>{
                    <p key={j}>{console.log(h)
                    }</p>
                    })
                }
                <ChartComponent/>


            </div>
        )
    }
}
