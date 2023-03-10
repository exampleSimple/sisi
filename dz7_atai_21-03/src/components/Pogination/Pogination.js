import React from 'react'
import classes from './pogination.module.css'
function Pogination({changePage, page, pageCount}) {
  return (
    <div className={classes.pogination}>
        <button className={classes.prevBtn} onClick={()=> changePage('prev')}>
            Prev
        </button>
        <div>{page}/{pageCount}</div>
        <button className={classes.nextBtn} onClick={()=> changePage('next')}>
            Next
        </button>
    </div>
  )
}

export default Pogination