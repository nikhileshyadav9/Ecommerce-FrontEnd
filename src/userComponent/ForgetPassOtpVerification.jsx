// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

// const ForgetPassOtpVerification = () => {
//   const location = useLocation();
//   const userResponse = location.state;

//   const navigate = useNavigate();

//   const [user, setUser] = useState(userResponse);
//   const [otp, setOtp] = useState("");

//   const otpVerify = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8000/api/user/verify/forget", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user: user,
//         otp: otp,
//       }),
//     })
//       .then((result) => {
//         result.json().then((res) => {
//           if (res.success) {
//             toast.success(res.responseMessage, {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });

//             setTimeout(() => {
//               navigate("/user/login");
//             }, 2000); // Redirect after 3 seconds
//           } else if (!res.success) {
//             toast.error(res.responseMessage, {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//             setTimeout(() => {
//               window.location.reload(true);
//             }, 2000); // Redirect after 3 seconds
//           } else {
//             toast.error("It Seems Server is down!!!", {
//               position: "top-center",
//               autoClose: 1000,
//               hideProgressBar: false,
//               closeOnClick: true,
//               pauseOnHover: true,
//               draggable: true,
//               progress: undefined,
//             });
//             setTimeout(() => {
//               window.location.reload(true);
//             }, 2000); // Redirect after 3 seconds
//           }
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error("It seems server is down", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         setTimeout(() => {
//           window.location.reload(true);
//         }, 1000); // Redirect after 3 seconds
//       });
//   };

//   return (
//     <div>
//       <div class="mt-2 d-flex aligns-items-center justify-content-center">
//         <div class="card form-card border-color" style={{ width: "25rem" }}>
//           <div className="card-header bg-color custom-bg-text">
//             <h5 class="card-title text-center">
//               Forget Password - OTP Verfication
//             </h5>
//           </div>
//           <div class="card-body text-color custom-bg">
//             <form onSubmit={otpVerify}>
//               <div class="mb-3">
//                 <label for="name" class="form-label">
//                   <b>OTP</b>
//                 </label>
//                 <input
//                   type="number"
//                   class="form-control"
//                   id="otp"
//                   name="otp"
//                   onChange={(e) => setOtp(e.target.value)}
//                   value={otp}
//                   required
//                 />
//               </div>

//               <input
//                 type="submit"
//                 class="btn custom-bg-text bg-color"
//                 value="Verify"
//               />

//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassOtpVerification;














import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./ForgetPassOtpVerification.css"; // Ensure to update your CSS if needed
import emailimg from '../images/Emaillogo.png'

const ForgetPassOtpVerification = () => {
  const location = useLocation();
  const userResponse = location.state;

  const navigate = useNavigate();

  const [user, setUser] = useState(userResponse);
  const [otp, setOtp] = useState({ digit1: "", digit2: "", digit3: "", digit4: "", digit5: "", digit6: "" });

  // Create references for each input field
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);
  const digit5Ref = useRef(null);
  const digit6Ref = useRef(null);

  const handleOtpChange = (e) => {
    const { name, value } = e.target;

    if (value.length <= 1) {
      setOtp({ ...otp, [name]: value });

      // Move focus to the next input field
      switch (name) {
        case "digit1":
          if (value) digit2Ref.current.focus();
          break;
        case "digit2":
          if (value) digit3Ref.current.focus();
          break;
        case "digit3":
          if (value) digit4Ref.current.focus();
          break;
        case "digit4":
          if (value) digit5Ref.current.focus();
          break;
        case "digit5":
          if (value) digit6Ref.current.focus();
          break;
        case "digit6":
          if (value) digit6Ref.current.blur(); // Optionally, blur the last input
          break;
        default:
          break;
      }
    }
  };

  const otpVerify = (e) => {
    e.preventDefault();
    const fullOtp = `${otp.digit1}${otp.digit2}${otp.digit3}${otp.digit4}${otp.digit5}${otp.digit6}`;

    fetch("http://localhost:8000/api/user/verify/forget", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        otp: fullOtp,
      }),
    })
      .then((result) => {
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
              navigate("/user/login");
            }, 2000); // Redirect after 2 seconds
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
            setTimeout(() => {
              window.location.reload(true);
            }, 2000); // Reload after 2 seconds
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
        setTimeout(() => {
          window.location.reload(true);
        }, 1000); // Reload after 1 second
      });
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <div className="otp-icon">
          <img src={emailimg} alt="OTP Icon" /> {/* Replace with your actual icon */}
        </div>
        <p className="otp-instruction">
          Please enter the OTP sent to your email
        </p>
        <form onSubmit={otpVerify} className="otp-form">
          <div className="otp-inputs">
            <input
              type="text"
              name="digit1"
              maxLength="1"
              className="otp-input"
              value={otp.digit1}
              onChange={handleOtpChange}
              ref={digit1Ref}
              required
            />
            <input
              type="text"
              name="digit2"
              maxLength="1"
              className="otp-input"
              value={otp.digit2}
              onChange={handleOtpChange}
              ref={digit2Ref}
              required
            />
            <input
              type="text"
              name="digit3"
              maxLength="1"
              className="otp-input"
              value={otp.digit3}
              onChange={handleOtpChange}
              ref={digit3Ref}
              required
            />
            <input
              type="text"
              name="digit4"
              maxLength="1"
              className="otp-input"
              value={otp.digit4}
              onChange={handleOtpChange}
              ref={digit4Ref}
              required
            />
            <input
              type="text"
              name="digit5"
              maxLength="1"
              className="otp-input"
              value={otp.digit5}
              onChange={handleOtpChange}
              ref={digit5Ref}
              required
            />
            <input
              type="text"
              name="digit6"
              maxLength="1"
              className="otp-input"
              value={otp.digit6}
              onChange={handleOtpChange}
              ref={digit6Ref}
              required
            />
          </div>
          <div className="otp-resend">
            Didn't get the code? <a href="#">Click to resend</a>
          </div>
          <div className="otp-buttons">
            <button type="button" className="otp-cancel-btn">Cancel</button>
            <button type="submit" className="otp-verify-btn">Verify</button>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default ForgetPassOtpVerification;
