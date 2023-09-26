import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Home/Home";
import Donation from "../components/Donation/Donation";
import ClickedCards from "../components/Cards/ClickedCards";
import Statistics from "../components/Statistics/Statistics";
const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader : ()=> fetch('/public/Data/Data.json')
            },
            {
                path: '/Donation',
                element: <Donation></Donation>
            },
            {
                path: '/Statistics',
                element: <Statistics></Statistics>,
                loader : ()=> fetch('/public/Data/Data.json')
            },
            {
                path: '/Cards/:id',
                element: <ClickedCards></ClickedCards>,
                loader : ()=> fetch('/public/Data/Data.json')
            }
        ]
    }
])

export default MyRouter;