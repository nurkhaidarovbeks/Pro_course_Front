import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CourseDetail from "./pages/CourseDetail";
import { getCourseById } from "./data/data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      {
        path: "courses/:id",
        element: <CourseDetail />,
        loader: async ({ params }) => {
          const course = getCourseById(Number(params.id));
          if (!course) {
            throw new Error("Course not found");
          }
          return { course };
        },
        errorElement: <p>Course not found</p>,
      },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);