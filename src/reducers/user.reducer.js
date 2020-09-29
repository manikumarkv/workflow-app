import { UserActions } from '../models/constants'
import { User } from '../models/user';



const initialState = {
    availableUsers: [
        new User({ username: 'mani', password: 'password' }),
        new User({ username: 'admin', password: 'password' })],
    
    isAuthenticated: !!localStorage.getItem("id_token")
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {        
        case UserActions.LOGIN_SUCCESS:
            return { ...state, isAuthenticated: true };
        case UserActions.SIGN_OUT_SUCCESS:
            return { ...state, isAuthenticated: false };
        case UserActions.LOGIN_FAILURE:
            return { ...state, isAuthenticated: false };
        default:
            return state
    }
}

export default userReducer;