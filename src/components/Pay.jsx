import axios from "axios";
import React from "react"; 
import { PaystackButton } from "react-paystack"; 
 
/* eslint-disable */

export default function Pay(props) { 
    const { api } = props; 

  // you can call this function anything
  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
      axios.post(`${api}/update-user/${props.user._id}`).then((result) => {
          localStorage.clear()
        location.reload();
      console.log(result);    
      }).catch((err) => {
      console.log(err);
          
      });
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    reference: new Date().getTime().toString(),
    email: "itkeyzzpianny@gmail.com",
    amount: props.amount * 100 || 10000,
    publicKey: "pk_test_cd99366d3f03586b34de50fd34d28ff578c7e9e2",
    text: "Clear Now",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
      <PaystackButton  {...componentProps} className="pricing__action" />
    </>
  );
}
