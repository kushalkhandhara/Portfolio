import React from 'react'
import { NavLink } from 'react-router-dom';


export default function WorkCard(props) {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt="" />
    <h2>{props.title}</h2>
    <div className='project-details'>
      <p>
        {props.text}
      </p>
      <div className='project-btns'>
        <NavLink to={props.view} className="btn">View</NavLink>
        <NavLink to={props.source} className="btn">Source</NavLink>
      </div>
    </div>
</div>
  )
}
