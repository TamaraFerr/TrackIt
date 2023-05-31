import {CircularProgressbar, CircularProgressbarWithChildren, buildStyles} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { Link } from "react-router-dom"
import {FooterContainer, Links, ProgressBarr} from "./Style"

export default function Footer() {
    return (
        <FooterContainer data-test="menu">
            <Link to={`/habitos`}>
                <Links data-test="habit-link">Hábitos</Links>
            </Link>

            <ProgressBarr>
                <Link to={`/hoje`}>
                    <CircularProgressbar data-test="today-link" 
                        value=""
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
                </Link>
            </ProgressBarr>

            <Link to={`/historico`}>
                <Links data-test="history-link">Histórico</Links>
            </Link>
        </FooterContainer>
    )
}