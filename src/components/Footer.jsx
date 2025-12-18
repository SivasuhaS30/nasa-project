import React from 'react'

const Footer = ({toggle_show_info,showinfo,data}) => {
  return (
    <footer>
      <div className='BgGradient'></div>
        <div className='footer'>
          <h2>  {data?.title}</h2>
          <h1>APOD Project</h1>
        </div>

       {(!showinfo) && <button  onClick={toggle_show_info}>
          <i className="fa-solid fa-circle-info"></i>
        </button>}
      
    </footer>
  )
}

export default Footer
