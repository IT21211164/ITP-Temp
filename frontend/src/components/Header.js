import React, {useState} from "react";
import {Link} from 'react-router-dom';
import "./header.css";
import timber from '../images/timber2.png';



function Header(userDetails){
    const user = userDetails.user;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <><div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <div className="logo-details">
              <img id="logo" src={timber} />
              <div className="logo_name">TIMBER</div>
              <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
          </div>

          <ul className="nav-list">

              <li>
                  <a href="#">
                      <i class='bx bx-group'></i>
                      <span className="links_name">Customers</span>
                  </a>
                  <span className="tooltip">User</span>
              </li>

              <li>
                  <a href="#">
                      <i class='bx bxs-group'></i>
                      <span className="links_name">Employees</span>
                  </a>
                  <span className="tooltip">User</span>
              </li>


              <li>
                  <Link to="#">
                      <i class='bx bxs-truck'></i>
                      <span className="links_name" >Transport</span>
                  </Link>
                  <span className="tooltip"></span>


                <ul class="dropdown">
                    <li><Link to="getVehicles">Vehicle details</Link></li>
                    <li><Link to="addTransportation">Logs Transport history</Link></li>
                    <li><Link to="#">Furniture Delivery</Link></li>
                </ul>
              </li>



              <li>
                  <a href="#">
                      <i class='bx bx-money'></i>
                      <span className="links_name">Finance</span>
                  </a>
                  <span className="tooltip"></span>
              </li>

              <li>
                  <a href="#">
                      <i class='bx bx-bar-chart-alt'></i>
                      <span className="links_name">Sales</span>
                  </a>
                  <span className="tooltip"></span>
              </li>

              <li>
                  <a href="#">
                      <i class='bx bx-purchase-tag'></i>
                      <span className="links_name">Purchase</span>
                  </a>
                  <span className="tooltip"></span>
              </li>

              <li>
                  <a href="addFurniture">
                      <i class='bx bx-store'></i>
                      <span className="links_name">Inventory</span>
                  </a>
                  <span className="tooltip"></span>
              </li>



              <li>
                  <Link to="getProducts">
                      <i class='bx bxs-factory'></i>
                      <span class="links_name">Manufacture</span>
                  </Link>
                  <span class="tooltip"></span>
              </li>

              <li class="profile">
                  <div class="profile-details">
                      <Link to="userprofile">
                        <img id="userpicture" src={user.picture} alt="Login" />
                        <h5 id= "username">{user.name}</h5>
                      </Link>
                  </div>
              </li>

          </ul>
      </div>
      </>

        

    )
}

export default Header;