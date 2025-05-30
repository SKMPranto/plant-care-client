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
import PrivateRoutes from "./PrivateRoutes";
import EditMyPlants from "../Pages/EditMyPlants";

export const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayOut,
    children: [
      {
        index: true,
        HydrateFallback: Spinner,
        loader: () => fetch("https://plant-care-server-dun.vercel.app/plants"),
        Component: Home,
      },
      {
        path: "/Add-Plants",
        element: (
          <PrivateRoutes>
            <AddPlants></AddPlants>
          </PrivateRoutes>
        ),
      },
      {
        path: "/All-Plants",
        HydrateFallback: Spinner,
        loader: () => fetch("https://plant-care-server-dun.vercel.app/plants"),
        element: (
          <PrivateRoutes>
            <AllPlants></AllPlants>
          </PrivateRoutes>
        ),
      },
      {
        path: "/My-Plants",
        element: (
          <PrivateRoutes>
            <MyPlants></MyPlants>
          </PrivateRoutes>
        ),
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/Plants-Details/:id",
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: ({ params }) =>
          fetch(`https://plant-care-server-dun.vercel.app/plants/${params.id}`),
        element: (
          <PrivateRoutes>
            <PlantsDetails></PlantsDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/Edit-My-Plants/:id",
        HydrateFallback: Spinner,
        loader: ({ params }) =>
          fetch(`https://plant-care-server-dun.vercel.app/plants/${params.id}`),
        element: (
          <PrivateRoutes>
            {" "}
            <EditMyPlants></EditMyPlants>{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
