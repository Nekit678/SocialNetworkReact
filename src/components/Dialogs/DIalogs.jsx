import s from "./Dialogs.module.css"
import { Formik } from 'formik';
import { Field } from 'formik';
import { Form } from 'formik';
import { maxLength, requiredField, onlySpace } from './../../utils/validators';
import { Textarea } from './../common/FormsControls/FormsControls';


function DialogsForm(props) {
    return (
        <Formik initialValues={{ textMessage: '' }}
            validate={values => {
                const errors = {};
                if (requiredField(values.textMessage)) { errors.textMessage = requiredField(values.textMessage) }
                if (maxLength(values.textMessage, 30)) { errors.textMessage = maxLength(values.textMessage, 10) }
                if (onlySpace(values.textMessage)) { errors.textMessage = onlySpace(values.textMessage) }

                return errors;
            }}
            onSubmit={(values, { resetForm }) => {
                props.sendMessage(values.textMessage)
                resetForm()
            }}>
            <Form>
                <div>
                    <Field name="textMessage" placeholder="Enter your message" component={Textarea} />
                </div>
                <div>
                    <button name="sendMessage" type="submit">Send Message</button>
                </div>
            </Form>
        </Formik>
    )
}


function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogelem}
            </div>
            <div className={s.messages}>
                {props.meselem}
                <DialogsForm sendMessage={props.sendMessage}></DialogsForm>
            </div>
        </div>
    );
}

export default Dialogs;