import s from './Navbar.module.css'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
      </div>
      <p></p>

      <div className={s.friends}>
        <NavLink to='/friends' className={navData => navData.isActive ? s.active : s.friends}>Friends</NavLink>
      </div>
      <img src="https://anime-star.ru/wp-content/uploads/2021/12/YArkie-fioletovye-avatarki-anime_08.jpg"></img>
      <img src="https://www.meme-arsenal.com/memes/6eb0717c1db4fd398f312ef918b00eb3.jpg"></img>
      <img src="https://cdn.discordapp.com/avatars/280994603945951232/4ae6870ead41140b5741b8b240880211.webp?size=128"></img>
      <img src="https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg"></img>
    </nav>
  );
}

export default Navbar;