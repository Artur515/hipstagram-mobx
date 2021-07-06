export const currentUser = JSON.parse(localStorage.getItem('currentUserToken'))

export const headers = {'Authorization': currentUser, 'Content-Type': 'application/json' || 'multipart/form-data'}