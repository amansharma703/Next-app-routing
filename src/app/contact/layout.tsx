import React from 'react'

const layout = ({ children}) => {
    return (
      <>
      <div>layout</div>
            <div>Hello Navbar</div>
            {children}
      </>
  )
}

export default layout