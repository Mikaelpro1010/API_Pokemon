import React from 'react';

const FormLogin = ({ formData, handleChange, handleSubmit }) => {
    return(
        <div>
            <form onSubmit={handleSubmit}>
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

export default FormLogin