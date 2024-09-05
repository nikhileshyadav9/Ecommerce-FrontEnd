// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const HeaderUser = () => {
//   let navigate = useNavigate();

//   const userLogout = () => {
//     toast.success("logged out!!!", {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//     sessionStorage.removeItem("active-user");
//     window.location.reload(true);
//   };

//   return (
//     <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
//       <li class="nav-item">
//         <Link to="/user/mycart" class="nav-link active" aria-current="page">
//           <b className="text-color">BasketBag</b>
//         </Link>
//       </li>

//       <li class="nav-item">
//         <Link to="/user/myorder" class="nav-link active" aria-current="page">
//           <b className="text-color">My Order</b>
//         </Link>
//       </li>

//       <li class="nav-item">
//         <Link
//           to=""
//           class="nav-link active"
//           aria-current="page"
//           onClick={userLogout}
//         >
//           <b className="text-color">Logout</b>
//         </Link>
//         <ToastContainer />
//       </li>
//     </ul>
//   );
// };

// export default HeaderUser;






import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart, FaBox, FaSignOutAlt } from 'react-icons/fa';
import "./HeaderUser.css"

const HeaderUser = () => {
    let navigate = useNavigate();
  
    const userLogout = () => {
      toast.success("logged out!!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      sessionStorage.removeItem("active-user");
      window.location.reload(true);
    };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link to="/user/mycart" className="nav-link active" aria-current="page">
          <FaShoppingCart className="nav-icon" />
          <span className="text-color">BasketBag</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/myorder" className="nav-link active" aria-current="page">
          <FaBox className="nav-icon" />
          <span className="text-color">My Order</span>
        </Link>
      </li>

      <li className="nav-item">
        <a
          href="#"
          className="nav-link active"
          aria-current="page"
          onClick={userLogout}
        >
          <FaSignOutAlt className="nav-icon" />
          <span className="text-color">Logout</span>
        </a>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default HeaderUser;

