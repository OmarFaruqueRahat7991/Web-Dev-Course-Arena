import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import CourseCard from "../../Pages/CourseCard/CourseCard";
import Courses from "../../Pages/Courses/Courses";
import CoursesCategory from "../../Pages/CoursesCategory/CoursesCategory";
import Home from "../../Pages/Home/Home/Home";

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
                element: <Courses></Courses>,
            },
            {
                path: '/category/:id',
                element: <CoursesCategory></CoursesCategory>,
            },
            {
                path: '/card/:id',
                element: <CourseCard></CourseCard>,
            }
            
        ]
    },
])