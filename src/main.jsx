import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import App from './App'
import CompetitionEdit from './pages/CompetitionEdit'
import TeamEdit from './pages/TeamEdit'
import IndividualEdit from './pages/IndividualEdit'
import OrganisationEdit from './pages/OrganisationEdit'
import VenueEdit from './pages/VenueEdit'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<div className='p-6'>Select an entity to edit.</div>} />
          <Route path='competition/:id' element={<CompetitionEdit/>} />
          <Route path='team/:id' element={<TeamEdit/>} />
          <Route path='individual/:id' element={<IndividualEdit/>} />
          <Route path='organisation/:id' element={<OrganisationEdit/>} />
          <Route path='venue/:id' element={<VenueEdit/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
