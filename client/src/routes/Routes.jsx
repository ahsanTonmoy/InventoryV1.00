import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Deshboard from "../page/deshboard/Deshboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Deshboard/>
            }
        ]


    }
])