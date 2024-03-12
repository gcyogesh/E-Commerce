import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Productss from './pages/Productss'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import PageNotFound from './pages/PageNotFound'

//  for private login 
import PrivateLogin from './pages/PrivateLogin'
// import Product from './adminpanel/Product'
import ProductTable from './adminpanel/ProductTable'
import UploadProduct from './adminpanel/UploadProduct'









function App() {
  

  return (
     <React.Fragment>
         <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/product" element={<Productss />} />
     <Route path="/product/:id" element={<Product/>} />
     <Route path="/about" element={<AboutPage />} />
     <Route path="/contact" element={<ContactPage />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="/checkout" element={<Checkout />} />
     <Route path="*" element={<PageNotFound />} />
     
     
   
     {/* For Privatelogin  */}
     <Route path='/privatelogin' element={<PrivateLogin />} />
     <Route path='/privatelogin/categories' element={<PrivateLogin />} />
     <Route path='/privatelogin/product' element={<Product />} />
     <Route path='/privatelogin/uploadproduct' element={<UploadProduct/>}/>
      <Route path='/privatelogin/producttable' element={<ProductTable/>}/>
   
   </Routes>
 
</BrowserRouter>
      
     </React.Fragment>
  )
}

export default App
