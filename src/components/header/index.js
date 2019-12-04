import React, {Component} from 'react';
import '../../assets/css/header/style.css';

import logo from '../../assets/img/logo.png';

import Navigation from './Navigation';

import NavIcon from './NavIcon';

class index extends Component{
    render(){
        return(
            <div className="header">
            <div className="container">
                <img src={logo} className="logoImg"/>
                <Navigation/>
                <div className="menuIcon">
                <NavIcon/>
                </div>
            </div>
            </div>
        )
    }

} 

export default index;