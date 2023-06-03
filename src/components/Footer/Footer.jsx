import {CircularProgressbar, CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { Link } from "react-router-dom"
import {FooterContainer, Links, ProgressBarr} from "./Style"
import ProgressoContext from "../../context/ProgressoContext"
import { useContext } from "react"

export default function Footer() {
    const {progresso} = useContext(ProgressoContext)

    return (
        <FooterContainer data-test="menu">
            <Link to={`/habitos`}>
                <Links data-test="habit-link">Hábitos</Links>
            </Link>

            <Link to={`/hoje`}>
                <ProgressBarr>
                    <CircularProgressbar data-test="today-link"
                        value={progresso}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={
                            buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#fff",
                                fontSize: "17.98px",
                                textWeight: "bold",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })
                        }
                    />
                </ProgressBarr>
            </Link>

            <Link to={`/historico`}>
                <Links data-test="history-link">Histórico</Links>
            </Link>
        </FooterContainer>
    )
}