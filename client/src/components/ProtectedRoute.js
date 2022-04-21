import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute(props){
    const { path, navigateTo, component: C, token, ...rest } = props
    return token ?
    <Route path={path} render={() => <C {...rest}/> }/> :
    <Redirect to={Redirect} />
}