import React, { useEffect, useState } from 'react';
import PrivateNav from './PrivateNav';
import Swal from 'sweetalert2';



const ProductTable:React.FC  = () => {
  const [data, setData] = useState<Product[]>([]);


  const fetchData = async () => {
    try {
      const response = await fetch("https://e-commerce-7rma.onrender.com/sportwear");
      const result = await response.json();
      setData(result);
    } catch {
      console.log("Error fetching data")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])



  const handleDelete = async (id: number) => {
    try {
      // Show a confirmation message using Swal.fire
      const result = await Swal.fire({
        title: "Are you sure mate?",
        text: "We are deleting this from Your DataBase.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
  
      // If the user confirmed the delete action
      if (result.isConfirmed) {
        // Send delete request to the server
        const response = await fetch(`https://e-commerce-7rma.onrender.com/sportwear/${id}`, {
          method: 'DELETE'
        });
  
        if (response.ok) {
          // Delete operation was successful
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
  
          // Update the state to remove the deleted item
          setData(data.filter(item => item._id !== id));
        } else {
          // Delete operation failed
          console.error('Failed to delete sportswear item');
        }
      }
    } catch (error) {
      // Error occurred while trying to delete the item
      console.error('Error deleting sportswear item:', error);
    }
  };
  


  return (
    <React.Fragment>
      <PrivateNav />
      <div className="container">
        <div className="row">
          <div className="col">
            <table border={7} className="table table-image" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th scope="col">Index</th>
                  <th scope="col">Product-Title</th>
                  <th scope="col">Sub-Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Brand-Name</th>
                  <th scope="col">Images</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>

                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  const { productName, productSubTitle, price, brandName, image, description, _id } = item
                  return (

                    <tr key={index}>

                      <th scope="row">{_id}</th>
                      <td>{productName}</td>
                      <td>{productSubTitle}</td>
                      <td>{price}</td>
                      <td>{brandName}</td>
                      <td className="w-25">
                        <img
                          src={`https://e-commerce-7rma.onrender.com/users/${image}`}
                          className="img-fluid img-thumbnail"
                          alt={productName}
                        />
                      </td>
                      <td>{description}</td>
                      <td>
                        <button
                          type="submit"
                          id="submit"
                          className="btn btn-primary btn-block"
                          onClick={() => handleDelete(_id)}
                        >
                          Delete
                        </button>
                        <button
                          type="submit"
                          id="submit"
                          className="btn btn-primary btn-block"
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductTable;
