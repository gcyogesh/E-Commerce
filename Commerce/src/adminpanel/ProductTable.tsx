import React, { useEffect, useState } from 'react';
import PrivateNav from './PrivateNav';




const ProductTable:React.FC  = () => {
  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:2222/sportwear");
      const result = await response.json();
      setData(result);
    } catch {
      console.log("Error fetching data")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])




  // const handleDelete = async (id: string) => {
  //   try {
  //     const response = await fetch(`http://localhost:2222/sportwear/${id}`, {
  //       method: 'DELETE'
  //     });
  //     if (response.ok) {
  //       // Remove the deleted item from the state
  //       const updatedData = data.filter((item: any) => item._id !== id);
  //       console.log('Updated data after deletion:', updatedData);
  //       setData(updatedData);
  //       console.log('Sportswear item deleted successfully');
  //     } else {
  //       console.error('Failed to delete sportswear item');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  



  return (
    <React.Fragment>
      <PrivateNav />
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-image" style={{ width: '100%' }}>
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
                          src={image}
                          className="img-fluid img-thumbnail"
                          alt="Sheep"
                        />
                      </td>
                      <td>{description}</td>
                      <td>
                        <button
                          type="submit"
                          id="submit"
                          className="btn btn-primary btn-block"
                          // onClick={() => handleDelete(_id)}
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
