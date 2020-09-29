import { UserActions } from "../models/constants"

export const verifyUser = (user, seterror) => (dispatch, getState) => {
  const availableUsers = getState().userReducer.availableUsers
  if (isUserAvailabel(user, availableUsers)) {
    dispatch(setIsAuthenticated(true))
    localStorage.setItem('id_token', 1)
    seterror(null)
  } else {
    seterror('not valid')
  }
}

const isUserAvailabel = (user, users) => {
  return users.find(usr => usr.username === user.username && usr.password === user.password) !== undefined
}



const setIsAuthenticated = IsAuthenticated => {
  return {
    IsAuthenticated,
    type: UserActions.LOGIN_SUCCESS
  }
}

const signout = () => {
  return {
    type: UserActions.SIGN_OUT_SUCCESS
  }
}

export const logout = () => dispatch => {
  dispatch(signout())
  localStorage.removeItem('id_token')

}