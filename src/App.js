import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router";


const AppLayout = () => {
    return ( 
        <div className="app">
            <Header />
            <Outlet />  {/* Outlet doesn't show up in the HTML in console*/}
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },  // This means if the Path is "/about" then load the About component on the page 
                //                   otherwise load the Applayout 
            {
                path: "/contact",
                element: <Contact />,
            },
        ],    
        errorElement: <Error/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router ={appRouter} />); 
