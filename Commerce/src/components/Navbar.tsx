
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import { RootState } from "../Store";
import { useSelector, useDispatch } from 'react-redux';
import { setCartCount } from '../features/counter/CounterSlice';



const Navbar = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.value)

      // Load cart count from localStorage on component mount
      useEffect(() => {
        const storedCount = localStorage.getItem('cartCount');
        if (storedCount) {
            dispatch(setCartCount(parseInt(storedCount)));
        }
    }, [dispatch]);

    // Update localStorage whenever the cart count changes
    useEffect(() => {
        localStorage.setItem('cartCount', count.toString());
    }, [count]);


    

   
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">KinGhar</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                            <NavLink to="/cart"  className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart <span>({count})</span> </NavLink>
                            
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar