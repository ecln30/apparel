import './App.css';
import Main from "./components/Main"
import React from 'react'

function App() {
  const [email, setEmail] = React.useState("")
  const [isTrue, setIsTrue] = React.useState(false)
 function handleEmail(e) {
    const el = e.target
    setIsTrue(false)
    setEmail(el.value)
 }
  function ValidateEmail() {
    console.log("Hello")
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g
   if(pattern.test(email)) {
      console.log("Hello")
   }
   else{
     setIsTrue(true)
     setEmail("")
   }
}
  return (
    <div className="App">
        <div className="display">
           <Main className="flex" 
             handleEmail={handleEmail}
             ValidateEmail={ValidateEmail}
             isTrue={isTrue}
             email={email}
           />
        </div>
        <img className="hero" src="./images/hero-desktop.jpg" 
         alt="" />
      </div>
  );
}

export default App;
