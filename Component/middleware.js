import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
export default  function middleware() {
   const Router = useRouter();
   const {is_Login} = useSelector((state)=>state.loginAction);
   if(is_Login==false){
    Router.push("/")
   }
 
  }