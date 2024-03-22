import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { supabase } from '../client';
import FormLogin from '../Components/FormLogin';

const Login = ({setToken}) => {
  let navigate = useNavigate()

  const [formData,setFormData] = useState({
        email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          })

      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/pokedex')


    //   alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }




  return (
    <div>
      <h1>Login</h1>
      <FormLogin
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default Login