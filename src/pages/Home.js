import React from 'react';

import Banner from '../components/banner';
import Header from '../components/header';
import Footer from '../components/footer';

import Api from '../services/Api'

import '../assets/css/style.css'

import '../assets/css/home/home.css'

class Home extends React.Component{
  constructor() {
    super()
    this.state={
      listProducts:[]
    }
  }

  async componentDidMount(){
    var response = await Api.get("/products");
    console.log(response.data)
    this.setState({listProducts : response.data.products});
  }

  // getProducts = async () =>{
  //   var response = await Api.get("/products");
  //   console.log(response.data)
  //   this.setState({listProducts : response.data.products});
  // }

  render(){
  return (
    <div className="Home">
      <Header/>
       <Banner/>

       <h1 className="titleHome">Shop Now!!</h1>
      {/* <button onClick={this.getProducts} className="btnHome">Ver produtos</button> */}
       <div className="products">
          {
            this.state.listProducts.map((product, i)=>(
              <div key={i} className="cardProducts">

                <span className="textProduct">Nome:</span><p>{product.name}</p>
                <span className="textProduct">Preço:</span><p>{product.price}</p>
                <span className="textProduct">Descrição:</span><p>{product.description}</p>

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
