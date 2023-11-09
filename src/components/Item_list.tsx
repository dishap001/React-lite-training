


interface item_list {
  dis: number | null
  stationary_list: {
    item_num: number;
    item_name: string;
    item_description: string| null ;
  }[];

  funtn:(i:number)=> void
  
}

const Item_list = ({ stationary_list , funtn , dis }: item_list) => {
  
  // const [buttonStyles, setButtonStyles] = useState({});

  // useEffect(() => {
  //   const defaultStyles = {
  //     backgroundColor: "lightblue",
  //     color: "black",
  //   };
    

  //   const updatedStyles = selectedItem !== null ? { backgroundColor: "orange" } : defaultStyles;
    

  //   setButtonStyles(updatedStyles);
  // }, [selectedItem]);


  return (
    <div>
      {stationary_list.map((item, i) => (
        <div key={i}>
          <span>{item.item_num} -- </span>
          <button 
              onClick={() => funtn(i) }
              // style={buttonStyles}
          >  {item.item_name}
          </button>
          {dis === i && <p>{item.item_description}</p>}
          <br /><br />
          </div>))}
       </div>
       
     );
       }

export default Item_list;



