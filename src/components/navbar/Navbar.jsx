import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
   return (
      <div className={classes.container}>
         <div className={classes.wrapper}>
            <Link to='/' className={classes.left}>
               HOME
            </Link>
            <Link to="/favorites" className={classes.left}> View Favorites</Link>
            <div className={classes.right}>
             <h1>RECIPE APP</h1>
            </div>
         </div>
      </div>
   )
}

export default Navbar