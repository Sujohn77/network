import React from 'react'
export const Sidebar =()=>{
    return(
        <aside>
                <div className="categories">
                    <a href="/profile">Profile</a><br/>
                    <a href="/dialogs">Dialogs</a><br/>
                    <a href="/users">Users</a><br/>
                    <a href="#">Photos</a><br/>
                    <a href="#">Logout</a><br/>
                </div>
            </aside>
    )
}
