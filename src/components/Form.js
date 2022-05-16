import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  const [errors, setErrors] = useState([]);

  //preventing default function:  form automatically submits data and casues the browser to refresh the page.
  function handleSubmit(e) {
    e.preventDefault();
    //making firstName mandatory
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName }; //putting together the current form data into an object using the values stored in state
      const dataArray = [...submittedData, formData];
      submittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else{
      setErrors(["First name is required!!"]);
    }
  }
  const listOfSubmissions = submittedData.map((data, index)=>{
    return (
      <div key={index}>
        {data.firstName} {data.firstName}
      </div>

    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* to conditionally render an error message */}
      {errors.length > 0 ? errors.map((error, index)=>(
        <p key={index} style={{color:"red"}}>
          {error}
        </p>
      ))
    : null
    }
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
