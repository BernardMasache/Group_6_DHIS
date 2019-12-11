import React, { Component } from 'react';
import Api from '../api';
import ChartComponent from './ChartComponent';



export default class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
            dashboardItemsId : []
        }
    }

    componentDidMount(){

        //returning dashboaard object
        const idd = Api.getTheDashboard().then(data =>{
            
           return data.dashboardItems;
                         
        });
        
        //returning dashboardItem id
        (() => {
           return idd.then(data =>{
                
               this.setState({

                dashboardItemsId : data,

               })
                
            })})();

    }

    render() {
        

        return (
            <div>
               {
                    this.state.dashboardItemsId.map((h,k) =>{
                        return console.log(h.id);
                    })

               }
                <ChartComponent/>
            </div>
        )
    }
}
