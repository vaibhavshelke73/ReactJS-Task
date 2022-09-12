import "./PurchaseDate.css";
function PurchaseDate(props) 
{
    const day=props.purDate.getDate();
    const year=props.purDate.getFullYear();
    const month=props.purDate.toLocaleString("en-US",{"month":"long"});
return(
    <div className="purchase-date">
<div className="purchase-date_day">{day}</div>
<div className="purchase-date_month">{month}</div>
<div className="purchase-date_year">{year}</div>
</div>
)
}
export default PurchaseDate;