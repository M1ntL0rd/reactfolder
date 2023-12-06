 import React, { useState } from 'react';
 
 function Form() {
    const [value, setValue] = React.useState('')
    const [email, setEmail] = React.useState('')

    function handleChangeName(event){
        setValue(event.target.value)
    }

    function handleChangeEmail(event){
        setEmail(event.target.value)
    }
    function handleSubmit(event){
        event.preventDefault();
        alert(`Dear ${value} with the email: ${email} You have successfully submitted your form, please check back a few hours later as though website is still under construction...`)
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <fieldset>
                    <legend>Create an account</legend>
                    <label htmlFor="name">Full name: <input type="text" value={value} name='name' id='name' required onChange={handleChangeName} /></label><br /><br />
                    <label htmlFor="email">Email: <input type="email" value={email} name='email' id='email' required onChange={handleChangeEmail} /></label><br /><br />
                    <label htmlFor="password">password: <input type="password"  name='password' id='password' required /></label><br /><br />
                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </div>
    )
 }
 
 export default Form;