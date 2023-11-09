import Userinfo from './Userinfo'; 
import Clist from './Item_list';
import { useState } from 'react';

const userdetails = {
    id: 1,
    name: 'Salena Gomez',
    age:18,
    state: 'Goa',
  }
  const stationaryList =[
      {
        item_num :1,
        item_name:'Book',
        item_description:'a bound set of blank sheets for writing in'
      },
      {
        item_num : 2,
        item_name:'Pencil',
        item_description:'a writing instrument with a thin, cylindrical graphite core'
      },
      {
        item_num : 3,
        item_name:'Pen',
        item_description:'a writing instrument that uses ink to leave a mark on paper'
      },
    ];
  
  


function Home(){
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
  
    function handleChange(i:number): void{
      setSelectedItem(i)
    }

    return(<>
    <h3>User Details</h3>   
      <Userinfo
      id={userdetails.id} 
      name={userdetails.name} 
      age={userdetails.age}
      state={userdetails.state}/>
      <br/><br/>

      <h3>Stationary Items</h3>
      <Clist funtn={handleChange} dis={selectedItem} stationary_list={stationaryList} />
      
    </>);
}
export default Home;