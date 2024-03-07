import React, { useEffect } from 'react';
import './PopUp.css';

function PopUp() {
  useEffect(() => {
    const closePopup = (e) => {
      if (!document.querySelector('.popup-content').contains(e.target)) {
        // If clicked outside the popup, close it
        document.querySelector('.popup-container').style.display = 'none';
      }
    };

    // Add event listener when component mounts
    document.body.addEventListener('click', closePopup);

    // Remove event listener when component unmounts
    return () => {
      document.body.removeEventListener('click', closePopup);
    };
  }, []);
  return (
    <div className="popup-container">
      <div className="popup-content">
        <img className="popup-content1" src="select.png" alt="" />
        <h1 className="popup-content1">Payment Successful</h1>
        <h3 className="popup-content1">Order ID #7864</h3>
        <div className="ul-container">
          <span>Payment Type:</span>
          <span>Net Banking</span>
        </div>
        <div className="ul-container">
          <span>Bank:</span>
          <span>HDFC</span>
        </div>
        <div className="ul-container">
          <span>Mobile:</span>
          <span>+91 12345 67890</span>
        </div>
        <div className="ul-container">
          <span>Email:</span>
          <span>bdebashis182@gmail.com</span>
        </div>
        <div className="ul-container1">
          <span>Amount Paid</span>
          <span>$180.00</span>
        </div>
        <div className="ul-container2">
          <span>Transaction ID</span>
          <span>#123456789065432</span>
        </div>
        <div className="par">
          <div className="point">
            <div className="cen">
              <img src="reward.png" alt="" /> 480Points
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="close-btn">
            <img src="upload.png" alt="" /> Send to mail
          </button>
          <button className="close-btn">Claim reward point</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;