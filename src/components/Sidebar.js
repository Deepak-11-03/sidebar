import React from 'react'
import './Sidebar.css'
import items from './SidebarData'
import SubMenu from './SubMenu'

export default function Sidebar() {
    
  return (
    <div className="sidebarmenu">
          {items.map((item,index) => <SubMenu key={index} item={item} />)}
    </div>
  )
}
