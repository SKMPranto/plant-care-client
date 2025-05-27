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
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayOut,
    children: [
      {
        index: true,
        HydrateFallback: Spinner,
        loader: () => fetch("http://localhost:3000/plants"),
        Component: Home,
      },
      {
        path: "/Add-Plants",
        Component: AddPlants,
      },
      {
        path: "/All-Plants",
        HydrateFallback: Spinner,
        loader: () => fetch("http://localhost:3000/plants"),
        Component: AllPlants,
      },
      {
        path: "/My-Plants",
        Component: MyPlants,
      },
      {
        path: "/Auth/Login",
        Component: Login,
      },
      {
        path: "/Auth/Register",
        Component: Register,
      },
      {
        path: "/Plants-Details/:id",
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
        Component: PlantsDetails,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
