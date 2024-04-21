import React from 'react'
import { MdDelete } from "react-icons/md";

const Card = ({title , para , index , delfunc , changecat  }) => {

  return (
    <div className="card" onDrag={()=>{
      changecat(index)
    }}
    draggable={true} >
        <h6>{title}</h6>
        <p>{para}</p>
        <button onClick={()=>{
          delfunc(index)
        }}><MdDelete /></button>
    </div>
  )
}

export default Card
