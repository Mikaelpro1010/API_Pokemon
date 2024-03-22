import React, { useState } from 'react';
import { supabase } from '../client';
import FormSignUp from '../Components/FormSignUp';

function SignUp() {
  
  const [formData,setFormData] = useState({
    userName:'',email:'',password:''
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
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.userName,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
    <h1>Sign Up</h1>
    <FormSignUp
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  </div>
  )
}

export default SignUp;

