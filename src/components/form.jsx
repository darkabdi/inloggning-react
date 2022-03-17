import React,{useState} from 'react'
import Login from './login'


function Form() {
    const [name,setName]=useState("")
    const [passsword, setPassword]=useState("")


    const handleSubmit = ((event)=>{
        event.preventDefault()
        console.log("submitted")
        
    })
    return (
        <div>
          

           <h1>Register</h1>
                <form>
                    <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="password" placeholder="password" value={passsword} onChange={(e)=>setPassword(e.target.value)}/>
                    
                </form>
                   
                <button onClick={handleSubmit} >create</button>
                <Login
                name = {name} 
                passsword= {passsword}
            />

        </div>
    )
}

export default Form
