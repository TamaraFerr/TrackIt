import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/url"
import {PageContainer, FormContainer, Inputs, Button, Links} from "./Style"
import { ThreeDots } from "react-loader-spinner"
import TrackIt from "../../assets/TrackIt.png"

export default function Cadastro() {
    const [form, setForm] = useState({email:"", password:"", name:"", image:""})
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function SingUp(e) {
        e.preventDefault()
        console.log(form)
        const body = {...form}
        
        axios
            .post(`${BASE_URL}/auth/sign-up`, body)
            .then((res) => {
                console.log(res.data)
                setIsLoading(false)
                navigate(`/`)
                })
            .catch((err) => 
                alert(err.response.data),
                setIsLoading(false))

        setIsLoading(true)
    }

    return (
        <PageContainer>
            
            <img src={TrackIt} alt="trackit-logo"/>

            <FormContainer onSubmit={SingUp}>
                <Inputs 
                placeholder="email" 
                type="email" 
                data-test="email-input"
                name="email"
                value={form.email}
                onChange={handleForm} 
                required
                disabled={isLoading}
                />

                <Inputs 
                placeholder="senha" 
                type="password" 
                data-test="password-input"
                name="password"
                value={form.password}
                onChange={handleForm}
                required
                disabled={isLoading}
                />

                <Inputs 
                placeholder="nome" 
                data-test="user-name-input"
                name="name"
                value={form.name}
                onChange={handleForm}
                required
                disabled={isLoading}
                />

                <Inputs 
                placeholder="foto" 
                data-test="user-image-input"
                type="url"
                name="image"
                value={form.image}
                onChange={handleForm}
                required
                disabled={isLoading}
                />

                <Button data-test="signup-btn" disabled={isLoading}>
                    {isLoading ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={20} width={40} /> : "Cadastro"}
                </Button>

            </FormContainer>

            <Link to={`/`}>
                <Links data-test="login-link">Já tem uma conta? Faça login!</Links>
            </Link>

        </PageContainer>
    )
}