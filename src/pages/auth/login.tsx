import { Button, Form, Input } from "antd";
import { SignInImage } from "../../assets";
import "../styles/auth.scss";
import { useAuth } from "../../hooks/use-auth";
import { saveLocalStorage } from "../../helper/storage";
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react";
export default function Login() {

    const { setIsUserLoggedIn, setUserData } = useAuth();

    const [isLoadingAuth, setIsLoadingAuth] = useState(false);

    const navigate = useNavigate()

    const onSubmit = (values: {
        email: string
        password: string
    }) => {

        setIsLoadingAuth(true)

        setTimeout(() => {
            setUserData(values)
            saveLocalStorage("userData", JSON.stringify(values))
            setIsUserLoggedIn(true)
            saveLocalStorage("isUserLoggedIn", "true")
            navigate({
                to: "/user"
            });
            setIsLoadingAuth(false)
        }, 2000)

    }
    return (
        <div className="auth-layout">
            <div className="auth-image">
                <img src={SignInImage} alt="sign in img" />
            </div>

            <div className="auth-form">
                <p>Login into your Account</p>
                <Form className="auth-form-form" onFinish={onSubmit}>
                    
                    <Form.Item label="" name="email" rules={[{ required: true }]}>
                        <Input placeholder="Email" className="input-email" />
                    </Form.Item>

                    <Form.Item name="password" label="" rules={[{ required: true }]}>
                        <Input placeholder="password" type="password" className="input-password" />
                    </Form.Item>

                    <p className="forgot-pwd-text">
                        Forgot Password ?
                    </p>

                    <Button loading={isLoadingAuth} className="auth-btn" htmlType="submit" type="primary">Login</Button>
                </Form>
            </div>
        </div>

    )
}