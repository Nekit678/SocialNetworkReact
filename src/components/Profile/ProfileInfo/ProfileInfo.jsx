import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'

function ProfileInfo(props) {

  if (!props.state) {
    return <Preloader></Preloader>
  }
  else {
    return (
      <div>
        <div>
          <img className={s.img} src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"></img>
        </div>
        <div className={s.descriptionBlock}>
          <img src={props.state.photos.large ?props.state.photos.large:"https://img2.freepng.ru/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg" }></img>
          <p></p>
          {props.state.fullName}
          <p></p>
          Обо мне: {props.state.aboutMe}
        </div>
      </div>
    );
  }

}

export default ProfileInfo;