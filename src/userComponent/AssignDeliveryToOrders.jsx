// import { useState, useEffect } from "react";
// import axios from "axios";
// import "react-datepicker/dist/react-datepicker.css";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const AssignDeliveryToOrders = () => {
//   let navigate = useNavigate();
//   const [orderId, setOrderId] = useState("");
//   const [allOrderData, setAllOrderData] = useState([]);
//   const [deliveryPersons, setDeliveryPersons] = useState([]);

//   const [assignDelivery, setAssignDelivery] = useState({
//     orderId: "",
//     deliveryId: "",
//   });

//   const handleInput = (e) => {
//     setAssignDelivery({ ...assignDelivery, [e.target.name]: e.target.value });
//   };

//   const retrieveAllDeliveryPerson = async () => {
//     const response = await axios.get(
//       "http://localhost:8000/api/user/deliveryperson/all"
//     );
//     return response.data;
//   };

//   useEffect(() => {
//     const getAllDeliveryPerson = async () => {
//       const allDeliveryStatus = await retrieveAllDeliveryPerson();
//       if (allDeliveryStatus) {
//         setDeliveryPersons(allDeliveryStatus.users);
//       }
//     };

//     getAllDeliveryPerson();
//   }, []);

//   const getAllOrder = async () => {
//     const allOrder = await retrieveAllOrder();
//     if (allOrder) {
//       setAllOrderData(allOrder.orders);
//     }
//   };

//   const retrieveAllOrder = async () => {
//     const response = await axios.get(
//       "http://localhost:8000/api/user/admin/showorder?orderId=" + orderId
//     );
//     console.log(response.data);
//     return response.data;
//   };

//   const searchOrderById = (e) => {
//     getAllOrder();
//     setOrderId("");
//     e.preventDefault();
//   };

//   const assignDeliveryToOrders = (e) => {
//     fetch("http://localhost:8000/api/user/admin/order/assignDelivery", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(assignDelivery),
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

//             setAllOrderData(res.orders);
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
//     e.preventDefault();
//   };

//   return (
//     <div>
//       <div
//         className="card form-card mt-1 ms-2 me-2 mb-2 custom-bg border-color"
//         style={{
//           height: "35rem",
//         }}
//       >
//         <div className="card-header text-center bg-color custom-bg-text">
//           <h4>Searh Customer Orders</h4>
//         </div>
//         <div
//           className="card-body"
//           style={{
//             overflowY: "auto",
//           }}
//         >
//           <form class="row g-3">
//             <div class="col-auto">
//               <input
//                 type="text"
//                 class="form-control"
//                 id="inputPassword2"
//                 placeholder="Enter Order Id..."
//                 onChange={(e) => setOrderId(e.target.value)}
//                 value={orderId}
//               />
//             </div>
//             <div class="col-auto">
//               <button
//                 type="submit"
//                 class="btn bg-color custom-bg-text mb-3"
//                 onClick={searchOrderById}
//               >
//                 Search
//               </button>
//             </div>
//           </form>
//           <div className="table-responsive">
//             <table className="table table-hover text-center">
//               <thead className="table-bordered border-color bg-color custom-bg-text">
//                 <tr>
//                   <th scope="col">Order Id</th>
//                   <th scope="col">Product</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Description</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Total Price</th>
//                   <th scope="col">Customer Name</th>
//                   <th scope="col">Street</th>
//                   <th scope="col">City</th>
//                   <th scope="col">Pin code</th>
//                   <th scope="col">Mobile No.</th>
//                   <th scope="col">Order Date</th>
//                   <th scope="col">Delivery Date</th>
//                   <th scope="col">Delivery Status</th>
//                   <th scope="col">Delivery Person</th>
//                   <th scope="col">Delivery Mobile No</th>
//                 </tr>
//               </thead>
//               <tbody class="text-color">
//                 {allOrderData.map((orderData) => {
//                   return (
//                     <tr>
//                       <td>
//                         <b>{orderData.orderId}</b>
//                       </td>
//                       <td>
//                         <img
//                           src={
//                             "http://localhost:8000/api/product/" +
//                             orderData.productImage
//                           }
//                           class="img-fluid"
//                           alt="product_pic"
//                           style={{
//                             maxWidth: "90px",
//                           }}
//                         />
//                       </td>
//                       <td>
//                         <b>{orderData.productName}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.productDescription}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.quantity}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.totalPrice}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.userName}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.address.street}</b>
//                       </td>

