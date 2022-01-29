import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateStatus } from "../../../redux/profile-reducer";
// class ProfileStatus extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//     activateEditMode = () => {
//         this.setState({ editMode: true })
//     }
//     deactivateEditMode = () => {
//         this.setState({ editMode: false })
//         this.props.updateStatus(this.state.status)
//     }
    // onStatusChange = (e) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     })
    // }
//     componentDidUpdate(prevProps, prevState) {

//         if (prevProps.status !== this.props.status) {
//             this.props.setState({
//                 status: this.props.status
//             })
//         }

//     }
//     render() {
// return (
//     <div>
//         {!this.state.editMode &&
//             <div>
//                 <span onDoubleClick={this.activateEditMode}>{this.props.status  ||  "-------"}</span>
//             </div>
//         }
//         {this.state.editMode &&
//             <div>
//                 <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
//             </div>
//         }
//     </div>
// )
//     }
// }

const ProfileStatus = (props) => {
    console.log(props.status);
    const [status, setStatus] = useState('');
    const [editMode, setEditMode] = useState(false);
    let onStatusChange = (e) => {
        let newStatus = e.currentTarget.value
        setStatus(newStatus)
    }
    let deactivateEditMode = () => {
        setEditMode(true)
        props.updateStatus(props.status)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={setEditMode(true)}>{props.status || "-------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        status: state.profilePage.status,
    }
}
export default connect(mapStateToProps, { updateStatus })(ProfileStatus)
