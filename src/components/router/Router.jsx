import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from '../header/Header'
import Maincontent from '../maincontent/Maincontent'

const Router = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Maincontent/>}/>
        </Routes>
    </div>
  )
}

export default Router