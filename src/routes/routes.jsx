import  React  from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../containers/Home'
import Movies from '../containers/Movies'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'


function MyRouter() {
    return (
        <Router>
        <Routes>
            <Route element={<DefaultLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/filmes" element={<Movies />} />
            <Route path="/series" element={<Series />} />
        </Route>
        </Routes>
    </Router>
    )
}

export default MyRouter