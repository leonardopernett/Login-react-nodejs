import axios from 'axios'

const api = "http://localhost:4000/usuarios/"

export const getData = async ({username, password}) =>{
   const res = await axios.get(api,{
     params:{
       username,
       password
     }
   })
   return res
}