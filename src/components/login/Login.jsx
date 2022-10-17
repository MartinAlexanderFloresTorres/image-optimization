import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './login.css'

export const Login = () => {

    const [activeForm, setActiveForm] = useState(true);
    const [checked, setChecked] = useState(false);
    useEffect(() => {

    }, [activeForm])

    const handleChangeForm = () => setActiveForm(!activeForm);
    const handleChangeChecked = () => setChecked(!checked);

    return (
        // <div className='container-login'>
        <div className='login'>
            <div className='wrap'>
                <div className='content'>

                    {/* LOGO */}
                    <div className='logo'>
                        <NavLink to='/'>
                            <svg
                                className='r_ ra'
                                viewBox='0 0 32 32'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <defs>
                                    <linearGradient
                                        x1='0%'
                                        y1='32.443%'
                                        x2='104.18%'
                                        y2='50%'
                                        id='hlogo-a'
                                    >
                                        <stop stopColor='#FFF' stopOpacity='.299' offset='0%'></stop>
                                        <stop
                                            stopColor='#7587E4'
                                            stopOpacity='0'
                                            offset='100%'
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        x1='18.591%'
                                        y1='0%'
                                        x2='100%'
                                        y2='100%'
                                        id='hlogo-b'
                                    >
                                        <stop stopColor='#818CF8' offset='0%'></stop>
                                        <stop stopColor='#C7D2FE' offset='100%'></stop>
                                    </linearGradient>
                                </defs>
                                <g fill='none' fillRule='evenodd'>
                                    <path fill='#3730A3' d='M16 18.5V32l15.999-9.25V9.25z'></path>
                                    <path fill='#4F46E5' d='m0 23 16 9V18.501L0 9.251z'></path>
                                    <path
                                        fillOpacity='.64'
                                        fill='url(#hlogo-a)'
                                        d='M16 13 0 23l16 9 16-9z'
                                    ></path>
                                    <path
                                        fill='url(#hlogo-b)'
                                        d='M16 0 0 9.25l16 9.25 15.999-9.25z'
                                    ></path>
                                </g>
                            </svg>
                        </NavLink>
                    </div>

                    {/* SLIDER */}
                    <div className='banner'>
                        <div className='one'>
                            <h2><span>images converter</span></h2>
                            <p>La manera más fácil y rápida de cambiar el formato a tu imagen</p>
                        </div>
                    </div>

                </div>


                {/* LOGIN FORM */}
                <div className='user'>
                    <div className='form-wrap'>

                        {/* TAB */}
                        <div className='tabs'>
                            <h3 className='login-tab'>
                                <a className={`${'log-in'} ${activeForm ? 'active' : ''}`}
                                    onClick={handleChangeForm}>
                                    <span>Iniciar sesión</span>
                                </a>
                            </h3>
                            <h3 className='login-tab'>
                                <a className={`${'log-in'} ${!activeForm ? 'active' : ''}`}
                                    onClick={handleChangeForm}>
                                    <span>Registrame</span>
                                </a>
                            </h3>
                        </div>

                        {/* TABS CONTENT */}
                        <div className='tabs-content'>
                            {/* TABS CONTENT LOGIN */}
                            {/* <div className='login-tab-content active'> */}
                            <div className={`${'login-tab-content'} ${activeForm ? 'active' : ''}`}>
                                <form className='login-form'>
                                    <input type='text'
                                        className='input'
                                        id='user_login'
                                        autoComplete='off'
                                        placeholder='Correo o nombre de usuario'
                                    />
                                    <input type='password'
                                        className='input'
                                        id='user_pass'
                                        autoComplete='off'
                                        placeholder='Contraseña'
                                    />
                                    <div className='login-tab-content_checkbox'>
                                        <input type='checkbox'
                                            className='checkbox'
                                            checked={checked}
                                            onChange={handleChangeChecked}
                                            id='remember_me'
                                        />
                                        <label htmlFor="remember_me">Recordarme</label>
                                    </div>
                                    <button type='submit'
                                        className='button'
                                    >
                                        Iniciar sesión
                                    </button>
                                </form>
                                <div className='help-action'>
                                    <p>
                                        <svg className='w-6 h-6'
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10 23l-4-4m0 0l4-4m-4 4h15"
                                            >
                                            </path>
                                        </svg>
                                        <a className='forgot' href='#'> ¿Olvidaste tu contraseña? </a>
                                    </p>
                                </div>

                                <div className='social-login'>
                                    <ul>
                                        <li className='social-login_item'>
                                            <a href='#'>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 48 48"
                                                    width="48px"
                                                    height="48px">
                                                    <path
                                                        fill="#fbc02d"
                                                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	
                                                        s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	
                                                        s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                                    />
                                                    <path
                                                        fill="#e53935"
                                                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	
                                                        l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                                    />
                                                    <path
                                                        fill="#4caf50"
                                                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	
                                                        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                                    />
                                                    <path
                                                        fill="#1565c0"
                                                        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	
                                                        c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className='social-login_item'>
                                            <a href="#">
                                                <svg 
                                                    fill="#fff" 
                                                    xmlns="http://www.w3.org/2000/svg"  
                                                    viewBox="0 0 50 50" 
                                                    width="50px" 
                                                    height="50px">
                                                    <path 
                                                        d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 
                                                        c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 
                                                        c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 
                                                        c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 
                                                        c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 
                                                        c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 
                                                        c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 
                                                        c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 
                                                        c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 
                                                        c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 
                                                        c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 
                                                        C2,35.164,8.63,43.804,17.791,46.836z"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className='social-login_item'>
                                            <a href="#">
                                                <svg 
                                                    xmlns="http://www.w3.org/2000/svg"  
                                                    viewBox="0 0 50 50" 
                                                    width="50px" 
                                                    height="50px">
                                                    {/* <path 
                                                        fill="#039be5" 
                                                        d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                                                    /> */}
                                                    <path 
                                                        fill="#fff" 
                                                        d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,
                                                        2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,
                                                        0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,
                                                        0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className='button-home'>
                                    <NavLink to='/'>Regresar</NavLink>
                                </div>
                            </div>

                            {/* TABS CONTENT SIGNUP */}
                            <div className={`${'signup-tab-content'} ${!activeForm ? 'active' : ''}`}>
                                <form className='signup-form'>
                                    <input type='email'
                                        className='input'
                                        id='user_email'
                                        autoComplete='off'
                                        placeholder='Correo'
                                    />
                                    <input type='text'
                                        className='input'
                                        id='user_name'
                                        autoComplete='off'
                                        placeholder='Nombre de usuario'
                                    />
                                    <input type='password'
                                        className='input'
                                        id='user_passw'
                                        autoComplete='off'
                                        placeholder='Contraseña'
                                    />
                                    <button type='submit'
                                        className='button'
                                    >
                                        Registrarme
                                    </button>
                                </form>
                                <div className='help-action'>
                                    <p className='help-text'>Al registrarse, usted acepta nuestros</p>
                                    <p>
                                        <svg className='w-6 h-6'
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10 23l-4-4m0 0l4-4m-4 4h15"
                                            >
                                            </path>
                                        </svg>
                                        <a className='terms' href='#'> Términos y condiciones </a>
                                    </p>
                                </div>


                                <div className='button-home'>
                                    <NavLink to='/'>Regresar</NavLink>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </div>


        // </div>
    )
}
