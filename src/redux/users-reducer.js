const FOLLOW = "FOLLOWER";
const UNFOLLOW = "UNFOLOWER";
const SET_USERS = "SET_USERS";
const SET_CURRRENT_PAGE = "SET_CURRRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
  // массив с пользователями
  users: [],
  // pageSize - сколько выводится человек
  pageSize: 5,
  // общее количество
  totalUsersCount: 0,
  // текущая страница
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
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
          case TOGGLE_IS_FETCHING: {
            return {
              ...state,
              isFetching: action.isFetching
            }
          }
          case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
              ...state,
              followingInProgress: action.isFetching 
              ? [...state.followingInProgress, action.userId]
              : state.followingInProgress.filter(id => id !== action.userId )
            }
          }

    default:
      return state;
  }
};

export const follow = (usersId) => ({ type: FOLLOW, usersId });
export const unFollow = (usersId) => ({ type: UNFOLLOW, usersId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress =(isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

 export default usersReducer;
