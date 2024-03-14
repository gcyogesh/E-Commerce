import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { increment } from "../features/counter/CounterSlice";




const Products: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  // redux toolkit 
 
  const dispatch = useDispatch();

  const Loading = () => {
    return (

      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 mb-4">
          <Skeleton height={592} />
        </div>
      </>
      
    );
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:2222/sportwear");
      
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

  return (
    <>
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
                  <img className="card-img-top p-3" src={`http://127.0.0.1:2222/users/${image}`} alt="Card" height={300} />
                  <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text">{description}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${price}</li>
                    <li className="list-group-item">{productSubTitle}</li>
                  </ul>
                  <div className="card-body">
                    <Link to={`/product/${_id}`} className="btn btn-dark m-1">
                      Buy Now
                    </Link>

                    <button
                     onClick={() => dispatch(increment())}
                     className="btn btn-dark m-1">Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
