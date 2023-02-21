import React from 'react'
import classes from './modal.module.css'
function Modal({children, showOrHide}) {
  return (
    <>
      <div onClick={showOrHide} className={classes.modalWrapper}></div>
      <div className={classes.modalContent}>
        {children}
      </div>
    </>
  )
}

export default Modal