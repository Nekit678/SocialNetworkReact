import s from "./Music.module.css"

function Music(props) {
    return (
        <div
        className={s.content}>
            <iframe width="100%" height="520" src="https://music.yandex.ru/iframe/#playlist/rybakovnikita12/3">Слушайте <a href='https://music.yandex.ru/users/rybakovnikita12/playlists/3'>Мне нравится</a> — <a href='https://music.yandex.ru/users/rybakovnikita12'>rybakovnikita12</a> на Яндекс Музыке</iframe>
        </div>
    );
}
export default Music;