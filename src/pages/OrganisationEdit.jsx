import React, {useState} from 'react'
import FormField from '../components/FormField'

const sample = {
  id:'org-1',
  name:'Piratas Club',
  address:'',
  city:'',
  subdivision:'',
  country:'',
  postal_code:'',
  latitude:'',
  longitude:'',
  municipality_id:''
}

export default function OrganisationEdit(){
  const [m,setM] = useState(sample)
  function update(k,v){ setM(x=>({...x,[k]:v})) }
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>Edit Organisation</h1>
      <div className='bg-white p-6 rounded shadow'>
        <div className='grid grid-cols-2 gap-6'>
          <FormField label='Name'>
            <input value={m.name} onChange={e=>update('name', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='City'>
            <input value={m.city} onChange={e=>update('city', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='Address'>
            <input value={m.address} onChange={e=>update('address', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='Country'>
            <input value={m.country} onChange={e=>update('country', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
        </div>

        <div className='mt-6 flex justify-end'>
          <button className='px-4 py-2 bg-slate-200 rounded mr-2'>Cancel</button>
          <button className='px-4 py-2 bg-green-600 text-white rounded'>Save</button>
        </div>
      </div>
    </div>
  )
}
