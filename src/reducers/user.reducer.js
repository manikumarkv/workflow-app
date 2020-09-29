import { UserActions } from '../models/constants'



const initialState = {
    user: {}
}

const userStore = (state = initialState, action) => {
    switch (action.type) {
        case UserActions.UPDATE_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default userStore;