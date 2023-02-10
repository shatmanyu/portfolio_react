import Contact from './components/contact/Contact'
import Topbar from './components/topbar/Topbar';
import React from 'react';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Works from './components/works/Works';
import { Provider } from 'react-redux';
import store from './store/store';
import './app.scss'
import Menu from './components/menu/Menu';
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Topbar/>
        <Menu />
        <div className='sections'>
          <Intro/>
          <Portfolio/>
          <Works/>
          <Testimonials/>
          <Contact/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
