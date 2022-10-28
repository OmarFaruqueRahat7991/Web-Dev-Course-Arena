import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../../CheckOut/CheckOut";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import CourseData from "../../CourseData/CourseData";
import CourseDetails from "../../CourseDetails/CourseDetails";
import Main from "../../Layouts/Main";
import Login from "../../Login/Login";
import Blogs from "../../Pages/Blogs/Blogs";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Register from "../../Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                loader: () => fetch('https://my-tenth-assignment-server.vercel.app/allcourses'),
                element: <Courses></Courses>,
            },
            {
                path: '/category/:id',
                loader: ({params}) => fetch(`https://my-tenth-assignment-server.vercel.app/category/${params.id}`),
                element: <CourseData></CourseData>,
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`https://my-tenth-assignment-server.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>,
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>,
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            
            {
                path: '*',
                element: <ErrorPage></ErrorPage>,
            },
            
            
        ]
    },
])





