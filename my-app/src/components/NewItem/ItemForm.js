import  React, { useState } from "react";
import "./ItemForm.css";
function ItemForm(props)
{
    const [enteredTitle,setEnteredTitle]=useState("");
    const [enteredCost,setEnteredCost]=useState("");
    const [enteredDate,setEnteredDate]=useState("");
    // const [userInput,setUserInput]=useState(
    //     {
    //         enteredTitle:"",
    //         enteredCost:"",
    //         enteredDate:"",
    //     }
    // )
const titleChangeHandler=(event)=>
{
    //console.log(event.target.value);
    //setEnteredTitle(event.target.value);
    //setUserInput({...userInput,enteredTitle.event.target.value});

}

const costChangeHandler=(event)=>
{
    setEnteredCost(event.target.value);
}

const dateChangeHandler=(event)=>
{
    setEnteredDate(event.target.value);
}

const btnClickHandler=(event)=>
{
    event.preventDefault();
    //console.log(enteredTitle);
    //console.log(enteredCost);
    //console.log(enteredDate);
    const itemData={
        "item_tittle":enteredTitle,
        "item_cost":enteredCost,
        "item_pur_date":new Date(enteredDate)
    }

//console.log(itemData);
props.onSaveItem(itemData)
setEnteredCost("");
setEnteredDate("");
setEnteredTitle("");
}
const cancelHandler=()=>
{
    props.onCancel();
}
    return (
        <form onSubmit={btnClickHandler}>
            <div className="new-item_controls">
                <div className="new-item_control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}></input>
                       
                        <div>
                            <div className="new-item_control">
                                <label>Cost</label>
                                <input type="number" min="1" max="100000" step="5" onChange={costChangeHandler} value={enteredCost}></input>
                                    </div>
                                    <div className="new-item_control">
                                        <label>Purchase Date</label>
                                        <input type="date" min="2019-01-01"
                                            max="2022-12-31" onChange={dateChangeHandler} value={enteredDate}></input>
                                        
                                    </div>
                                
                            </div>
                            <div className="new-item_actions_">
                                <button>Save Item</button>
                                <button type="button" onClick={cancelHandler}>cancel</button>
                            </div>
                
                </div>
</div>
        </form>
    )
}
export default ItemForm;