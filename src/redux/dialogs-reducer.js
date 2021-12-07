const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      //   let newMessage = {
      //     id: 5,
      //     message: state.newMessageBody,
      //   };
      //   state.messages.push(newMessage);
      let body = state.newMessageBody;
      state.messages.push({ id: 5, message: body });
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
  };
};
export default dialogsReducer;
