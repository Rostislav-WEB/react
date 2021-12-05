import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Rostislav222", likesCount: 43 },
        { id: 2, message: "34433434", likesCount: 15 },
        { id: 3, message: "blabla", likesCount: 2323 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "qwerty" },
        { id: 2, message: "qwerty2" },
        { id: 3, message: "qwerty3" },
        { id: 4, message: "qwerty4" },
      ],
      newMessageBody: "",
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Valera" },
        { id: 4, name: "Sveta" },
      ],
    },
    sidebar: {
      friends: [{ name: "пидр1" }, { name: "пидр2" }, { name: "пидр3" }],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};





export default store;
