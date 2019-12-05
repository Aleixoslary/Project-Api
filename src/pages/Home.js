import React from 'react';

import Banner from '../components/banner';
import Header from '../components/header';
import Footer from '../components/footer';

import Api from '../services/Api'

import '../assets/css/style.css'


class Home extends React.Component{
  constructor() {
    super()
    this.state={
      listProducts:[]
    }
  }

  getProducts = async () =>{
    var response = await Api.get("/products");
    console.log(response.data)
    this.setState({listProducts : response.data.products});
  }

  render(){
  return (
    <div className="Home">
      <Header/>
       <Banner/>

       <h1 className="titleHome">Shop Now!!</h1>
      
       <div className="products" >
          {
            this.state.listProducts.map((product, i)=>(
              <div key={i} className="cardProducts">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
              </div>
            )
            )
          }
       </div>
      <Footer/>
    </div>
  );
  }
}

export default Home;
