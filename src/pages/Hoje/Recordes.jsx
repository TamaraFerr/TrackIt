import { TodayRecords, HabbitRecords, Texts, Sequence, Record } from "./Style"
import {BsFillCheckSquareFill} from "react-icons/bs"

export default function Recordes({id, done, name , currentSequence, highestSequence}) {
    return(
        <TodayRecords>
            <HabbitRecords data-test="today-habit-container">
                <Texts>
                    <h2 data-test="today-habit-name">{name}</h2>
                    <p data-test="today-habit-sequence">Sequência atual: <Sequence done={done}>{currentSequence} dias</Sequence></p>
                    <p data-test="today-habit-record">Seu recorde: <Record currentHighestSequence={currentSequence === highestSequence}>{highestSequence} dias</Record></p>
                </Texts>
                
                <BsFillCheckSquareFill data-test="today-habit-check-btn" done={done}/>
            </HabbitRecords>
        </TodayRecords>
    )
}