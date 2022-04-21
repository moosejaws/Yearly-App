import React, { useState, useEffect } from "react"
import axios from "axios"
const UserContext = React.createContext()
const userAxios = axios.create()


function UserProvider(props) {

    userAxios.interceptors.request.use(config => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = `Bearer ${token}`
        return config
    })
    
    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        goals: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }
    function login(credentials) {
        console.log("panda")
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getUserGoals()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthError(err.response.data.errMsg))
    }
    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: "",
            goals: []
        })
    }
    function handleAuthError(errMsg) {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    // get all of the goals of all of the users
    function getAllUserGoals() {
        userAxios.get(`/api/goal`)
            .then(res => {
                setUserState(prevState => ({
                ...prevState,
                goals: res.data
            }))
        })
            .catch(err => console.log(err.response.data.errMsg))
    }


    //get only x users goals
    function getUserGoals(userId) {
        userAxios.get(`/api/goal/user/${userId}`) // the user id is what is undefined
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    goals: res.data
                }))
            })
            .catch(err => console.log(err))
    }

    

    function addUserGoal(newGoal) {
        userAxios.post('/api/goal', newGoal)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    goals: [...prevState.goals, res.data]
                }))
            })
            .catch(err => console.log(err))
            return getUserGoals()
    }

    function addUserGoalPublic(newGoal) {
        userAxios.post('/api/goal', newGoal)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                goals: [...prevState.goals, res.data]
            }))
        })
        .catch(err => console.log(err))
        return getAllUserGoals()
    }

    function editUserGoal(goalId, newGoal) {
        userAxios.put(`/api/goal/${goalId}`, newGoal)
            .then(res => setUserState(prevState => ({
                ...prevState,
                goals: prevState.goals.map(goal => goal._id !== goalId ? goal : res.data)
            })))
    }

    function deleteUserGoal(goalId) {
        userAxios.delete(`/api/goal/${goalId}`)
            .then(res => setUserState(prevState => ({
                ...prevState,
                goals: prevState.goals.filter(goal => goal._id !== goalId)
            })))
            .catch(err => console.log(err)
            )
        return getUserGoals()
    }

/* function completeGoal(goalId) {
        userAxios.put(`/api/goal/${goalId}`)
        .then(res => setUser)
    } */

    useEffect(() => {
        getAllUserGoals()
        getUserGoals()

    }, [])

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                getAllUserGoals,
                getUserGoals,
                addUserGoal,
                addUserGoalPublic,
                editUserGoal,
                deleteUserGoal
                // completeGoal
            }}>

            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }