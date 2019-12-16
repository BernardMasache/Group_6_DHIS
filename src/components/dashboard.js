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
        //getting dashboard id
       const dashboardIs = Api.getTheDashboard().then(data =>{
            
           return data;
        });

        dashboardIs.then(data =>{
            // console.log(data);
            
            this.setState({
                dashboards : data.dashboards
            })
        });

        //getting chart ids
    
            const chartIds = Api.getCharts().then(c =>{
                // console.log(c.charts);
                
            })


    }

    render() {
        
        return (
            <div className="">
                
                <ChartComponent/>

                {
                    this.state.dashboards.map((h, j) =>{

                        Api.getTheDashboardIds(h.id).then(s =>{

                            // console.log(s.dashboardItems);

                            s.dashboardItems.map(ds =>{
                                if (ds.type === "CHART") {
                                    // console.log(ds.chart.id);

                                        Api.getCharts(ds.chart.id).then(c =>{
                                            console.log(c);
                                            
                                        })
                                        
                                    
                                    
                                }
                                
                            })
                            
                        })
                       
                    })
                    
                    }
                    

            </div>
        )
    }
}
