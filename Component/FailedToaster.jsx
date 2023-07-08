import React from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FailedToaster(data) {
    toast.error(data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
   
}

export default FailedToaster;