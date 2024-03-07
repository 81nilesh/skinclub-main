// components/Header.js
import React from 'react';
import style from './style.module.css';
import NavigationBar from '../Navigationbar';

function Header({ setDisplayedComponent }) {
  return (
    <div className={style.Header}>
      {/* Your existing header content */}
      <div className={style.titleImage}>
        <div>
          <img src={'/headerImage.png'} className={style.HeaderImage} />
        </div>

        {/* Pass setDisplayedComponent to NavigationBar */}
      
      </div>
      <NavigationBar setDisplayedComponent={setDisplayedComponent} />
      <div className={style.HeaderSpace}></div>
      <div className={style.HeaderText}>
        <span>Sunday, 20 August</span>
        <span>1:50 PM</span>
        <span>
          <img src={'./vector.png'} alt="" />
        </span>
      </div>
    </div>
  );
}

export default Header;
