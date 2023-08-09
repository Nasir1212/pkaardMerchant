'use client'
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import http from "../../../../Component/http";
import Link from "next/link";
import { useRouter } from 'next/navigation'
  function  NewOrder() {
  const [OrderData, setOrderData]= useState([]);

  const {user_data} = useSelector((state)=>state.loginAction);
 const {id} =user_data[0];
    useEffect( ()=>{
       getData();
    },[])
  
    const router = useRouter()
     function getData() {
        console.log(user_data)
       
    
        // console.log(id)
  http.get(`order_card_holder/${id}`)
        .then(data=>{
            if(data.status==200){
                setOrderData(data.data)
            }
            console.log(data)
           
        })
       
      }



      let i = 1;
   let OrderView =    OrderData.map((d)=>{
                   
        return(<>
         <tr key={i+1}>
         <td>{i++}</td>
         <td>{d['discount_promo_code']}</td>
         <td>{d['full_name']}</td>
         <td>
         <button  onClick={() => router.push(`User/get_bill?order_id=${d['id']}`)} className="btn btn-info btn-sm btn-block">Get Bill </button> 
     
         </td>
     </tr>
     </>)
    })

    
    return ( <>
    
    <main >
    <div>
        <div style={{marginLeft:"1rem",marginTop:"1rem"}}>
            <b>New Order</b>
        </div>
        <br />
        <div className="card">
        <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th>Coupon no</th>
                <th>Name </th>
                       
                <th>Action </th>
            </tr>
            </thead>

            <tbody>
              {OrderView}
        
            </tbody>
        </table>
        </div>
        
    </div>
    </main>
    
    </> );
}

export default NewOrder;