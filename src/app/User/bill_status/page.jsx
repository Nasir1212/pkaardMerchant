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
            

            <thead>
                <tr>
                    <th>#</th>
                    <th>Card </th>
                </tr>
            </thead>
        </table>
        </div>
        
    </div>
    </main>
    
    </> );
}

export default NewOrder;