import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from  "react-redux"
import { addStudentData } from '../../../middleware/redux/actions';
function Payment() {
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const data = useSelector(state => state);
  const publishableKey =
    'pk_test_51LrOXkLb9HvvwBCk7Ix6fjmDmLIoXHJUHs9cuGCzju0Fh2AcAGtqtal6TYB73J4MyqeMXVbRAYzyIJnxMsEuHsH400jF5xvhSu';
  const [product, setProduct] = useState({
    name: 'JavaScript',
    price: 5000,
  });
  const priceForStripe = product.price * 100;

  const handleSuccess = () => {
    const id= data.studentReducers.data.data._id || ""
    axios.put(`http://localhost:4500/api/user/${id}`,{headers:{'Content-Type':'application/json'}}).then(response=>{
      alert("Payment done")
      navigate('/lectures')
    })
  };
  const handleFailure = () => {
    alert("Payment failed")
  };
  const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:4500/payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
<div className="grid grid-row-4   container text-center  py-4">
    <h2 className="text-2xl font-bold mb-4">Payment</h2>
    <p className="mb-2">
      <span className="font-semibold">Product: </span>
      {product.name}
    </p>
    <p className="mb-4">
      <span className="font-semibold">Price: </span>
      {product.price} Rs.
    </p>
    <StripeCheckout
      stripeKey={publishableKey}
      label="Pay Now"
      name="Pay With Credit Card"
      billingAddress
      shippingAddress
      amount={priceForStripe}
      description={`Your total is ${product.price} Rs.`}
      token={payNow}
      className="bg-blue-500 max-w-fit mx-auto text-white px-4 py-2 rounded hover:bg-blue-600"
    />
  </div>
  );
}

export default Payment;
