import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendMail from './components/SendMail';
import { selectSendMessageIsOpen } from '../src/features/mailSlice';
import Login from './components/Login';

import './App.css';
import { selectUser } from './features/userSlice';


function App() {
  // import from export const selectSendMessageIsOpen = state
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);


  return (
    <BrowserRouter>
      <div className="App">
        {
          !user ? (
            <Login />
          ) : (
            <>
              <Header />

              <div className='app__body'>
                <aside className='app__sidebar'>
                  <Sidebar />
                </aside>

                <Routes>
                  <Route path="/" element={<EmailList />} />
                  <Route path="mail" element={<Mail />} />

                  {/* Using path="*"" means "match anything", so this route
        acts like a catch-all for URLs that we don't have explicit
        routes for. */}
                  {/* <Route path="*" element={<NoMatch />} /> */}
                </Routes>
              </div>

              {sendMessageIsOpen && <SendMail />}
            </>
          )
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
