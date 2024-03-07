// components/NavigationBar.js
import React, { useState } from 'react';
import styles from './NavigationBar.module.css';

const NavigationBar = ({ setDisplayedComponent }) => {
  const [showMenu, setShowMenu] = useState(false);

  function handleComponentChange(componentName) {
    setDisplayedComponent(componentName);
    // Close the menu after clicking on a navigation item
    setShowMenu(false);
  }

  return (
    <div className={styles.navBar}>
      {/* Hamburger menu icon */}
      <div className={styles.menuIcon} onClick={() => setShowMenu(!showMenu)}>
        <div className={`${styles.menuIconLine} ${showMenu ? styles.open : ''}`} />
        <div className={`${styles.menuIconLine} ${showMenu ? styles.open : ''}`} />
        <div className={`${styles.menuIconLine} ${showMenu ? styles.open : ''}`} />
      </div>

      {/* Navigation buttons */}
      <div className={`${styles.menuItems} ${showMenu ? styles.show : ''}`}>
        <button onClick={() => handleComponentChange('CreateInvoice')}>Create Invoice</button>
        <button onClick={() => handleComponentChange('Invoice')}>Invoice</button>
        <button onClick={() => handleComponentChange('EditInvoice')}>Edit Invoice</button>
        <button onClick={() => handleComponentChange('Center')}>Center</button>

        <button onClick={() => handleComponentChange('Payments')}>Payments Form</button>
        <button onClick={() => handleComponentChange('Payment')}>Payment</button>
        <button onClick={() => handleComponentChange('PopUp')}>PopUp</button>
      </div>
    </div>
  );
};

export default NavigationBar;
