'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import Url from "../../../Component/Url";
import FailedToaster from "../../../Component/FailedToaster";
import { ToastContainer, toast } from 'react-toastify';
import swal from "sweetalert";
import http from "../../../Component/http";
export default  function Signup() {

  const [formData,setFormData] =useState({back_nid:null,company_tin:null,front_nid:null,back_nid:null});
  const [CheckValidation,setCheckValidation] = useState(true);
 
const [frontNID,setFrontNID] =useState();
const [backendNID,setBackendNID] =useState();
const [frontNIDPath,setFrontNIDPath] = useState("");
const [backendNIDPath,setBackendNIDPath] = useState("");
const [contact_number, setContact_number] = useState();
const [errorMsgContactNumber,setErrorMsgContactNumber] = useState();

// async function uploadImg(img,state={}){
//   var formData = new FormData();

//   formData.append('pkaard_img',img);
//         try {

//            const response  = await fetch(`https://img.pkaard.com/upload_img.php`,{
//             method:'POST',
//             body:formData
//         })
//       const  result  = await response.json();
//         console.log(result);
       
//         state=='front'? setFrontNIDPath(result['img_path']):setBackendNIDPath(result['img_path'])
       
               
//         } catch (error) {
//             console.log(error)
//         }

// }

// async function uploadForm(){

//   let data  =  Object.fromEntries(new FormData(document.forms['affiliation_partner_form']));
//   console.log(data)
//   try {
   
//    const response  = await fetch(Url.signup,{
//       method:'POST',

//       body:JSON.stringify(data),
//   headers: new Headers({
//   'Content-Type': 'application/json',

// })
//       })
//      const result  = await response.json();
// console.log(result)
  
//    if(response.status==200){
//     if(result.condition==true){
//       swal("Congratulations", "You have successfully registered!", "success")
//     }
//    }



// http.post('/signup',data).then((res)=>{
//   console.log(res)
// })
//     } catch (error) {
   
//     }

// }

function handleChange(e){
  if(e.target.type == "file"){

    let reader = new FileReader() 
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {    
      if (e.target.files[0].type.match('image.*')) {
        console.log("is an image");
        setFormData(value =>({...value,[e.target.name]:reader.result}))
    }else{
      setFormData(value =>({...value,[e.target.name]:undefined}))
    }
    }
    // setFormData(value =>({...value,[e.target.name]:e.target.files[0]}))
  }else{
    setFormData(value =>({...value,[e.target.name]:e.target.value}))

  }

}

  async function  handleSignup(){ 
    setCheckValidation(false) 
    const ValidationFiled = {
      company_name:"Enter Company Name",
      company_owner_name:"Enter Company Owner Name",
      company_address: "Enter Company Address",
      contact_role:"Select Company Role ",
      contact_full_name:"Enter Full Name",
      contact_number:"Enter Contact Number",
      email_address: "Enter Mail Address",
      discount_privilege: "Enter Discount / Privilege",
      link: "Enter Web or Facebook Link",
      signing_authority:"Enter Signing Authority's Name",
      busness_type:"Enter Busness Type",
      sign_img:"Upload a Sign image ",
      company_logo:"Upload Company Logo"

    }

    const ValidationFiledKeys =  Object.keys(ValidationFiled);
    ValidationFiledKeys.forEach((field)=>{
      if(formData[field]  =="" || formData[field]  == undefined ||  formData[field]  == null ){
        FailedToaster(ValidationFiled[field]);
        
      }
    })

  
const { company_name,company_owner_name,company_address,contact_role,contact_full_name,contact_number,email_address,discount_privilege,link,signing_authority,busness_type,sign_img,company_logo} = formData;
const checked = (company_name != 0  && company_name != undefined)  &&  (company_owner_name != 0  && company_owner_name != undefined) &&    (company_address != 0  && company_address !=  undefined) &&  ( contact_role != 0  && contact_role != undefined) &&  ( contact_full_name != 0  && contact_full_name !=  undefined) &&  (contact_number != 0  && contact_number !=  undefined) &&  ( email_address != 0  && email_address !=  undefined) &&  (link != 0  && link !=  undefined) &&  (discount_privilege != 0  && discount_privilege !=  undefined) &&   (signing_authority != 0 && signing_authority != undefined) &&  (busness_type != 0  && busness_type !=  undefined) && (sign_img != 0  && sign_img !=  undefined) &&   (company_logo != 0  && company_logo != undefined );
  

if(checked){
  console.log("Send in to Server")

  try {
   
       const response  = await fetch(Url.signup,{
          method:'POST',
          body:JSON.stringify(formData),
      headers: new Headers({
      'Content-Type': 'application/json',
    
    })
          })
         const result  = await response.json();
    console.log(result)
    if(response.status==200){
          if(result.condition==true){
            swal("Congratulations", "You have successfully Sign Up!", "success")
          }else{
            swal("Opps !", "You have  Sign Up Failed!", "error")

          }
         }

        }catch(error){
          console.log(error)

        }
      

// let form_data = new FormData();
// for (const key in formData) {
//   form_data.append(key,formData[`${key}`])
//   if (Object.hasOwnProperty.call(formData, key)) {
//     form_data.append(`${key}`,formData[`${key}`])
//      console.log(key)
    

//   }
// }



}


    // uploadImg(frontNID,'front')
    // uploadImg(backendNID,'backend') 
   

  //  const interval =  setInterval(() => {
  //  const login_info =  Object.fromEntries(new FormData(document.forms['affiliation_partner_form']));
  // //  if(login_info['front_nid'].length > 0 && login_info['back_nid'].length > 0){
  // //   uploadForm()
  // //   clearInterval(interval)
  // //  }
  //   }, 2000);
   
   
  }


 async function check_phone_number (e){
const pattern  = /^[0-9]*$/;
if(pattern.test(e) == true){
  setContact_number(e)
//   const response  = await fetch(Url.check_Auth_phone_number+"/"+e)
// const result  = await response.json();
// if(response.status==200 ){
//   if(result.status==true){
//     setContact_number("01")
//     setErrorMsgContactNumber(result.message)
//   }else{
//     setErrorMsgContactNumber("")
//   }
// }
// console.log(result)


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
        <form className="row" name="affiliation_partner_form" autoComplete="of">
            <div className="form-group col-sm-12 col-md-6 col-lg-6 mt-2">
              <label htmlhtmlFor="">Company Name <span className="custom_require">*</span> </label>
              <input type="text" style={ CheckValidation == false && formData.company_name == undefined || formData.company_name == "" ?  {border:"1px solid red"}:{}} className="form-control" onChange={(e)=>handleChange(e)}  name="company_name"  placeholder="Company Name"/>
            </div>

            <div className="form-group col-sm-12 col-md-6 col-lg-6 mt-2">
                <label htmlFor="">Company Owner Name  <span className="custom_require">*</span>  </label>
                <input type="text" style={ CheckValidation == false && formData.company_owner_name == undefined || formData.company_owner_name == "" ?  {border:"1px solid red"}:{}} className="form-control"  onChange={(e)=>handleChange(e)}   name="company_owner_name" placeholder="Company Owner Name"/>
              </div>
  
              <div className="form-group col-sm-12 col-md-6 col-lg-6 mt-2">
                <label htmlFor="">Company TIN  </label>
                <input type="text"  className="form-control"  onChange={(e)=>handleChange(e)}  name="company_tin" placeholder="Company TIN "/>
              </div>
  
              <div className="form-group col-sm-12 col-md-6 col-lg-6 mt-2">
                <label htmlFor="">Company Address  <span className="custom_require">*</span>  </label>
                <textarea /* style={{height:"40px"}} */ style={ CheckValidation == false && formData.company_address == undefined || formData.company_address == "" ?  {border:"1px solid red"}:{}}  onChange={(e)=>handleChange(e)}  name="company_address" className="form-control" placeholder="Company Address "> </textarea>
              </div>
  
              <div className="form-group col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="">Contact Details  <span className="custom_require">*</span> </label>
               
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-6   mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="nidno">Your Role</span>
                            </div>

                            <select className="form-control" style={ CheckValidation == false && formData.contact_role == undefined || formData.contact_role == "" ?  {border:"1px solid red"}:{}}  onChange={(e)=>handleChange(e)} defaultChecked=""  name="contact_role" >
                                <option value="" defaultChecked>Select Role</option>
                                <option>Owner</option>
                                <option>Manager</option>
                                <option>Employer</option> 
                              </select>           
                            </div>  
                    </div>
                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " htmlFor="contact_full_name">Full Name</span>
                            </div>
                            <input type="text" style={ CheckValidation == false && formData.contact_full_name == undefined || formData.contact_full_name == "" ?  {border:"1px solid red"}:{}} placeholder="Full Name"  onChange={(e)=>handleChange(e)}  className="form-control col-md-12"   name="contact_full_name" />
                          </div> 
                    </div>

                   

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text "  htmlFor="dateofbirth">Contact Number</span>
                            </div>
                            <input type="text" style={ CheckValidation == false && formData.contact_number == undefined || formData.contact_number == "" ?  {border:"1px solid red"}:{}} placeholder="Contact Number"  onChange={(e)=>handleChange(e)}  name="contact_number" value={contact_number}  className="form-control col-md-12 d-block"/>
                           <br />
                            <small id="emailHelp" className="form-text  text-danger ">{errorMsgContactNumber}</small>

                          </div> 
                    </div>

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " htmlFor="">Email Address</span>
                            </div>
                            <input type="text" style={ CheckValidation == false && formData.email_address == undefined || formData.email_address == "" ?  {border:"1px solid red"}:{}} placeholder="Email Address"  onChange={(e)=>handleChange(e)}   className="form-control col-md-12"  name="email_address" />
                          </div> 
                    </div>
                </div>

              </div>

              <div className="form-group col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="">NID Info</label>
               
                <div className="row">
                   
                
                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " htmlFor="dateofbirth">Front</span>
                            </div>

                            <input type="file" name="front_nid"  onChange={(e)=>handleChange(e)}  className="form-control col-md-12"   />
                          </div> 
                    </div>

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " htmlFor="dateofbirth">Back</span>
                            </div>
                            <input type="file" name="back_nid"  onChange={(e)=>handleChange(e)}  className="form-control col-md-12" />
                          </div> 
                    </div>


                </div>

              </div>


              <div className="form-group col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="">Company Details  <span className="custom_require">*</span> </label>
               
                <div className="row">
                   
                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " htmlFor="busness_type">Busness Type </span>
                            </div>
                            <input type="text" placeholder="Busness Type" style={ CheckValidation == false && formData.busness_type == undefined || formData.busness_type == "" ?  {border:"1px solid red"}:{}}  onChange={(e)=>handleChange(e)}  className="form-control col-md-12"   name="busness_type" />
                          </div> 
                    </div>

                   

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text "  htmlFor="dateofbirth">Website/facebook link</span>
                            </div>
                            <input type="text" style={ CheckValidation == false && formData.link == undefined || formData.link == "" ?  {border:"1px solid red"}:{}} placeholder="Website/facebook link"  onChange={(e)=>handleChange(e)}  name="link" className="form-control col-md-12 d-block" />
                           <br />
                            <small  className="form-text  text-danger ">{errorMsgContactNumber}</small>

                          </div> 
                    </div>

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                        <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text "  htmlFor="dateofbirth">Signing Authority</span>
                            </div>
                            <input type="text" placeholder="Signing Authority" style={ CheckValidation == false && formData.signing_authority == undefined || formData.signing_authority == "" ?  {border:"1px solid red"}:{}}  onChange={(e)=>handleChange(e)}  name="signing_authority" className="form-control col-md-12 d-block" />
                           <br />
                            <small  className="form-text  text-danger ">{errorMsgContactNumber}</small>

                          </div> 
                    </div>

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                    <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " htmlFor="dateofbirth">Company Logo</span>
                            </div>
                            
                            <input type="file" style={ CheckValidation == false && formData.company_logo == undefined || formData.company_logo == "" ?  {border:"1px solid red"}:{}} onChange={(e)=>handleChange(e)} name="company_logo"  className="form-control col-md-12" />
                          </div> 
                    </div>

                    <div className="col-md-6 col-ms-12 col-lg-6  mb-3 ">
                    <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text " htmlFor="dateofbirth">Upload Sign</span>
                            </div>
                            <input type="file" style={ CheckValidation == false && formData.sign_img == undefined || formData.sign_img == "" ?  {border:"1px solid red"}:{}} onChange={(e)=>handleChange(e)} name="sign_img"  className="form-control col-md-12" />
                          </div> 
                    </div>

                  <div className="form-group col-sm-12 col-md-6 col-lg-6 mt-2">
                    <label htmlFor="">Discount & Privilege  <span className="custom_require">*</span> </label>
                    <input type="text" className="form-control" style={ CheckValidation == false && formData.discount_privilege == undefined || formData.discount_privilege == "" ?  {border:"1px solid red"}:{}}  name="discount_privilege"  onChange={(e)=>handleChange(e)}   placeholder="Discount & Privilege"/>
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
