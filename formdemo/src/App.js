import Student from './Components/Student';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
     <h1>Props in React</h1>
     <Student name={" Vaibhav "} email="vaibhav@test.com" other={{address:'Pune',mobile:"000"}}/>
     <Student name={" Vrushab "} email="vrushab@test.com" other={{address:'Pune',mobile:"000"}}/>
     <Student name={" Dinesh "} email="dinesh@test.com" other={{address:'Pune',mobile:"000"}}/>
    </div>
  );
}


export default App;
