// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const MyCart = () => {
//   let navigate = useNavigate();
//   const user = JSON.parse(sessionStorage.getItem("active-user"));
//   const [totatPrice, setTotalPrice] = useState("");
//   const [myCartData, setMyCartData] = useState([]);

//   useEffect(() => {
//     const getMyCart = async () => {
//       const myCart = await retrieveMyCart();
//       if (myCart) {
//         setTotalPrice(myCart.totalCartPrice);
//         setMyCartData(myCart.cartData);
//       }
//     };

//     getMyCart();
//   }, []);

//   const retrieveMyCart = async () => {
//     const response = await axios.get(
//       "http://localhost:8000/api/user/mycart?userId=" + user.id
//     );
//     console.log(response.data);
//     return response.data;
//   };

//   const deleteProductFromCart = (cartId, e) => {
//     fetch("http://localhost:8000/api/user/mycart/remove?cartId=" + cartId, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         //    Authorization: "Bearer " + restaurant_jwtToken,
//       },
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
//               window.location.reload(true);
//             }, 1000); // Redirect after 3 seconds
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
//             }, 1000); // Redirect after 3 seconds
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

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup: remove the script from the DOM when the component is unmounted
//       document.body.removeChild(script);
//     };
//   }, []);

//   const checkout = (e) => {
//     fetch("http://localhost:8000/api/user/order/create?userId=" + user.id, {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((result) => {
//         result.json().then((res) => {
//           if (res.success) {
//             console.log("Success Response");
//             var options = res.razorPayRequest;
//             console.log(options);

//             // Add the handler function to the responseData object
//             options.handler = function (response) {
//               console.log(response.razorpay_payment_id);
//               console.log(response.razorpay_order_id);
//               console.log(response.razorpay_signature);
//               response.razorpay_order_id = options.orderId;

//               fetch("http://localhost:8000/api/user/razorpPay/response", {
//                 method: "PUT",
//                 headers: {
//                   Accept: "application/json",
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(response),
//               })
//                 .then((result) => {
//                   result.json().then((res) => {
//                     if (res.success) {
//                       toast.success(res.responseMessage, {
//                         position: "top-center",
//                         autoClose: 1000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                       });

//                       setTimeout(() => {
//                         navigate("/user/myorder");
//                       }, 1000);
//                     } else if (!res.success) {
//                       toast.error(res.responseMessage, {
//                         position: "top-center",
//                         autoClose: 1000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                       });

//                       setTimeout(() => {
//                         window.location.reload(true);
//                       }, 1000); // Redirect after 3 seconds
//                     } else {
//                       toast.error("It seems server is down", {
//                         position: "top-center",
//                         autoClose: 1000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                       });

//                       setTimeout(() => {
//                         window.location.reload(true);
//                       }, 1000); // Redirect after 3 seconds
//                     }
//                   });
//                 })
//                 .catch((error) => {
//                   console.error(error);
//                   toast.error("It seems server is down", {
//                     position: "top-center",
//                     autoClose: 1000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                   });
//                   setTimeout(() => {
//                     window.location.reload(true);
//                   }, 1000); // Redirect after 3 seconds
//                 });
//             };
//             console.log("final json after adding handler function");
//             console.log(options);

//             // Check if Razorpay is available in the window object
//             if (window.Razorpay) {
//               console.log("Rzaorpay is defined");
//               const rzp1 = new window.Razorpay(options);
//               rzp1.on("payment.failed", function (response) {
//                 console.log(response.error.code);
//                 console.log(response.error.description);
//                 console.log(response.error.source);
//                 console.log(response.error.step);
//                 console.log(response.error.reason);
//                 console.log(response.error.metadata.order_id);
//                 console.log(response.error.metadata.payment_id);

//                 response.razorpay_order_id = options.orderId;

//                 fetch("http://localhost:8000/api/user/razorpPay/response", {
//                   method: "PUT",
//                   headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify(response),
//                 })
//                   .then((result) => {
//                     result.json().then((res) => {
//                       if (res.success) {
//                         toast.success(res.responseMessage, {
//                           position: "top-center",
//                           autoClose: 1000,
//                           hideProgressBar: false,
//                           closeOnClick: true,
//                           pauseOnHover: true,
//                           draggable: true,
//                           progress: undefined,
//                         });

//                         setTimeout(() => {
//                           window.location.reload(true);
//                         }, 1000);
//                       } else if (!res.success) {
//                         toast.error(res.responseMessage, {
//                           position: "top-center",
//                           autoClose: 1000,
//                           hideProgressBar: false,
//                           closeOnClick: true,
//                           pauseOnHover: true,
//                           draggable: true,
//                           progress: undefined,
//                         });

