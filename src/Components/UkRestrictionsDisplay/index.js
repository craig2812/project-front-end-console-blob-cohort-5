import React from 'react';
import css from './ukRestDisplay.module.css';
import cn from 'classnames'

function UKRestrictionsDisplay({ data, color, size, heading}) {
  return (
   <div className={cn(css[color], css[size])}>
     <h1 className={css[heading]}>{data.country}</h1>
     <p>{data.covidHeadline}</p>
     <p>{data.quarantineRestirctions}</p>
   </div>
  );
}


export default UKRestrictionsDisplay;