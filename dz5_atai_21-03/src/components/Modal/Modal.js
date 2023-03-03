import React from 'react'
import classes from './modal.module.css'
function Modal({children, event}) {
  return (
    <>
      <div onClick={event} className={classes.modalWrapper}></div>
      <div className={classes.modalContent}>
        {children}
      </div>
    </>
  )
}

export default Modal