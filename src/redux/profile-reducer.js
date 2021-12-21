const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Rostislav222", likesCount: 43 },
    { id: 2, message: "34433434", likesCount: 15 },
    { id: 3, message: "blabla", likesCount: 2323 },
  ],
  newPostText: "",
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
        newPostText: action.newText
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

export default profileReducer;
