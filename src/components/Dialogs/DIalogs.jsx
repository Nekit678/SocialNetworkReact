import s from "./Dialogs.module.css"
import { Formik } from 'formik';
import { Field } from 'formik';
import { Form } from 'formik';


function DialogsForm(props) {
    return (
        <Formik initialValues={{ textMessage: '' }}
            onSubmit={(values, { resetForm }) => {
                props.sendMessage(values.textMessage)
                resetForm()
            }}>
            <Form>
                <div>
                    <Field name="textMessage" placeholder="Enter your message" component="textarea" />
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
                <DialogsForm sendMessage = {props.sendMessage}></DialogsForm>
            </div>
        </div>
    );
}

export default Dialogs;