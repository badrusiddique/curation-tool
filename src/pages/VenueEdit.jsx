import React, {useState} from 'react'
import FormField from '../components/FormField'

const sample = { id:'venue-1', name:'Main Arena' }

export default function VenueEdit(){
  const [m,setM] = useState(sample)
  function update(k,v){ setM(x=>({...x,[k]:v})) }
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>Edit Venue</h1>
      <div className='bg-white p-6 rounded shadow'>
        <FormField label='Name'>
          <input value={m.name} onChange={e=>update('name', e.target.value)} className='w-full border rounded p-2'/>
        </FormField>
        <div className='mt-6 flex justify-end'>
          <button className='px-4 py-2 bg-slate-200 rounded mr-2'>Cancel</button>
          <button className='px-4 py-2 bg-green-600 text-white rounded'>Save</button>
        </div>
      </div>
    </div>
  )
}
