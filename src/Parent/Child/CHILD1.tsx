import { Link, Outlet } from "react-router-dom";

const child1 = () => {
    return ( <>
    <div>This is the 2nd Component linked to the 1st parent component</div>
    <p>Please click on below link to go to further subchild component</p>
    <Link to={'/PARENT/CHILD1/SUBCHILD1'}> SubChild Component</Link>
    <Outlet/>
    </> );
    
}
 
export default child1;