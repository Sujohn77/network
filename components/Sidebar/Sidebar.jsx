import React from 'react'
 const Sidebar =()=>{
    return(
        <aside>
                <div className="categories">
                    <a href="/">Profile</a><br/>
                    <a href="/dialogs">Dialogs</a><br/>
                    <a href="#">Messages</a><br/>
                    <a href="#">Photos</a><br/>
                    <a href="#">Logout</a><br/>
                </div>
            </aside>
    )
}
export default Sidebar;