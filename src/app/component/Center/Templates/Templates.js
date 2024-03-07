"use clinet"
import React from 'react'
import Template from './Template.module.css';
import Minitemplate from './Minitemplate';
function Templates() {
  let arr = new Array(1, 2, 3, 4, 5, 5, 6,3);
  return (
    <div className={Template.template}>
      <div className={Template.templateNavigation}>
        <div>
          Templates
        </div>
        <div>
          Create Invoice
        </div>
      </div>
    <div  className={Template.templateContent}>
     <Minitemplate/>
     <Minitemplate/>
     <Minitemplate/>
     <Minitemplate/>
     <Minitemplate/>
     <Minitemplate/>
     <Minitemplate/>
     <Minitemplate/>
    </div>
    </div>
  )
}

export default Templates
