import { Provider } from 'react-redux';
import './App.css';
import { store } from './Store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import PageNotFound from './Screens/PageNotFound';
import NavBar from './Components/NavBar/NavBar';
import Home from './Screens/Home';

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
        <Route element={<NavBar />} >
          <Route path="/" element={<Home />} />
        </Route >
      </Routes>
    </BrowserRouter>
  )
}