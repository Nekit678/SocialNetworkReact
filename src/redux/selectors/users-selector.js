
export function getUsersList(state){
    return state.usersPage.users;
}

export function getFollowingFetching(state){
    return state.usersPage.followingFetching;
}

export function getPageSize(state){
    return state.usersPage.pageSize;
}

export function getCurrentPage(state){
    return state.usersPage.currentPage;
}

export function getTotalUsersCount(state){
    return state.usersPage.totalUsersCount;
}

export function getIsFetching(state){
    return state.usersPage.isFetching;
}