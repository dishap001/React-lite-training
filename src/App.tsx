
import './App.css'
import { useRoutes } from 'react-router-dom'; 
import routes from './Route/Route'
import Header from './Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
  
function App() {
  const routing = useRoutes(routes);
 
  return (
    <div>
      <Header/>
     {routing}
     
    </div> 
  );
}

export default App;