import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import {Container, HistoricContainer} from "./Style"

export default function Historico(){
    return (
        <Container>
            <NavBar />

            <HistoricContainer>
                <h1>Histórico</h1>
                <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            </HistoricContainer>

            <Footer />
        </Container>
    )
}