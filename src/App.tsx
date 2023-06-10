import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import MainWrapper from './Components/MainWrapper';
import Modal from './Components/Modal';
import ScrollToTop from './Components/ScrollToTop';
import Bookmarks from './Screens/Bookmarks/Bookmarks';
import One from './Screens/Bookmarks/One';
import Explore from './Screens/Explore';
import Following from './Screens/Home/Following';
import ForYou from './Screens/Home/ForYou';
import Home from './Screens/Home/Home';
import Lists from './Screens/Lists';
import Messages from './Screens/Messages';
import Notifications from './Screens/Notifications';
import PageNotFound from './Screens/PageNotFound';
import Profile from './Screens/Profile';
import { store } from './Store/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  )
}


const AppContent = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  console.log("Appcontent background", background)

  return (
    <>
      <ScrollToTop />
      <Routes location={background || location}>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<MainWrapper modalOpen={!!background} />} >
          <Route path="/" element={<Navigate to="/home/foryou" />} />
          <Route path="home" element={<Home />}>
            <Route path="foryou" element={<ForYou />} />
            <Route path="following" element={<Following />} />
          </Route >
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="bookmarks" element={<Bookmarks />} >
            <Route path="one" element={<One />} />
          </Route >
          <Route path="/profile" element={<Profile />} />
        </Route >
      </Routes>

      {background && (
        <Routes>
          <Route path="modal" element={<Modal />} />
        </Routes>
      )}
    </>
  )
}