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
          <DescriptionBlock  fullName = {props.userProfile.fullName} photoLarge = {props.userProfile.photos.large}
          aboutMe = {props.userProfile.aboutMe}></DescriptionBlock>
        </div>
        <ProfileStatus updateStatus = {props.updateStatus} status={props.status}></ProfileStatus>
      </div>
    );
  }

}

export default ProfileInfo;