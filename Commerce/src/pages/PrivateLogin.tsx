import React, { useEffect, useState } from 'react';
import '../css/Private.css';
import PrivateNav from '../adminpanel/PrivateNav';


const PrivateLogin = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://e-commerce-7rma.onrender.com/sportwear");
      const result = await response.json();
      setData(result);
    } catch {
      console.log("Getting error mate");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  
  return (
    <React.Fragment>
      <PrivateNav />

      <div className="container">
        <section id="products">
          <div className="row">
            {data.map((item, index) => {
              const { productName, productSubTitle, price, image, description } = item;
              return (
                <div className="col-md-4" key={index}>
                  <div className="card">
                    <img
                      className="item rounded mx-auto d-block img-fluid" // Added img-fluid class for responsive images
                      src={`https://e-commerce-7rma.onrender.com/users/${image}`}
                      alt="Card image cap"
                      style={{ height: '300px', objectFit: 'cover' }} // Fixed dimensions for image
                    />
                    <div className="card-body">
                      <div className="caption">
                        <div className="caption-top">
                          <h5 className="float-right badge-success p-1">${price}</h5>
                          <h5>
                            <a href="">{productName}</a>
                          </h5>
                        </div>
                        <p>{description}</p>
                        <a href="product.html" className="btn btn-primary">
                          {productSubTitle}
                        </a>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="ratings">
                        <p className="float-right">15 Reviews</p>
                        <p>
                          <span className="far fa-star" />
                          <span className="far fa-star" />
                          <span className="far fa-star" />
                          <span className="far fa-star" />
                          <span className="far fa-star" />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>  

      <footer className="navbar text-white justify-content-center">
        <p>
          MyStore Copyright © 2018 -
          <a className="text-white" href="#">
            Terms
          </a>{" "}
          ·
          <a className="text-white" href="#">
            Privacy
          </a>
        </p>
      </footer>
    </React.Fragment>
  );
};

export default PrivateLogin;
