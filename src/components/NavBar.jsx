import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import Screen from './Screen'
const NavBar = ({userData,data}) => {
    // console.log("user code",userData.station_code)
    const [option,setOption] = useState(0)
    const [nearestRides,setNearestRides] = useState([])
    let nearbyRidesList = new Array()
    //binary search
    const binarySearch=(arr, x)=>
    {   
        let l = 0;
        let r = arr.length - 1;
        let mid;
        while (r >= l) {
             mid = l + Math.floor((r - l) / 2);
      
            // If the element is present at the middle
            // itself
            if (arr[mid] == x)
                return mid;
      
            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > x)
                r = mid - 1;
                 
            // Else the element can only be present
            // in right subarray
            else
                l = mid + 1;
        }
      
        // We reach here when element is not
        // present in array
        return -1;
    }
    const addRides =(item)=>{
        // console.log(item)
        if(binarySearch(item.station_path,userData.station_code)!==-1)
        {
            nearbyRidesList.push(item)
        }
    }
    const getNearestRides = (user,dataArray) =>
    {
        
        dataArray.map(item=>(
            addRides(item)
            ))
            // console.log("nearest rides",nearbyRidesList)
    }

    const screen = () => {
        if(option===0)
        {
            getNearestRides(userData,data);
            return(
                <Screen userData={userData} data={nearbyRidesList}/>
            )
        }
    }
  return (
    <>
        <div className="flex h-20 justify-between bg-background font-inter">
            <div className="flex gap-8 ml-11">
                <button className="text-small font-bold my-6 text-edvora-white border-b-2 border-edvora-white"
                onClick={()=>setOption(0)}>Nearest rides</button>
                <button className="text-small font-normal text-nav-grey"
                onClick={()=>setOption(1)}>Upcoming rides (4)</button>
                <button className="text-small font-normal text-nav-grey"
                onClick={()=>setOption(2)}>Past rides (2)</button>
            </div>
            <div className=' flex flex-row mr-11 items-center justify-center'>
                <FontAwesomeIcon icon={faBarsStaggered}  className="text-md text-edvora-white pr-2 p-px"/>
                <h1 className='text-nav-grey text-base'>Filter</h1>
            </div>
        </div>
        {
            screen()
        }
    </>
  )
}

export default NavBar