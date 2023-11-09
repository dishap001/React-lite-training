import { useLocation } from "react-router-dom"


function Hook4() {
    //using useLocation Hook
    const locationHook =useLocation();
    console.log(locationHook.state)


  return (
  <> 
  <h2>Using useNavigate and useLocation</h2>
  <h4>This text is displayed using {locationHook.state.nameHook} and uselocation</h4>
  </>
  )
}

export default Hook4;