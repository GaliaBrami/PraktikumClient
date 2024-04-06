import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const [managers,setManagers]=useState([])
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate();
    const go=()=>{
        let exist=false;
        managers.forEach(m => {
            if(m.managerName==name&&m.password==password)
                exist=true;
        });
        if(exist)
        navigate("/workerList")
    }
    useEffect(() => {

        axios.get("https://localhost:7259/api/Managers")
          .then(info => {
            console.log(info.data, "daratatrtra")
            // dispatch({ type: action.SET_WORKERS, workers: info.data })
            // setWorkers(info.data)
            // console.log(workers)
            setManagers(info.data);
            console.log(info.data);
            // setRoles(["teacher","principal"]);
    
          })
          .catch(err => console.log(err));
      }, []);
return(<>
<h1>wellcome to worker Management app !!!</h1>
Login:
<form>
    <input placeholder="Manager name" onChange={(e)=>{
        setName(e.target.value)
        go()
    }}></input>
    <input placeholder="password" onChange={(e)=>{
        setPassword(e.target.value)
        go()
    }}></input>
    {/* <button onClick={go()}>login</button> */}
</form>
{/* <Link class="item" to="/workerList">worker list</Link> */}
{/* <button onClick={go()}>workerlist</button> */}
</>);
}
export default HomePage;