
import './App.css';
import React from 'react'
import { useState } from 'react';
import CustomerList from './components/CustomerList'
import AddCustomer from './components/AddCustomer'

function App() {
//  const dummyCustomers =[
//    {
//      "id": 1,
//       "name": 'Dummy Customer 1',
//       "email": 'dummycustomer1@bitcode.in',
//       "feedback": 'This Is test feedback'
//     },
//     {
//       "id": 2,
//       "name": 'Dummy Customer 2',
//      "email": 'dummycustomer2@bitcode.in',
//      "feedback": 'This Is test feedback'
//     }
//   ];
  const [customers,setCustomers]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState();
  async function fetchCustomersHandler()
    {
  //   fetch("http://localhost:3000/customers")
  //   .then(response=>
  //   {
  //     return response.json()
  //   }).then(data=>
  //     {
  //       setCustomers(data);
  //     })
  
  setIsLoading(true);
  setError(null);
  try{
  const response=await fetch("http://localhost:3000/customers");
  if(!response.ok)
  {
    throw new Error("Somthing went wrong...");
  }
  const data=await response.json();
  setCustomers(data);
}
catch(error)
{
  setError(error.message);
  
}
setIsLoading(false);
    }
    let content=<p>Found no Customers</p>;
    if(customers.length>0)
    {
      content=<CustomerList customer={customers}></CustomerList>;
    }
    if(error)
    {
      content= <p>(error)</p>;
    }
    if(isLoading)
    {
      content=<p>Data is loading....</p>;
    }
async function addCustomerHandler(customer)
{
//console.log(customer);
const response=await fetch("http://localhost:3000/customers",
{
  method:"POST",
  body:JSON.stringify(customer),
  headers: {
    'Content-Type': 'application/json'
  }

})
const data=await response.json();
console.log(data);
}

  return (
    <React.Fragment>
      <section>
        <AddCustomer onAddCustomer={addCustomerHandler}></AddCustomer>
      </section>
      <section>
        <button onClick={fetchCustomersHandler}>Fetch Customers</button>
        </section>
        <section>
        {/* {!isLoading && customers.length>0 && <CustomerList customer={customers}></CustomerList>}
        {!isLoading && customers.length===0 && <p>Found no Customers</p>}
        {!isLoading && <p>Data is loading....</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
};

export default App;
