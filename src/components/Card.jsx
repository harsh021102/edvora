import React from 'react'
import phone from '../image/phone.jpg'
const Card = ({userData,data}) => {
  console.log(data.station_path)
  let final = ""
  const printArray = (array)=>{
    let station_path = array
    for(let i=0;i<station_path.length;i++)
    {
        if(i===station_path.length-1)
        {
          final+=station_path[i]
        }
        else
        {
          final+=station_path[i]+", "
        }
    }
    return final
  }

  return (
    <div className='container rounded-xl bg-card-black flex justify-between'>
      <div className="flex gap-4">
        <img src={data.map_url} alt="" className='w-card-image-width h-card-image-height ml-card-ml mt-card-mt mb-7 bg-center bg-no-repeat bg-cover rounded-md'/>
        <div className="flex flex-col mt-card-mt mb-7 font-inter">
          <ul>
            <li className='text-card-heading-grey text-small font-500'>Ride Id: <span className='text-edvora-white'>{data.id}</span></li>
            <li className='text-card-heading-grey text-small font-500'>Origin Station: <span className='text-edvora-white'>{data.origin_station_code}</span></li>
            <li className='text-card-heading-grey text-small font-500'>station_path : <span className='text-edvora-white'>[{
              printArray(data.station_path)
            }]</span></li>
            <li className='text-card-heading-grey text-small font-500'>Date : <span className='text-edvora-white'>{data.date}</span></li>
            <li className='text-card-heading-grey text-small font-500'>Distance: <span className='text-edvora-white'>0</span></li>
          </ul>
        </div>
      </div>
      <div className="flex items-start mr-card-ml mt-card-mt gap-2 font-inter text-xs font-500">
        <button className='text-edvora-white bg-topbar-black p-2 rounded-xl'>{data.city}</button>
        <button className='text-edvora-white bg-topbar-black p-2 rounded-xl'>{data.state}</button>
      </div>
    </div>
  )
}

export default Card