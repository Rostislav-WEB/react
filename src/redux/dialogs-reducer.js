const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageBody,
      };
      state.messages.push(newMessage);
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }

  return state;
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
