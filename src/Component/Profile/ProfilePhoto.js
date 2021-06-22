import profileimg from './profileimg.gif'

const ProfilePhoto = function(){
    return(
        <div className="foto-container">
            <img src={profileimg} alt="profile-pix" />
        </div>
    );
}

export default ProfilePhoto;