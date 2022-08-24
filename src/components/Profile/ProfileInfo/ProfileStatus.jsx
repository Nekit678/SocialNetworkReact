import { useState } from "react"



function ProfileStatus(props) {
    const [editMode, toggleEditMode] = useState(false)
    
    return (
        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={()=>toggleEditMode(true)}>{props.status}</span>
                </div> :
                <div>
                    <input autoFocus={true} onBlur={()=>toggleEditMode(false)} value={props.status}></input>
                </div>
            }
        </div>
    )
}

export default ProfileStatus