import { Link, useNavigate } from "react-router-dom";



function Header() {
    // using useNavigation Hook
    const navHook4 = useNavigate();
    const nameHook ='useNavigate';

    function gotoHook4 (){
        navHook4("/Hook4",{state :{ name, nameHook}});
    }

  return (
   < div className="Header">
        <h1>React Assignment </h1>
        <nav>
            <ul className="Menu"><li><Link to='/'>Home</Link></li></ul>
            <ul className="Menu" >
                <li><Link to='/Hooks'>Hook 1</Link></li>
                <li><Link to='/Hook2'>Hook 2</Link></li>
                <li><Link to='/Hook3'>Hook 3</Link></li>
                <li><Link to='/NP/'>Nptail</Link></li>
            </ul>
            <button onClick={gotoHook4}>Hook 4</button>
            <ul className="Menu">
                <li><Link to='/Form'> User Form</Link></li>
                <li><Link to='/tableform'> Tabular Form</Link></li>

            </ul>
            
        </nav>
   </div>
  );
}

export default Header