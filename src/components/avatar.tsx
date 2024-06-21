import { ProfileImage } from "../assets"
import { Avatar as Avatr } from "antd"
import "./styles/avatar.scss"
export const Avatar = () => {
    return (
            <Avatr src={ProfileImage}  className="avatar"/>
    )
}