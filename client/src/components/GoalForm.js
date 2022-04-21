import React, {useState, useContext} from "react"
import { UserContext } from "../context/UserProvider.js"

export default function GoalForm(props){

    const initInputs = {
        title:"",
        notes:""
    }

    const [inputs, setInputs] = useState(initInputs)

    const { addUserGoal } = useContext(UserContext)


    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        addUserGoal(inputs)
        setInputs(initInputs)
    }

    const {title , notes} = inputs



    return(
        <form className="post-goal" onSubmit={handleSubmit}>
            
            <div className="just-inputs">
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
                className="notes-input"
                />
            </div>

            <button id="submit-goal" class="btn btn-dark">Submit</button>

        </form>
    )
}