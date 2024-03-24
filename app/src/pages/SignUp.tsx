import React, { useState } from 'react';
import { supabase } from '../client';
import FormSignUp from '../Components/FormSignUp';
import '../styles/index.css';

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
      alert('Verifique seu e-mail para obter o link de verificação!')

      
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{background: "url('./src/assets/pokemonWalpaper.jpg')", backgroundSize: 'cover'}}>
      <FormSignUp
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default SignUp;

