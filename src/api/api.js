import axios from 'axios';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": "4288335e-2c2b-45a0-919a-4022c291ebab"
        }
    }
)


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(responce => responce.data)
    }
}

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    getCurrentUser() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(formInfo) {
        return instance.post(`auth/login`, formInfo).then(response => response.data)
    }
}

export const profileAPI = {
    getProfileInfo(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(response => response.data)
    }
}