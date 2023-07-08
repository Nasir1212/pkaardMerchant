'use client';
import { Suspense } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { useEffect } from "react";
import http from "../../../../Component/http";
import { useSelector } from "react-redux";
import Url from "../../../../Component/Url";
import { useRouter } from 'next/navigation';
import swal from "sweetalert";

 function AddServices() {


  const [Input,setInput] = useState({privilege:0});
  const [district,setDistrict] = useState([]);
  const [Category,setCategory] = useState([]);
  const [district_class,setDistrict_class] = useState('child_drop_down d-none');
  const [category_class,setCategory_class] = useState('child_drop_down d-none');
  const [inputDistrict,setInputDistrict] = useState('');
  const [inputCategory,setInputCategory] = useState('');
  const [showDiscountInputBox,setShowDiscountInputBox] = useState(false);
  const [isCheck,setCheckd] =useState();
  const {user_data} = useSelector((state)=>state.loginAction);

  const router = useRouter();

  useEffect(()=>{ 
    setInput(value=>({...value,'company_id':user_data[0]['id']}))
    http.get('/district')
    .then(data=>{
      setDistrict(data.data)
    }),

    http.get('category')
    .then(data=>{
      setCategory(data.data);
    })
  
    window.onclick = (e)=>{
e.target.name=='district' || e.target.className=='district_id'? "" : setDistrict_class("child_drop_down d-none")
e.target.name=='category' || e.target.className=='category_id' ? "" : setCategory_class("child_drop_down d-none")

    }

    Run();
  },[])
 
  async function  Run(){
      const res = await fetch("http://127.0.0.1:8000/api/getAllOrder");
   
     const data =  res.json()
    console.log(data)
    }
    function handleFormData(){
      http.post(Url.affiliation_product_insert,JSON.stringify(Input))
      .then(data=>{
       console.log(data.data)
       if(data.data['condition']==true){
        swal("Success", "You have successfully Uploaded!", "success")

        sessionStorage.setItem('product_id',data.data['id'])
        router.push('/User/service_img')
       }
      

      })
      console.log(Input)

    }

  
 function  focusin (e){

if(e.target.name=='district'){
setDistrict_class("child_drop_down")
}

if(e.target.name=='category'){
  setCategory_class('child_drop_down')
}

  }

  
 
 function handleClick (e){
  setInput(value=>({...value,[e.target.className]:e.target.id}))
console.log(e.target.className)
 if(e.target.className=='district_id'){
  setInputDistrict(e.target.innerText)
  setDistrict_class("child_drop_down d-none")
 }

 if(e.target.className=='category_id'){
  setInputCategory(e.target.innerText)
  setCategory_class("child_drop_down d-none")
 }
  }

  function handlePrivilege(e){
  
    setCheckd(e.target.id)
  e.target.id=='discount'?setShowDiscountInputBox(true):setShowDiscountInputBox(false)
  e.target.id=='bogo' || e.target.id=='free' ?setInput(value=>({...value,[e.target.name]:e.target.id})):'';

  }

  function handleReactQuill (html){
setInput(value=>({...value,'details':html}))

  }

 function handleDiscountAmount (e){
    const pattern  = /^[0-9]*$/;
if(pattern.test(e.target.value) == true){
  setInput(value=>({...value,[e.target.name]:e.target.value}))
}
  }

    return ( <>
    
    <Suspense fallback="<div>Loading .......</div>"/>
    <main >
    <div>
        <div style={{marginLeft:"1rem",marginTop:"1rem"}}>
            <b>Add Services</b>
        </div>
        <br />
        <div className="card p-3">
        <form className="row" name="affiliation_product">
           
           
          
            <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="">Title </label>
                <input onChange={(e)=>{setInput(value=>({...value,[e.target.name]:e.target.value}))}} type="text" name="title" className="form-control"placeholder="Enter Title"/>
              </div>
             
          
              
              <div className="form-group col-sm-12 col-md-6 col-lg-6  position-relative">
                <label htmlFor="">Category</label>
                <input value={inputCategory}  name="category" onFocus={(e)=>{focusin(e)}} onChange={(e)=>{handleChange(e)}}  type="text"  className="form-control"placeholder="Enter Category"/>
                <div className={category_class}>
                  <ul>
                   
               {Category.map((cate)=>{
                const {category_name,id} = cate;

                return (<>
                 <li onClick={e=>handleClick(e)} className="category_id" id={id}>{category_name}</li>
                
                </>)
               })}
                  </ul>
                </div>
              </div>
             
          
              <div className="form-group col-sm-12 col-md-6 col-lg-6 position-relative">
                <label htmlFor="">District</label>

                <input name="district" value={inputDistrict} onFocus={(e)=>{focusin(e)}} onChange={(e)=>{handleChange(e)}}   type="text" className="form-control"placeholder="Enter District"/>
                <div className={district_class}>
                  <ul>
                  {district.map((d)=>{
                    const {name,id} =d;
                      return (<>
                      
                     <li onClick={e=>handleClick(e)} className="district_id" id={id}>{name}</li>
                     
                      </>)
                    })}
                  </ul>
                </div>
              </div>

              <div className="form-group col-sm-12 col-md-6 col-lg-6 position-relative">
                <label htmlFor="">Regular price</label>
                

                <input name="regular_price" onChange={(e)=>{setInput(value=>({...value,[e.target.name]:e.target.value}))}} className="form-control" placeholder="Regular price"/>
                
              </div>
             
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="">Phone</label>
                <input type="text"  onChange={(e)=>{setInput(value=>({...value,[e.target.name]:e.target.value}))}} name="phone" className="form-control" placeholder="Enter Phone"/>
              </div>
             
              <div className="form-group col-sm-12 col-md-6 col-lg-6">
                <label htmlFor="">Privilege </label>
                <div className=" d-flex justify-content-between">
                    <div className=" input-group mb-2 ">
                        <div id="discount_container" className={showDiscountInputBox==true?`input-group-prepend d-none `:`input-group-prepend`}>
                          <div className="input-group-text ">
                            <label className="checkmark_container ">Discount
                                <input id="discount" name="discount_mark" onChange={e=>handlePrivilege(e)} checked={isCheck=='discount'}  type="checkbox"/>
                                <span className="checkmark"></span>
                              </label>

                          </div>
                        </div>
                        
                        <input type="text" id="input_discount" value={ /^[0-9]*$/.test(Input['privilege']) == false? Input['privilege'].replace(/\w|-/g, ''):Input['privilege']} name="privilege" onChange={e=>{handleDiscountAmount(e)}} className={showDiscountInputBox==true?`form-control `:`form-control d-none`} placeholder="Enter Discount"/>

                      </div>

                      <div className=" input-group mb-2 ">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <label className="checkmark_container">BOGO
                                <input id="bogo" name="privilege" onChange={e=>handlePrivilege(e)} checked={isCheck=='bogo'}  type="checkbox" />
                                <span className="checkmark"></span>
                              </label>
                          </div>
                        </div>
                      </div>


                      <div className=" input-group mb-2 ">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <label className="checkmark_container">FREE
                                <input id="free" name="privilege" onChange={e=>handlePrivilege(e)} checked={isCheck=='free'}  type="checkbox"/>
                                <span className="checkmark"></span>
                              </label>
                          </div>
                        </div>
                      </div>

                      
                </div>
            </div>
           
              <div className="form-group col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="">Address </label>
               <textarea  onChange={(e)=>{setInput(value=>({...value,[e.target.name]:e.target.value}))}} className="form-control" name="address"  placeholder="Enter Address" cols="5" rows="5"></textarea>
              </div>
             
            
              <div className="form-group col-sm-12 col-md-12 col-lg-12">
                <label htmlFor="">Product Details </label>
                <ReactQuill theme="snow" onChange={handleReactQuill} />

              
               
            </div>
          
           <div className="form-group col-sm-12 col-md-12 col-lg-12">
           <button type="button" className="btn btn-info" onClick={handleFormData}>Submit </button>
              </div>
          </form>
     

        </div>
        
    </div>
    </main>
 
    </> );
}

export default AddServices;