import { NavLink } from 'react-router-dom';
import s from "../Users.module.css"

function User(props) {
    return (
        <div className={s.item}>
            <span>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small ? props.user.photos.small : "https://cdn-icons-png.flaticon.com/512/219/219983.png"}></img>
                    </NavLink>
                </div>

                <div>
                    {props.user.followed ?
                        <button disabled={props.followingFetching.some(id => id === props.user.id)} onClick={() => { props.unfollow(props.user.id) }}>Unfollow</button> :
                        <button disabled={props.followingFetching.some(id => id === props.user.id)} onClick={() => { props.follow(props.user.id) }}>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>Имя: {props.user.name}</div>
                    <div>Статус: {props.user.status ? props.user.status : "нет статуса"}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    )
}

export default User