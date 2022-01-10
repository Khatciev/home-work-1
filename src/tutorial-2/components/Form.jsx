import React from 'react';

const Form = () => {
    let email = "";
    let password = "";

    const handleSubmit = (e) => {
        e.preventDefault()
      if(!email || !password || /^\s*$/.test(email) || /^\s*$/.test(password)) {
          alert("Поле не может быть пустым")
      }    else {
         console.log({email, password})
          e.target.reset();
          email = ""
          password = ""
      }
    }

    const handleChange = (e) => {
        if (e.target.name === "email") {
            email = e.target.value;
        } else if (e.target.name === "password") {
            password = e.target.value;
        };
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={handleChange} placeholder="email"/>
                <input type="password" name="password" onChange={handleChange} placeholder="password"/>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Form;