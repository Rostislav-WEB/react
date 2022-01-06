import { Fragment, useState } from "react"



const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState('Изменить статус')
    return (
        <Fragment>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => {
                        setEditMode(true)
                    }}>{status}</span>
                </div>
            }
            {editMode && <div>
                <input autoFocus={true} onBlur={() => {
                    setEditMode(false)
                }}
                    onChange={(e) => {
                        setStatus(e.target.value)
                    }}
                    value={status}>
                </input>
            </div>
            }

        </Fragment>

    )

}

export default ProfileStatus