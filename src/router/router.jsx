import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/home/Homepage";
import Meals from "../pages/meals/Meals";
import MealDetails from "../pages/mealDetails/MealDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: '/meals',
                element: <Meals/>
            },
            {
                path: '/details/:id',
                element: <MealDetails/>
            }
        ]
    }
])

export default router;