import React, {useState,useEffect} from 'react'
import '../css/login.css'
import {getData} from '../services/apiServices'
import md5 from 'md5'
import Cookies from 'universal-cookie'
import {useLocation} from 'wouter'


const cookie = new Cookies();

export default function Login() {
  const [err, setErr]= useState('')
  const [form, setForm] = useState({
    username:'',
    password:''
  })
const [path, push] = useLocation()
  const inputchange = (e) => {
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
  }
  

  
 useEffect(() => {
  if(cookie.get('name')){
      return  push('/dashboard')
  }
}, [])


 const handlerSubmit =  ()=>{
      getData({username:form.username, password:md5(form.password)})
              .then(res=>{
                if(!res.data.length > 0){
                   return setErr('user or pasword incorrect')
                }
                 const response = res.data[0]
                 cookie.set('iduser',response.id , {path:'/'})
                 cookie.set('name',response.name , {path:'/'})
                 cookie.set('email',response.email , {path:'/'})
                 alert(`welcome ${response.name}  ${response.lastname}`)
                 push('/dashboard')
              })
              .catch(err=> console.log(err))
 }

  return (
    <div className="containerPrincipal">
       <div className="containerSegundario">
         {err &&  <p style={{color:'red'}}>{err}</p>  }
         <label htmlFor="">Username</label>
         <input type="text" name="username" className="form-control" onChange={inputchange} />
            <br/>
         <label htmlFor="">Password</label>
         <input type="password" name="password" className="form-control" onChange={inputchange} />
           <br/>
           <button className="btn btn-primary" onClick={handlerSubmit}>Iniciar seccion</button>
       </div>
    </div>
  )
}
