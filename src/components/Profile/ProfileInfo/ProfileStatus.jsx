import { useEffect, useState } from "react"

function ProfileStatus(props) {
    const [editMode, toggleEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    return (
        <div>
            {!editMode ?
                <div>
                    <span onDoubleClick={()=>toggleEditMode(true)}>{props.status || "No Status"}</span>
                </div> :
                <div>
                    <input onChange={(event) => setStatus(event.target.value)} autoFocus={true} onBlur={()=>{toggleEditMode(false); props.updateStatus(status)}} value={status}></input>
                </div>
            }
        </div>
    )
}

export default ProfileStatus