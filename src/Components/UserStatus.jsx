import React from 'react'

export const UserStatus = (props) => {
    if(props.isloggedIn && props.isAdmin){
       return <h1>Welcome Admin</h1>
    }else{
        return <h1>Welcome Normal person</h1>
    }
}
