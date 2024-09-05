// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// const ForgetPassword = () => {
//   let navigate = useNavigate();

//   const [forgetRequest, setForgetRequest] = useState({
//     emailId: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleUserInput = (e) => {
//     setForgetRequest({ ...forgetRequest, [e.target.name]: e.target.value });
//   };

//   const changePassword = (e) => {
//     if (forgetRequest.confirmPassword !== forgetRequest.newPassword) {
//       toast.error("Password Not Matching", {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     } else {
//       fetch("http://localhost:8000/api/user/forget-password", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(forgetRequest),
//       })
//         .then((result) => {
//           console.log("result", result);
//           result.json().then((res) => {
//             if (res.success) {
//               toast.success(res.responseMessage, {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//               setTimeout(() => {
//                 navigate("/user/verify/forget", { state: res.users[0] });
//               }, 3000); // Redirect after 3 seconds
//             } else {
//               toast.error(res.responseMessage, {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//             }
//           });
//         })
//         .catch((error) => {
//           console.error(error);
//           toast.error("It seems server is down", {
//             position: "top-center",
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         });
//     }

//     e.preventDefault();
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center">
//         <div
//           className="card form-card border-color custom-bg"
//           style={{ width: "25rem" }}
//         >
//           <div className="card-header bg-color text-center custom-bg-text">
//             <h4 className="card-title">Forget Password</h4>
//           </div>
//           <div className="card-body">
//             <form>
//               <div className="mb-3 text-color">
//                 <label for="emailId" class="form-label">
//                   <b>Email Id</b>
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="emailId"
//                   name="emailId"
//                   onChange={handleUserInput}
//                   value={forgetRequest.emailId}
//                   required
//                 />
//               </div>

//               <div className="mb-3 text-color">
//                 <label for="password" className="form-label">
//                   <b>New Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="newPassword"
//                   name="newPassword"
//                   onChange={handleUserInput}
//                   value={forgetRequest.newPassword}
//                   required
//                 />
//               </div>
//               <div className="mb-3 text-color">
//                 <label for="password" className="form-label">
//                   <b>Confirm Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   onChange={handleUserInput}
//                   value={forgetRequest.confirmPassword}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="btn bg-color custom-bg-text"
//                 onClick={changePassword}
//               >
//                 Change Password
//               </button>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;










// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import "./ForgetPassword.css"

// const ForgetPassword = () => {
//   let navigate = useNavigate();

//   const [forgetRequest, setForgetRequest] = useState({
//     emailId: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleUserInput = (e) => {
//     setForgetRequest({ ...forgetRequest, [e.target.name]: e.target.value });
//   };

//   const changePassword = (e) => {
//     e.preventDefault(); // Prevent default form submission

//     if (forgetRequest.confirmPassword !== forgetRequest.newPassword) {
//       toast.error("Password Not Matching", {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     } else {
//       fetch("http://localhost:8000/api/user/forget-password", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(forgetRequest),
//       })
//         .then((result) => {
//           result.json().then((res) => {
//             if (res.success) {
//               toast.success(res.responseMessage, {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//               setTimeout(() => {
//                 navigate("/user/verify/forget", { state: res.users[0] });
//               }, 3000); // Redirect after 3 seconds
//             } else {
//               toast.error(res.responseMessage, {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//             }
//           });
//         })
//         .catch((error) => {
//           console.error(error);
//           toast.error("It seems server is down", {
//             position: "top-center",
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         });
//     }
//   };

//   return (
//     <div>
//       <div className="mt-2 d-flex align-items-center justify-content-center">
//         <div
//           className="forgetcard forgetborder-color forgetcustom-bg"
//           style={{ width: "25rem" }}
//         >
//           <div className="forgetcard-header forgetbg-color text-center forgetcustom-bg-text">
//             <h4 className="card-title">Forget Password</h4>
//           </div>
//           <div className="forgetcard-body">
//             <form onSubmit={changePassword}>
//               <div className="mb-3 text-color">
//                 <label htmlFor="emailId" className="form-label">
//                   <b>Email Id</b>
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="emailId"
//                   name="emailId"
//                   onChange={handleUserInput}
//                   value={forgetRequest.emailId}
//                   required
//                 />
//               </div>

