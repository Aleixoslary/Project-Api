import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../assets/css/banner/Banner.css'

class index extends Component {

  render() {
    return (

      <section className="bannerSection">
        <div className="bannerTxt">
          <h1 className="bannerTitle">25% off on CandyShop</h1>
          <Link to={'/shop'} className="bannerBtn">Shop Now!</Link>
        </div>
    </section>
    )
  }
}

export default index;
