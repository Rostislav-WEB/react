let SET_AUTH_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                // ...action.data перезатрет userId null, email null на данные с сервера
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
};


export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login} })

export default authReducer;