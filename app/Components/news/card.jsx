import React from 'react'

export default function card({images, title, description}) {
  return (
    <div>
      <div className="card">
        <img src={images} alt='pic' />
        <div className="divcard">
            <h2>{title}</h2>
            <p>{description.substring(0,20)}..</p>
        </div>
      </div>
    </div>
  )
}
