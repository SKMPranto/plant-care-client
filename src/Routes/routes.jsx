import { createBrowserRouter } from "react-router";
import { Component } from "react";
import Home from "../Pages/Home";
import AddPlants from "../Pages/AddPlants";
import AllPlants from "../Pages/AllPlants";
import MyPlants from "../Pages/MyPlants";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import MainLayOut from "../MainLayOut/MainLayOut";
import Spinner from "../Components/Spinner";
import PlantsDetails from "../Pages/PlantsDetails";

export const Routes = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage></ErrorPage>,
        Component:MainLayOut,
        children:[
            {
                index:true,
                hydrateFallbackElement:<Spinner></Spinner>,
                loader:()=>fetch('http://localhost:3000/plants'),
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
            },
            {
                path:"/PlantsDetails/:id",
                Component:<PlantsDetails></PlantsDetails>
            },
            {
                path:"*",
                Component:ErrorPage
            }
        ]
    }
])