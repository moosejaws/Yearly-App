import React, {useContext, useEffect} from 'react'
import PublicGoalList from './PublicGoalList.js'
import PublicGoalForm from './PublicGoalForm.js'
import { UserContext } from "../context/UserProvider.js"

export default function Public() {

    const {
        user: { username },
        goals,
        addUserGoalPublic,
        getAllUserGoals
        
    } = useContext(UserContext)

    useEffect(() => {
        getAllUserGoals()
    }, [])

    return (
        <div className="public">
            <h1>Welcome @{username}</h1>
            <div class="goal-form">
                <h3>Post goal</h3>
                <PublicGoalForm addUserGoalPublic={addUserGoalPublic} />
            </div>
            <div className="publicGoals">
                <h3>All goals</h3>
                <PublicGoalList goals={goals} />
            </div>
        </div>
    )
}