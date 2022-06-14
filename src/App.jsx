import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Screen from "./components/Screen";
import TopBar from "./components/TopBar";
import Axios from 'axios'
 
function App() {
  const [user,setUser] = useState([])
  const [data,setData] = useState([])
  const getData = async ()=> {
    const response  = await fetch('https://assessment.api.vweb.app/rides')
    const dataItem = await response.json()
    setData(dataItem)
    // console.log(dataItem)
  }
  const getUserData = async ()=> {
    const response  = await fetch('https://assessment.api.vweb.app/user')
    const userData = await response.json()
    setUser(userData)
    // console.log(user)
  }
  useEffect(()=>{
    getData()
    getUserData()
  },[])
  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <TopBar userData={user}/>
      {/* Nav Bar */}
      <NavBar userData={user} data={data}/>
    </div>
  );
}

export default App;
