import { createSelector } from "@reduxjs/toolkit";

export const getUsersList = state => state.usersPage.users;
export const getFollowingFetching = state => state.usersPage.followingFetching;
export const getPageSize = state => state.usersPage.pageSize;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getTotalUsersCount = state => state.usersPage.totalUsersCount;
export const getIsFetching = state => state.usersPage.isFetching;

export const getUsersPageInfo = createSelector([getUsersList, getFollowingFetching, getPageSize,
    getCurrentPage, getTotalUsersCount, getIsFetching], (users, followingFetching, pageSize, currentPage,
        totalUsersCount, isFetching) => {
            return {
                users, followingFetching, pageSize,
                currentPage, totalUsersCount, isFetching
            }
})