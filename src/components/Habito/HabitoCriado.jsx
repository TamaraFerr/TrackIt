import { Habbit, HabbitTitle, CreatedHabbit, DeleteButton } from "./Style"
import {BsTrash} from "react-icons/bs"
import BotaoDias from "./BotaoDias"
import axiosAuthorized from "../../constants/axiosAuthorized"
import { useContext } from "react"
import UserContext from "../../context/UserContext"

export default function HabitoCriado({name, days, id, HabitosVisiveis}) {
    const {user} = useContext(UserContext)

    function deletarHabito(){
        const confirmaçao = window.confirm("Deseja apagar este hábito?")

        if(confirmaçao) {
            axiosAuthorized()
                .delete(`habits/${id}`, user.token, id)
                .then(res => {
                    HabitosVisiveis()
                })
                .catch((err) => {alert(err.response.data.message)})
        }
    }

    return(
        <CreatedHabbit data-test="habit-container" >
            <Habbit>
                <HabbitTitle data-test="habit-name">{name}</ HabbitTitle>
                <DeleteButton data-test="habit-delete-btn" onClick={deletarHabito}><BsTrash /></DeleteButton>
            </Habbit>

            <BotaoDias diasSelecionados={days}  data-test="habit-day"/>
            
        </CreatedHabbit>
    )
}