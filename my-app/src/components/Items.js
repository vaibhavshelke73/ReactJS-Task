import { useState } from "react";
import "./Items.css";
import ShoppingItem from "./ShoppingItem";
import Card from "./UI/Card";

function Items(props)
{
    const items=props.items;
    const [filteredYear,setFilteredYear]=useState("2020");
    const filterChangeHandler=(selectedYear)=>
    {
        setFilteredYear(selectedYear);
    }
    const filteredItems=items.filter((item)=>
    {
        return item.item_pur_date.getFullYear().toString()===filteredYear;
    });

    let itemContent=<p className="no_items">No maching Items</p>
    if(filteredItems.length)
    {
        itemContent=filteredItems.map((item)==> (
        <ShoppingItem
        key={item.id}
        itemTitle={item.item_tittle}
        itemCost={item.item_cost}
        itemPurDate={item.item_pur_date}></ShoppingItem>    
        ))
    }

    return(
        
        <Card className="items">
            <DateFilter 
            selected ={filteredYear} 
            onChangeFilter={filterChangeHandler}></DateFilter>
      {filteredItems.length === 0 && 
        (<P className="no_items">No matching Items</P>)}
    {filteredItems.length>0 && (
        filteredItems.map((item) => (
    
        <ShoppingItem
        key={item.id}
        itemTitle={item.item_tittle}
        itemCost={item.item_cost}
        itemPurDate={item.item_pur_date}></ShoppingItem> 
    ))
    )} 
            {/*filteredItems.length===0 ? (
                <P className="no_items">No matching Items</P>
            ) : (
            filteredItems.map((item) => (
            
                <ShoppingItem
                key={item.id}
                itemTitle={item.item_tittle}
                itemCost={item.item_cost}
                itemPurDate={item.item_pur_date}></ShoppingItem> 
            ))
            )*/}
         
     {/*<ShoppingItem itemTittle={items[0].item_tittle}itemCost={items[0].item_cost}itemPurDate={items[0].item_pur_date}></ShoppingItem>
     <ShoppingItem itemTittle={items[1].item_tittle}itemCost={items[1].item_cost}itemPurDate={items[1].item_pur_date}></ShoppingItem>
            <ShoppingItem itemTittle={items[2].item_tittle}itemCost={items[2].item_cost}itemPurDate={items[2].item_pur_date}></ShoppingItem> */}
      
        </Card>
    )
}
export default Items;