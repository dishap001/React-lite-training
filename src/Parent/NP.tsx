import { Link, Outlet } from "react-router-dom";

const Npatil = () => {
    return ( <>
    <div>Npatil</div>
    <Link to={'/NP/DP'}> gp click</Link>
  <Outlet/>
    </> );
}
 
export default Npatil;