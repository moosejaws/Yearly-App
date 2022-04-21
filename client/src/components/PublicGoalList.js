import React, {useContext, useEffect} from 'react'
import Goal from './Goal.js'
import { UserContext } from "../context/UserProvider.js"

export default function PublicGoalList(props) {
    const { goals } = props

    const { getAllUserGoals } = useContext(UserContext)

    useEffect(() => {
        getAllUserGoals()
    }, [])

    return (
        <div className="goal-list">
            {goals.map(goal => <Goal {...goal} key={goal._id} />)}
        </div>
    )
}