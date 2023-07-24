'use client'
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import http from "../../../../Component/http";

  function  NewOrder() {
   
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
                <td>Coupon no</td>
                <td><input type="text" className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" /></td>
                </tr>

                 <tr>
                <td>Card no</td>
                <td><input type="text"  className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" /></td>
                </tr>        

                <tr>
                <td>Bill </td>
                <td><input type="text"  className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" /></td>
                </tr>

                <tr>
                <td>Discount</td>
                <td><input type="text"  className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" /></td>
                </tr>

                <tr>
                <td>Payable Bill </td>
                <td><input type="text"  className="form-control" style={{background:"rgb(241 98 45 / 56%)",fontWeight:"bold"}} name="" id="" /></td>
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