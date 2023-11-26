import React from 'react'
import {Link} from 'react-router-dom' 
// react-router-dom 處理跳轉頁面
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-3">
        <Link to = '/' className="navbar-brand">Activity Tracer</Link> 
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to='/create_activity' className="nav-link">Create Activity Log</Link>  
                    {/* 實際的網址附綴 */}
                </li> 
            </ul>
        </div>  
    </nav>
  )
}

export default Navbar