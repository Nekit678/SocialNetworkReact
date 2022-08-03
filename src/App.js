import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/DIalogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from "react-router-dom"
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header></Header>
        <Navbar></Navbar>
        <div class="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
