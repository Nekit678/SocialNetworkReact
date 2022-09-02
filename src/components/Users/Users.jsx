import User from './User/User';


function Users(props) {
    return (<div >
        {props.users.map(user => <User key={user.id} user={user} followingFetching={props.followingFetching}
            follow={props.follow} unfollow={props.unfollow}></User>)}
    </div>
    )
}
export default Users