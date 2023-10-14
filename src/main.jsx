import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Components/Router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='bg-slate-400 max-w-screen p-4 rounded-md'>
   <React.StrictMode>
    <RouterProvider router={router} />
    <App/>
  </React.StrictMode>,
 </div>
)