//                         setTimeout(() => {
//                           window.location.reload(true);
//                         }, 1000); // Redirect after 3 seconds
//                       } else {
//                         toast.error("It seems server is down", {
//                           position: "top-center",
//                           autoClose: 1000,
//                           hideProgressBar: false,
//                           closeOnClick: true,
//                           pauseOnHover: true,
//                           draggable: true,
//                           progress: undefined,
//                         });

//                         setTimeout(() => {
//                           window.location.reload(true);
//                         }, 1000); // Redirect after 3 seconds
//                       }
//                     });
//                   })
//                   .catch((error) => {
//                     console.error(error);
//                     toast.error("It seems server is down", {
//                       position: "top-center",
//                       autoClose: 1000,
//                       hideProgressBar: false,
//                       closeOnClick: true,
//                       pauseOnHover: true,
//                       draggable: true,
//                       progress: undefined,
//                     });
//                     setTimeout(() => {
//                       window.location.reload(true);
//                     }, 1000); // Redirect after 3 seconds
//                   });
//               });
//               rzp1.open();
//             } else {
//               toast.error("Payment Gateway Internal Server Issue", {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//               setTimeout(() => {
//                 window.location.reload(true);
//               }, 1000); // Redirect after 3 seconds
//             }
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
//             }, 1000); // Redirect after 3 seconds
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
//     e.preventDefault();
//   };

//   return (
//     <div className="mt-3">
//       <div
//         className="card form-card ms-2 me-2 mb-5 custom-bg border-color"
//         style={{
//           height: "45rem",
//         }}
//       >
//         <div className="card-header text-center bg-color custom-bg-text">
//           <h2>My Cart</h2>
//         </div>
//         <div
//           className="card-body"
//           style={{
//             overflowY: "auto",
//           }}
//         >
//           <div className="table-responsive">
//             <table className="table table-hover custom-bg-text text-center">
//               <thead className="bg-color table-bordered border-color">
//                 <tr>
//                   <th scope="col">Product</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Description</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Action</th>
//                 </tr>
//               </thead>
//               <tbody className="text-color">
//                 {myCartData.map((cartData) => {
//                   return (
//                     <tr>
//                       <td>
//                         <img
//                           src={
//                             "http://localhost:8000/api/product/" +
//                             cartData.productImage
//                           }
//                           class="img-fluid"
//                           alt="product_pic"
//                           style={{
//                             maxWidth: "90px",
//                           }}
//                         />
//                       </td>
//                       <td>
//                         <b>{cartData.productName}</b>
//                       </td>
//                       <td>
//                         <b>{cartData.productDescription}</b>
//                       </td>
//                       <td>
//                         <b>{cartData.quantity}</b>
//                       </td>
//                       <td>
//                         <button
//                           className="btn bg-color custom-bg-text btn-sm"
//                           onClick={() => deleteProductFromCart(cartData.cartId)}
//                         >
//                           Delete
//                         </button>
//                         <ToastContainer />
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="card-footer custom-bg">
//           <div className="float-right">
//             {(() => {
//               if (myCartData.length > 0) {
//                 return (
//                   <div>
//                     <div
//                       className="text-color me-2"
//                       style={{
//                         textAlign: "right",
//                       }}
//                     >
//                       <h5>Total Price: &#8377; {totatPrice}/-</h5>
//                     </div>

//                     <div className="float-end me-2">
//                       <button
//                         type="submit"
//                         className="btn bg-color custom-bg-text mb-3"
//                         onClick={checkout}
//                       >
//                         Checkout
//                       </button>
//                     </div>
//                   </div>
//                 );
//               }
//             })()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyCart;












// import { useState, useEffect } from "react";
// import axios from "axios";
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "./MyCart.css"

// const MyCart = () => {
//   let navigate = useNavigate();
//   const user = JSON.parse(sessionStorage.getItem("active-user"));
//   const [totalPrice, setTotalPrice] = useState("");
//   const [myCartData, setMyCartData] = useState([]);

//   useEffect(() => {
//     const getMyCart = async () => {
//       const myCart = await retrieveMyCart();
//       if (myCart) {
//         setTotalPrice(myCart.totalCartPrice);
//         setMyCartData(myCart.cartData);
//       }
//     };

//     getMyCart();
//   }, []);

//   const retrieveMyCart = async () => {
//     const response = await axios.get(
//       "http://localhost:8000/api/user/mycart?userId=" + user.id
//     );
//     console.log(response.data);
//     return response.data;
//   };

//   const deleteProductFromCart = (cartId, e) => {
//     fetch("http://localhost:8000/api/user/mycart/remove?cartId=" + cartId, {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
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
//               window.location.reload(true);
//             }, 1000); // Redirect after 3 seconds
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
//             }, 1000); // Redirect after 3 seconds
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

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     document.body.appendChild(script);

