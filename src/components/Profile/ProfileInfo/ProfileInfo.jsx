import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import DescriptionBlock from './DescriptonBlock';

function ProfileInfo(props) {
  if (!props.userProfile) {
    return <Preloader></Preloader>
  }
  else {
    return (
      <div>
        <div className={s.descriptionBlock}>
          <DescriptionBlock updateProfile={props.updateProfile} onPhotoSelected={props.onPhotoSelected} isOwner={props.isOwner} {...props.userProfile}></DescriptionBlock>
        </div>
        <div className={s.status}>
          <ProfileStatus updateStatus={props.updateStatus} status={props.status}></ProfileStatus>
        </div>
      </div>
    );
  }

}

export default ProfileInfo;