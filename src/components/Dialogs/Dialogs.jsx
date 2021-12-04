import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages
        .map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();
    let onMessageChange = () => {
        const text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onMessageChange} value={props.newMessageText}  ref={newMessageElement} />
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    );
};

export default Dialogs;