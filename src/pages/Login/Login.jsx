import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import {PageContainer, FormContainer, Button, Inputs, Links} from "./Style"
import { ThreeDots } from "react-loader-spinner" 
import UserContext from "../../context/UserContext"
import TrackIt from "../../assets/TrackIt.png"

export default function Login(){
    const [form, setForm] = useState({email:"", password:""})
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function LoadPage(e) {
        e.preventDefault()
        console.log(disabled)

        axios
            .post(`${BASE_URL}/auth/login`, form)
            .then((res) => {    
                console.log(res.data)
                window.localStorage.setItem("token", res.data.token)
                setUser(res.data)
                navigate(`/hoje`)
            })
            .catch((err) => 
                alert(err.response.data.message),
                setDisabled(false))
        
        setDisabled(true)
    }

    return (
        <PageContainer>

            <img src={TrackIt} alt="trackit-logo"/> 

            <FormContainer onSubmit={LoadPage}>
                <Inputs 
                placeholder="email" 
                data-test="email-input"
                name="email"
                value={form.email}
                onChange={handleForm}
                required
                disabled={disabled}
                />

                <Inputs 
                placeholder="senha" 
                data-test="password-input" 
                type="password"
                name="password"
                value={form.password}
                onChange={handleForm}
                required
                disabled={disabled}
                />

                <Button data-test="login-btn" type="submit" disabled={disabled}>
                    {disabled ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={20} width={40} /> : "Entrar"}
                </Button> 

            </FormContainer>

            <Link to={`/cadastro`}>
                <Links data-test="signup-link">Não tem uma conta? Cadastre-se!</Links>
            </Link>

        </PageContainer>
    )
}