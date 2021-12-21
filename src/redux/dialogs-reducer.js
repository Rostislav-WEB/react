const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  messages: [
    { id: 1, message: "qwerty" },
    { id: 2, message: "qwerty2" },
    { id: 3, message: "qwerty3" },
    { id: 4, message: "qwerty4" },
  ],
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Valera" },
    { id: 4, name: "Sveta" },
  ],
    newMessageBody: "",
};
const dialogsReducer = (state = initialState, action) => {
  // stateCopy.messages = [...state.messages];
  // stateCopy.dialogs = [...state.dialogs];

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: 
      return {
        ...state,
        newMessageBody: action.body
      }
    case SEND_MESSAGE: 
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id:5, message: body}]
      }
    default:
      return state;
  }
};

export const sendMessage = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBody = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  };
};

export default dialogsReducer;
