import './App.css';
import Dialogs from './components/Dialogs/DIalogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header></Header>
      <Navbar></Navbar>
      <div class="app-wrapper-content">
      <Dialogs></Dialogs>
      {/* <Profile></Profile> */}
      </div>
    </div>
  );
}

export default App;
