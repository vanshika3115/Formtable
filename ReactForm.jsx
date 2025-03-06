import React, { useState } from "react";

function App() {
 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [submit,setSubmit] = useState(false);

const handleSubmit = ((e) => {
  e.preventDefault();
  setSubmit(true);
}
);
 return(
<div>
  <h2>React Form</h2>
  <form onSubmit={handleSubmit}>
  <label>Name:</label>
  <input
  type = "text"
  value = {name}
onChange={(e) => setName(e.target.value)}
  />
<br/>
  <label>Email:</label>
  <input
  type = "email"
  value = {email}
  onChange={(e) => setEmail(e.target.value)}
  />
  <br/>
  <button type="submit">submit</button>
</form>
  {submit &&(
    <div>
<h1>Form submitted</h1>
<p><b>Name : {name}</b></p>
<p><b>Email : {email}</b></p>
</div>
  )
}
</div>
 );

}

export default App;
