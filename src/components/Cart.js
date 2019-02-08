import React, { Component } from "react";
import Title from "./Title.js";
import { ProductConsumer } from "../context";
import CartItem from "./CartItem.js";
export default class extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="" title="Carrinho" />
                  <div className="container-fluid text-center d-none d-lg-block">
                    <div className="row">
                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Produtos</p>
                      </div>

                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Nome do produto</p>
                      </div>

                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">Preço</p>
                      </div>

                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">quantidade</p>
                      </div>

                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">remover</p>
                      </div>

                      <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">total</p>
                      </div>
                    </div>
                  </div>
                  <div className="container-fluid">
                    {cart.map(item => {
                      return (
                        <CartItem key={item.id} item={item} value={value} />
                      );
                    })}
                  </div>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-10 mx-auto text-center">
                        <h1>Carrinho Vazio</h1>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

{
  /*<div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto text-center">
              <h1>Carrinho Vazio</h1>
            </div>
          </div>
    </div>
          */
}

{
  /*
  <div className="container-fluid">
  {cart.map(item => {
    return <CartItem key={item.id} item={item} value={value} />;
  })}
</div>
*/
}
