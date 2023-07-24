'use client'
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import http from "../../../../Component/http";
import Link from "next/link";

  function  NewOrder() {
  const [OrderData, setOrderData]= useState([]);

  const {user_data} = useSelector((state)=>state.loginAction);
 const {id} =user_data[0];
    useEffect( ()=>{
        getData();
    },[])
 
    
     function getData() {

       
        console.log(user_data)
       
    
        // console.log(id)
    
      
       

       

        http.get(`getOneOrder/${id}`)
        .then(data=>{
            if(data.status==200){
                setOrderData(data.data)
            }
            console.log(data)
           
        })
       
      }

    
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
                <th>Card No </th>
                <th>Name </th>
                <th>Mobile No</th>
                <th>Payable amount</th>
                <th>Action </th>
            </tr>
            </thead>

            <tbody>
                {OrderData.map((d)=>{
                    let i = 1;
                    return(<>
                     <tr key={i}>
                     <td>{i++}</td>
                     <td>1509002{d['card_registation_card_id']}</td>
                     <td>{d['contact_full_name']}</td>
                    
                     <td>01890492444</td>
                     <td>450 TK</td>
                     <td>

                     <Link href="User/get_bill" className="btn btn-info btn-sm btn-block">Get Bill </Link> 
                 
                     </td>
                 </tr>
                 </>)
                })}
           
        
            </tbody>
        </table>
        </div>
        
    </div>
    </main>
    
    </> );
}

export default NewOrder;