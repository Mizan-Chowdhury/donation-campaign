import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Home/Home";
import Donation from "../components/Donation/Donation";
import ClickedCards from "../components/Cards/ClickedCards";
import Statistics from "../components/Statistics/Statistics";
import Error from "../components/ErrorPage/Error";
const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader : ()=> fetch('/data.json')
            },
            {
                path: '/Donation',
                element: <Donation></Donation>
            },
            {
                path: '/Statistics',
                element: <Statistics></Statistics>,
                loader : ()=> fetch('/data.json')
            },
            {
                path: '/Cards/:id',
                element: <ClickedCards></ClickedCards>,
                loader : ()=> fetch('/data.json')
            }
        ]
    }
])

export default MyRouter;