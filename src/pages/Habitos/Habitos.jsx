import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import CriarHabito from "./CriarHabito"
import HabitosCriados from "./HabitosCriados"
import {Container, HabitosContainer, CreateHabbit, Text} from "./Style"
import { BsFillPlusSquareFill } from "react-icons/bs"
import { useState } from "react"
import { useEffect } from "react"
import axiosAuthorized from "../../constants/axiosAuthorized"
import { useContext } from "react"
import UserContext from "../../context/UserContext"

export default function Habitos(){
    const [showForm, setShowForm] = useState(false)

    const toggleForm = () => {
        setShowForm(!showForm)
    }



    return (
        <Container>
            <NavBar />
            <HabitosContainer>
                <CreateHabbit>
                    <h1 className="titulo">Meus hábitos</h1>
                    <BsFillPlusSquareFill data-test="habit-create-btn" onClick={toggleForm}/>
                </CreateHabbit>

                {showForm && <CriarHabito />}

                <HabitosCriados />
                
                <Text>
                     <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </Text>
            </HabitosContainer>

            <Footer />
        </Container>
    )
}