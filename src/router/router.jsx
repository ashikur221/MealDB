import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/home/Homepage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Homepage/>
            }
        ]
    }
])

export default router;