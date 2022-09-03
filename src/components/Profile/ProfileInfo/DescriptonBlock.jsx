import  React  from 'react';

const DescriptionBlock = React.memo(({isOwner,fullName,photoLarge,aboutMe,onPhotoSelected}) => {
    return (
        <div>
            <img src={photoLarge ? photoLarge : "https://img2.freepng.ru/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"}></img>
            <p></p>
            {isOwner?<input type="file" onChange={onPhotoSelected}></input>:<></>}
            <p></p>
            {fullName}
            <p></p>
            Обо мне: {aboutMe}
        </div>
    )
})

export default DescriptionBlock