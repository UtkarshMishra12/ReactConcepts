import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const[formData, setFormData] = useState({
    fName:"",
    lName:"", 
    email:"", 
    isVisible:true,
    mode:"",
    favCar:""

  });

  // // console.log(formData); 

  //  useEffect( () =>{
  //   console.log(formData)
  //  },[formData]);

  function changeHandler(event){
    const{name,value,type,checked} = event.target;
    setFormData( prevData => {
      return{
        ...prevData,
        [name]: type=== "checkbox" ? checked: value
      }
    });
  }

  function formHandler(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="wrapper">

      <div>Form</div>

      <form className="wrapper" onSubmit={formHandler}>
      <br></br>
      <input type="text" className="inp"
        name="fName"
        placeholder="First Name"
        onChange={changeHandler}
        value={formData.fName}
      />
      <br></br>
      <input type="text" className="inp"
        name="lName"
        placeholder="Last Name"
        onChange={changeHandler}
        value={formData.lName}
      />
      <br></br>
      <input type="email" className="inp"
        name="email"
        placeholder="Enter your Email"
        onChange={changeHandler}
        value={formData.email}
      />
      <br></br>
      <label htmlFor="isVisible">Am I Visible?</label>
      <input type="checkbox"
        name="isVisible"
        onChange={changeHandler}
        checked={formData.isVisible}
        id="isVisible"
      />
      <br></br>
      <label htmlFor="Online-Mode">Online Mode</label>
      <input type="radio"
        onChange={changeHandler}
        name="mode"
        value="Online Mode"
        id="Online Mode"
        checked={formData.mode==="Online Mode"}
      />
      <label htmlFor="Offline-Mode">Offline Mode</label>
      <input type="radio"
        onChange={changeHandler}
        name="mode"
        value="Offline Mode"
        id="Offline Mode"
        checked={formData.mode==="Offline Mode"}
      />       
      <br></br>
      <label htmlFor="favCar">Your favourite Crar</label>
      <select name="favCar"
        id="favCar"
        onChange={changeHandler}
        value={formData.favCar}
      >
        <option value="Scorpio">Scorpio</option>
        <option value="Thar">Thar</option>
        <option value="Fortuner">Fortuner</option>
        <option value="BMW">BMW</option>
      </select> 
      <br></br>
      <button>Submit</button>
      </form> 



    </div>
  );
}

export default App;
