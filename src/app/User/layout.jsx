'use client';

import Header from "../../../Component/Header";
import Footer from "../../../Component/Footer";
import Aside from "../../../Component/Aside";
import Providers from "../../../Redux/Providers/Providers";
import { useSelector } from "react-redux";
function UserLayout({children}) {
    const {layout} = useSelector((state)=>state.cssClass)

    return ( <>
  <Providers>
    <div className={`pkkard_container_layout ${layout}`}> 
    <Header/>
    <Aside/>
    {children}
    <Footer/>
    </div>
    </Providers>
    </> );
}

export default UserLayout;