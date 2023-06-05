import { Habbit, HabbitTitle, CreatedHabbit, DeleteButton } from "./Style"
import {BsTrash} from "react-icons/bs"
import BotaoDias from "./BotaoDias"

export default function HabitoCriado({name, days}) {
    return(
        <CreatedHabbit data-test="habit-container" >
            <Habbit>
                <HabbitTitle data-test="habit-name">{name}</ HabbitTitle>
                <DeleteButton data-test="habit-delete-btn"><BsTrash /></DeleteButton>
            </Habbit>

            <BotaoDias diasSelecionados={days}  data-test="habit-day"/>
            
        </CreatedHabbit>
    )
}