//                       <td>
//                         <b>{orderData.address.city}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.address.pincode}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.userPhone}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.orderDate}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.deliveryDate}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.deliveryStatus}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.deliveryPersonName}</b>
//                       </td>
//                       <td>
//                         <b>{orderData.deliveryPersonContact}</b>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       <div>
//         <div className="card form-card ms-2 me-2 mb-2 border-color custom-bg">
//           <div className="card-header text-center bg-color custom-bg-text">
//             <h4>Assign Delivery To Orders</h4>
//           </div>
//           <div className="card-body text-color">
//             <form class="row g-3">
//               <div class="col-auto">
//                 <label>
//                   <b>Order Id</b>
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control"
//                   id="inputPassword2"
//                   placeholder="Enter Order Id..."
//                   name="orderId"
//                   onChange={handleInput}
//                   value={assignDelivery.orderId}
//                 />
//               </div>

//               <div className="col-auto">
//                 <label>
//                   <b>Delivery Person</b>
//                 </label>
//                 <select
//                   onChange={handleInput}
//                   className="form-control"
//                   name="deliveryId"
//                 >
//                   <option value="">Select Delivery Person</option>

//                   {deliveryPersons.map((person) => {
//                     return (
//                       <option value={person.id}> {person.firstName} </option>
//                     );
//                   })}
//                 </select>
//               </div>

//               <div class="col-auto">
//                 <button
//                   type="submit"
//                   class="btn bg-color custom-bg-text mt-4"
//                   onClick={assignDeliveryToOrders}
//                 >
//                   Assign Delivery Person
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssignDeliveryToOrders;














import { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./AssignDeliveryToOrders.css"

const AssignDeliveryToOrders = () => {
  let navigate = useNavigate();
  const [orderId, setOrderId] = useState("");
  const [allOrderData, setAllOrderData] = useState([]);
  const [deliveryPersons, setDeliveryPersons] = useState([]);

  const [assignDelivery, setAssignDelivery] = useState({
    orderId: "",
    deliveryId: "",
  });

  const handleInput = (e) => {
    setAssignDelivery({ ...assignDelivery, [e.target.name]: e.target.value });
  };

  const retrieveAllDeliveryPerson = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/user/deliveryperson/all"
    );
    return response.data;
  };

  useEffect(() => {
    const getAllDeliveryPerson = async () => {
      const allDeliveryStatus = await retrieveAllDeliveryPerson();
      if (allDeliveryStatus) {
        setDeliveryPersons(allDeliveryStatus.users);
      }
    };

    getAllDeliveryPerson();
  }, []);

  const getAllOrder = async () => {
    const allOrder = await retrieveAllOrder();
    if (allOrder) {
      setAllOrderData(allOrder.orders);
    }
  };

  const retrieveAllOrder = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/user/admin/showorder?orderId=" + orderId
    );
    console.log(response.data);
    return response.data;
  };

  const searchOrderById = (e) => {
    getAllOrder();
    setOrderId("");
    e.preventDefault();
  };

  const assignDeliveryToOrders = (e) => {
    fetch("http://localhost:8000/api/user/admin/order/assignDelivery", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assignDelivery),
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

            setAllOrderData(res.orders);
          } else if (!res.success) {
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
            }, 2000); // Redirect after 2 seconds
          } else {
            toast.error("It Seems Server is down!!!", {
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
            }, 2000); // Redirect after 2 seconds
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
        }, 1000); // Redirect after 1 second
      });
    e.preventDefault();
  };

  return (
    <div>
      <div
        className="assigncard assignform-card assignmt-1 assignms-2 assignme-2 assignmb-2 assigncustom-bg assignborder-color"
        style={{
          height: "35rem",
        }}
      >
        <div className="assigncard-header assigntext-center assignbg-color assigncustom-bg-text">
          <h4>Searh Customer Orders</h4>
        </div>
        <div
          className="assigncard-body"
          style={{
            overflowY: "auto",
          }}
        >
          <form className="row g-3">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="Enter Order Id..."
                onChange={(e) => setOrderId(e.target.value)}
                value={orderId}
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="assignbtn assignbg-color assigncustom-bg-text assignmb-3"
                onClick={searchOrderById}
              >
                Search
              </button>
            </div>
          </form>
          <div className="assigntable-responsive">
            <table className="assigntable assigntable-hover assigntable-bordered assignborder-color">
              <thead className="assignbg-color assigncustom-bg-text">
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Street</th>
                  <th scope="col">City</th>
                  <th scope="col">Pin code</th>
                  <th scope="col">Mobile No.</th>
                  <th scope="col">Order Date</th>
                  <th scope="col">Delivery Date</th>
                  <th scope="col">Delivery Status</th>
                  <th scope="col">Delivery Person</th>
                  <th scope="col">Delivery Mobile No</th>
                </tr>
              </thead>
              <tbody className="text-color">
                {allOrderData.map((orderData) => {
                  return (
                    <tr key={orderData.orderId}>
                      <td>
                        <b>{orderData.orderId}</b>
                      </td>
                      <td>
                        <img
                          src={
                            "http://localhost:8000/api/product/" +
                            orderData.productImage
                          }
                          className="img-fluid"
                          alt="product_pic"
                          style={{
                            maxWidth: "90px",
                          }}
                        />
                      </td>
                      <td>
                        <b>{orderData.productName}</b>
                      </td>
                      <td>
                        <b>{orderData.productDescription}</b>
                      </td>
                      <td>
                        <b>{orderData.quantity}</b>
                      </td>
                      <td>
                        <b>{orderData.totalPrice}</b>
                      </td>
                      <td>
                        <b>{orderData.userName}</b>
                      </td>
                      <td>
                        <b>{orderData.address.street}</b>
                      </td>

                      <td>
                        <b>{orderData.address.city}</b>
                      </td>
                      <td>
                        <b>{orderData.address.pincode}</b>
                      </td>
                      <td>
                        <b>{orderData.userPhone}</b>
                      </td>
                      <td>
                        <b>{orderData.orderDate}</b>
                      </td>
                      <td>
                        <b>{orderData.deliveryDate}</b>
                      </td>
                      <td>
                        <b>{orderData.deliveryStatus}</b>
                      </td>
                      <td>
                        <b>{orderData.deliveryPersonName}</b>
                      </td>
                      <td>
                        <b>{orderData.deliveryPersonContact}</b>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div>
        <div className="assigncard assignform-card assignms-2 assignme-2 assignmb-2 assignborder-color assigncustom-bg">
          <div className="assigncard-header assigntext-center assignbg-color assigncustom-bg-text">
            <h4>Assign Delivery To Orders</h4>
          </div>
          <div className="assigncard-body text-color">
            <form className="row g-3">
              <div className="col-auto">
                <label>
                  <b>Order Id</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Enter Order Id..."
                  name="orderId"
                  onChange={handleInput}
                  value={assignDelivery.orderId}
                />
              </div>

              <div className="col-auto">
                <label>
                  <b>Delivery Person</b>
                </label>
                <select
                  onChange={handleInput}
                  className="form-control"
                  name="deliveryId"
                >
                  <option value="">Select Delivery Person</option>

                  {deliveryPersons.map((person) => {
                    return (
                                 <option value={person.id} key={person.id}>
                                               {person.firstName} {person.lastName}
                                               </option>
                                             );
                                           })}
                                         </select>
                                       </div>
                         
                                       <div className="col-auto">
                                         <button
                                           type="submit"
                                           className="assignbtn assignbg-color assigncustom-bg-text"
                                           onClick={assignDeliveryToOrders}
                                         >
                                           Assign Delivery
                                         </button>
                                       </div>
                                     </form>
                                   </div>
                                 </div>
                               </div>
                               <ToastContainer />
                             </div>
                           );
                         };
                         
                         export default AssignDeliveryToOrders;
                         
