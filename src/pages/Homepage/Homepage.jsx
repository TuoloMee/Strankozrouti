import React from 'react';
import { Link } from 'react-router-dom';
import { InfoIcon } from '../../components/InfoIcon/InfoIcon';
import { Button, ButtonGroup } from '@material-ui/core';

import './style.css';

export const Homepage = () => {


  return (
    <>
 <div className="homepage_container">
    <div className="hero_container">
      <div className="hero--description">
      <h1>Čtenářský deník</h1>
      <h1>jednoduše a zábavně!</h1>
      <Link to="/detailni"><button 
      // size="large" variant="contained" color="secondary" 
      className="btn__record">Zapsat knížku</button></Link>
     </div>
    <div className="hero--image">
    <img className="hero--monster" src='assets/monsterlibraryleft.svg'></img>
   </div>
   </div>
   </div>
    <InfoIcon/>
   </>

  )
}