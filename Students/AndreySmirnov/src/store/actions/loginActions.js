export const SET_USER_NAME = '@@login/SET_USER_NAME'
export const ON_USERNAME_CHANGE = '@@login/ON_USERNAME_CHANGE'

export const setUser = () => ({type: SET_USER_NAME})
export const onUserNameChange = (text) => ({type: ON_USERNAME_CHANGE, newText: text})