import React, {Component} from 'react';

import '../../assets/css/header/Navigation.css';

import Cart2 from '../../assets/img/cart2.png';
import User from '../../assets/img/user.png';
import Loli from '../../assets/img/lollipop.png';

class NavIcon extends Component{
    render(){
        return(
            <div className="menuIcon">
                <img src={Cart2} className="shopping-cart"/>
                <img src={User} className="shopping-cart"/>
                <img src={Loli} className="shopping-cart"/>
            </div>
        )
    }

} 

export default NavIcon;