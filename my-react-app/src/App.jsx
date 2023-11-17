import './App.css';
import Card from './createCard';
import Student from './Student.jsx';
import UserGreetings from './userGreetings.jsx';
import CurrentDate from './W3Schools.jsx';
import './index.css';
import Logo from './Components/ListGroup.jsx';


function App(){
  const countries = ['New York', 'San Fransico', 'Tokyo', 'London', 'USA'];
 return(
   <div className='container-fluid'>
      <Logo />
      <CurrentDate date={Date()}/>
       <h1>Hello welcome to this react tortural</h1>
      <Card />

      <Student name ='Mintlord' age={25} isStudent={true} />
      <Student name ='SmarkizzSMG' age={23} isStudent={false} />
      <Student/>

      <UserGreetings isloggedin={true} name='Mintlord' />

      <ul className='list-group'>
        {countries.map((item, index) => (
        <li className='list-group-item' 
        key={item} 
        onClick={() => console.log(index, item)}>{item}</li>))}
      </ul>
      
   </div> 
   
    )
}

export default App;