import { connect } from "react-redux";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage, 
    }
}
let authRedirectComponent = withAuthRedirect(Dialogs)
export default connect(mapStateToProps, {
    sendMessage, 
    updateNewMessageBody,
})(authRedirectComponent);
