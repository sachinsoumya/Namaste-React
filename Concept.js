/*
<div id="parent">
  <div id="child">
     <h1>Hello World ,Its core react</h1>
     <h2>Hello its siblings</h1>
  </div> 
   <div id="child">
     <h1>Hello World ,Its core react</h1>
     <h2>Hello its siblings</h1>
  </div> 

</div>
*/
//JSX


/*

*Header
  *Logo
  *Nav Items

*Body
  *Search
  *Card-container

    *Resturant-card


*Footer
   *contact
   *Links
   *Address


*/

import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "This is react");
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);

//jsx(jsx code is traspiled before reaches to JS engine) - PARCEL - BABEL

//JSX = > React.createElement => react element => React Element(JS Object) => HTML elements when render
const element = <span>Its a react element also </span>


const Title = 
  
    <h1 id="heading2" className="head">
      React Fundamentals
      {" "} {element}
    </h1>
 



//component composition
const HeadingBody = () => {
  return (
    <div id="container">
      {Title}
      <HeadingBody2 />
      <HeadingBody2></HeadingBody2>
      {HeadingBody2()}

      <h2>{console.log("jhgyuuyugug")}</h2>
      <h1>Hello world ...G20 is helding in Bharat</h1>
    </div>
  ); //More preferable
};

const HeadingBodyLight = () => {
  return <h1>Hello world light!</h1>;
};

const HeadingBody2 = () => <h1>Hello World 2 !</h1>;

const HeadingBody2Light = () => <h1>Hello World 2 light !</h1>;

// console.log(heading);

root.render(<HeadingBody />);

// const heading = React.createElement("div", { id: "parent", xyz: "abc" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello World ,Its core react") ,React.createElement("h1", {}, "Hello World ,Its slibling you kmow na nq") ] ) ,React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello World ,Its core react") ,React.createElement("h1", {}, "Hello World ,Its slibling") ] )]);

// console.log(heading);//object
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
