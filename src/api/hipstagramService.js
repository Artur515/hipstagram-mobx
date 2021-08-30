import axios from "axios";
import {headers} from "./currentUser";


export const API_URL = 'https://hipstagram-api.herokuapp.com'

export const registrationCurrentUser = async (login, email, password) => {
    const response = await axios.post(API_URL + '/auth/registration', {login, email, password})
    return response
}


export const loginCurrentUser = async (login, password) => {
    const response = await axios.post(API_URL + '/auth/login', {login, password})
    return response
}

export const logOutCurrentUser = () => {
    localStorage.removeItem('currentUserToken')
}

export const getCurrentUser = async () => {
    const response = axios.get(API_URL + '/users/current', {headers: headers})
    return response
}
export const getAllUsers = async () => {
    const response = axios.get(API_URL + '/users', {headers: headers})
    return response
}

export const updateCurrentUser = async (data) => {
    const response = axios.patch(API_URL + '/users/current', data, {headers: headers})
    return response
}

export const getUserById = async (id) => {
    const response = axios.get(API_URL + '/users/' + id, {headers: headers})
    return response
}

export const updatePassword = async (data) => {
    const response = axios.post(API_URL + '/auth/updatePassword', data, {headers: headers})
    return response
}

export const followUser = async (id) => {
    const response = axios.get(API_URL + '/users/follow/' + id, {headers: headers})
    return response
}

export const createPost = async (data) => {
    const response = axios.post(API_URL + "/posts", data, {headers: headers})
    return response
}

export const likePost = async (id) => {
    const response = axios.get(API_URL + '/posts/like/' + id, {headers: headers})
    return response
}

export const getFollowersAndFollowingOfUserByUserId = async (id) => {
    const response = axios.get(API_URL + '/users/followersAndFollowing/' + id, {headers: headers})
    return response
}

export const createComment = async (data) => {
    const response = axios.post(API_URL + '/comments', data, {headers: headers})
    return response
}


export const getCommentsByPostId = async (id) => {
    const response = axios.get(API_URL + '/comments/' + id, {headers: headers})
    return response
}

export const updateCommentText = async (id, data) => {
    const response = axios.patch(API_URL + '/comments/' + id, {data}, {headers: headers})
    return response
}


export const deleteCommentByCommentId = async (id) => {
    const response = axios.delete(API_URL + '/comments/' + id, {headers: headers})
    return response
}