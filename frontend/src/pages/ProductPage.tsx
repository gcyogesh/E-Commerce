import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { AddCart } from "../features/CartSlice";

const ProductPage = () => {

    const [data, setData] = useState<Product[]>([]);
    const [filteredData, setFilteredData] = useState<Product[]>([]);


    // redux toolkit 
  
    const dispatch = useDispatch();

 

    const fetchData = async () => {
      try {
        const response = await fetch("https://e-commerce-7rma.onrender.com/sportwear");
        
        const result = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const filterProduct = (cat: string) => {
      const updatedList: Product[] = data.filter((item: Product) => item.productSubTitle === cat);
      setFilteredData(updatedList);
    };

    // for searching hai 
    





  return (
    <React.Fragment>
        <Navbar/>
       





        <div className="container my-3 py-3">
          <div className="row">
            <div className="col-12">
              <h2 className="display-5 text-center">Latest Products</h2>
              <hr />
            </div>
          </div>
          <div className="buttons text-center py-5">
            <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilteredData(data)}>All</button>
            <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's")}>Men's Clothing</button>
            <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's")}>Women's Clothing</button>
            <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
            <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
          </div>
          <div className="row justify-content-center">
            {filteredData.map((item, index) => {
              const { _id, productName, productSubTitle, price, image, description } = item;
              return (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card text-center h-100">
                    <img className="card-img-top p-3" src={`https://e-commerce-7rma.onrender.com/users/${image}`} alt="Card" height={300} />
                    <div className="card-body">
                      <h5 className="card-title">{productName}</h5>
                                      <p className="card-text">{description}</p>
                    </div>
                    <ul className="list-  group list-group-flush">
                      <li className="list-group-item lead">${price}</li>
                      <li className="list-group-item">{productSubTitle}</li>
                    </ul>
                    <div className="card-body">
                      <Link to={`/product/${_id}`} className="btn btn-dark m-1">
                        Buy Now
                      </Link>

                      <button
                      onClick={() => dispatch(AddCart(item))}
                      className="btn btn-dark m-1">Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    
        <Footer />
    </React.Fragment>
 
  )
}

export default ProductPage