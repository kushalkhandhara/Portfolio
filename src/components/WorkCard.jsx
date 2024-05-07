import React from 'react';
import "./WorkCard.css";
// import pro1 from "../assets/Screenshot (104).png"
// import { NavLink } from 'react-router-dom';
import Work from './WorkCardData';
import WorkData from './Work';

export default function WorkCard() {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
          {
            WorkData.map((val,index)=>{
              return(
                <Work 
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                source={val.source}
                view={val.view}
                />
              )
            }
          )
        }

        </div>
    </div>
  )
}
