import React, {useEffect, useState} from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
import { useDispatch } from "react-redux";
import { AddCart } from "../features/CartSlice";



const Product:React.FC = () => {

  const dispatch = useDispatch();
  


  const {id} = useParams();
  const [product, setProduct]= useState<Product>({});
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:2222/sportwear/${id}`);
        const result = await response.json();
        setProduct(result); 

        
        // console.log(result);
        // console.log(result.productSubTitle);
        
        
        const response1 = await fetch(`http://localhost:2222/sportwear`);
        const result1 = await response1.json();
        setSimilarProducts(result1);
      
       setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
      
      }
    };
    fetchData();

    
  }, []);



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

    

  const ShowProduct = () => {
    const {image,productSubTitle, price, description } = product;
    return (
      <>
      
     

          <div className="container my-5 py-2">
          <div className="row">
            
            <div className="col-md-6 col-sm-12 py-3">
             
              <img
                className="img-fluid"
                src={`http://127.0.0.1:2222/users/${image}`}
                alt=""
                width="400px"
                height="400px"
                />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{}</h4>
              <h1 className="display-5">{productSubTitle}</h1>
              <p className="lead">
             
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${price}</h3>
              <p className="lead">{description}</p>
               
              <button
                className="btn btn-outline-dark"
                onClick={() => dispatch(AddCart(product))}
                >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
             
      </>
    );
  };

 

  const ShowSimilarProduct = () => {
    return (
      <>
      
        <div className="py-4 my-4">
          <div className="d-flex">
        

              {similarProducts.map((item, index)=>{
                 const {productName,image, price } = item;

                return(

                
                  
                  <div key={index} className="card mx-4 text-center">
                  <img
                    className="card-img-top p-3"
                    src={`http://127.0.0.1:2222/users/${image}`}
                    alt="Card"
                    height={300}
                    width={300}
                    />
                  <div className="card-body">
                    <h5 className="card-title">
                     {productName}
                    </h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${price}</li>
                  </ul>
                  <div className="card-body">
                    <Link
                      to=""
                      className="btn btn-dark m-1"
                      >
                      
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => dispatch(AddCart(item))}
                      >
                      Add to Cart
                    </button>
                  </div>
                </div>
                        )
                      })}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
    <Navbar />
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="row">
            <ShowProduct />
          </div>
          <div className="row my-5 py-5">
            <div className="d-none d-md-block">
              <h2 className="">You may also Like</h2>
              <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
                <ShowSimilarProduct />
              </Marquee>
            </div>
          </div>
        </>
      )}
    </div>
    <Footer />
  </>
);
};

export default Product;
