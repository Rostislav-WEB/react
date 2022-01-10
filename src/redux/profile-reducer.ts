import { profileAPI } from './../API/api';
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_STATUS = "SET_STATUS"

let initialState = {
  posts: [
    { id: 1, message: "Rostislav222", likesCount: 43 },
    { id: 2, message: "34433434", likesCount: 15 },
    { id: 3, message: "blabla", likesCount: 2323 },
  ],
  newPostText: "",
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action: any) => {
  // let stateCopy = { ...state };
  // stateCopy.posts = [...state.posts];

  // let stateCopy = {
  //   ...state,
  //   posts: [...state.posts]
  //  };

  switch (action.type) {
    case ADD_POST:
      let text = state.newPostText;
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: text, likesCount: 0 }],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state;
  }
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostText = (body: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: body,
  };
};

export const setUsersProfile = (profile: any) => {
  return {
    type: SET_USERS_PROFILE,
    profile: profile,
  };
};
export const setStatus = (status: string) => {
  return {
    type: SET_STATUS,
    status: status
  }
}

export const getStatus = (userId: number) => (dispatch: any) => {
  profileAPI.getStatus(userId)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatus(response.data))
      }
    })
}
export const updateStatus = (status: string) => (dispatch: any) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }

    })
}


export default profileReducer;
