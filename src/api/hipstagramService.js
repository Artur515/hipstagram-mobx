import axios from "axios";
import {API_URL, host} from "./currentUser";


export const registrationCurrentUser = async (login, email, password) => {
    const response = await axios.post(API_URL + '/auth/registration', {login, email, password})
    return response
}


export const loginCurrentUser = async (login, password) => {
    const response = await axios.post(API_URL + '/auth/login', {login, password})
    localStorage.setItem('currentUserToken', response.data.access_token)
    return response
}

export const logOutCurrentUser = () => {
    localStorage.removeItem('currentUserToken')
}

export const getCurrentUser = async () => {
    const {data} = await host.get('/users/current')
    return data
}

export const getAllUsers = async () => {
    const {data} = await host.get('/users')
    return data
}

export const updateCurrentUser = async (newData) => {
    const {data} = await host.patch('/users/current', newData)
    return data
}

export const getUserByLogin = async (query) => {
    const {data} = await host.get('/users/?search=' + query)
    return data
}

export const getUserById = async (id) => {
    const {data} = await host.get('/users/' + id)
    return data
}

export const updatePassword = async (passwordData) => {
    const {data} = await host.post('/auth/updatePassword', passwordData)
    return data
}

export const followUser = async (id) => {
    const response = await host.get('/users/follow/' + id)
    return response
}

export const createPost = async (postData) => {
    const {data} = await host.post('/posts', postData)
    return data
}

export const likePost = async (id) => {
    const response = await host.get('/posts/like/' + id)
    return response
}

export const getFollowersAndFollowingOfUserByUserId = async (id) => {
    const {data} = await host.get('/users/followersAndFollowing/' + id)
    return data
}

export const createComment = async (commentData) => {
    const {data} = await host.post('/comments', commentData)
    return data
}


export const getCommentsByPostId = async (id) => {
    const {data} = await host.get('/comments/' + id)
    return data
}

export const updateCommentText = async (id, commentData) => {
    const {data} = await host.patch('/comments/' + id, {commentData})
    return data
}


export const deleteCommentByCommentId = async (id) => {
    const {data} = await host.delete('/comments/' + id)
    return data
}