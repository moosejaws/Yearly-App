import React, { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "../context/UserProvider.js"
// import EditGoalForm from "./EditGoalForm.js"

export default function UserGoal(props) {

    const userAxios = axios.create()

    userAxios.interceptors.request.use(config => {
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
        return config
    })

    const { title, notes, username, _id, isCompleted } = props
    // const [editToggle, setEditToggle] = useState(false)
    const { deleteUserGoal} = useContext(UserContext)
// const [isCompleted, setIsCompleted] = useState([false])



const [complete, setComplete] = useState( {isCompleted: isCompleted || false } )




function completeGoal (goalId) {
    userAxios.put(`api/goal/isCompleted/${goalId}`)
        .then(res => setComplete(prevComplete => ({
            ...prevComplete, 
            isCompleted: res.data.isCompleted
        })))
        .catch(err => console.log(err.response.data.errMsg))

}

    return (
    <div className="goal">
        
            
            <div id="goal-itself">
                <h2>{ title }</h2>
                <p id="by">by @{ username }</p>
                <p>{ notes }</p>
            </div>

            <div id="features">

                
                <button type="button" id="feature-buttons"  class="btn btn-success" onClick={() => completeGoal(_id)}>{ complete.isCompleted ? 'Completed' : 'Complete' }</button>

            <button id="feature-buttons"  class="btn btn-danger" onClick={() => deleteUserGoal(_id)}>Delete Goal</button>
            </div>

        
    </div>
    )
}


/*
                <button id="feature-buttons"  class="btn btn-warning" onClick={() => setEditToggle(prevState => !prevState)}>Edit Goal</button>


<EditGoalForm {...props}  setEditToggle={setEditToggle} editUserGoal={editUserGoal} /> */