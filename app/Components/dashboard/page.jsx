import React, { useState } from 'react'

const page = () => {
  const [username, setUserName] = useState('Alex Greece')
  const [progress, setProgress] = useState(30)
  const [followers, setFollowers] = useState(2000000)
  return (
    <div className="dashboard">
        <div className="userName">
          Hi,<span className='gradient-text-subtitle'>{username}</span>
          <div className="followers">
            Followers: {
              followers >999999 ?<span>
                {parseInt(followers/1000000)} million
              </span> : <span>{followers}</span>
            }
          </div>
        </div>
        <div className="user-details ">
          <div className="col-start-1 col-end-2 border p-2">

            <div className=" ">
              your Streak
            </div>
            <div className="progress-bg">

            <div className="progress-fore " style={{width:`${progress}%`}}></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default page