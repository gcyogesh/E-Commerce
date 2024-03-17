  import React from "react";
  import bgImage from '../images/nature1.webp'

  const Main:React.FC  = () => {
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
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Main;
