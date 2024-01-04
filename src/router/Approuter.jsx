import { Navigate, NavigationType, createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import Dashboard from "../Pages/Dashboard";
import Notefoundpage from "../Pages/Notefoundpage";
import Loginpage from "../Pages/Loginpage";
import Addproduct from "../Pages/Addproduct";
import PrivateRoute from "./PrivateRoute";

// Retrieve the persisted state string from localStorage
const persistedStateString = localStorage.getItem('persist:root');

// Parse the string to convert it into a JavaScript object
const parsedPersistedState = JSON.parse(persistedStateString);

// Extract the user string from the parsed persisted state
const userString = parsedPersistedState.user;

// Parse the user string to convert it into a JavaScript object
const parsedUser = JSON.parse(userString);

// Extract the token from the parsed user object
const token = parsedUser.token;
console.log(token,"iiiiiiiii");
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <Notefoundpage />,
        children: [
            {
                path: '/',
                element: token ? <Dashboard /> : <Navigate to={'/login'} />,
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><Addproduct /></PrivateRoute>, 
            },
        ]
    },
    {
        path: '/login',
        element:  token ? <Navigate to={'/'} />:<Loginpage/>
        
    }, 
     {
    path: '*',
    element: <Notefoundpage />, // Display Notefoundpage for unknown routes
  },
])

export default router; 