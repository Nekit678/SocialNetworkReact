import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';



function withAuthRedirect(Component){
    return(
        (props) => {
            // const isAuth = useSelector(state => state.auth.isAuth)
            // let navigate = useNavigate()
            // useEffect(()=>{
            //     if (!isAuth){
            //         navigate("/login", {replace:true})
            //     }
            // },[isAuth])
            
            return (
                <Component {...props}></Component>
            )
        }
    )
}

export default withAuthRedirect