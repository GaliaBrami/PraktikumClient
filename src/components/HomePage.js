import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate=useNavigate();
    const go=()=>{
        navigate("/workerList")
    }
return(<>
<h1>wellcome to worker Management app !!!</h1>
<Link class="item" to="/workerList">worker list</Link>
{/* <button onClick={go()}>workerlist</button> */}
</>);
}
export default HomePage;