//     return () => {
//       // Cleanup: remove the script from the DOM when the component is unmounted
//       document.body.removeChild(script);
//     };
//   }, []);

//   const checkout = (e) => {
//     fetch("http://localhost:8000/api/user/order/create?userId=" + user.id, {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((result) => {
//         result.json().then((res) => {
//           if (res.success) {
//             var options = res.razorPayRequest;
//             options.handler = function (response) {
//               response.razorpay_order_id = options.orderId;

//               fetch("http://localhost:8000/api/user/razorpPay/response", {
//                 method: "PUT",
//                 headers: {
//                   Accept: "application/json",
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(response),
//               })
//                 .then((result) => {
//                   result.json().then((res) => {
//                     if (res.success) {
//                       toast.success(res.responseMessage, {
//                         position: "top-center",
//                         autoClose: 1000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                       });

//                       setTimeout(() => {
//                         navigate("/user/myorder");
//                       }, 1000);
//                     } else if (!res.success) {
//                       toast.error(res.responseMessage, {
//                         position: "top-center",
//                         autoClose: 1000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                       });

//                       setTimeout(() => {
//                         window.location.reload(true);
//                       }, 1000); // Redirect after 3 seconds
//                     }
//                   });
//                 })
//                 .catch((error) => {
//                   console.error(error);
//                   toast.error("It seems server is down", {
//                     position: "top-center",
//                     autoClose: 1000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                   });
//                   setTimeout(() => {
//                     window.location.reload(true);
//                   }, 1000); // Redirect after 3 seconds
//                 });
//             };

//             if (window.Razorpay) {
//               const rzp1 = new window.Razorpay(options);
//               rzp1.on("payment.failed", function (response) {
//                 response.razorpay_order_id = options.orderId;

//                 fetch("http://localhost:8000/api/user/razorpPay/response", {
//                   method: "PUT",
//                   headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify(response),
//                 })
//                   .then((result) => {
//                     result.json().then((res) => {
//                       if (res.success) {
//                         toast.success(res.responseMessage, {
//                           position: "top-center",
//                           autoClose: 1000,
//                           hideProgressBar: false,
//                           closeOnClick: true,
//                           pauseOnHover: true,
//                           draggable: true,
//                           progress: undefined,
//                         });

//                         setTimeout(() => {
//                           window.location.reload(true);
//                         }, 1000);
//                       } else {
//                         toast.error(res.responseMessage, {
//                           position: "top-center",
//                           autoClose: 1000,
//                           hideProgressBar: false,
//                           closeOnClick: true,
//                           pauseOnHover: true,
//                           draggable: true,
//                           progress: undefined,
//                         });

//                         setTimeout(() => {
//                           window.location.reload(true);
//                         }, 1000); // Redirect after 3 seconds
//                       }
//                     });
//                   })
//                   .catch((error) => {
//                     console.error(error);
//                     toast.error("It seems server is down", {
//                       position: "top-center",
//                       autoClose: 1000,
//                       hideProgressBar: false,
//                       closeOnClick: true,
//                       pauseOnHover: true,
//                       draggable: true,
//                       progress: undefined,
//                     });
//                     setTimeout(() => {
//                       window.location.reload(true);
//                     }, 1000); // Redirect after 3 seconds
//                   });
//               });
//               rzp1.open();
//             } else {
//               toast.error("Payment Gateway Internal Server Issue", {
//                 position: "top-center",
//                 autoClose: 1000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//               });
//               setTimeout(() => {
//                 window.location.reload(true);
//               }, 1000); // Redirect after 3 seconds
//             }
//           } else {
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
//             }, 1000); // Redirect after 3 seconds
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
//     e.preventDefault();
//   };

