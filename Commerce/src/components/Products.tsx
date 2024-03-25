import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCart } from "../features/CartSlice";
import bgImage from '../images/nature1.webp'



const Loading = () => {
  return (
    <>
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 py-3">
            <Skeleton height={400} width={400} />
          </div>
          <div className="col-md-6 py-5">
            <Skeleton height={30} width={250} />
            <Skeleton height={90} />
            <h3>This API is live in Render.com. It might take some time  fetch data. Please have a faith.</h3>
            <Skeleton height={40} width={70} />
            <Skeleton height={50} width={110} />
            <Skeleton height={120} />
            <Skeleton height={40} width={110} inline={true} />
            <Skeleton className="mx-3" height={40} width={110} />
          </div>
        </div>
      </div>
    </>
  );
};



const Products: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  console.log(searchTerm)
  const [loading, setLoading] = useState<Boolean>(true)

  // redux toolkit 

  const dispatch = useDispatch();



  const fetchData = async () => {
    try {
      const response = await fetch("https://e-commerce-7rma.onrender.com/sportwear");

      const result = await response.json();
      setData(result);
      setFilteredData(result);
      setLoading(false)
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
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filtered = data.filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };






  return (

    <>

      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img"
            src={bgImage}
            alt="Card"
            height={600}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-titlet  fs-1 text fw-lighter">Summer Time Huh!</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Get your all the summer item here. We got everything you need with offer!
              </p>
              <div className="search-bar mt-3">
                <input type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                {/* <button id="searchIcon" className="btn btn-primary">
                  <FaSearch />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>





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



        {loading ? (
          <Loading/>
        ) : (

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
        )}

      </div>
    </>
  );
};

export default Products;
