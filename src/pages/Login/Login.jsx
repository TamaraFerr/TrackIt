import { Link } from "react-router-dom"
import Trackit from "../../assets/Trackit.png"

export default function Login(){
    return(
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

                <button className="botao">Entrar</button>
            </div>

            <Link to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </div>
    )
}