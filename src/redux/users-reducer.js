const FOLLOW = "FOLLOWER";
const UNFOLLOW = "UNFOLOWER";
const SET_USERS = "SET_USERS";
const SET_CURRRENT_PAGE = "SET_CURRRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
let initialState = {
  // массив с пользователями
  users: [],
  // pageSize - сколько выводится человек
  pageSize: 5,
  // общее количество
  totalUsersCount: 0,
  // текущая страница
  currentPage: 1,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.usersId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [ ...action.users],
      };
      case SET_CURRRENT_PAGE:
        return {
          ...state,
          currentPage: action.currentPage,
          
        };
        case SET_TOTAL_USERS_COUNT:
          return {
            ...state,
            totalUsersCount: action.count,
          };

    default:
      return state;
  }
};

export const followAC = (usersId) => ({ type: FOLLOW, usersId });
export const unFollowAC = (usersId) => ({ type: UNFOLLOW, usersId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRRENT_PAGE, currentPage})
export const totalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

export default usersReducer;
