
import './App.css';
import Items from './components/Items'
import NewItem from './components/NewItem/NewItem'
import {useState} from 'react'




  const items_initial=[
    {
      "id":1,
      "item_title":"Laptop",
      "item_cost":50000,
      "item_pur_date":new Date(2021,5,12)
    },
    {
      "id":2,
      "item_title":"Marker",
      "item_cost":50,
      "item_pur_date":new Date(2022,2,18) 
    }, 
    {
      "id":3,
      "item_title":"Projector",
      "item_cost":28000,
      "item_pur_date":new Date(2020,6,24)
    },
  ];

function App (){
  const [items,setItems]=useState(items_initial);
  const saveItemDataHandler=(itemData)=>
  {
    //console.log(itemData);
    setItems((prevItems)=>{return [itemData,...prevItems]});
  }

  return (
    <div>
     <NewItem onSaveItemData={saveItemDataHandler}></NewItem>
     <Items items={items}></Items>
    </div>
  );
}

export default App;
