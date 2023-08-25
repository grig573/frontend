import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "../axios";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const {setUser} = useAuth();
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [imageError, setImageError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email, image, password,cpassword} = e.target.elements;
        const body = {
            name: name.value,
            email: email.value,
            image: image.files[0],
            password: password.value,
            password_confirmation: cpassword.value,
        };
        await csrfToken();

        try{
            const resp = await axios.post('/register',body)
            if (resp.status === 200) {
                setUser(resp.data.user)
                return <Navigate to="/profile" />
            }
        }catch(error){
            if(error.response.status ===  422){
                console.log(error.response.data.errors);
                if (error.response.data.errors.name) {
                    setNameError(error.response.data.errors.name[0])
                }else{
                    setNameError('');
                }
            }
        }

        try{
            const resp = await axios.post('/register',body)
            if (resp.status === 200) {
                setUser(resp.data.user)
                return <Navigate to="/profile" />
            }
        }catch(error){
            if(error.response.status ===  422){
                console.log(error.response.data.errors);
                if (error.response.data.errors.email) {
                    setEmailError(error.response.data.errors.email[0])
                }else{
                    setEmailError('');
                }
            }
        }

        try{
            const resp = await axios.post('/register',body)
            if (resp.status === 200) {
                setUser(resp.data.user)
                return <Navigate to="/profile" />
            }
        }catch(error){
            if(error.response.status ===  422){
                console.log(error.response.data.errors);
                if (error.response.data.errors.image) {
                    setImageError(error.response.data.errors.image[0])
                }else{
                    setImageError('');
                }
            }
        }

        try{
            const resp = await axios.post('/register',body)
            if (resp.status === 200) {
                setUser(resp.data.user)
                return <Navigate to="/profile" />
            }
        }catch(error){
            if(error.response.status ===  422){
                console.log(error.response.data.errors);
                if (error.response.data.errors.password) {
                    setPasswordError(error.response.data.errors.password[0])
                }else{
                    setPasswordError('');
                }
            }
        }

    }

    return (
        <section>
            <div>
                <a href="#">
                    <img src="" alt="logo" />
                    My Facebook
                </a>
              <div>
                <div>
                    <h1>Create an account</h1>
                    <form 
                    action="#"
                    method="post"
                    onSubmit={handleSubmit}
                    >
                     <div>
                        <label htmlFor="image">Choose image</label>
                        <input 
                        type="file" 
                        name="image"
                        id="image"
                        placeholder="Choose image"
                        />
                        {imageError && (
                            <p>{imageError}</p>
                        )}
                     </div>

                     <div>
                        <label htmlFor="name">Full name</label>
                        <input 
                        type="text" 
                        name="name"
                        id="name"
                        placeholder="user name"
                        />
                        {nameError && (
                            <p>{nameError}</p>
                        )}
                     </div>

                     <div>
                        <label htmlFor="email">Your email</label>
                        <input 
                        type="text" 
                        name="email"
                        id="email"
                        placeholder="user@gmail.com"
                        />
                        {emailError && (
                            <p>{emailError}</p>
                        )}
                     </div>

                     <div>
                        <label htmlFor="password">Creat a password</label>
                        <input 
                        type="password" 
                        name="password"
                        id="password"
                        placeholder="******"
                        />
                        {passwordError && (
                            <p>{passwordError}</p>
                        )}
                     </div>

                     <div>
                        <label htmlFor="cpassword">Confirm password</label>
                        <input 
                        type="password" 
                        name="cpassword"
                        id="cpassword"
                        placeholder="******"
                        />
                     </div>

                     <button
                     type="submit"
                     >
                        Create an account?{""}
                     </button>
                     <p>
                        Already have an account?{""}
                        <Link 
                        to="/"
                        >
                        Login here
                        </Link>
                     </p>
                    </form>
                </div>
              </div>
            </div>
        </section>

    )


}