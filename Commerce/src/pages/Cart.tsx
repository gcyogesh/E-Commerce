import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Store";
import { FaPlus, FaMinus } from "react-icons/fa";
import { removeFromCart, plusByOne } from "../features/CartSlice";

const Cart: React.FC = () => {
  
  const cartItems = useSelector((item:RootState) => item.cart.cart);

  const dispatch = useDispatch();
  const handleRemoveItem = (index: number) => {
    dispatch(removeFromCart(index));
  };
  
  const handleAdd = () => {
    dispatch(plusByOne());
  };
  

  return (
    <>
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
                  {cartItems.map((item:Product, index:number) => (
                    <div key={index}>
                      <div className="row d-flex align-items-center">
                        <div className="col-lg-3 col-md-12">
                           <div
                            className="bg-image rounded"
                            data-mdb-ripple-color="light"
                          >
                            <img
                              src={`https://e-commerce-7rma.onrender.com/users/${item.image}`} 
                              alt={item.productName} 
                              width={100}
                              height={75}
                            />
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <p>
                            <strong>{item.productName}</strong>
                          </p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            {/* Add button logic for removing items */}
                            <button className="btn px-3"
                            onClick={() => handleRemoveItem(index)}
                            >
                              <FaMinus/>
                            </button>
                            <p className="mx-5">Quantity: {item.quantity}</p>
                            {/* Add button logic for adding items */}
                            <button className="btn px-3"
                            onClick={handleAdd}
                            >
                              <FaPlus/>
                            </button>
                          </div>
                          <p className="text-start text-md-center">
                            <strong>
                              <span className="text-muted">
                                Total Price: 
                              </span>
                              ${item.price}
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
        {/* Add logic for summarizing the order */}
        {cartItems.map((item:Product, index:number) => (
          <li key={index} className="list-group-item">
            <div className="d-flex justify-content-between">
              <span>{item.productName}</span>
              <span>${item.price}</span>
            </div>  
          </li>
        ))}
      </ul>
      <div className="mt-3">
        {/* Calculate total price by summing up prices of all items */}
        <strong>Total Price: ${cartItems.reduce((acc:number, item:Product) => acc + item.price, 0)}</strong>

      </div>
      <Link to="/checkout" className="btn btn-dark btn-lg btn-block mt-3">
        Go to checkout
      </Link>
    </div>
  </div>
</div>


          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
