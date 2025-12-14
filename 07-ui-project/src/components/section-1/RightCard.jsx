import React from 'react'
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
    console.log(props.color);
    
  return (
    <div>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent/>
    </div>
  )
}

export default RightCard
