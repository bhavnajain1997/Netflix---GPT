import { useRef, useState } from "react"
import Header from "./Header"
import checkValidData from "../utilis/validate"

const Login = () => {
     
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [message, setMessage] = useState(null)
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick = () => {
    //    console.log(email.current.value)
    //    console.log(password.current.value)
       setMessage(checkValidData(email.current.value, password.current.value))
       
       if(!message){
         // sign in/ sign up 

       }
       
    }
    const toogleSignInForm = () => {
          setIsSignInForm(!isSignInForm)
    }
    
    return (
        <div >
           
              <Header/>
            
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
            </div>
        <form className="absolute my-48  mx-auto right-0 left-0 p-12 w-3/12 bg-black bg-blend-soft-light text-white bg-opacity-80">
            <h1 className="text-3xl font-bold py-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
                 <input type="text" placeholder="Full Name" className="p-3 my-2 w-full bg-zinc-900 rounded"/>
            )
            }
            <input ref={email} type="text" placeholder="Email"  className="p-3 my-2 w-full bg-zinc-900 rounded" required/>
            <p className="text-red-700">{message}</p>
            <input ref={password} type="password" placeholder="password"  className="p-3 my-2 w-full bg-zinc-900 rounded"/>
            <p className="text-red-700">{message}</p>
            <button onSubmit={(e)=>e.preventDefault()} type="button" className="p-2 my-6 bg-red-600 w-full rounded " onClick={handleButtonClick}>{isSignInForm  ? "Sign In" : "Sign Up"}</button>
            <h3 className="text-center">Forgot Password?</h3>
            {/* <input type="checkbox" className="left-0" placeholder="Remember"/><span>Remember me</span> */}
            <p className="pt-4 cursor-pointer" onClick={toogleSignInForm}>{isSignInForm ? "New to Netlix? Sign Up Now" : "Already Registered? Sign In Now   "}</p>
        </form>
        </div>
           
    )
}
export default Login