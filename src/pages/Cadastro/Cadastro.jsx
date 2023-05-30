import Trackit from "../../assets/Trackit.png"
import { Link } from "react-router-dom"

export default function Cadastro(){
    return (
        <div className="container">
            <img src={Trackit} alt="" className="trackit-logo"/>

            <div className="login">
                <input 
                    placeholder="email"
                    type="email"
                    required
                />

                <input 
                    placeholder="senha"
                    type="password"
                    required
                />

                <input 
                    placeholder="nome"
                    required
                />

                <input 
                    placeholder="foto"
                    type="url"
                    required
                />
                <button className="botao">Cadastrar</button>
            </div>

            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </div>
    )
}