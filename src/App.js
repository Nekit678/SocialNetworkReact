import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Navigate, Route, Routes } from "react-router-dom"
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import SettingsContainer from './components/Settings/SettingsContainer';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { init } from './redux/reducers/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

function App(props) {

  const dispatch = useDispatch();
  const checkInit = useSelector(state => state.app.initializing)

  useEffect(() => {
    dispatch(init())
  }, [dispatch])

  if (!checkInit) {
    return (<Preloader></Preloader>)
  }
  else {
    return (
      <div className="app-wrapper">
        <HeaderContainer></HeaderContainer>
        <Navbar></Navbar>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Navigate to="/profile"></Navigate>}/>
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/profile/:id' element={<ProfileContainer />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<SettingsContainer />} />
            <Route path='/users' element={<UsersContainer></UsersContainer>} />
            <Route path='/login' element={<Login></Login>} />
          </Routes>
        </div>
      </div>
    );
  }


}

export default App;
