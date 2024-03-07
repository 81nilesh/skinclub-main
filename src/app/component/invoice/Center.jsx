import React from 'react';
import styleCenter from './styleCenter.module.css';
import PreviewInvoice from './PreviewInvoice/PreviewInvoice';
import Templates from './Templates/Templates';
function Invoice() {
  return (
    <div className={styleCenter.center}>
     <Templates/>
      <PreviewInvoice/>
    </div>
  )
}

export default Invoice;
