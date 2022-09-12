import ItemForm from "./ItemForm";
import "./NewItem.css";
function NewItem(props)
{
    const saveItemHandler=(enteredItem)=>
{
    //console.log(enteredItem);
    const itemData={...enteredItem,"id":Math.random().toString()}
//console.log(itemData);
props.onSaveItemData(itemData);
}
return(
    <div className="new-item">
        <ItemForm onSaveItem={saveItemHandler}></ItemForm>
    </div>
)
}
export default NewItem;