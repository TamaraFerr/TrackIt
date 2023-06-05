import { useState } from "react"
import axiosAuthorized from "../../constants/axiosAuthorized"
import {HabbitContainer, Save, Cancel, Input, DayButton, DaysButtons, Buttons} from "./Style"
import { ThreeDots } from "react-loader-spinner"

export default function CriandoHabito() {
    const [name, setName] = useState("")
    const [arrayDias, setArrayDias] = useState([])
    const [disabled, setDisabled] = useState(false)

    function handlerDays(array, dia) {
        const index = array.indexOf(dia)
        let novoArray = [...array]
      
        if(index === -1) {
            novoArray = [...array, dia]
            setArrayDias([...array, dia])
        } else {              
            novoArray.splice(index, 1)
            setArrayDias(novoArray)
        }

        console.log(novoArray)
    }

    function createHabit(e){
        e.preventDefault()
        const data = { name: name, days: arrayDias }

        axiosAuthorized()
            .post(`/habits`, data)
            .then((res) => {
                console.log(res.data)
                setDisabled(false)
            })
            .catch((err) => {
                alert(err.response.data.messege)
                setDisabled(false)
            })

        setDisabled(true)
    }

    return (
        <HabbitContainer data-test="habit-create-container" onSubmit={createHabit}>
            <Input 
                placeholder="nome do hábito" 
                data-test="habit-name-input"
                value={name}
                onChange={e => setName(e.target.value)} 
                disabled={disabled}
            />
            <DaysButtons>
                <DayButton onClick={(e) => handlerDays(arrayDias, 0)} data-test="habit-day" type="button" disabled={disabled}>D</DayButton>
                <DayButton onClick={(e) => handlerDays(arrayDias, 1)} data-test="habit-day" type="button" disabled={disabled}>S</DayButton>
                <DayButton onClick={(e) => handlerDays(arrayDias, 2)} data-test="habit-day" type="button" disabled={disabled}>T</DayButton>
                <DayButton onClick={(e) => handlerDays(arrayDias, 3)} data-test="habit-day" type="button" disabled={disabled}>Q</DayButton>
                <DayButton onClick={(e) => handlerDays(arrayDias, 4)} data-test="habit-day" type="button" disabled={disabled}>Q</DayButton>
                <DayButton onClick={(e) => handlerDays(arrayDias, 5)} data-test="habit-day" type="button" disabled={disabled}>S</DayButton>
                <DayButton onClick={(e) => handlerDays(arrayDias, 6)} data-test="habit-day" type="button" disabled={disabled}>S</DayButton>
            </DaysButtons>

            <Buttons>
                <Cancel data-test="habit-create-cancel-btn" type="submit" disabled={disabled}>Cancelar</Cancel>
                <Save className="save" data-test="habit-create-save-btn" type="submit" disabled={disabled}>
                    {disabled ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={20} width={40} /> : "Salvar" }
                </Save>
            </Buttons> 
        </HabbitContainer>
    )
}