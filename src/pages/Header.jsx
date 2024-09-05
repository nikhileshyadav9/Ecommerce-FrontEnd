// import { Link } from "react-router-dom";
// import RoleNav from "./RoleNav";
// import logo from "../images/vlogowhitebg.png"

// const Header = () => {
//   return (
//     <div>
//       <nav class="navbar  navbar-expand-lg custom-bg text-color"style={{ height: '100px', padding: '0 20px', display: 'flex', alignItems: 'center' }} >
//         <div class="container-fluid text-color">
//           <img
//             src={logo}
//             width="55"
//             height="50"
//             class="d-inline-block align-top"
//             alt=""
//           />
//           <Link to="/" class="navbar-brand ms-2">
//             <i>
//               <b className="text-color">Online Shopping</b>
//             </i>
//           </Link>

//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//               <li class="nav-item">
//                 <Link to="/about" class="nav-link active" aria-current="page">
//                   <b className="text-color">About Us</b>
//                 </Link>
//               </li>

//               <li class="nav-item">
//                 <Link to="/contact" class="nav-link active" aria-current="page">
//                   <b className="text-color">Contact Us</b>
//                 </Link>
//               </li>
//             </ul> */}

//             <RoleNav />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;















// import { Link } from "react-router-dom";
// import RoleNav from "./RoleNav";
// import logo from "../images/vlogowhitebg.png";
// import "./Header.css"

// const Header = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg custom-bg text-color" style={{ height: '100px', padding: '0 20px' }}>
//         <div className="container-fluid d-flex justify-content-between align-items-center text-color">
//           <div className="d-flex align-items-center mx-auto">
//             <img
//               src={logo}
//               width="55"
//               height="50"
//               className="d-inline-block align-top"
//               alt="Logo"
//             />
//             <Link to="/" className="navbar-brand ms-2">
//               <i>
//                 <b className="text-color">Online Shopping</b>
//               </i>
//             </Link>
//           </div>
          
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
          
//           <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//             <RoleNav />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;










import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import logo from "../images/vlogowhitebg.png";
import "./Header.css"

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-bg text-color" style={{ height: '100px', padding: '0 20px' }}>
        <div className="container-fluid d-flex justify-content-center align-items-center text-color position-relative">
          <div className="d-flex align-items-center">
            <img
              src={logo}
              width="55"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <Link to="/" className="navbar-brandd ms-2">
              <i>
                <b className="text-colorrr">Vintage</b>
              </i>
            </Link>
          </div>

          <button
            className="navbar-toggler position-absolute end-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end position-absolute end-0" id="navbarSupportedContent">
            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
