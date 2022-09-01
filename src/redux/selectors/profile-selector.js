import { createSelector } from "@reduxjs/toolkit";

export const getUserProfile = state => state.profilePage.userProfile;
export const getUserStatus = state => state.profilePage.status;
export const getPosts = state => state.profilePage.dataPosts;


export const getProfilePageInfo = createSelector([getUserProfile,getUserStatus,getPosts], (userProfile,userStatus,dataPosts) => {
            return {
                userProfile, userStatus, dataPosts
            }
})