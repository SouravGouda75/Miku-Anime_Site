import React from 'react'

export default function newscard({images, title, description}) {
  return (
    <div>
      <div className="card">
        <img src={images} alt='pic' width="80px" />
        <div className="divcard">
            <h2>{title}</h2>
            <p>{description}..</p>
        </div>
        <br />
      </div>
    </div>
  )
}
