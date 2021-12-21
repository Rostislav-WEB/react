import { connect } from "react-redux";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewMessageBody: (body) => {
//            dispatch(updateNewMessageBody(body));
//         },
//         sendMessage: () => {
//             dispatch(sendMessage());
//         },
//     }
// }
const DialogsContainer = connect(mapStateToProps, {
    sendMessage, 
    updateNewMessageBody,
})(Dialogs);

export default DialogsContainer;