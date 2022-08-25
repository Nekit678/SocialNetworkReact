import { Field, Form, Formik } from "formik"
import { useDispatch} from 'react-redux/es/exports';
import { login } from "../../redux/auth-reducer";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLength, requiredField } from "../../utils/validators";
import { onlySpace } from './../../utils/validators';

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
            onSubmit={(values) => props.loginUser(values)}>
            <Form>
                <div>
                    <Field name="email" placeholder={"email"} component={Input} />
                </div>
                <div>
                    <Field name="password" type="password" placeholder={"Password"} component={Input}/>
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