import React from 'react'
import { Link } from 'react-router-dom'



const PrivateNav:React.FC = () => {
  return (
     <React.Fragment>
            <header className="navbar-light py-4">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 align-self-end">
          <h1 className="ml-1 logo">
            <i className="fa fa-tags text-primary" /> Admin
            <span className="text-primary">Panel</span>
          </h1>
        </div>
      </div>
    </header>
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark mb-3">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            className="navbar-toggler"  
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div
          id="navbarSupportedContent"
          className="navbar-collapse collapse justify-content-between"
        >
          <ul className="nav navbar-nav">
            <li className="nav-item active">
            <li className="nav-item">
             <Link className='nav-link' to="/privatelogin/categories">Categories</Link>
            </li>
            </li>
            <li className="nav-item">
            <li className="nav-item">
             <Link className='nav-link' to="/privatelogin/product">Product</Link>
            </li>
            </li>
            <li className="nav-item">
            <li className="nav-item">
             <Link className='nav-link' to="/privatelogin/producttable">Product table</Link>
            </li>
            </li>
            <li className="nav-item">
             <Link className='nav-link' to="/privatelogin/uploadproduct">Upload Products</Link>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
     </React.Fragment>
  )
}

export default PrivateNav