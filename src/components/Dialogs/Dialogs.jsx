import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Artem" id="1" />
                <DialogItem name="qwerty" id="2" />
                <DialogItem name="Valera" id="3" />
            </div>
            <div className={s.messages}>
                <Message message='Привееет' />
                <Message message='Yoo' />
                <Message message='Yoo' />
                <Message message='Yoo' />
            </div>
        </div>
    )
}

export default Dialogs;