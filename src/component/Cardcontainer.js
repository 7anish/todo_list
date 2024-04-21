import { useEffect, useState } from 'react'
import Card from './Card'

const Cardcontainer = ({Heading , value , taskarr , delfunc , changecat , containerchage }) => {

  return (
    <div className='sec' 

    onDragOver={(e)=>{
      e.preventDefault()
    }}

    onDrop={()=>{
      containerchage(Heading)
    }}
    >

    <h1>{Heading}</h1>
    <div className="cardcontain" >
    {
        taskarr.map((obj , i) =>{
            if (obj.cat == value){
                return <Card key={i} title={obj.title} para={obj.meassage} index={i} delfunc={delfunc} changecat={changecat}/>
            }
        })
    }
    </div>
    </div>
  )
}

export default Cardcontainer
