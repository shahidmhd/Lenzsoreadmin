import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './Components/Errorboundary.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Store.js";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Provider store={store}>
  
     <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
                <ErrorBoundary>
    <App />
    </ErrorBoundary>
    
  </Provider>
    </>

)
