import { Link, Outlet } from "react-router-dom";

const parent = () => {
    return ( <>
    <div>This is the main 1st Parent Component</div>
    <p>Please Click on below link to go to Child Component</p>
    <Link to={'/PARENT/CHILD1'}> CHILD1 </Link>
    <Outlet/>
    </> );
}
 
export default parent;