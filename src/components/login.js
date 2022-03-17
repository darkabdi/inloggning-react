import  React ,{useState} from 'react'
// import Form from "./form"
function Login(props) {
   const [newname, setNewName] = useState("")
   const [newpassword, setNewPassword] = useState("")

  
   
   
   let handleLogin = (event)=>{
    event.preventDefault()
    if (props.passsword === newpassword && props.name === newname){
        console.log("welcome")
    }
    else{
        console.log("nope")
    }
}
    return (
        <div>
             <h1>Login</h1>
                <form>
                    <input type="text" placeholder="name" value= {newname}onChange={(e)=>setNewName(e.target.value)}/>
                    <input type="password"  placeholder="password" value={newpassword} onChange={(e)=>setNewPassword(e.target.value)} />
                    <button onClick={handleLogin} >Login</button>

                <p>{newname}</p>
                <p>{props.name}</p>
                <p>{props.passsword}</p>
                <p>{newpassword}</p>


                </form>
                  
               
        </div>
    )
}

export default Login
