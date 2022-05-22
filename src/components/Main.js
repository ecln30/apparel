import React from 'react';

function Main({handleEmail, ValidateEmail, email, isTrue}) {
    return ( 
        <div className="container">
         <img className="logo" src="./images/logo.svg" alt="" />
          <div className="main">
             <h1 className="slogan">
                <span>
                 We're 
                </span>
             <br />
                 C O M I N G
             <br />
                 S O O N
            </h1>
             <p>
                 Hello fellow shoppers! We're currently building our new <br /> fashion store. 
                 Add your email below to stay up-to-date with <br /> announcements and our launch deals.
             </p>
          </div>
           <div className="email">
            <input type="Email" 
              onChange={ handleEmail }
              value={email}
            />
            <img className={`error ${ isTrue ? "show" : ""}`} src="./images/icon-error.svg" alt="" />
            <div className="arrowBox"
              onClick={ ValidateEmail }
            >
              <img  className="arrow" src="./images/icon-arrow.svg" alt="" />
            </div>
         </div>
         <p className={`alert ${isTrue ? "show" : ""}`}>Please provide a valid email</p>
       </div>
    );
}

export default Main;






























































































































