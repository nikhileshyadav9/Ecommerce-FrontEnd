// import React from 'react';
// import { Link } from 'react-router-dom';
// import './AdminDashboard.css'; // Import the CSS file

// const AdminDashboardPage = () => {
//   return (
//     <div className="dashboard-container">
//       <h2 className="text-center">Admin Dashboard</h2>
//       <div className="card-container">
//         <div className="card">
//           <Link to="/addproduct" className="card-link">
//             <button className="card-button primary">
//               <i className="fas fa-plus"></i>
//             </button>
//           </Link>
//           <h3>Add Product</h3>
//           <p>---------</p>
//         </div>
//         <div className="card">
//           <Link to="/addcategory" className="card-link">
//             <button className="card-button primary">
//               <i className="fas fa-list"></i>
//             </button>
//           </Link>
//           <h3>Add Category</h3>
//           <p>---------</p>
//         </div>
//         <div className="card">
//           <Link to="/viewproducts" className="card-link">
//             <button className="card-button danger">
//               <i className="fas fa-book"></i>
//             </button>
//           </Link>
//           <h3>View Products</h3>
//           <p>---------</p>
//         </div>
//       </div>
//       <div className="card-container">
//         <div className="card">
//           <Link to="/user/admin/allorder" className="card-link">
//             <button className="card-button warning">
//               <i className="fas fa-box"></i>
//             </button>
//           </Link>
//           <h3>All Orders</h3>
//           <p>---------</p>
//         </div>
//         <div className="card">
//           <Link to="/user/delivery/register" className="card-link">
//             <button className="card-button info">
//               <i className="fas fa-user"></i>
//             </button>
//           </Link>
//           <h3>Register Delivery</h3>
//           <p>---------</p>
//         </div>
//         <div className="card">
//           <Link to="/user/admin/assigndelivery" className="card-link">
//             <button className="card-button info">
//               <i className="fas fa-user-plus"></i>
//             </button>
//           </Link>
//           <h3>Assign Order Delivery</h3>
//           <p>---------</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboardPage;















import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList, faBook, faBox, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2 className="text-center">Admin Dashboard</h2>
      <div className="card-container">
        <div className="card">
          <Link to="/addproduct" className="card-link">
            <button className="card-button primary">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </Link>
          <h3>Add Product</h3>
          <p>---------</p>
        </div>
        <div className="card">
          <Link to="/addcategory" className="card-link">
            <button className="card-button primary">
              <FontAwesomeIcon icon={faList} />
            </button>
          </Link>
          <h3>Add Category</h3>
          <p>---------</p>
        </div>
        <div className="card">
          <Link to="/viewproducts" className="card-link">
            <button className="card-button danger">
              <FontAwesomeIcon icon={faBook} />
            </button>
          </Link>
          <h3>View Products</h3>
          <p>---------</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <Link to="/user/admin/allorder" className="card-link">
            <button className="card-button warning">
              <FontAwesomeIcon icon={faBox} />
            </button>
          </Link>
          <h3>All Orders</h3>
          <p>---------</p>
        </div>
        <div className="card">
          <Link to="/user/delivery/register" className="card-link">
            <button className="card-button info">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </Link>
          <h3>Register Delivery</h3>
          <p>---------</p>
        </div>
        <div className="card">
          <Link to="/user/admin/assigndelivery" className="card-link">
            <button className="card-button info">
              <FontAwesomeIcon icon={faUserPlus} />
            </button>
          </Link>
          <h3>Assign Order Delivery</h3>
          <p>---------</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;

