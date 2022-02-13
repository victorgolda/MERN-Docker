import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from '@mui/material/Container'

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    <Container
      maxWidth='false'
      sx={{
        padding: '0 !important'
      }}
    >
      {children}
    </Container>
    <Footer />
  </div>
)

export default Layout
