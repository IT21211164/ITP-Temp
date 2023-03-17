import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import "./details.css"


function ProductDetails() {
    const navigate = useNavigate();  
    const [products, setProducts] = useState([])

    const getProducts = async () => {
      try {
        const { data } = await axios.get(process.env.REACT_APP_API_URL)
        setProducts(data.data)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getProducts();
    }, [])
  


    function deleteProduct(id){
      axios.delete(`http://localhost:8070/product/delete/${id}`)
      .then((result)=>{
          getProducts();
      })
      .catch(()=>{
          alert("Error ane");
      });
    }


    return (
      <div class="home-section">
          <div class="top">
          <Link id="add_btn"  to="/addProduct" className="btn btn-dark">New Product</Link>
      
          <div class="details">
            <h3><b>All Products</b></h3>
                <table class="table">
                    <thead>
                    <tr>
                        <th>Item Number</th>
                        <th>Timber Type</th>
                        <th>Image</th>
                    
                    </tr>
                    </thead>

                    <tbody>
                    
                    {products.map((post) => (
                    <tr key={post._id}>
                        <td>{post.itemNo}</td>
                        <td>{post.timberType}</td>
                        <td><img src={post.image} alt="img" className="itemImage" /></td>



                        <td><button onClick={()=>{
                            navigate("/updateProduct",
                            {
                                state: {
                                    id: `${post._id}`,
                                    vehicleNo: `${post.vehicleNo}`,
                                    vehicleType: `${post.vehicleType}`,
                                    driverID: `${post.image}`,
                                    
                                }
                            });
                        }}id="updateBtn" style={{fontSize:"14px"}}>Update</button></td>

                        <td><button onClick={()=>{
                            const confirmBox = window.confirm(
                                "Do you really want to delete"
                            )
                            if(confirmBox === true){
                                deleteProduct(post._id);
                            }
                        }} id="deleteBtn"  style={{fontSize:"14px"}}>Delete</button></td>

                    </tr>            
                    ))}

                    </tbody>
                </table>

            </div>
            </div>
            </div>
  );
}

export default ProductDetails;