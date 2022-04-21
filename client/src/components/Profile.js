import React, {useContext, useEffect} from 'react'
import GoalForm from './GoalForm.js'
import ProfileGoalList from './ProfileGoalList.js'
import { UserContext } from "../context/UserProvider.js"


export default function Profile() {

    const {
        user: { username },
        addUserGoal,
        getUserGoals,
        goals
    } = useContext(UserContext)
        
        useEffect(() => {
            getUserGoals()
        }, [])

    return (
        <div className="profile">
            <h1>Welcome @{username}</h1>
            <div class="goal-form">
            <h3>Post goal</h3>

            <GoalForm addUserGoal={addUserGoal} />
            </div>
            <div className="userGoals">
                <h3>Your goals</h3>
                <ProfileGoalList goals={goals} />
            </div>
        </div>
    )
}