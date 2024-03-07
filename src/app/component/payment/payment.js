import React from 'react';
import setPayment from './payment.module.css';
import Innerview from './innerview';
import PreviewInvoice from '../Center/PreviewInvoice/PreviewInvoice';

function Payment() {
  return (
    <div className={setPayment.center}>
       <Innerview/>
      <PreviewInvoice/>
    </div>
  )
}

export default Payment;
