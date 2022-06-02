import React, { useState } from 'react'
import logo from '../images/logo.jpg'
import shadow from '../images/Shadow.jpg'
import label from '../images/Label.jpg'
import './signup.css'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  const [firstName,setfirstName] = useState()
  const [lastName,setlastName] = useState()
  const [username,setusername] = useState()
  const [password,setpassword] = useState()
  const [project,setproject] = useState()
  const [roles,setroles] = useState()
  let token = localStorage.getItem('token')  
  
  
    let navigate = useNavigate()
   async function Sign(){
      let result ={firstName,lastName,password,project:{id:project},roles:[roles],username}
      
     await fetch('https://cl3v9qtjc150790701kaaek10mtt-server-vn57etnuya-ue.a.run.app/api/users',{
           method:"POST",
           headers:{
            
               "accept":"application/json",
               "Content-Type":"application/json",
               "Authorization": "Bearer "+token
               
               
               },
         body:JSON.stringify(result) 
          
       })
      
        // navigate('/')

    }
  return (
    <div>
        <img className='sLogo' src={logo} alt="" />
        <div className='sDiv'>
            <img className='ss' src={shadow} alt="" />
            <img className='sLable' src={label} alt="" />
            <input onChange={(e)=>setfirstName(e.target.value)} className='fName' placeholder='First Name' type="text" />
            <hr className='fHr' />
            <input onChange={(e)=>setlastName(e.target.value)} className='lName' placeholder='Last Name' type="text" />
            <hr className='lHr' />
            <input onChange={(e)=>setusername(e.target.value)} className='pNum' placeholder='userName' type="text" />
            <hr className='pHr' />
            <input onChange={(e)=>setpassword(e.target.value)} className='sEmail' placeholder='password' type="text" />
            <hr className='eHr' />
            <input onChange={(e)=>setproject(e.target.value)} className='sJob' placeholder='Project' type="text" />
            <hr className='jHr' />
            <input onChange={(e)=>setroles(e.target.value)} className='sCom' placeholder='Roles' type="text" />
            <hr className='cHr' />
            <input className='sComment' placeholder='Comment' type="text" />
            <hr className='comHr' />
            <button className='sCancel'>Cancel</button>
            <button onClick={Sign} className='sca'>Create Account</button>


        </div>
    </div>

  )
}

export default Signup