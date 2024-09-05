// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminHeader = () => {
//   let navigate = useNavigate();

//   const user = JSON.parse(sessionStorage.getItem("active-admin"));
//   console.log(user);

//   const adminLogout = () => {
//     toast.success("logged out!!!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     sessionStorage.removeItem("active-admin");
//     window.location.reload(true);
//   };

//   return (
//     <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
//       <li class="nav-item">
//         <Link
//           to="/user/delivery/register"
//           class="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">Register Delivery</b>
//         </Link>
//       </li>

//       <li class="nav-item">
//         <Link to="/addcategory" class="nav-link active" aria-current="page">
//           <b className="text-color"> Add Category</b>
//         </Link>
//       </li>

//       <li class="nav-item">
//         <Link to="/addproduct" class="nav-link active" aria-current="page">
//           <b className="text-color">Add Product</b>
//         </Link>
//       </li>

//       <li class="nav-item">
//         <Link
//           to="/user/admin/allorder"
//           class="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">All Orders</b>
//         </Link>
//       </li>

//       <li class="nav-item">
//         <Link
//           to="/user/admin/assigndelivery"
//           class="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">Assign Order Delivery</b>
//         </Link>
//       </li>

//       <li class="nav-item">
//         <Link
//           to=""
//           class="nav-link active"
//           aria-current="page"
//           onClick={adminLogout}
//         >
//           <b className="text-color">Logout</b>
//         </Link>
//         <ToastContainer />
//       </li>
//     </ul>
//   );
// };

// export default AdminHeader;










import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminHeader.css'; // Ensure you have CSS styles for `admin-header`

const AdminHeader = () => {
  const adminLogout = () => {
    toast.success("Logged out!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    window.location.reload(true); // Or use navigate('/login') if using react-router-dom
  };

//   return (
//     <div className="admin-header">
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
//         <li className="nav-item">
//           <Link to="/admin-dashboard" className="nav-link active">
//             <b className="text-color">Admin Dashboard</b>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="" className="nav-link active" onClick={adminLogout}>
//             <b className="text-color">Logout</b>
//           </Link>
//         </li>
//       </ul>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminHeader;


  return (
    <div className="admin-header">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
        <li className="nav-item">
          <Link to="/admin-dashboard" className="nav-link cartoon-button">
            <b className="text-color">Admin Dashboard</b>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="" className="nav-link cartoon-button" onClick={adminLogout}>
            <b className="text-color">Logout</b>
          </Link>
        </li>
      </ul>
      <ToastContainer />
    </div>
  );
};

export default AdminHeader;



