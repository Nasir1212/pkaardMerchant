import { useDispatch,useSelector } from "react-redux";
import Link from "next/link";
import { SET_ASLIDE_CLASS } from "../Redux/Reducers/CssAction";
import { SET_USER_LOG_DATA } from "../Redux/Reducers/LoginAction";
import { useEffect } from "react";
import SessionExport from "./SessionExport";
import middleware from "./middleware";
function Header() {
  const dispatch = useDispatch();
  middleware();

  useEffect(()=>{
    if(document.body.clientWidth < 767){
      handleClick();
    }
if(SessionExport.Session()){
  dispatch(SET_USER_LOG_DATA([SessionExport.Session()['status'],SessionExport.Session()['data']]))
 

}

  },[])

  const {user_data} = useSelector((state)=>state.loginAction);

    function handleClick(){
      if(layout =='hide_aside'){
        dispatch(SET_ASLIDE_CLASS(['show_aside','','']))


      }else{
        dispatch(SET_ASLIDE_CLASS(['hide_aside','0rem','98%']))
      }
    }

    const {layout,navigation_width} = useSelector((state)=>state.cssClass)
   console.log(navigation_width)
    return ( <>
    <header style={{zIndex:10}}>
<nav>
  <div className='navigation d-flex justify-content-between  align-items-center  ' style={{width:navigation_width}}>
    <div>
    <button onClick={handleClick} className='custom_btn'><i className="fa fa-bars"></i></button>
    </div>
    <ul className='d-flex justify-content-around align-items-center mt-2 mr-2'>
   
      <li>
        <Link href="/User/affiliation_profile"> <div className="profile_img" style={{width:'30px',height:'30px'}}> <img src='/profile.png'/></div>   </Link>
      </li>

      <li> <Link href="logout"><i className="fa fa-bell-slash"></i></Link> </li>
      <li> <Link href="/meail"><i className="fa fa-envelope"></i></Link> </li>
      <li> <Link href="/Setting"><i className="fa fa-gear"></i></Link> </li>

    </ul>
  </div>
</nav>
  </header>

    
    </> );
}

export default Header;