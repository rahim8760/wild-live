import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login-Register/Login/Login";
import Register from "../../Pages/Login-Register/Register/Register";
import AddService from "../../Pages/Services/AddService";
import Services from "../../Pages/Services/Services";
import SingleService from "../../Pages/Services/SingleService";
import Review from "../../Pages/User/Review/Review";
import ErrorPage from "../../ShearPages/ErrorPage/ErrorPage";
import PrivetRout from "../PrivetRout/PrivetRout";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
                
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/service',
                element:<Services></Services>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<PrivetRout><Blog></Blog></PrivetRout>
            },
            {
                path:'/addservice',
                element:<AddService></AddService>
            },
            {
                path:'/myreviews',
                element:<Review></Review>
            },
            {
                path:'/singleService/:id',
                loader:async({params})=>fetch(`http://localhost:5000/services/${params.id}`),
                element:<SingleService></SingleService>

                
            }
        ]
    }
])
export default router