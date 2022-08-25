import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { login } from "../../redux/auth-reducer";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginForm(props) {
    return (
        <Formik initialValues={{ email: '', password: '', rememberMe: false }}
            onSubmit={(values) => props.loginUser(values)}>
            <Form>
                <div>
                    <Field name="email" placeholder={"email"} />
                </div>
                <div>
                    <Field name="password" type="password" placeholder={"Password"} />
                </div>
                <div>
                    <Field name="rememberMe" type="checkbox" />Remember me
                </div>
                <div>
                    <button name="LoginButton" type="submit" >Login</button>
                </div>
            </Form>
        </Formik>
    )
}

function Login(props) {
    const dispatch = useDispatch()

    function loginUser(formInfo) {
        dispatch(login(formInfo))
    }

    return <div>
        <h1>Login</h1>
        <LoginForm loginUser={loginUser}></LoginForm>
    </div>
}





export default Login