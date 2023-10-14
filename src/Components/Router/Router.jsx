import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import DataPerson from "../Pages/DataPerson/DataPerson";
import SetPerson from "../Pages/SetPerson/SetPerson";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>,  
        },
        {
            path:"/dataperson/:id",
            element:<DataPerson></DataPerson>,
            loader: async({params}) => fetch(`https://users-information-server.vercel.app/userinfo/${params.id}`)  
        },
        {
            path:"/setperson/:id",
            element:<SetPerson></SetPerson>,
            loader: async({params}) => fetch(`https://users-information-server.vercel.app/userinfo/${params.id}`)  
        }
    
      ]
    },
    {
            path:"*",
            element: <div><img className="w-full mx-auto h-96" src="https://i.ibb.co/d6nRn6r/error-404-12.jpg" alt="pic"/></div>, 
    }
  ]);