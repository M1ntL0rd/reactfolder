import profilepic from './cyberAttack.jpg';

function Card(){
    return(
        <div className="card" >
            <img className='profilepic' src= {profilepic} alt="in place of profile picture" width="200px" />
            <h2 className='author'>Mintlord</h2>
            <p className='description'>I am a programmer</p>
        </div>
)
}

export default Card;