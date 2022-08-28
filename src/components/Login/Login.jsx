import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { login } from "../../redux/reducers/auth-reducer";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLength, requiredField } from "../../utils/validators";
import { onlySpace } from './../../utils/validators';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginForm(props) {
    return (
        <Formik initialValues={{ email: '', password: '', rememberMe: false }}
            validate={values => {
                const errors = {};
                if (requiredField(values.email)) { errors.email = requiredField(values.email) }
                if (requiredField(values.password)) { errors.password = requiredField(values.password) }
                if (maxLength(values.email, 30)) { errors.email = maxLength(values.email, 30) }
                if (maxLength(values.password, 15)) { errors.password = maxLength(values.password, 15) }
                if (onlySpace(values.email)) { errors.email = onlySpace(values.email) }
                if (onlySpace(values.password)) { errors.password = onlySpace(values.password) }
                return errors;
            }}
            onSubmit={(values, { setSubmitting, setStatus }) => {
                props.loginUser(values, setStatus);
                setSubmitting(false)
            }}>
            {({ status, isSubmitting }) => (
                <Form>
                    <div> {status}
                        <Field name="email" placeholder={"email"} component={Input} />
                    </div>
                    <div>
                        <Field name="password" type="password" placeholder={"Password"} component={Input} />
                    </div>
                    <div>
                        <Field name="rememberMe" type="checkbox" />Remember me
                    </div>
                    <div>
                        <button disabled={isSubmitting} name="LoginButton" type="submit" >Login</button>
                    </div>
                </Form>)
            }
        </Formik>
    )
}

function Login(props) {
    const dispatch = useDispatch()

    function loginUser(formInfo, setStatus) {
        dispatch(login(formInfo, setStatus))
    }

    const isAuth = useSelector(state => state.auth.isAuth)
    let navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate("/profile", { replace: true })
        }
    }, [isAuth,navigate])

    return <div>
        <h1>Login</h1>
        <LoginForm loginUser={loginUser}></LoginForm>
    </div>
}





export default Login