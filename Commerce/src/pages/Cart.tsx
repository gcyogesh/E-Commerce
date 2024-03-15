import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../features/counter/CounterSlice";

const Cart: React.FC = () => {

  const cartItems = useSelector((state:any)=> state.counter.cart)
  const dispatch = useDispatch();


  const addItemToCart = (product:Product) => {
    dispatch(addItem(product)); // Dispatch action to add item to cart
  };

  const removeItemFromCart = (product:Product) => {
    dispatch(deleteItem(product)); // Dispatch action to remove item from cart
  };





    return (
      <React.Fragment>
        <Navbar />
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Item List</h5>
                  </div>
                  <div className="card-body">
                  
                      {cartItems.map((item:Product, index:undefined)=>()=>(

                        <div >
                          <div className="row d-flex align-items-center" key={index}>
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src="https://images.pexels.com/photos/19989356/pexels-photo-19989356/free-photo-of-a-rainbow-is-seen-over-a-road-with-snow-and-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                  alt={item.productName}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.productSubTitle}</strong>
                              </p>
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                onClick={() => removeItemFromCart(item)}
                                  className="btn px-3"
                                 
                                >
                                  <i className="fas fa-minus"></i>
                                </button>

                                <p className="mx-5"></p>

                                <button
                                  className="btn px-3"
                                  onClick={() => addItemToCart(item)}
                                 
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted"></span>{" "}
                                  x ${item.price}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      ))}
                                         
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products 
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>$</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>$</strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/checkout"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };

 
    <>
    
        <div className="container my-3 py-3">
          <h1 className="text-center">Cart</h1>
          <hr />
        
        </div>
      <Footer />
    </>
  


export default Cart;