//               <div className="mb-3 text-color">
//                 <label htmlFor="newPassword" className="form-label">
//                   <b>New Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="newPassword"
//                   name="newPassword"
//                   onChange={handleUserInput}
//                   value={forgetRequest.newPassword}
//                   required
//                 />
//               </div>
//               <div className="mb-3 text-color">
//                 <label htmlFor="confirmPassword" className="form-label">
//                   <b>Confirm Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   onChange={handleUserInput}
//                   value={forgetRequest.confirmPassword}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="btn forgetbg-color forgetcustom-bg-text"
//               >
//                 Change Password
//               </button>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;









// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import './ForgetPassword.css'

// const ForgetPassword = () => {
//   let navigate = useNavigate();

//   const [forgetRequest, setForgetRequest] = useState({
//     emailId: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleUserInput = (e) => {
//     setForgetRequest({ ...forgetRequest, [e.target.name]: e.target.value });
//   };

//   const changePassword = (e) => {
//     if (forgetRequest.confirmPassword !== forgetRequest.newPassword) {
//       toast.error("Password Not Matching", {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     } else {
//       fetch("http://localhost:8000/api/user/forget-password", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(forgetRequest),
//       })
//         .then((result) => {
//           console.log("result", result);
//           result.json().then((res) => {
//             if (res.success) {
//               toast.success(res.responseMessage, {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//               setTimeout(() => {
//                 navigate("/user/verify/forget", { state: res.users[0] });
//               }, 3000); // Redirect after 3 seconds
//             } else {
//               toast.error(res.responseMessage, {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//             }
//           });
//         })
//         .catch((error) => {
//           console.error(error);
//           toast.error("It seems server is down", {
//             position: "top-center",
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         });
//     }

//     e.preventDefault();
//   };

//   const closeCard = () => {
//     // You can add a function here to handle card close logic
//     console.log("Close button clicked");
//   };

//   return (
//     <div className="container">
//       <div className="forgetcard">
//         <button className="close-btn" onClick={closeCard}>
//           &times;
//         </button>
//         <div className="forgetcard-header">
//           <h4 className="forgetcard-title">Forget Password</h4>
//         </div>
//         <div className="forgetcard-body">
//           <form>
//             <div className="mb-3">
//               <label htmlFor="emailId" className="form-label">
//                 <b>Email Id</b>
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="emailId"
//                 name="emailId"
//                 onChange={handleUserInput}
//                 value={forgetRequest.emailId}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="newPassword" className="form-label">
//                 <b>New Password</b>
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="newPassword"
//                 name="newPassword"
//                 onChange={handleUserInput}
//                 value={forgetRequest.newPassword}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="confirmPassword" className="form-label">
//                 <b>Confirm Password</b>
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 onChange={handleUserInput}
//                 value={forgetRequest.confirmPassword}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn"
//               onClick={changePassword}
//             >
//               Change Password
//             </button>
//             <ToastContainer />
//           </form>
//         </div>
//       </div>
//       <div>
//         <img
//           src="https://static.zara.net/assets/public/154e/beda/520b4ca4a1dc/86e93aebfce2/image-landscape-default-fill-eb623293-8c5e-4169-87a0-edc034a514cc-default_0/image-landscape-default-fill-eb623293-8c5e-4169-87a0-edc034a514cc-default_0.jpg?ts=1724259190027&w=1920" // Replace with your image URL
//           alt="Beautiful Content"
//           className="forgetcard-image"
//         />
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;






// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
// import "./ForgetPassword.css"

// const ForgetPassword = () => {
//   let navigate = useNavigate();

//   const [forgetRequest, setForgetRequest] = useState({
//     emailId: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleUserInput = (e) => {
//     setForgetRequest({ ...forgetRequest, [e.target.name]: e.target.value });
//   };

