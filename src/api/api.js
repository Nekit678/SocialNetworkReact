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
    async getUsers(currentPage = 1, pageSize = 10) {
        let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    }
}

export const followAPI = {
    async follow(userId) {
        let response = await instance.post(`follow/${userId}`);
        return response.data;
    },
    async unfollow(userId) {
        let response = await instance.delete(`follow/${userId}`)
        return response.data
    }
}

export const authAPI = {
    async getCurrentUser() {
        let response = await instance.get(`auth/me`)
        return response.data
    },
    async login(formInfo) {
        let response = await instance.post(`auth/login`, formInfo)
        return response.data
    },
    async logout() {
        let response = await instance.delete(`auth/login`)
        return response.data
    }
}

export const profileAPI = {
    async getProfileInfo(userId) {
        let response = await instance.get(`profile/${userId}`)
        return response.data
    },
    async getStatus(userId) {
        let response = await instance.get(`profile/status/${userId}`)
        return response.data
    },
    async updateStatus(status) {
        let response = await instance.put(`profile/status`, { status: status })
        return response.data
    }
}