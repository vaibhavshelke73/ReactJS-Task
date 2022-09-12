import React, { useState } from "react";
import PurchaseDate from "./PurchaseDate";
import "./ShoppingItem.css"
import Card from "./UI/Card";
function ShoppingItem(props)
// {
//return (<h2>This is ShoppingItem Component</h2>);   
//}
//export default ShoppingItem;
{
    //var x=30;
    
    let itemTitle=props.itemTitle;
    const [itemTittle,setTittle]=useState(itemTitle);
    const itemCost=props.itemCost;
    const itemPurDate=props.itemPurDate;
    const btnClick=()=>

    // const day=itemPurDate.getDate();
    // const year=itemPurDate.getFullYear();
    // const month=itemPurDate.toLocaleString("en-US",{"month":"long"});
{
    //alert("Button click")
    //itemTitle="New Tittle";
    setTittle("New Tittle");
    //console.log(itemTittle);
};
    return (
        <Card className="shopping-item">
            <div>
                <h2>{itemTittle}</h2>
            </div>
            
            <div className="shopping-item_cost">{itemCost}</div>
            <div className="shopping-item_date">
                {/* {itemPurDate.toString()} */}
                <PurchaseDate purDate={itemPurDate}></PurchaseDate>

                </div>
                <div>
                    <button onClick={btnClick}>Change Tittle</button>
                </div>

</Card>
        
    )

}
export default ShoppingItem;