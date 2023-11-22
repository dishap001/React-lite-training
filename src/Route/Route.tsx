/* eslint-disable react-refresh/only-export-components */

// import Hook2 from "../Hooks/Hook2";
// import Hook3 from "../Hooks/Hook3";
// import Hooks from "../Hooks/Hooks";
// import Home from "../components/Home";
import { lazy } from "react";
import Loading from "../Loading/Loading";

// import Parent from "../Parent/NP";
// import Dpatil from "../Parent/Child/DP";
// import Ppatil from "../Parent/Child/gchild/PP";



const Home =Loading(lazy(async () => await import ('../components/Home' )));
const Hooks =Loading(lazy( async()=>await import ('../Hooks/Hooks')));
const Hook2 =Loading(lazy(async()=> await import('../Hooks/Hook2')));
const Hook3 =Loading(lazy(async()=> await import('../Hooks/Hook3')));
const Hook4 =Loading(lazy(async()=> await import('../Hooks/Hook4')));

const Parent =Loading(lazy(async()=> await import('../Parent/PARENT')));
const Child =Loading(lazy(async()=> await import('../Parent/Child/CHILD1')));
const SubChild1 =Loading(lazy(async()=> await import('../Parent/Child/gchild/SUBCHILD1')));

const UserForm = Loading(lazy(async()=>await import('../Form/UserForm')));
const TableForm = Loading(lazy(async()=>await import('../Form/TableForm')));
const BootstrapForm = Loading(lazy(async()=>await import('../Form/BootstrapForm')));

const backgroundImage = '../Assets/image';
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
        path:'/PARENT/',
        element:<Parent />,
        children:[
            {//father
                name:'CHILD1',
                path:'CHILD1',
                element:<Child />,
                children:[{//son
                    name:'SUBCHILD1',
                    path:'SUBCHILD1',
                     element:<SubChild1 />
                }]

            }
        ]
    },
    {
        path:'/form',
        element:<UserForm/>
    },
    {
        path:'/tableform',
        element:<TableForm/>
    },
    {
        path:'/BootstrapForm',
        element:<BootstrapForm backgroundImage={backgroundImage}/>
    }
    
];

export default routes;