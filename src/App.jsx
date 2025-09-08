import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function App(){
  return (
    <div className='min-h-screen flex'>
      <nav className='w-64 bg-white border-r p-4'>
        <h2 className='font-bold mb-4'>Aurora Admin</h2>
        <ul className='space-y-2'>
          <li><Link className='block p-2 rounded hover:bg-slate-100' to='/competition/63f4f747'>Edit Competition</Link></li>
          <li><Link className='block p-2 rounded hover:bg-slate-100' to='/team/63c9786c'>Edit Team</Link></li>
          <li><Link className='block p-2 rounded hover:bg-slate-100' to='/individual/63ff94d5'>Edit Individual</Link></li>
          <li><Link className='block p-2 rounded hover:bg-slate-100' to='/organisation/orga-1'>Edit Organisation</Link></li>
          <li><Link className='block p-2 rounded hover:bg-slate-100' to='/venue/venue-1'>Edit Venue</Link></li>
        </ul>
      </nav>
      <main className='flex-1 p-6'>
        <Outlet/>
      </main>
    </div>
  )
}
