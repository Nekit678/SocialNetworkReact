import s from './ProfileInfo.module.css'

function ProfileInfo() {
  return (
    <div>
      <div>
        <img className={s.img} src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2159024400&v=beta&t=4WV9YKR9L3PAEnppWmPPMk5xVnETtWvhZN8NexEzPwM"></img>
      </div>
      <div className={s.descriptionBlock}>
      <img src="https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg"></img>
      <p></p>
      Описание профиля епта
      </div>
    </div>
  );
}

export default ProfileInfo;