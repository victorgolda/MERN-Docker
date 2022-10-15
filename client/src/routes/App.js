import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound'
import Layout from '../components/Layout'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </Layout>
  </BrowserRouter>
)

export default App
