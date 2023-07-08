'use client'
import { useEffect } from "react";
import Chart from "chart.js";

function Home() {
   
    useEffect(()=>{
        const pkaard_chart  =  document.getElementById("pkaard_chart").getContext('2d');
        var myChart = new Chart(pkaard_chart, {
         type: 'line',
         data: {
             labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
             datasets: [{
                 data: [96, 456, 106, 0, 107, 111,500],
                 label: "Weekly Customer",
                 borderColor: "rgb(62,149,205)",
                 backgroundColor: "rgb(62,149,205,0.1)",
             }
             ]
         },
     })


     const pkaard_earning_chart  =  document.getElementById("pkaard_earning_chart").getContext('2d');
     var myChart = new Chart(pkaard_earning_chart, {
      type: 'line',
      data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
              data: [96, 356, 106, 200, 107, 4,350],
              label: "Weekly Earning",
              borderColor: "rgb(60,186,159)",
              backgroundColor: "rgb(255,165,0,0.1)",
          }
          ]
      },
  })

  console.log("HI")     }
     
     ,[])
    return ( <>
    
        <main >
            <div>
                <div style={{marginLeft:"1rem",marginTop:"1rem"}}>
                    <b>Dashboard</b>
                </div>
              <br />
                <div className="card">
                    <div className="card-header">
                       <div className="div"><b>Earning Status</b></div>
                    </div>
                    <div className="card-body ">

                        <div className="custom_row dashboard_row">

                        <div className="card c_card text-center custom_bg_card m-1">
                            <div className="custom_card_header mt-2">
                              <h5> <b >৳</b><b>500</b> </h5>
                            </div>
                            <div>
                                <p  className="text-white font_bold "> <i class="fas fa-money-bill-alt    "></i> Daily income</p>
                            </div>
                        </div>

                        <div className="card c_card text-center custom_bg_card m-1">
                            <div className="custom_card_header mt-2">
                              <h5> <b >৳</b><b>1700</b> </h5>
                            </div>
                            <div>
                                <p  className="text-white font_bold"> <i class="fas fa-money-bill-wave-alt    "></i> Monthly income</p>
                            </div>
                        </div>

                        <div className="card c_card text-center custom_bg_card m-1">
                            <div className="custom_card_header mt-2">
                              <h5> <b >৳</b><b>23675</b> </h5>
                            </div>
                            <div>
                                <p  className="text-white font_bold"> <i class="fas fa-money-check-alt    "></i> Yearly income</p>
                            </div>
                        </div>

                        <div className="card c_card text-center custom_bg_card m-1">
                            <div className="custom_card_header mt-2">
                              <h5> <b >৳</b><b>542390</b> </h5>
                            </div>
                            <div>
                                <p  className="text-white font_bold"><i class="fas fa-money-bill-alt    "></i> Total income</p>
                            </div>
                        </div>

                        </div>

                    </div>
                </div>

                <br />

                <div className="card">
                    <div className="card-header">
                       <div className="div"><b>Customer Status</b></div>
                    </div>
                    <div className="card-body ">

                        <div className="custom_row dashboard_row">

                        <div className="card c_card text-center custom_bg_card m-1">
                            <div className="custom_card_header mt-2">
                              <h5> <b>23</b> </h5>
                            </div>
                            <div>
                                <p  className="text-white font_bold"><i class="fa fa-male"></i>Daily Customer</p>
                            </div>
                        </div>

                        <div className="card c_card text-center custom_bg_card m-1">
                            <div className="custom_card_header mt-2">
                              <h5><b>132</b> </h5>
                            </div>
                            <div>
                                <p  className="text-white font_bold"> <i class="fa fa-male"></i> Monthly Customer</p>
                            </div>
                        </div>

                        <div className="card c_card text-center custom_bg_card m-1">
                            <div className="custom_card_header mt-2">
                              <h5> <b>435</b> </h5>
                            </div>
                            <div>
                                <p  className="text-white font_bold"><i class="fa fa-male"></i> Yearly Customer</p>
                            </div>
                        </div>

                        <div className="card c_card text-center custom_bg_card m-1">
                            <div className="custom_card_header mt-2">
                              <h5> <b>65342</b> </h5>
                            </div>
                            <div>
                                <p  className="text-white font_bold"><i class="fa fa-male"></i> Total Customer</p>
                            </div>
                        </div>

                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="card">

                            <div className="card-header">
                              <h5>Weekly Customer Status</h5>
                            </div>
                            <div className="card-body">
                            <canvas id='pkaard_chart'></canvas>

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <div className="card">

                            <div className="card-header">
                              <h5>Weekly Earning Status</h5>
                            </div>
                            <div className="card-body">
                            <canvas id='pkaard_earning_chart'></canvas>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>

    </> );
}

export default Home;