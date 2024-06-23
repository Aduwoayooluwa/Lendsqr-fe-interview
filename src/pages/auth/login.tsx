import { Form, Input } from "antd";
import { SignInImage } from "../../assets";
import "../styles/auth.scss";

export default function Login() {
    return (
        <div>
            <div>
                <img src={SignInImage} alt="sign in image" />
            </div>

            <div>
                <Form>
                    <Form.Item label="" name="" className="input-email">
                        <Input placeholder="Email"  />
                    </Form.Item>

                    <Form.Item name="password" label="" >
                        <Input placeholder="password" type="password" className="input-password"/>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}