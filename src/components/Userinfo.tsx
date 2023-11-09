interface  User{
    id:number;
    name: string;
    age:number;
    state:string;
    
}


function Userinfo({id,name,age,state}:User){
    return(<div>
        <ul>
            <li>Id : {id} </li>
            <li>Name : {name}</li>
            <li>Age : {age}</li>
            <li>State : {state}</li>
        </ul>
    </div>);
}
export default Userinfo;