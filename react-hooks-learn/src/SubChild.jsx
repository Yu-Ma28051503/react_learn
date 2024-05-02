import React from 'react'

const SubChild = ({ showCount }) => {
  return (
    <div>
        <button onClick={() => showCount()}>subchild</button>
    </div>
  )
}

export default SubChild