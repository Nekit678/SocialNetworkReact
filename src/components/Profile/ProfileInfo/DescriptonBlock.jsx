import React from 'react';
import { useState } from 'react';
import { Formik, Field } from 'formik';
import { Form } from 'formik';
import { Input } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css'

const DescriptionBlock = React.memo(({ updateProfile, isOwner, fullName, photos, aboutMe, onPhotoSelected, lookingForAJob,lookingForAJobDescription,userId,contacts }) => {
    const [editMode, toggleEditMode] = useState(false)

    return (
        <div>
            <img src={photos.large ? photos.large : "https://img2.freepng.ru/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"}></img>
            <div>
                {isOwner && editMode ? <input type="file" onChange={onPhotoSelected}></input> : <></>}
            </div>
            <div>
                {isOwner && !editMode ? <button onClick={() => toggleEditMode(!editMode)}>{"Редактировать профиль"}</button> : <></>}
            </div>

            <Formik initialValues={{ fullName: fullName, aboutMe: aboutMe ? aboutMe : "", lookingForAJob: lookingForAJob }}
                onSubmit={(values, { setSubmitting, setStatus }) => {
                    console.log({userId,lookingForAJobDescription,contacts,...values});
                    updateProfile({userId,lookingForAJobDescription:"456",contacts,...values})
                    toggleEditMode(!editMode);
                    setSubmitting(false)
                }}>
                {({ status, isSubmitting }) => (
                    <Form>
                        <div>
                            {isOwner && editMode ? <button name="LoginButton" type="submit" >Закончить редактирование</button> : <></>}
                        </div>
                        <div>
                            <span className={s.field}>Имя: </span>
                            {editMode ? <Field name="fullName" placeholder={"Имя"} component={Input} /> : <span>{fullName}</span>}
                        </div>
                        <div>
                            <span className={s.field}>Обо мне: </span>
                            {editMode ? <Field name="aboutMe" placeholder={"Обо мне"} component={Input} /> : <span>{aboutMe}</span>}
                        </div>
                        <div>
                            <span className={s.field}>Ищет работу: </span>
                            {editMode ? <Field name="lookingForAJob" type="checkbox" /> : 
                            lookingForAJob?<span>{"✅"}</span>:<span>{"❌"}</span>}
                        </div>
                    </Form>
                )}

            </Formik>
        </div >
    )
})

export default DescriptionBlock