//   const changePassword = (e) => {
//     if (forgetRequest.confirmPassword !== forgetRequest.newPassword) {
//       toast.error("Password Not Matching", {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     } else {
//       fetch("http://localhost:8000/api/user/forget-password", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(forgetRequest),
//       })
//         .then((result) => {
//           console.log("result", result);
//           result.json().then((res) => {
//             if (res.success) {
//               toast.success(res.responseMessage, {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//               setTimeout(() => {
//                 navigate("/user/verify/forget", { state: res.users[0] });
//               }, 3000); // Redirect after 3 seconds
//             } else {
//               toast.error(res.responseMessage, {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//             }
//           });
//         })
//         .catch((error) => {
//           console.error(error);
//           toast.error("It seems server is down", {
//             position: "top-center",
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         });
//     }

//     e.preventDefault();
//   };

//   const closeCard = () => {
//     // You can add a function here to handle card close logic
//     console.log("Close button clicked");
//   };

//   return (
//     <div className="container">
//       <div className="forgetcard">
//         <button className="close-btn" onClick={closeCard}>
//           &times;
//         </button>
//         <div className="forgetcard-header">
//           <h4 className="forgetcard-title">Forget Password</h4>
//         </div>
//         <div className="forgetcard-body">
//           <form>
//             <div className="mb-3">
//               <label htmlFor="emailId" className="form-label">
//                 <b>Email Id</b>
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="emailId"
//                 name="emailId"
//                 onChange={handleUserInput}
//                 value={forgetRequest.emailId}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="newPassword" className="form-label">
//                 <b>New Password</b>
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="newPassword"
//                 name="newPassword"
//                 onChange={handleUserInput}
//                 value={forgetRequest.newPassword}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="confirmPassword" className="form-label">
//                 <b>Confirm Password</b>
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 onChange={handleUserInput}
//                 value={forgetRequest.confirmPassword}
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="btn"
//               onClick={changePassword}
//             >
//               Change Password
//             </button>
//             <ToastContainer />
//           </form>
//         </div>
//       </div>
//       <div>
//         <img
//           src="https://via.placeholder.com/500x700" // Replace with your image URL
//           alt="Beautiful Content"
//           className="forgetcard-image"
//         />
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;







import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Forgetimage from "../images/forgetpassword.jpg"
import "./ForgetPassword.css"

const ForgetPassword = () => {
  let navigate = useNavigate();

  const [forgetRequest, setForgetRequest] = useState({
    emailId: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleUserInput = (e) => {
    setForgetRequest({ ...forgetRequest, [e.target.name]: e.target.value });
  };

  const changePassword = (e) => {
    if (forgetRequest.confirmPassword !== forgetRequest.newPassword) {
      toast.error("Password Not Matching", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      fetch("http://localhost:8000/api/user/forget-password", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(forgetRequest),
      })
        .then((result) => {
          console.log("result", result);
          result.json().then((res) => {
            if (res.success) {
              toast.success(res.responseMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTimeout(() => {
                navigate("/user/verify/forget", { state: res.users[0] });
              }, 3000); // Redirect after 3 seconds
            } else {
              toast.error(res.responseMessage, {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          });
        })
        .catch((error) => {
          console.error(error);
          toast.error("It seems server is down", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }

    e.preventDefault();
  };

  const closeCard = () => {
    // You can add a function here to handle card close logic
    console.log("Close button clicked");
  };

  return (
    <div className="container">
      <div className="forgetcard-wrapper">
        <div className="forgetcard">
          <button className="close-btn" onClick={closeCard}>
            &times;
          </button>
          <div className="forgetcard-header">
            <h4 className="forgetcard-title">Forget Password</h4>
          </div>
          <div className="forgetcard-body">
            <form>
              <div className="mb-3">
                <label htmlFor="emailId" className="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={forgetRequest.emailId}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  <b>New Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  name="newPassword"
                  onChange={handleUserInput}
                  value={forgetRequest.newPassword}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  <b>Confirm Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleUserInput}
                  value={forgetRequest.confirmPassword}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn changebtn"
                onClick={changePassword}
              >
                Change Password
              </button>
              <div className="para">
              <p>Welcome back!!! Did you Forget Your Password ? No worries .....</p>
              <p>Now you Can customize your own password</p>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
        <div>
          <img
            src={Forgetimage} // Replace with your image URL
            alt="Beautiful Content"
            className="forgetcard-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
