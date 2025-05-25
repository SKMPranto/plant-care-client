import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/mainLayOut";
import { Component } from "react";
import Home from "../Pages/Home";
import AddPlants from "../Pages/AddPlants";
import AllPlants from "../Pages/AllPlants";
import MyPlants from "../Pages/MyPlants";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";

export const Routes = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage></ErrorPage>,
        Component:MainLayOut,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/Add-Plants",
                Component:AddPlants
            },
            {
                path:"/All-Plants",
                Component:AllPlants
            },
            {
                path:"/My-Plants",
                Component:MyPlants
            },
            {
                path:"/Login",
                Component:Login
            },
            {
                path:"/Register",
                Component:Register
            }
        ]
    }
])