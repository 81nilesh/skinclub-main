import React from 'react'
import setPayment from './payment.module.css';
function Innerview() {
    return (
        <div className={setPayment.template}>
            <div className={setPayment.uiPayment}>
                <div className={setPayment.gole}><img src={'/right.png'} alt="right" /></div>
                <span>Shiping</span>
                <div className={setPayment.line}></div>
                <div className={setPayment.gole}>2</div>
                <span>Billing</span>
                <div className={setPayment.line}></div>
                <div className={setPayment.gole}>3</div>
                <span>Confirmation</span>
            </div>

            <div className={setPayment.PayMent_body}>

            <div class={setPayment.pay_method}>
                <h2>Payment Method</h2>
                <div class={setPayment.pay_options}>
                    <input type="radio" id="card" name="pay_option" />
                    <label for="card">Credit/debit card</label>
                    <input type="radio" id="banking" name="pay_option" />
                    <label for="banking">Net Banking</label>
                    <input type="radio" id="paypal" name="pay_option" />
                    <label for="paypal">Paypal</label>
                    <input type="radio" id="bitcoin" name="pay_option" />
                    <label for="bitcoin">Bitcoin</label>
                </div>
            </div>
           
            <p className={setPayment.savedCard}>Saved Cards</p>
            <div className={setPayment.visaMain}>
                <div className={setPayment.radiobutton}>
                    <input type="radio" name="radio" id="radio" />
                </div>
                <div className={setPayment.visaImg}>
                    <img src={`/visa.png`} alt="visa" />
                </div>
                <div className={setPayment.accountDetails}>
                    <div>**** *** *** 1157</div>
                    <div>VISA CARD</div>
                </div>
            </div>

            <div className={setPayment.visaMain}>
                <div className={setPayment.radiobutton}>
                    <input type="radio" name="radio" id="radio" />
                </div>
                <div className={setPayment.visaImg}>
                    <img src={`/master.png`} alt="visa" />
                </div>
                <div className={setPayment.accountDetails}>
                    <div>**** *** *** 1157</div>
                    <div>MASTER CARD</div>
                </div>
            </div>
           
           <div className={setPayment.downButton}>
                <div>Add New Card</div>
           </div>
           <div className={setPayment.text}></div>
            <p>By Clicking on ‘Confirm Payment’ I agree <br />
with the terms and conditions of the Company.</p>
            </div>
            <div className={setPayment.TwoButton}>
            <div>Save</div>
            <div>Confirm Payment</div>
                </div>       
        
        </div>
    )
}

export default Innerview;
