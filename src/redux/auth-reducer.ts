import { authAPI } from './../API/api';
let SET_AUTH_USER_DATA = 'SET_USER_DATA';


let initialState  = {
    userId: null ,
    email: null,
    login: null,
    isAuth: false
}



const authReducer = (state = initialState, action: any) => {
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


export const setAuthUserData = (userId: number, email: string, login: string) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } })

export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.me()
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}


export default authReducer;