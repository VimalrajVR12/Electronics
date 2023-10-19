import React from 'react'

const Separator = () => {
  const style = {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderBottom: "12px dotted darkgray",
    width: "50px",
    margin: "20px auto"
  }
  return (
    <hr style={style}/>
  )
}

export default Separator