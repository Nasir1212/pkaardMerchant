import Link from "next/link";
import { useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
function Aside() {
  const {hide_aside_container_width} = useSelector((state)=>state.cssClass)

  //  const { host, hostname, href, origin, pathname, port, protocol, search } = window.location;
 const pathname = usePathname();
    return ( <>
     
<aside>
 <div className='side_container' style={{width:hide_aside_container_width}}>
   <div className='side_row row'>
    <div className='col'>
      <div className='logo'>
      <img src='https://pkaard.com/assets/images/pkaard_logo.jpeg'/>

      </div>
      <hr/>
    </div>

    <div className='col'>
      <div className='side_navigation'>
        <ul >
          <li className={`nav-item ${pathname=='/User/home'?'active':''}`}> <Link className='nav-link  ' href="/User/home"><i className="fa fa-dashboard"></i> <span> Dashboard</span> </Link> </li>
          <li className={`nav-item ${pathname=='/User/new_order'?'active':''}`}> <Link className='nav-link' href="/User/new_order"><i className="fa fa-shopping-basket"></i> <span> New Order</span> </Link> </li>
          <li className={`nav-item ${pathname=='/User/add_services'?'active':''}`}> <Link className='nav-link' href="/User/add_services"><i className="fa fa-signing"></i> <span> Add Services</span> </Link> </li>
          <li className={`nav-item ${pathname==''?'':''}`}> <Link className='nav-link' href="/"><i className="fa fa-dashboard"></i> <span> Refer & Earn</span> </Link> </li>
          <li className={`nav-item ${pathname=='/User/service_img'?'active':''}`}> <Link className='nav-link' href="/User/service_img"><i className="fa fa-shopping-basket"></i> <span> Service Img</span> </Link> </li>



         
        </ul>
      </div>

    </div>
      
   </div>
 </div>
</aside>

    
    </> );
}

export default Aside;