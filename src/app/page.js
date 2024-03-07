// pages/index.js or Home.js
'use client';
import React, { useState } from 'react';
import Header from "./component/Header/Header";
import Sidebar from "./component/sidebar/sidebar";
import Center from "./component/Center/Center";
import NavigationBar from './component/Navigationbar';
import CreateInvoice from "./component/createinovice/createInvoices";
import EditInvoice from "./component/EditInvoice/EditInvoice";
import Payment from './component/payment/payment';
import Invoice from "./component/invoice/Center";
import PopUp from './component/PopUp/PopUp';
import Payments from './component/Payments/Payments';
import styles from "./page.module.css";

export default function Home() {
  const [displayedComponent, setDisplayedComponent] = useState('Center');

  return (
    <>
      <Header setDisplayedComponent={setDisplayedComponent} />
      <div className={styles.mainStyle}>

        <Sidebar />

        {/* <NavigationBar setDisplayedComponent={setDisplayedComponent} /> */}

        {displayedComponent === 'Center' && <Center />}
        {displayedComponent === 'CreateInvoice' && <CreateInvoice />}
        {displayedComponent === 'EditInvoice' && <EditInvoice />}
        {displayedComponent === 'Invoice' && <Invoice />}

        {displayedComponent === 'Payment' && <Payment />}
        {displayedComponent === 'Payments' && <Payments />}
        {displayedComponent === 'PopUp' && <PopUp />}


      </div>
    </>
  );
}
