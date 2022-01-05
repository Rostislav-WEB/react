import { usersAPI } from './../API/api';

const FOLLOW = "FOLLOWER";
const UNFOLLOW = "UNFOLOWER";
const SET_USERS = "SET_USERS";
const SET_CURRRENT_PAGE = "SET_CURRRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"
type InitialState = {
  users: any,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: any
}
let initialState: InitialState = {
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
const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user: any) => {
          if (user.id === action.usersId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user: any) => {
          if (user.id === action.usersId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
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
          : state.followingInProgress.filter((id: any) => id !== action.userId)
      }
    }

    default:
      return state;
  }
};

export const followSuccess = (usersId: any) => ({ type: FOLLOW, usersId });
export const unFollowSuccess = (usersId: any) => ({ type: UNFOLLOW, usersId });
export const setUsers = (users: any) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage: any) => ({ type: SET_CURRRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount: any) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching: any) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching: any, userId: any) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
  }
};
export const follow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.followSuccess(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      })
  }
}

export const unFollow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unFollowSuccess(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unFollowSuccess(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
      });
  }
}
export default usersReducer;
