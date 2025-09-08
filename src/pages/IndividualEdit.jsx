import React, {useState} from 'react'
import FormField from '../components/FormField'

const sample = {
  id:'63ff94d5',
  commonName: {gn:'Angel Nicolas', fn:'Imbago Arevalo', fun:'Angel Nicolas Imbago Arevalo'},
  birthDate:'2000-08-19',
  activeHand:0,
  nationality:'Ecuador',
  regionIds:['64'],
  teamMemberships:[{teamId:'63ff3202', role:'Player', type:1, lastSeenAt:'2023-09-07'}]
}

export default function IndividualEdit(){
  const [m,setM] = useState(sample)
  function update(k,v){ setM(x=>({...x,[k]:v})) }
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>Edit Individual</h1>
      <div className='bg-white p-6 rounded shadow'>
        <div className='grid grid-cols-2 gap-6'>
          <FormField label='Full Name'>
            <input value={m.commonName.fun} onChange={e=>update('commonName',{...m.commonName, fun:e.target.value})} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='Given Name'>
            <input value={m.commonName.gn} onChange={e=>update('commonName',{...m.commonName, gn:e.target.value})} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='Birth Date'>
            <input value={m.birthDate} onChange={e=>update('birthDate', e.target.value)} className='w-full border rounded p-2' type='date'/>
          </FormField>
          <FormField label='Nationality'>
            <input value={m.nationality} onChange={e=>update('nationality', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
        </div>

        <div className='mt-6'>
          <h3 className='font-medium'>Team Memberships</h3>
          <div className='mt-2 space-y-2'>
            {m.teamMemberships.map(t=>(
              <div key={t.teamId} className='p-3 border rounded bg-slate-50 flex justify-between'>
                <div>
                  <div className='font-medium'>{t.teamId}</div>
                  <div className='text-xs'>{t.role} • Last seen {t.lastSeenAt}</div>
                </div>
                <div>
                  <button className='px-2 py-1 border rounded mr-2' onClick={()=>{
                    const role = prompt('Edit role', t.role)
                    if(role) setM(s=>({...s, teamMemberships: s.teamMemberships.map(tm=> tm.teamId===t.teamId?{...tm, role}:tm)}))
                  }}>Edit</button>
                  <button className='px-2 py-1 border rounded' onClick={()=>{
                    if(confirm('Remove membership?')) setM(s=>({...s, teamMemberships: s.teamMemberships.filter(tm=> tm.teamId!==t.teamId)}))
                  }}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-2'>
            <button className='px-3 py-2 bg-indigo-600 text-white rounded' onClick={()=>{
              const teamId = prompt('Team ID to add')
              if(teamId) setM(s=>({...s, teamMemberships:[...s.teamMemberships, {teamId, role:'Player', type:1, lastSeenAt: new Date().toISOString().slice(0,10)}]}))
            }}>Add Membership</button>
          </div>
        </div>

        <div className='mt-6 flex justify-end'>
          <button className='px-4 py-2 bg-slate-200 rounded mr-2'>Cancel</button>
          <button className='px-4 py-2 bg-green-600 text-white rounded'>Save</button>
        </div>
      </div>
    </div>
  )
}
