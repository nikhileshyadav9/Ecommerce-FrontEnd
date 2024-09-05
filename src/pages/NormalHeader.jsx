// import { Link } from "react-router-dom";

// const NormalHeader = () => {
//   return (
//     <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
//       <li class="nav-item">
//         <Link
//           to="/user/forget-password"
//           class="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">Forget Password</b>
//         </Link>
//       </li>
//       <li class="nav-item">
//         <Link
//           to="/user/customer/register"
//           class="nav-link active"
//           aria-current="page"
//         >
//           <b className="text-color">Register</b>
//         </Link>
//       </li>

//       <li class="nav-item">
//         <Link to="/user/login" class="nav-link active" aria-current="page">
//           <b className="text-color">Login User</b>
//         </Link>
//       </li>
//     </ul>
//   );
// };

// export default NormalHeader;









// import { Link } from "react-router-dom";
// import { FaKey, FaUserPlus, FaSignInAlt } from "react-icons/fa"; // Import icons from react-icons

// const NormalHeader = () => {
//   return (
//     <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
//       <li className="nav-item">
//         <Link
//           to="/user/forget-password"
//           className="nav-link active"
//           aria-current="page"
//         >
//           <FaKey className="text-color" title="Forget Password" />
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/user/customer/register"
//           className="nav-link active"
//           aria-current="page"
//         >
//           <FaUserPlus className="text-color" title="Register" />
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/user/login"
//           className="nav-link active"
//           aria-current="page"
//         >
//           <FaSignInAlt className="text-color" title="Login User" />
//         </Link>
//       </li>
//     </ul>
//   );
// };

// export default NormalHeader;







import { Link } from "react-router-dom";
import { FaKey, FaUserPlus, FaSignInAlt, FaBars } from "react-icons/fa"; // Import icons from react-icons
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NormalHeader = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="link" id="dropdown-basic">
            <FaBars className="text-color" size={24} title="Menu" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/user/forget-password">
              <FaKey className="me-2 text-color" size={18} />
              Forget Password
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/user/customer/register">
              <FaUserPlus className="me-2 text-color" size={18} />
              Register
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/user/login">
              <FaSignInAlt className="me-2 text-color" size={18} />
              Login User
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </ul>
  );
};

export default NormalHeader;
