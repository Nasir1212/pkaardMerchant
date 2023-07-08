'use client';
import { useEffect, useState } from "react";
import http from "../../../../Component/http";
import SuccessToaster from "../../../../Component/SuccessToaster";
import FailedToaster from "../../../../Component/FailedToaster";
import {  toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

function ServicesImg() {

    const [Tr,setTr] =useState([]);
    const [increment,setIncrement] = useState(1);
  
  async function upload_file(e){
    const formData = new FormData();
    formData.append('pkaard_img',document.getElementsByName(e)[0].files[0]);  
    const response = await fetch(`https://img.pkaard.com/upload_img.php`,{
        method:'POST',
        body:formData
        
    } );
   
    const result = await response.json();
    console.log(result);
    let data = {
        img_path:result['img_path'],
        product_id:sessionStorage.getItem('product_id')
    }
   http.post('/affiliation_product_img_path_insert',JSON.stringify(data))
   .then(data=>{
    SuccessToaster("Successfully Image Uploaded")
    console.log(data)
    if(data.data['true']==true){
    document.getElementById('id_'+e).innerHTML='Uploaded file'
    document.getElementById('id_'+e).disabled = true;
    }else{
        FailedToaster("Image Uploaded failed")
    }

   })




  }

  function this_remove_element(id){
    
document.getElementById(id).remove();
   }

  function handle_img(e){
   
    document.getElementById(e.target.name).src=URL.createObjectURL(e.target.files[0])
   }

 

   function new_img_filed(){
  setTr([...Tr,Elem])
  setIncrement(increment=>increment+1);

}
  

   let Elem =
  
        <>
            <tr key={increment} >
            <td>{increment}</td>
            <td><img style={{width:'150px',height:'100px'}} id={increment} src="/preview_img_upload.jpg" alt="Preview" /></td>
            <td><input  className=" bg-secondary margin_top" onChange={e=>handle_img(e)} type="file" name={increment} /></td>
            <td><button  className="btn btn-info margin_top  btn-sm " id={`id_${increment}`} onClick={e=>upload_file(increment)}>Upload File</button></td>
            <td><button  className="btn btn-danger margin_top  btn-sm " onClick={e=>this_remove_element(increment)}>Remove File</button></td>

            </tr>
        </> 
   
  

   useEffect(()=>{
    
     new_img_filed()
   },[])

   
      return ( <>
<main>
    <div class="card-body">

    <table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Preview</th>
        <th scope="col">Handle</th>
        <th scope="col">Upload</th>
        <th scope="col">Remove</th>

        </tr>
    </thead>
    <tbody id="table_body">
       {Tr}

    </tbody>
    <tfoot>
        <tr>
        <td  colspan="4"></td>
        <td><button class="btn btn-warning btn-sm" onClick={e=>new_img_filed()}>New Image</button></td>
        </tr>
    </tfoot>
    </table>
    <hr/>
    <div class="float-right " style={{width:'9rem'}}>
    {/* <a href="/add_affiliation_product_view" class="btn btn-danger btn-sm  btn-block">Next</a> */}
    <Link href="/User/home" className="btn btn-danger btn-sm  btn-block">Next</Link>
    </div>

    </div>
</main>  


<ToastContainer /> 
    </> );
}

export default ServicesImg;