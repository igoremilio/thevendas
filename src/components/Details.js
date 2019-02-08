import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react";
import { ButtonContainer } from "./Buttons";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*fim do titulo*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>

                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Modelo: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Fabricante:{" "}
                    <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    R$
                    <span>{price}</span>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Informações do produto:
                    <p className="text-muted lead">{info}</p>
                  </p>
                  {/*botão*/}
                  <div>
                    <ButtonContainer
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addtoCart(id);
                      }}
                    >
                      {inCart
                        ? "Adicioado ao carrinho"
                        : "Adicionar ao carrinho"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
