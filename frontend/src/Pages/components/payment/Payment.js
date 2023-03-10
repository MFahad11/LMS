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
    // dispatch(setPayment(true))
    // console.log(data)
    // const {_id}=data.data
    const id= data.studentReducers.data.data._id || ""
    axios.put(`http://localhost:4500/api/user/${id}`,{headers:{'Content-Type':'application/json'}}).then(response=>{
      alert("Payment done")
      navigate('/')
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
    <div className="container">
      <h2>Payment</h2>
      <p>
        <span>Product: </span>
        {product.name}
      </p>
      <p>
        <span>Price: </span>{product.price} Rs.
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
      />
    </div>
  );
}

export default Payment;
