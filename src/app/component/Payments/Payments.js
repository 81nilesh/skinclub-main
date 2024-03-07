// components/PaymentForm.js
import React from 'react';
import styles from './Payments.module.css';
import PreviewInvoice from './PreviewInvoice/PreviewInvoice';

const Payments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.mainContainer}>
          <div className={styles.main_container}>
            <div className={styles.heading}>
              <h2>Payment</h2>
              <p>Create an invoice for your patient</p>
            </div>
            <div className={styles.PayMentBody}>
              <form>
                <div className={styles.payMethod}>
                  <h2>Payment Method</h2>
                  <div className={styles.payOptions}>
                    <input type="radio" id="card" name="pay_option" />
                    <label htmlFor="card">Credit/debit card</label>
                    <input type="radio" id="banking" name="pay_option" />
                    <label htmlFor="banking">Net Banking</label>
                    <input type="radio" id="paypal" name="pay_option" />
                    <label htmlFor="paypal">Paypal</label>
                    <input type="radio" id="bitcoin" name="pay_option" />
                    <label htmlFor="bitcoin">Bitcoin</label>
                  </div>
                </div>
                <div className={styles.paymentDetails}>
                  <h2>Add Payment Details</h2>
                  <div className={styles.detailsInput}>
                    <div className={styles.row}>
                      <div>
                        <label htmlFor="cardName">Enter Name on card</label>
                        <br />
                        <input type="text" name="cardName" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="cardNumber">Card Number</label>
                        <br />
                        <input type="text" name="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                    </div>
                    <div className={styles.row}>
                      <div>
                        <label htmlFor="expiry">Expiry(MM/YY)</label>
                        <br />
                        <input type="text" name="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <label htmlFor="cvv">CVV Code</label>
                        <br />
                        <input type="text" name="cvv" placeholder="123" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className={styles.termsPara}>
                  By clicking on 'Confirm Payment'{' '}
                  <b>
                    <u>I agree with the Terms and conditions</u>
                  </b>{' '}
                  of the Company.
                </p>
                <div className={styles.buttons}>
                  <button className={styles.saveButton}>Save</button>
                  <button className={styles.confirmButton}>Confirm Payment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <PreviewInvoice />
        </div>
      </div>
    </div>
  );
};

export default Payments;
