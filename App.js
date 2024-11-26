import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div" ,
    { id: "parent" },
    React.createElement( "div",{ id: "child"}, [          // no need for the [] if its just one elment
        React.createElement("h1" , {} , "This is Namaste React"),
        React.createElement("h2" , {} , "I am an h2 tag"),
    ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));  //  putting h1 into the DOM/browser

root.render(parent); // converts the "parent" object into an heading tag & place it on the DOM



