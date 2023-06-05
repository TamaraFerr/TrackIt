import NavBarr from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import {Container, TodayContainer, ProgressHabbit} from "./Style"
import Recordes from "./Recordes"
import { useContext, useEffect, useState } from "react"
import axiosAuthorized from "../../constants/axiosAuthorized"
import UserContext from "../../context/UserContext"

export default function Hoje(){
    const [habitos, setHabitos] = useState([])
    const {user} = useContext(UserContext)

    useEffect(habitosHoje, [])

    function habitosHoje(){
        axiosAuthorized()
            .get(`habits/today`, user.token)
            .then(res => {
                setHabitos(res.data)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <Container>
            <NavBarr />

            <TodayContainer>
                <ProgressHabbit>
                    <p data-test="today-counter">Nenhum hábito concluído ainda</p>
                </ProgressHabbit>


                {habitos.length === 0 ? (
                    "Carregando..."
                ) : (
                    habitos.map(hab => (
                        <Recordes
                            key={hab.id}
                            id={hab.id}
                            name={hab.name}
                            done={hab.done}
                            currentSequence={hab.currentSequence}
                            highestSequence={hab.highestSequence}
                        />
                    ))
                )}
                
            </TodayContainer>

            <Footer />
        </Container>
    )
}