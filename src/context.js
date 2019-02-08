import React, { Component } from "react";
import { detailProduct, storeProducts } from "./data";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  handleDetail = () => {
    console.log("hello from details");
  };

  addtoCart = id => {
    console.log(`Addicionado ao carrinho id: ${id}`);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addtoCart: this.addtoCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
