import React, { Component } from 'react';
import logo from '../logo.png';
import Api from '../api';
import './App.css';
import Dashboard from './dashboard'


class App extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-inverse bg-color-css" >
                    <a className="navbar-brand" href="#" style={{color:"white"}}>DHIS<strong style={{color:"lightBlue"}}>2</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                       
                        </ul>
                        <span className="navbar-text">
                            <button type="button" className="btn btn-primary bg-color-btn">
                            {/* <span className="">Group 6 </span> */}
                           <span className="badge badge-light">Group 6 Web Portal</span>
                            
                            </button>
                        </span>
                    </div>
                    </nav>
                    <hr/>
                        
                        <div className="container">
                            <Dashboard/>
                        </div>
            </div>
        );
    }
}

export default App;
