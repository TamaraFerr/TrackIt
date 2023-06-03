import {Body, FotoPerfil} from "./Style"
import UserContext from "../../context/UserContext"
import { useContext } from "react"
import Logo from "../../assets/logo-mini.svg"

export default function NavBar() {
    const {user} = useContext(UserContext)

    return (
        <>
            <Body data-test="header">
                <img src={Logo} alt="logo-trackit"/>
                <FotoPerfil src={user.image} alt="profile-pic" data-test="avatar"/>
            </Body>
        </>
    )
}