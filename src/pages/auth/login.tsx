import { Button, Form, Input } from "antd";
import { LogoIcon, SignInImage } from "../../assets";
import "../styles/auth.scss";
import { useAuth } from "../../hooks/use-auth";
import { saveLocalStorage } from "../../helper/storage";
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react";
import { motion } from "framer-motion";
import { loginContainerVariants } from "../../helper/animation-options";
import { getUserameFromEmail } from "../../helper/get-user-details";
export default function Login() {

    const { setIsUserLoggedIn, setUserData } = useAuth();

    const [isLoadingAuth, setIsLoadingAuth] = useState(false);

    const navigate = useNavigate()

    const onSubmit = (values: {
        email: string
        password: string
    }) => {
        const username = getUserameFromEmail(values.email)
        const userValues = {...values, username}
        setIsLoadingAuth(true)

        setTimeout(() => {
            setUserData(userValues)
            saveLocalStorage("userData", JSON.stringify(userValues))
            setIsUserLoggedIn(true)
            saveLocalStorage("isUserLoggedIn", "true")
            navigate({
                to: "/user"
            });
            setIsLoadingAuth(false)
        }, 2000)        

    }
    return (
        <motion.div
            variants={loginContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="auth-layout login-font">
            <div className="auth-image">
                <img src={SignInImage} alt="sign in img" />
            </div>


            <div className="auth-form">

                <div className="auth-text logo-icon-auth">
                    <img src={LogoIcon} alt="logo" />
                </div>

                <div className="auth-text login-font">
                    <h2>Welcome!</h2>
                    <p>Enter details to Login</p>
                </div>
                <Form className="auth-form-form" onFinish={onSubmit}>

                    <Form.Item label="" name="email" rules={[{ required: true }]}>
                        <Input placeholder="Email" className="input-email" />
                    </Form.Item>

                    <Form.Item name="password" label="" rules={[{ required: true }]}>
                        <Input placeholder="Password" type="password" className="input-password" />
                    </Form.Item>

                    <ul className="">
                        <li>Note: use any email and password to login. (i.e do wetin dey your mind!)</li>
                    </ul>

                    <p className="forgot-pwd-text">
                        Forgot Password ?
                    </p>





                    <Button loading={isLoadingAuth} className="auth-btn" htmlType="submit" type="primary">Login</Button>
                </Form>
            </div>
        </motion.div>

    )
}