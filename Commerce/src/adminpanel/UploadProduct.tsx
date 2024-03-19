
import React, { useState } from 'react'
import '../css/UploadProduct.css'
import PrivateNav from './PrivateNav'
import Swal from 'sweetalert2'

const UploadProduct: React.FC = () => {

  const [productName, setProductName] = useState('');
  const [productSubTitle, setProductSubTitle] = useState('');
  const [price, setPrice] = useState('');
  const [brandName, setBrandName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');

  const api = `https://e-commerce-7rma.onrender.com/sportwear`

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('productSubTitle', productSubTitle);
    formData.append('price', price);
    formData.append('brandName', brandName);
    formData.append('image', image as File); // Make sure image is of type File
    formData.append('description', description);
  
    try {
      const response = await fetch(api, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data); // Log the response data to check if it's returning correctly
      // Reset form fields
      setProductName('');
      setProductSubTitle('');
      setPrice('');
      setBrandName('');
      setImage(null);
      setDescription('');
  
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Data uploaded Successfully!'
      });
    } catch (error) {
      console.log("Error:", error);
    }
  }
  




  return (
    <React.Fragment>
      <PrivateNav />
      <div className="container">
        <header className="header">
          <h1 id="title" className="text-center">
            Add Your Products Here
          </h1>

        </header>
        <div className="form-wrap">
          <form onSubmit={handleForm} id="survey-form" encType="multipart/form-data">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label" htmlFor="name">
                    Product-Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Product Name"
                    className="form-control"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}


                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label" htmlFor="email">
                    Sub- Title OF product
                  </label>
                  <input
                    type="sub-title"
                    name="sub-title"
                    id="sub-title"
                    placeholder="Product Sub-Title"
                    className="form-control"
                    value={productSubTitle}
                    onChange={(e) => setProductSubTitle(e.target.value)}

                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Price
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="number"
                    min={1}
                    max={9009}
                    className="form-control"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Brand-Name</label>
                  <input
                    type="brand-name"
                    name="brand-name"
                    id="brand-name"
                    placeholder="Brand-Name"
                    className="form-control"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}

                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Upload Image</label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setImage(e.target.files[0]);
                      }
                    }}
                  />

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label> Description of Product</label>
                  <textarea
                    id="comments"
                    className="form-control"
                    name="comment"
                    placeholder="Enter Description of product here..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <button
                  type="submit"
                  id="submit"
                  className="btn btn-primary btn-block"
                >
                  Upload
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </React.Fragment>
  )
}

export default UploadProduct