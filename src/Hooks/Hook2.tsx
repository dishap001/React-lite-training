
import { createContext } from "react";
import Child1 from "./Children/Child1";


const Data1 = createContext('');
const Data2 = createContext('');
function Hook2() {
  
    //useContext
    const framework ="React";
    const template ="Typescript";

  return (
    <>
      <br/><br/><h2>Using useContext</h2>
            <Data1.Provider value={framework}>
                <Data2.Provider value={template}>
                    <Child1/>
                </Data2.Provider>
            </Data1.Provider>
            

            <br/><br/>
    </>
  )
}

export default Hook2;
export {Data1,Data2};