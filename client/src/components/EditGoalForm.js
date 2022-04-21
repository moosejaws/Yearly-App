import React, { useState, useContext } from "react"
import { UserContext } from "../context/UserProvider.js"

export default function EditGoalForm(props) {

    const initInputs = {
        title: "",
        notes: ""
    }
    
    const [inputs, setInputs] = useState(initInputs)
    const { editUserGoal } = useContext(UserContext)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))

    }

    function handleSubmit(e) {
        e.preventDefault()
        editUserGoal(inputs, props._id)
        props.setEditToggle(prevState => !prevState)
    }


    const { title, notes } = inputs

    return (
        <form onSubmit={handleSubmit}>
            <div id="edit-goal">
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                type="text"
                name="notes"
                value={notes}
                onChange={handleChange}
                placeholder="Notes"
            />
            <button>Submit Edit</button>
            </div>
        </form>
    )
}