const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Rostislav222", likesCount: 43 },
    { id: 2, message: "34433434", likesCount: 15 },
    { id: 3, message: "blabla", likesCount: 2323 },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostText = (body) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: body,
  };
};

export const setUsersProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    profile: profile,
  };
};

export default profileReducer;
