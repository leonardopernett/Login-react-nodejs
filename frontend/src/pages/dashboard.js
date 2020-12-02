import React,{useEffect} from 'react'
import Cookies from 'universal-cookie'
import {useLocation} from 'wouter'

const cookie = new Cookies()

export default function Dashboard() {

const [pathLoca , push]= useLocation()
 const logout = ()=>{
   cookie.remove('name',{path:'/'})
   cookie.remove('iduser', {path:'/'})
   cookie.remove('name', {path:'/'})
   cookie.remove('email', {path:'/'})
   push('/login')
 }

 useEffect(() => {
    if(!cookie.get('name')){
        return  push('/login')
    }
 }, [])


  return (
    <div>
        <div className="container">
          <h3>Welcome {cookie.get('name')}</h3>
        </div>
        <button className="btn btn-primary" onClick={logout}>salir</button>
    </div>
  )
}
