import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MainWrapper from './Components/MainWrapper';
import ScrollToTop from './Components/ScrollToTop';
import Bookmarks from './Screens/Bookmarks/Bookmarks';
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
import One from './Screens/Bookmarks/One';

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}


const AppContent = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<MainWrapper />} >
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
    </BrowserRouter>
  )
}