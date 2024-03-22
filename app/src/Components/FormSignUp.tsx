import React from 'react';

const FormSignUp = ({ formData, handleChange, handleSubmit }) => {
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder='Nome de usuário'
                name='userName'
                onChange={handleChange}
                />

                <input 
                placeholder='Email'
                name='email'
                onChange={handleChange}
                />

                <input 
                placeholder='Password'
                name='password'
                type="password"
                onChange={handleChange}
                />

                <button type='submit'>
                Submit
                </button>


            </form>
      
        </div>
    )
}

export default FormSignUp