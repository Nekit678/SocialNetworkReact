import { NavLink } from "react-router-dom"
import s from "./Users.module.css"


function Users(props) {

    return (<div >
        <div>
            {props.pages.map(page=><span onClick={() => props.onPageChanged(page)} className={props.currentPage===page ? s.selectedPage:""} key={page}>{page}</span>)}
        </div>

        {props.users.map(user => <div key={user.id} className={s.item}>
            <span>
                <div>
                    <NavLink to={'/profile/'+user.id}>
                    <img src={user.photos.small ? user.photos.small:"https://img2.freepng.ru/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"}></img>
                    </NavLink>
                </div>
                
                <div>
                    {user.followed ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> : <button onClick={() => { props.follow(user.id) }}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>Имя: {user.name}</div>
                    <div>Статус: {user.status ? user.status:"нет статуса"}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>)}
    </div>
    )
}
export default Users