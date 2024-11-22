const heading = React.createElement( "h1" , { id : "heading" , xyz: "abc"} , "Hello World from React!");  // {} gives attributes to a tag which are (type , props , ..children ) in order

console.log(heading); // will return an object as heading is just an object here 

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));  //  putting h1 into the DOM/browser

root.render(heading); // converts the "heading" object into an heading tag & place it on the DOM