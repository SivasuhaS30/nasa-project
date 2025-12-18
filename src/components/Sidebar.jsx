
import React from 'react'

const Sidebar = ({ toggle_show_info,data}) => {
  return (
    <div className='sidebar'>
      <div className='bgOverlay' onClick={ toggle_show_info}></div>
      <div className='sidebarContent'>
        <div className='sidebarText'>

          <h2>{data?.title}</h2>
          <p className='sidebarDescription'>Description</p>

          <p>{data?.explanation}</p>
        </div>

           <button onClick={ toggle_show_info}><i className="fa-solid fa-right-long"></i></button>
      </div>
    </div>
  )
}

export default Sidebar
