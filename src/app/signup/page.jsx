'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import Url from "../../../Component/Url";
import FailedToaster from "../../../Component/FailedToaster";
import { ToastContainer, toast } from 'react-toastify';
import swal from "sweetalert";
import http from "../../../Component/http";
export default  function Signup() {
 
const [frontNID,setFrontNID] =useState();
const [backendNID,setBackendNID] =useState();
const [frontNIDPath,setFrontNIDPath] = useState("");
const [backendNIDPath,setBackendNIDPath] = useState("");
const [contact_number, setContact_number] = useState();
const [errorMsgContactNumber,setErrorMsgContactNumber] = useState();

async function uploadImg(img,state={}){
  var formData = new FormData();

  formData.append('pkaard_img',img);
        try {

           const response  = await fetch(`https://img.pkaard.com/upload_img.php`,{
            method:'POST',
            body:formData
        })
      const  result  = await response.json();
        console.log(result);
       
        state=='front'? setFrontNIDPath(result['img_path']):setBackendNIDPath(result['img_path'])
       
               
        } catch (error) {
            console.log(error)
        }

}

async function uploadForm(){

  let data  =  Object.fromEntries(new FormData(document.forms['affiliation_partner_form']));
  console.log(data)
  try {
   
   const response  = await fetch(Url.signup,{
      method:'POST',

      body:JSON.stringify(data),
  headers: new Headers({
  'Content-Type': 'application/json',

})
      })
     const result  = await response.json();
console.log(result)
  
   if(response.status==200){
    if(result.condition==true){
      swal("Congratulations", "You have successfully registered!", "success")
    }
   }



// http.post('/signup',data).then((res)=>{
//   console.log(res)
// })
    } catch (error) {
   
    }

}

   function  handleSignup(){
  
  const  login_info =  Object.fromEntries(new FormData(document.forms['affiliation_partner_form']));

if(login_info['password'] != login_info['confirm_password']){
  console.log("password failed")
 FailedToaster("password and confirm password not match");
  return false;
}
if(login_info['password'].length <= 0){
  FailedToaster("Enter password");
  return false;
}
if(login_info['company_name'].length <= 0){
  FailedToaster("Enter Company name");
  return false;
}
if(login_info['company_owner_name'].length <= 0){
  FailedToaster("Enter Company owner name");
  return false;
}

if(login_info['company_tin'].length <= 0){
  FailedToaster("Enter Company TIN Number");
  return false;
}

if(login_info['company_address'].length <= 0){
  FailedToaster("Enter Company Address");
  return false;
}

if(login_info['contact_role'].length <= 0){
  FailedToaster("Select Your Role");
  return false;
}



if(login_info['contact_full_name'].length <= 0){
  FailedToaster("Enter Full name");
  return false;
}

if(login_info['contact_number'].length <= 0){
  FailedToaster("Enter Contact Number ");
  return false;
}

if(login_info['email_address'].length <= 0){
  FailedToaster("Enter Email Address ");
  return false;
}
 if( frontNID==undefined){
  FailedToaster("Select Front NID photo");
  return false;
 }

 if(backendNID==undefined){
  FailedToaster("Select Back part NID photo");
  return false;
 }







    uploadImg(frontNID,'front')
    uploadImg(backendNID,'backend') 
   

   const interval =  setInterval(() => {
   const login_info =  Object.fromEntries(new FormData(document.forms['affiliation_partner_form']));
   if(login_info['front_nid'].length > 0 && login_info['back_nid'].length > 0){
    uploadForm()
    clearInterval(interval)
   }
    }, 2000);
   

  }


 async function check_phone_number (e){
const pattern  = /^[0-9]*$/;
if(pattern.test(e) == true){
  setContact_number(e)
  const response  = await fetch(Url.check_Auth_phone_number+"/"+e)
const result  = await response.json();
if(response.status==200 ){
  if(result.status==true){
    setContact_number("01")
    setErrorMsgContactNumber(result.message)
  }else{
    setErrorMsgContactNumber("")
  }
}
console.log(result)
}


  }
  return (
   <>
 

 <div className="container-fluid">
  <div className="row">
    
   
    <div className="col-12">

    
      <div className="signup_container">
    
        <div  className="signup_col" >



      <div>
      <h5 className="text-center text-danger" style={{fontWeight:"bold"}}>Pkaard Merchant Sign Up</h5>
 <br/>


         <div>
        <form className="row" name="affiliation_partner_form" autocomplete="of">
            <div className="form-group col-sm-12 col-md-6 col-lg-6 mt-2">
              <label for="">Company Name </label>
              <input type="text" className="form-control"  name="company_name"  placeholder="Company Name"/>
            </div>

            <div className="form-group col-sm-12 col-md-6 col-lg-6 mt-2">
                <label for="">Company Owner Name </label>
                <input type="text" className="form-control"  name="company_owner_name" placeholder="Company Owner Name"/>
              </div>
  
              <div className="form-group col-sm-12 col-md-6 col-lg-6 mt-2">
                <label for="">Company TIN </label>
                <input type="text" className="form-control"  name="company_tin" placeholder="Company TIN "/>
              </div>
  
              <div className="form-group col-sm-12 col-md-6 col-lg-6 mt-2">
                <label for="">Company Address </label>
                <textarea style={{height:"40px"}} name="company_address" className="form-control" placeholder="Company Address "> </textarea>
              </div>
  
              <div className="form-group col-sm-12 col-md-12 col-lg-12">
                <label for="">Contact Details </label>
               
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-6   mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="nidno">Your Role</span>
                            </div>

                            <select className="form-control" name="contact_role" >
                                <option value="">Select Role</option>
                                <option>Owner</option>
                                <option>Manager</option>
                                <option>Employer</option> 
                              </select>           
                            </div>  
                    </div>
                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " for="contact_full_name">Full Name</span>
                            </div>
                            <input type="text" placeholder="Full Name" className="form-control col-md-12"   name="contact_full_name" />
                          </div> 
                    </div>

                   

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text "  for="dateofbirth">Contact Number</span>
                            </div>
                            <input type="text" placeholder="Contact Number" value={contact_number} onChange={(e)=>check_phone_number(e.target.value)} className="form-control col-md-12 d-block" name="contact_number"/>
                           <br />
                            <small id="emailHelp" className="form-text  text-danger ">{errorMsgContactNumber}</small>

                          </div> 
                    </div>

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " for="">Email Address</span>
                            </div>
                            <input type="text" placeholder="Email Address" className="form-control col-md-12"  name="email_address" />
                          </div> 
                    </div>

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " for="dateofbirth">NID Copy (Front)</span>
                            </div>
                            <input type="hidden" value={frontNIDPath} name="front_nid" />

                            <input type="file" onChange={(e)=>{setFrontNID(e.target.files[0])}}  className="form-control col-md-12"   />
                          </div> 
                    </div>

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " for="dateofbirth">NID Copy (Backend)</span>
                            </div>
                            <input type="hidden" value={backendNIDPath} name="back_nid" />
                            <input type="file" onChange={(e)=>{setBackendNID(e.target.files[0])}}  className="form-control col-md-12" />
                          </div> 
                    </div>


                </div>

              </div>


              <div className="form-group col-sm-12 col-md-12 col-lg-12">
                <label for="">Set User Password  </label>

                <div className="row">
                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " for="dateofbirth">Password</span>
                            </div>
                            <input type="password" placeholder="Contact Number" className="form-control col-md-12"  name="password" />
                          </div> 
                    </div>

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " for="dateofbirth"> Confirm  Password</span>
                            </div>
                            <input type="text" placeholder=" Confirm  password" className="form-control col-md-12"  name="confirm_password" />
                          </div> 
                    </div>
                </div>


              </div>
  
      
              <button  type="button" onClick={handleSignup}  className="btn btn-danger btn-sm">Signup Pkaard Marchent </button>
           
          </form>
      </div> 
       

        </div>

      </div>
      </div>
    </div>

  </div>
  
 </div>

 <footer>
  <div>
    <p>© Copyright by Pkaard Ltd.|Terms & Conditions</p>
  </div>
 </footer>
<ToastContainer/>
 
  </>
  )
}
