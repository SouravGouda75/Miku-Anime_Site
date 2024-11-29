
const Dropdown = ({onClick}) => {
    return (
        <div className="dropdown ">
            <button className='drop-button'>My Profile</button>
            <button className='drop-button'>My Anime</button>
            <button className='drop-button'>My Watchlist</button>
            <button className='drop-button' onClick={onClick}>Sign Out</button>
        </div>
    )
}

export default Dropdown
