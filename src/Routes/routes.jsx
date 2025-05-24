import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/mainLayOut";

export const Routes = createBrowserRouter([
    {
        path:"/",
        Component:MainLayOut
    }
])