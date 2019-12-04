import React from 'react';

import Banner from '../components/banner';
import Header from '../components/header';
import Footer from '../components/footer';


import '../assets/css/style.css'

function Home() {

  return (
    <div className="Home">
      <Header/>
       <Banner/>

      <Footer/>
    </div>
  );

}

export default Home;
