// import logo from './logo.svg';
import './App.css';
// import  {useState} from 'react'
import  {useState} from 'react'

function App() {
  const [counter, setCounter]= useState(0)

  const increment=()=>{
    setCounter(counter +1);
  };

  return (
    <div class="container">

    <form >
<fieldset>
<legend><center><h2><b>Registration Form</b></h2></center></legend><br />

<div>
  <label >First Name</label>  
  <div>
  <input  name="first_name" placeholder="First Name"  type="text" />
    </div>
  </div>

<div>
  <label >Last Name</label> 
    <div>
  <input name="last_name" placeholder="Last Name"   type="text" />
    </div>
  </div>

  <div> 
  <label >Department / Office</label>
    <div>
    <select name="department" >
      <option value="">Select your Department/Office</option>
      <option>Department of Engineering</option>
      <option>Department of Agriculture</option>
      <option >Accounting Office</option>
      <option >Tresurer's Office</option>
      <option >MPDC</option>
      <option >MCTC</option>
      <option >MCR</option>
      <option >Mayor's Office</option>
      <option >Tourism Office</option>
    </select>
  </div>
</div>
  
<div>
  <label>Username</label>  
  <div>
  <input  name="user_name" placeholder="Username"   type="text" />
    </div>
  </div>

<div>
  <label>Password</label> 
    
    <div>
  <input name="user_password" placeholder="Password"  type="password" />
    </div>
  </div>

<div>
  <label >Confirm Password</label> 
    <div>
  <input name="confirm_password" placeholder="Confirm Password"  type="password" />
    </div>
  </div>


  <div>
  <label>E-Mail</label>  
    <div>
  <input name="email" placeholder="E-Mail Address"  type="text" />
    </div>
  </div>

<div>
  <label>Contact No.</label>  
  <div>
  <input name="contact_no" placeholder="(+91)"  type="text" />
    </div>
    </div>  

</fieldset>
</form>
<div ><br />
  <div className='sach'>  
     <button onClick={increment}>Submitt</button>Number of Entries: {counter} </div>
  </div>
</div>


  );
  }

export default App;
