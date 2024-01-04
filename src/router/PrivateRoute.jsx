// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux'; // Import useSelector from react-redux

// const PrivateRoute = ({ path, ...props }) => {
//   console.log(path,...props,"yyy");
//   // Use useSelector to access the user token from Redux state
//   const token = useSelector((state) => state.user.token);
// console.log(token,"iiiiiiiiiiiiiiii");
//   // Check if the user is authenticated based on the presence of the token
//   const isAuthenticated = !!token;

//   if (!isAuthenticated) {
//     // If not authenticated, redirect to the login page
//     return <Navigate to="/login" />;
//   }

//   // If authenticated, render the protected route
//   return <Route path={path} {...props} />;
// };

// export default PrivateRoute;

// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// // Function to check if the user is authenticated based on token
// const isAuthenticated = () => {
//   // Get the user data from localStorage
//   const userDataString = localStorage.getItem('persist:root');
  
//   // Parse the user data to extract the token
//   const parsedData = JSON.parse(userDataString || '{}');
//   const user = JSON.parse(parsedData?.user || '{}');
//   const token = user?.token; // Extract the token
  
//   // Check if the token exists
//   return token ? true : false;
// };

// const PrivateRoute = ({ element, ...props }) => {
//   return isAuthenticated() ? (
//     <Route {...props} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// export default PrivateRoute;
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  console.log(children,"yy");
  const navigate = useNavigate();

  // Get the user data string from localStorage
  const userDataString = localStorage.getItem('persist:root');

  // Convert the user data string into a JavaScript object
  const parsedData = JSON.parse(userDataString || '{}');

  // Extract the user details from the parsed data
  const user = JSON.parse(parsedData?.user || '{}');

  // Extract the token from the user object
  const token = user?.token;

  console.log("Token:", token); // Log the token

  useEffect(() => {
    // Check if the token exists (user is authenticated)
    if (token) {
      navigate('/'); // Navigate to the home page route
    } else {
      // If token does not exist, navigate to the login page
      navigate('/login');
    }
  }, [token, navigate]); // Add 'token' and 'navigate' to the dependency array of useEffect

  return children;
};

export default PrivateRoute;
