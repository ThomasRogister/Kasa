import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Main/Header';
import Footer from './components/Main/Footer';

ReactDOM.render(
  <BrowserRouter>
  <Header/>
    <div className='content'>
     <App />
    </div>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
