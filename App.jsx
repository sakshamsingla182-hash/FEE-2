import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// // import './App.css'
// // import About from './About'
// // import Navbar from './Navbar'
// // import Productcard from './Productcard'

// // function App() {
// //   const a=35;
// //   const b=40;
// //   const name="fee class";
// //   function greet(){
// //     return "welcome saksham";}
// //   const age=45;
// //   const logIn=false;
// //   const url="https://www.google.com/webhp?authuser=0";
// //   return ( <>
// //     <About />
// //   <h1>Chitkara</h1>
// //    <p>G3 Students</p>
// //    <p>Total Students={(a+b)}</p>
// //    <h1>{greet()}</h1>
// //    <h1>{name.toUpperCase()}</h1>
// //    <p className="text"></p>
// //    <label htmlFor=""></label>
// //    <h2>{age>=18?"Adult":"Not Adult"}</h2>
// //    <h2>{logIn?<Navbar/>:"log In First"}</h2>
// //    {logIn&&<Navbar/>}
// //    {logIn||<Navbar/>}
// //    <p style={{color:"red",fontSize:"30px"}}>Inner Curly braces <b>OBJECT</b> hai ye...or outer ye <b>JAVASCRIPT</b> ka hai</p>
// //    <img src={heroImg} alt="heyyy" />
// //    <a href={url}>Google</a>
// //    <Productcard name="Iphone 17" description="Mobile" price="1,00,000"/>
// //     <Productcard name="Realme GT 6T" description="Mobile" price="500000"/>
// //      <Productcard name="Samsung galaxy" description="Mobile" price="80000"/>
// //       <Productcard name="Redmi Note 7 pro" description="Mobile" price="89000"/>
// //       {/* props are to send data from parent component to child component */}
// //    {/* && and || is used for conditional rendering for eg agar humne login ya signup page ke liye karna ho*/}
// //    </>
// //   )}
// // export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import About from './About'
// import Navbar from './Navbar'
// import Productcard from './Productcard'
// import counter from './counter'

// function App() {
//   const a = 35;
//   const b = 40;
//   const name = "fee class";

//   function greet() {
//     return "welcome saksham";
//   }
//   const age = 45;
//   const logIn = false;

//   const url = "https://www.google.com";

//   return (
//     <>
    
//       <About />
//              <counter/>
//       <h1 style={{ color: "blue", textAlign: "center" }}>
//         Chitkara
//       </h1>

//       <p style={{ color: "green", fontSize: "20px" }}>
//         G3 Students
//       </p>

//       <p style={{ fontSize: "18px" }}>
//         Total Students = {a + b}
//       </p>

//       <h1 style={{ color: "purple" }}>
//         {greet()}
//       </h1>

//       <h1 style={{ textTransform: "uppercase" }}>
//         {name}
//       </h1>

//       <label htmlFor="">Name:</label>

//       <h2 style={{ color: age >= 18 ? "green" : "red" }}>
//         {age >= 18 ? "Adult" : "Not Adult"}
//       </h2>

//       <h2>
//         {logIn ? <Navbar /> : "Log In First"}
//       </h2>

//       {logIn && <Navbar />}

//       {logIn || <Navbar />}

//       <p
//         style={{
//           color: "red",
//           fontSize: "30px",
//           backgroundColor: "yellow",
//           padding: "10px"
//         }}
//       >
//         Inner Curly Braces = <b>OBJECT</b>
//         <br />
//         Outer Curly Braces = <b>JAVASCRIPT</b>
//       </p>

//       <img
//         src={heroImg}
//         alt="heyyy"
//         style={{
//           width: "300px",
//           height: "200px",
//           objectFit: "cover",
//           borderRadius: "10px"
//         }}
//       />

//       <br />

//       <a
//         href={url}
//         style={{
//           color: "blue",
//           fontSize: "20px",
//           textDecoration: "none"
//         }}
//       >
//         Google
//       </a>

//       <Productcard
//         name="Iphone 17"
//         description="Mobile"
//         price="1,00,000"
//       />

//       <Productcard
//         name="Realme GT 6T"
//         description="Mobile"
//         price="500000"
//       />

//       <Productcard
//         name="Samsung galaxy"
//         description="Mobile"
//         price="80000"
//       />

//       <Productcard
//         name="Redmi Note 7 pro"
//         description="Mobile"
//         price="89000"
//       />
 

// {/* {productsdetails.map((product)=>{
//   return <Productcard name={product.name} description={product.description}/>}
// )} */}
//       {/* props are used to send data from parent component to child component */}

//       {/* && and || are used for conditional rendering */}
//     </>
//   )
// }
// export default App

import "./Counters.css";

function App() {

  let count = 0;

  function increase() {
    count++;
    document.getElementById("count").innerText = count;
  }

  function decrease() {
    count--;
    document.getElementById("count").innerText = count;
  }

  function reset() {
    count = 0;
    document.getElementById("count").innerText = count;
  }

  return (
    <div className="app">

      <div className="counter-card">

        <p className="tag">Counter app</p>

        <h1>Counters</h1>

        <p className="subtitle">
          Simple. Clean. Interactive.
        </p>

        <h2 id="count">0</h2>

        <div className="buttons">

          <button onClick={decrease}>−</button>

          <button onClick={reset}>Reset</button>

          <button onClick={increase}>+</button>

        </div>

      </div>

    </div>
  );
}

export default App;