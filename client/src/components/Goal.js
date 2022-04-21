import React from "react"
import axios from "axios"
// import EditGoalForm from "./EditGoalForm.js"

export default function Goal(props) {

    const userAxios = axios.create()

    userAxios.interceptors.request.use(config => {
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
        return config
    })

    const { title, notes, username, isCompleted } = props
//const [isCompleted, setIsCompleted ] = useState({})






    return (
    <div className="goal">
        <div id="goal-itself">
            <h2>{ title }</h2>
            <p id="by">by @{ username }</p>
            <p>{ notes }</p>
            <p id="float"> Status: { isCompleted ? 'Completed' : 'Not completed' }</p>
        </div>
    </div>
    )
}