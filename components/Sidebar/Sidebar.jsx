import React from 'react'
 const Sidebar =()=>{
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
export default Sidebar;