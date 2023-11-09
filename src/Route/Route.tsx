/* eslint-disable react-refresh/only-export-components */

// import Hook2 from "../Hooks/Hook2";
// import Hook3 from "../Hooks/Hook3";
// import Hooks from "../Hooks/Hooks";
// import Home from "../components/Home";
import { lazy } from "react";
import Loading from "../Loading/Loading";
// import Npatil from "../Parent/NP";
// import Dpatil from "../Parent/Child/DP";
// import Ppatil from "../Parent/Child/gchild/PP";



const Home =Loading(lazy(async () => await import ('../components/Home' )));
const Hooks =Loading(lazy( async()=>await import ('../Hooks/Hooks')));
const Hook2 =Loading(lazy(async()=> await import('../Hooks/Hook2')));
const Hook3 =Loading(lazy(async()=> await import('../Hooks/Hook3')));
const Hook4 =Loading(lazy(async()=> await import('../Hooks/Hook4')));

const Npatil =Loading(lazy(async()=> await import('../Parent/NP')));
const Dpatil =Loading(lazy(async()=> await import('../Parent/Child/DP')));
const Ppatil =Loading(lazy(async()=> await import('../Parent/Child/gchild/PP')));



const routes =[
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/hooks',
        element:<Hooks/>
    },
    {
        path:'/hook2',
        element:<Hook2/>
    },
    {
        path:'/hook3',
        element:<Hook3/>
    },
    {
        path:'/Hook4',
        element:<Hook4 />
    },
    {//grandfather
        path:'/NP/',
        element:<Npatil />,
        children:[
            {//father
                name:'DP',
                path:'DP',
                element:<Dpatil />,
                children:[{//son
                    name:'PP',
                    path:'PP',
                     element:<Ppatil />
                }]

            }
        ]
    },
    
];

export default routes;