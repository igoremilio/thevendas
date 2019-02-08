import React, { Component } from "react";
import { detailProduct, storeProducts } from "./data";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: storeProducts,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addtoCart = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.total += product.price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart], product };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  increment = id => {};
  decrement = id => {};
  removeItem = id => {};
  clearCart = () => {};

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addtoCart: this.addtoCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
