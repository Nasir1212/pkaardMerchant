'use client';
import Link from "next/link";
import "./login.css"
import FailedToaster from "../../Component/FailedToaster";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import http from "../../Component/http";
import swal from "sweetalert";
import SessionExport from "../../Component/SessionExport";
import { SET_USER_LOG_DATA } from "../../Redux/Reducers/LoginAction";
import { useRouter } from 'next/navigation';
export default function Home() {
 const dispatch = useDispatch();
const [formData, setFormData] = useState();
const router =  useRouter();

  
 const handleChange = (e)=>{

setFormData(value => ({...value,[e.target.name]:e.target.value}))
  }

  const handleSignIn = ()=>{
    http.post('/login',JSON.stringify(formData))
    .then(data=>{
      
      if(data.data['status'] == true){
        SessionExport.setSession(data.data);
        dispatch(SET_USER_LOG_DATA([data.data['status'],data.data['data']]))
        swal("Thanks !", "You have successfully logged!", "success")
        router.push("/User/home");
      }else{
        swal("Opps!","Phone number or Password not matched","error")
      }
    })
  }

  const {is_Login} = useSelector((state)=>state.loginAction);


  useEffect(()=>{

    if(is_Login==true){
      router.push("/User/home");
    }

  },[])

  return (
   <>
 

 <div className="container-fluid">
  <div className="row">
    
   
    <div className="col-12">

    
      <div className="log_in_container">
    
        <div  className="login_col" >



      <div>
      <h5 className="text-center text-danger" style={{fontWeight:"bold"}}>Pkaard Merchant Login</h5>
 <br/>
 <br/>
        
        <div className="form-group">
          <label htmlFor="">Phone Number</label>
          <input type="text" name="phone_number" onChange={(e)=>handleChange(e)} id="" className="form-control" placeholder="Enter phone number" />
        </div>

        <div className="form-group">
          <label htmlFor="">Password </label>
          <input type="password" name="password" onChange={(e)=>handleChange(e)}  className="form-control" placeholder="Enter password" />
        </div>
        <div>
          <br/>
          <a className="text-danger" style={{fontWeight:"bold"}} href="#" >Forgot Password?</a>
          
        </div>
        <br/>
        <div className="d-flex justify-content-between">
          <button onClick={handleSignIn} className="btn btn btn-danger"> Sign In</button>
          <div><span>Don't have an account?   <Link className="text-danger " style={{fontWeight:"bold"}} href="/signup" role="button">Sign Up</Link></span> 
       
           </div>
        </div>
        </div>

      </div>
      </div>
    </div>

  </div>
  
 </div>
 <ToastContainer />
 <footer>
  <div>
    <p>© Copyright by Pkaard Ltd.|Terms & Conditions</p>
  </div>
 </footer>

 
  </>
  )
}
