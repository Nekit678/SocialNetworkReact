import User from './User/User';
import Paginator from "../common/Paginator/Paginator";


function Users(props) {
    return (<div >
        <Paginator totalCount={props.totalUsersCount} pageSize={props.pageSize}
            currentPage={props.currentPage} onPageChanged={props.onPageChanged}></Paginator>

        {props.users.map(user => <User key={user.id} user={user} followingFetching={props.followingFetching}
            follow={props.follow} unfollow={props.unfollow}></User>)}
    </div>
    )
}
export default Users