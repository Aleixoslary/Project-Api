import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import '../../assets/css/header/Navigation.css';

class index extends Component{
    render(){
        return(
            <div className="menu">
                <Link to={"/"}>HOME</Link>      
                <Link to={"/shop"}>SHOP</Link> 
            </div>
        )
    }

} 

export default index;