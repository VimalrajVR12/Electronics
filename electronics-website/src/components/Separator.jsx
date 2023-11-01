import React from 'react'

const Separator = () => {
  const style = {
    borderTop: "0 !important",
    borderLeft: "0 !important",
    borderRight: "0 !important",
    borderBottom: "12px dotted lightgray !important",
    width: "50px !important",
    margin: "20px auto !important"
  }
  return (
    <hr style={style}/>
  )
}

export default Separator