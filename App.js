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



const heading = React.createElement("div", { id: "parent", xyz: "abc" }, [React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello World ,Its core react") ,React.createElement("h1", {}, "Hello World ,Its slibling") ] ) ,React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "Hello World ,Its core react") ,React.createElement("h1", {}, "Hello World ,Its slibling") ] )]);

console.log(heading);//object
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);