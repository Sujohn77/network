import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers : {
        "API-KEY":"2b1cf7ba-6d1d-47ad-a8c9-73b6630a09e4"
    }
});

export const UsersAPI = {
    getUsers(pageCurrent, pageSize){
        return instance.get(`users?page=${pageCurrent}&count=${pageSize}`).then(response => response.data);
    },
    follow(userId){
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    setProfile(userId){
        console.warn("Use ProfileAPI to get profile");
        return ProfileAPI.setProfile(userId);
    }
}
export const ProfileAPI ={
    setProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status}).then(response => response.data);
    }
}

export const AuthAPI = {
    isAuth(){
        return instance.get(`auth/me`).then(response => response.data);
    },
    login(email,password,rememberMe,captcha){
        return instance.put(`auth/login`,{email,password,rememberMe,captcha});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}

export const securityApi = {
    getCaptcha(){
        return instance.get("/security/get-captcha-url");
    }
}
