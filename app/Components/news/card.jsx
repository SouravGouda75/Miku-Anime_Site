import React from 'react'

export default function card({img, title, desc}) {
  return (
    <div>
      <div className="card">
        <img src={img} alt="This is a image" />
        <div className="divcard">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}
