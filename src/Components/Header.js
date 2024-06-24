import "../App.css"
import { signOut } from "firebase/auth"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utilis/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utilis/userSlice"
import { LOGO, SUPPORTED_LANGUAGES } from "../utilis/constants"
import GptSearch from "./GptSearch"
import { toggleGptSearchView } from "../utilis/GPTSlice"
import { changeLanguage } from "../utilis/configSlice"
import showGptSearch from "../utilis/GPTSlice"
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            navigate("/error")
          });
          
    }
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL}));
              
             navigate("/browse") 
            } else {
              dispatch(removeUser());
              navigate("/")
            }
          });
         return () => unsubscribe() 
    },[])

    const handleGPTSearchClick = () => {
       // Toggle GPT Search
       dispatch(toggleGptSearchView())
    }
    const handleLanguageChange = (e) => {
       dispatch(changeLanguage(e.target.value))
    }
    return (
        <div className="absolute flex items-center justify-between w-screen px-8 py-2 bg-gradient-to-b from-black header-img z-10" >
         <div>
         <img src={LOGO} className="w-44 pl-8" />
         </div>
        { user && (
          <div className="flex justify-around gap-7">
           {showGptSearch && (
             <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
             {SUPPORTED_LANGUAGES.map((lang)=> (
                 <option key = {lang.identifier} value = {lang.identifier}>{lang.name}</option>
             ))}
             
           </select> 
           )}
            
            {/* <img src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"/> */}
            <button className="text-white py-2 px-4 mx-4 bg-purple-800 rounded-lg"
            onClick={handleGPTSearchClick}
            >{showGptSearch ? "Home Page" : "GPT Search"}</button>
            <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
            <button onClick={handleSignOut} className="font-bold text-white bg-red-600 py-2 px-4 mx-4 rounded-lg"> Sign Out</button>
        </div>)
        }
        </div>
        
    )
}
export default Header