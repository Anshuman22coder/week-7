import { useRecoilValue } from "recoil";
import { profile } from "../store/atoms/allInOne";



function Profile(){
    const personProfile = useRecoilValue(profile)
    return(
        <>
            <img src={personProfile.img} alt="" />

            <div>
                <h2>{personProfile.name}</h2>
                <p>{personProfile.age}</p>
                <h3>{personProfile.location}</h3>
            </div>

            <div>
                <p>followers {personProfile.followers>999? ((personProfile.followers / 1000) + 'k') : personProfile.followers}</p>
                <p>likes {personProfile.Likes>999 ?  ((personProfile.Likes / 1000) + 'k') : personProfile.Likes}</p>
                <p>photos {personProfile.photos> 999 ?  ((personProfile.photos / 1000) + 'k') : personProfile.photos}</p>

            </div>
        </>
    )

}

export default Profile;