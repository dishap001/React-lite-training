import { Link, Outlet } from "react-router-dom";

const Dpatil = () => {
    return ( <>
    <div>Dpatil</div>
    <Link to={'/NP/DP/PP'}> click dp</Link>
    <Outlet/>
    </> );
    
}
 
export default Dpatil;