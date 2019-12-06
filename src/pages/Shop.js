import React from 'react';

import Banner from '../components/banner';
import Header from '../components/header';
import Footer from '../components/footer';


import '../assets/css/style.css'

import Api from '../services/Api';

class Shop extends React.Component{
  constructor(){
    super()
    this.state={
      postProduct :{
        name:"",
        price:"",
        description:""
      }
    }
  }

  // componentDidMount() {
  //   console.log(this.state.postProduct)
  // }

  // componentDidUpdate() {
  //   console.log(this.state.postProduct)
  // }

  postSetState = (input) => {
    this.setState({
        postProduct: {
            ...this.state.postProduct, [input.target.name]: input.target.value
        }
    })
  }

  postProduct = async (event) =>{
    event.preventDefault();

    var response = await Api.post("/new_product", this.state.postProduct);
    console.log(this.state.postProduct)
    
    if(response.data.status === "ok") {
      this.setState({response: "Produto adicionado com sucesso"})
    } else {
      this.setState({response: "Erro ao adicionar produto"})
    }
    
  }
  render(){

    return (

      <div className="Home">

        <Header/>

        <Banner/>

        <form onSubmit={(event) => this.postProduct(event)} className="formProduct">
            <input 
              name="name"
              value={this.state.postProduct.name}
              onChange={this.postSetState}
              className="inputProduct"
            />
            <input 
              name="price"
              value={this.state.postProduct.price}
              onChange={this.postSetState}
              className="inputProduct"
            />
            <input 
              name="description"
              value={this.state.postProduct.description}
              onChange={this.postSetState}
              className="inputProduct"
            />
            <button type="submit">Cadastrar</button>
        </form>

        <Footer/>

      </div>
    );
  }
}
export default Shop;
