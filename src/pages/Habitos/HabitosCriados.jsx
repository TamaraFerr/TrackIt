import axiosAuthorized from "../../constants/axiosAuthorized"
import UserContext from "../../context/UserContext"
import { useContext } from "react"
import { useState, useEffect } from "react"
import HabitoCriado from "../../components/Habito/HabitoCriado"

export default function  HabitosCriados() {
    const [habitos, setHabitos] = useState([])
    const {user} = useContext(UserContext)

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
        <>
            {habitos.map( hab => (
                <HabitoCriado
                    key={hab.id}
                    name={hab.name}
                    days={hab.days}
                />
            ))}
        </>
    )
}