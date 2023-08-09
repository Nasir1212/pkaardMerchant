'use client'
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import http from "../../../../Component/http";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';

  function  NewOrder() {
   const [orderData,setOrderData] = useState([]);
   const [Calculator,setCalculator] = useState({myDiscount:null,myPayablePrice:null,grandTotal:null,Vat:null,Charge:null});
const router = useRouter()
   
const useSearch =useSearchParams();
let order_id = useSearch.get("order_id");

useEffect( ()=>{
    getData();
 },[])

 function getData() {

 http.get(`order_card_holder_by_tid/${order_id}`)
 .then(data=>{
     if(data.status==200){
         setOrderData(data.data);

     }
    
 })

}

function handleChange(e){
   let {aff_sub_discount_product_privilege,affiliation_product_privilege} = orderData[0];
let value = e.target.value
console.log(value)

let privilege = aff_sub_discount_product_privilege == null ?affiliation_product_privilege:aff_sub_discount_product_privilege;

console.log(privilege);

if(Number(privilege) != NaN){

    let discount = value * Number(privilege) /100;
    let payable_price = value - discount;
    let charge = payable_price * 1 /100;
    let vat = charge * 15 /100;

    let grand_total = charge + vat;

    setCalculator(value=>({...value,myDiscount:discount,myPayablePrice:payable_price,grandTotal:grand_total,Vat:vat,Charge:charge}))
}


}
console.log(Calculator)

    return ( <>
    
    <main >
    <div>
        <div style={{marginLeft:"1rem",marginTop:"1rem"}}>
            <b>Get Bill </b>
        </div>
        <br />
        <div className="card" style={{width:"30rem",margin:"auto"}}>
        <table className="table table-striped">
            

            <tbody>
               <tr>
                <td>Name</td>
                <td><input type="text" disabled value={ orderData.length != 0? orderData[0]['full_name']:''} className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" /></td>
                </tr>

                <tr>
                <td>Card no</td>
                <td><input type="text" disabled  value={ orderData.length != 0? orderData[0]['card_no']:''}  className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" /></td>
                </tr>    

                <tr>
                <td>Coupon no</td>
                <td><input type="text" disabled value={  orderData.length != 0?  orderData[0]['discount_promo_code']:''} className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" /></td>
                </tr>

                  

                <tr style={orderData.length != 0 && orderData[0]['payable_price'] == null ? {display:""}:{display:"none"}}>
                <td>Bill </td>
                <td><input onChange={(e)=>handleChange(e)}   type="text"    className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" /></td>
                </tr>

                <tr  style={orderData.length != 0 && orderData[0]['payable_price'] == null ? {display:""}:{display:"none"}}>
                <td >Discount</td>
                <td><input type="text" disabled value={Calculator['myDiscount']}  className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" /></td>
                </tr>

                <tr>
                <td>Payable Bill </td>
                <td  style={Calculator['myPayablePrice'] == null? {display:""}:{display:"none"}}>
                    <input type="text" disabled   value={ orderData.length != 0? orderData[0]['payable_price']:''}  className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" />
                    
                    </td>

                    <td  style={Calculator['myPayablePrice'] == null? {display:"none"}:{display:""}}>
                    
                    <input type="text" disabled   value={ Calculator['myPayablePrice'] }  className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" />
                    
                    </td>
                </tr>

                <tr>
                    <td>Pkaard Charge </td>
                    <td style={{fontSize:"11px"}}> Charge <b>{Calculator['Charge']}</b> tk VAT(15%) <b>{Calculator['Vat']}</b> tk Grand Total <b>{Calculator['grandTotal']}</b>tk  </td>
                </tr>

                <tr>
                    <td></td>
                    <td><button className="btn btn-success">Submit</button></td>
                </tr>
            </tbody>
        </table>
        </div>
        
    </div>
    </main>
    
    </> );
}

export default NewOrder;