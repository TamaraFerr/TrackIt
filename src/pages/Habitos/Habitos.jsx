import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import CriarHabito from "./CriarHabito"
import HabitoCriado from "../../components/Habito/HabitoCriado"
import {Container, HabitosContainer, CreateHabbit, Text} from "./Style"
import { BsFillPlusSquareFill } from "react-icons/bs"
import { useState } from "react"
import { useEffect } from "react"
import axiosAuthorized from "../../constants/axiosAuthorized"
import { useContext } from "react"
import UserContext from "../../context/UserContext"

export default function Habitos(){
    const [showForm, setShowForm] = useState(false)
    const [habitos, setHabitos] = useState([])
    const {user} = useContext(UserContext)


    const toggleForm = () => {
        setShowForm(!showForm)
    }

    useEffect(HabitosVisiveis, [])

    function HabitosVisiveis(){

        axiosAuthorized()
            .get(`habits`)
            .then((res) => {
                console.log(res.data) 
                setHabitos(res.data)
            })
            .catch((err) => {
                alert(err.responde.data.message)
            })
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

                {habitos.length === 0 ? (
                    <Text>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </Text>
                ) : (
                    habitos.map( hab => (
                        <HabitoCriado
                            key={hab.id}
                            id={hab.id}
                            name={hab.name}
                            days={hab.days}
                            HabitosVisiveis={HabitosVisiveis}
                            />
                    ))
                )}
                
            </HabitosContainer>

            <Footer />
        </Container>
    )
}