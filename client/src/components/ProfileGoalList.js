import React, {useContext, useEffect} from 'react'
import UserGoal from './UserGoal.js'
import { UserContext } from "../context/UserProvider.js"

export default function ProfileGoalList(props) {
    const { goals } = props

    const { getUserGoals } = useContext(UserContext)

    useEffect(() => {
        getUserGoals()
    }, [])

    return (
        <div className="goal-list">
            {goals.map(goal => <UserGoal {...goal} userId={goal.user} key={goal._id} />)}
        </div>
    )
}