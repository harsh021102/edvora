import React from 'react'
import Card from './Card'

const Screen = ({userData,data}) => {

  // console.log(typeof data)
  return (
    <div className='mx-11 h-full flex gap-2 flex-col overflow-auto'>
      {
        data.map((item)=>(
        <Card key={item.id-2*item.origin_station_code+5*item.destination_station_code+item.state} data={item}/>))
      }
    </div>
  )
}

export default Screen