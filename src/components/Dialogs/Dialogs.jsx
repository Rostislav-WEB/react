import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import { Navigate } from 'react-router-dom';


const Dialogs = (props) => {

    if (props.isAuth === false) {
        return <Navigate to="/login/" /> 
    }
    
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea onChange={onNewMessageChange} value={newMessageBody}
                        placeholder='Enter your message' />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Отправить</button>
                </div>
            </div>
        </div>
    );
};
export default Dialogs;