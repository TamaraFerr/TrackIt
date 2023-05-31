import {DaysButtons, DayButton, Habbit, HabbitTitle, CreatedHabbit, DeleteButton } from "./Style"
import {BsTrash} from "react-icons/bs"

export default function HabitoCriado() {
//     const [name , setName] = useState([])

//    useEffect(() => {

//         axiosAuthorized()
//             .get(`/habits`)
//             .then((res) => {
//                 console.log(res.data)
//                 setName(res.data.name)
//             })
//             .catch((err) => console.log(err.response.data))
//    }, [setName])

    return (
        <CreatedHabbit data-test="habit-container" >
            <Habbit>
                <HabbitTitle data-test="habit-name">Nome do hábito</ HabbitTitle>
                <DeleteButton data-test="habit-delete-btn"><BsTrash /></DeleteButton>
            </Habbit>

            <DaysButtons>
                <DayButton data-test="habit-day">D</DayButton>
                <DayButton data-test="habit-day">S</DayButton>
                <DayButton data-test="habit-day">T</DayButton>
                <DayButton data-test="habit-day">Q</DayButton>
                <DayButton data-test="habit-day">Q</DayButton>
                <DayButton data-test="habit-day">S</DayButton>
                <DayButton data-test="habit-day">S</DayButton>
            </DaysButtons>
            
        </CreatedHabbit>
    )
}