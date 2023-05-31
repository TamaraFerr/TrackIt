import NavBarr from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import {Container, TodayContainer, Texts, HabbitRecords, ProgressHabbit, Sequence, Record, TodayRecords, HabbitRecords2} from "./Style"
import {BsFillCheckSquareFill} from "react-icons/bs"

export default function Hoje(){
    return (
        <Container>
            <NavBarr />

            <TodayContainer>
                <ProgressHabbit>
                    <p data-test="today-counter">Nenhum hábito concluído ainda</p>
                </ProgressHabbit>

                <TodayRecords>
                    <HabbitRecords data-test="today-habit-container">
                        <Texts>
                            <h2 data-test="today-habit-name">Hábito criado agora</h2>
                            <p data-test="today-habit-sequence">Sequência atual: <Sequence>5 dias</Sequence></p>
                            <p data-test="today-habit-record">Seu recorde: <Record>5 dias</Record></p>
                        </Texts>
                        <BsFillCheckSquareFill data-test="today-habit-check-btn"/>
                    </HabbitRecords>

                    <HabbitRecords2 data-test="today-habit-container">
                        <Texts>
                            <h2 data-test="today-habit-name">Hábito criado agora</h2>
                            <p data-test="today-habit-sequence">Sequência atual: <span>5 dias</span></p>
                            <p data-test="today-habit-record">Seu recorde: <span>4 dias</span></p>
                        </Texts>
                        <BsFillCheckSquareFill data-test="today-habit-check-btn"/>
                    </HabbitRecords2>
                </TodayRecords>
            </TodayContainer>

            <Footer />
        </Container>
    )
}