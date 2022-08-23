import s from "./Settings.module.css"
import { useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Settings(props) {

    const isAuth = useSelector(state => state.auth.isAuth)
    let navigate = useNavigate()
    
    useEffect(()=>{
        if (!isAuth){
            navigate("/login", {replace:true})
        }
    },[isAuth])

    return (
        <div className={s.content}> Settings</div>
    );
}

export default Settings;