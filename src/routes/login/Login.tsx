import { useState } from "react"
import instance from "../../api/axios.tsx"
import { useDispatch } from "react-redux"
import { login } from "../../redux/mainSlice.tsx"
import './Login.scss'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            instance.post("/auth/login", { email, password })
                .then((response : any) => {
                    if (response.data.access_token) {
                        alert("Successfully logged in!")
                        dispatch(login(response.data))
                        navigate("/admin")
                    }
                })
                .catch((error : any) => {
                    console.log(error.response.data.message)
                    toast.warning("not registered yet")
                    toast.warning(error.response.data.message + "  " + "  " + "if you have not registered yet please register first!")

                })
        }, 4000)
    }

    return (
        <div>
            <img width={200} className="login_logo" src="https://cdn.worldvectorlogo.com/logos/ebay-3.svg" alt="" />
            <div className="login_wrapper">
                <h1 className="login_title">Login</h1>
                <form onSubmit={handleLogin} className="login_form">
                    <input className="input"  type="email" value={email} placeholder='your email' onChange={e => setEmail(e.target.value)} />
                    
                    <input className="input"  type="password" value={password} placeholder='your password' onChange={e => setPassword(e.target.value)} />
                    
                    <button className="login_btn" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
                </form>
                <p className="login_text">Using a public or shared device? Uncheck to protect your account.</p>
                <p className="login_link">Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}

export default Login