//   return (
//     <div className="mymt-3">
//       <div
//         className="mycard myform-card myms-2 myme-2 mymb-5 mycustom-bg myborder-color"
//         style={{
//           height: "45rem",
//         }}
//       >
//         <div className="mycard-header text-center mybg-color mycustom-bg-text">
//           <h2>My Cart</h2>
//         </div>
//         <div
//           className="mycard-body"
//           style={{
//             overflowY: "auto",
//           }}
//         >
//           <div className="mytable-responsive">
//             <table className="mytable mytable-hover mycustom-bg-text text-center">
//               <thead className="mybg-color mytable-bordered myborder-color">
//                 <tr>
//                   <th scope="col">Product</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Price</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Total</th>
//                   <th scope="col">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {myCartData.length > 0 ? (
//                   myCartData.map((item, index) => (
//                     <tr key={index}>
//                       <td>
//                         <img
//                           src={item.productImage}
//                           alt={item.productName}
//                           className="myimg-thumbnail"
//                           style={{ width: "100px", height: "100px" }}
//                         />
//                       </td>
//                       <td>{item.productName}</td>
//                       <td>{item.productPrice}</td>
//                       <td>{item.productQuantity}</td>
//                       <td>{item.productPrice * item.productQuantity}</td>
//                       <td>
//                         <button
//                           className="mybtn mybtn-danger"
//                           onClick={(e) => deleteProductFromCart(item.cartId, e)}
//                         >
//                           Remove
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6">Your cart is empty</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className="mycard-footer text-center">
//           <h4>Total Price: ₹{totalPrice}</h4>
//           {myCartData.length > 0 && (
//             <button
//               className="mybtn mybtn-success mymt-3"
//               onClick={checkout}
//             >
//               Checkout
//             </button>
//           )}
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default MyCart;









import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "./MyCart.css";

const MyCart = () => {
  let navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("active-user"));
  const [totalPrice, setTotalPrice] = useState(0);
  const [myCartData, setMyCartData] = useState([]);

  useEffect(() => {
    const getMyCart = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user/mycart?userId=${user.id}`);
        setTotalPrice(response.data.totalCartPrice);
        setMyCartData(response.data.cartData);
      } catch (error) {
        toast.error("Failed to fetch cart data", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    };

    getMyCart();
  }, [user.id]);

  const deleteProductFromCart = async (cartId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/user/mycart/remove?cartId=${cartId}`);
      if (response.data.success) {
        toast.success(response.data.responseMessage, {
          position: "top-center",
          autoClose: 1000,
        });
        setMyCartData(myCartData.filter(item => item.cartId !== cartId));
        setTotalPrice(totalPrice - (myCartData.find(item => item.cartId === cartId).productPrice * myCartData.find(item => item.cartId === cartId).productQuantity));
      } else {
        toast.error(response.data.responseMessage, {
          position: "top-center",
          autoClose: 1000,
        });
      }
    } catch (error) {
      toast.error("Failed to remove product from cart", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const checkout = async () => {
    try {
      const response = await axios.put(`http://localhost:8000/api/user/order/create?userId=${user.id}`);
      if (response.data.success) {
        const options = response.data.razorPayRequest;
        options.handler = function (response) {
          response.razorpay_order_id = options.orderId;
          axios.put("http://localhost:8000/api/user/razorpPay/response", response)
            .then((res) => {
              if (res.data.success) {
                toast.success(res.data.responseMessage, {
                  position: "top-center",
                  autoClose: 1000,
                });
                navigate("/user/myorder");
              } else {
                toast.error(res.data.responseMessage, {
                  position: "top-center",
                  autoClose: 1000,
                });
              }
            });
        };

        if (window.Razorpay) {
          const rzp1 = new window.Razorpay(options);
          rzp1.on("payment.failed", function (response) {
            response.razorpay_order_id = options.orderId;
            axios.put("http://localhost:8000/api/user/razorpPay/response", response)
              .then((res) => {
                if (res.data.success) {
                  toast.success(res.data.responseMessage, {
                    position: "top-center",
                    autoClose: 1000,
                  });
                } else {
                  toast.error(res.data.responseMessage, {
                    position: "top-center",
                    autoClose: 1000,
                  });
                }
              });
          });
          rzp1.open();
        } else {
          toast.error("Payment Gateway Internal Server Issue", {
            position: "top-center",
            autoClose: 1000,
          });
        }
      } else {
        toast.error(response.data.responseMessage, {
          position: "top-center",
          autoClose: 1000,
        });
      }
    } catch (error) {
      toast.error("Failed to initiate checkout", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="mycart-container">
      <div className="mycart-card">
        <div className="mycart-header">
          <h2>Basket Bage</h2>
        </div>
        <div className="mycart-body">
          <table className="mycart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myCartData.length > 0 ? (
                myCartData.map((item) => (
                  <tr key={item.cartId}>
                    <td>
                      <img src={item.productImage} alt={item.productName} className="mycart-img" />
                    </td>
                    <td>{item.productName}</td>
                    <td>{item.productPrice}</td>
                    <td>{item.productQuantity}</td>
                    <td>{item.productPrice * item.productQuantity}</td>
                    <td>
                      <button className="mycart-btn" onClick={() => deleteProductFromCart(item.cartId)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Your cart is empty</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="mycart-footer">
          <h4>Total Price: ₹{totalPrice}</h4>
          {myCartData.length > 0 && (
            <button className="mycart-checkout-btn" onClick={checkout}>
              Checkout
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyCart;
