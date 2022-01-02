import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { MAIN_ROUTES } from './constants';
import Home from './pages/home';
import NewClass from './pages/new-class';
import TestCase from './pages/test-case';

const isIn = (str1, str2) => {
  return str1.indexOf(str2);
};

function App() {
  const location = useLocation();
  const currPath = location.pathname.substring(1);

  return (
    <div className='App drop-shadow-xl '>
      <Routes>
        <Route path={MAIN_ROUTES.HOME} element={<Home />} />
        <Route path={MAIN_ROUTES.CLASSES.NEW}>
          <Route index element={<NewClass />} />
          {/* <Route path={MAIN_ROUTES.FRIENDS.CHAT} element={<Chat />} />
          <Route path={MAIN_ROUTES.FRIENDS.CHATMENU} element={<ListFriendMenu />} />
          <Route path={MAIN_ROUTES.FRIENDS.INVITE} element={<InviteVideoCall />} /> */}
        </Route>
        <Route path={MAIN_ROUTES.TESTCASES.NEW}>
          <Route index element={<TestCase />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
