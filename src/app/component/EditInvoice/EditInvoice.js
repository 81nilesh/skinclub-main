// EditInvoice.js
import React from "react";
import EditStyles from "./EditInvoice.module.css";
import PreviewInvoice from "../PreviewInvoice/PreviewInvoice";
import Gridview from "../Gridview/Gridview";

function EditInvoice() {
  return (
    <div className={EditStyles.container}>

      <div className={EditStyles.previewContainer}>
        <PreviewInvoice/>
      </div>

      <div className={EditStyles.gridContainer}>
        <Gridview/>
      </div>

    </div>
  );
}

export default EditInvoice;
