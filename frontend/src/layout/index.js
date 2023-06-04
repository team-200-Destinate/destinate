import React from 'react'
import Header from './Header/header'
import Main from './Main/main'
import Footer from './Footer'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function Layout({children}) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}

export default Layout
