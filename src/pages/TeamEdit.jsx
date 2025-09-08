import React, {useState} from 'react'
import FormField from '../components/FormField'

const sample = {
  id:'63c9786c',
  name:'Detroit Hustle',
  shortName:'Detroit Hustle',
  sport:2,
  gender:2,
  organisationId:'org-1',
  rosters: [
    {id:'r1', seasonPeriodId:'s1', members: [{teamMemberId:'tm1', individualId:'ind1', position:'G', jersey:'5'}]}
  ],
  competitions: ['63c978f4']
}

export default function TeamEdit(){
  const [m,setM] = useState(sample)
  function update(k,v){ setM(x=>({...x,[k]:v})) }
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>Edit Team</h1>
      <div className='bg-white p-6 rounded shadow'>
        <div className='grid grid-cols-2 gap-6'>
          <FormField label='Name'>
            <input value={m.name} onChange={e=>update('name', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='Short Name'>
            <input value={m.shortName} onChange={e=>update('shortName', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='Sport'>
            <input value={m.sport} onChange={e=>update('sport', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='Organisation ID'>
            <input value={m.organisationId} onChange={e=>update('organisationId', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
        </div>

        <div className='mt-6'>
          <h3 className='font-medium'>Rosters</h3>
          {m.rosters.map(r=>(
            <div key={r.id} className='p-3 border rounded bg-slate-50 mb-2'>
              <div className='flex justify-between'>
                <div>
                  <div className='font-medium'>Roster {r.id}</div>
                  <div className='text-xs'>SeasonPeriod: {r.seasonPeriodId}</div>
                </div>
                <div>
                  <button className='text-sm px-2 py-1 border rounded mr-2' onClick={()=>{
                    const sp = prompt('Edit seasonPeriodId', r.seasonPeriodId)
                    if(sp) setM(s=>({...s, rosters: s.rosters.map(x=> x.id===r.id?{...x, seasonPeriodId:sp}:x)}))
                  }}>Edit</button>
                  <button className='text-sm px-2 py-1 border rounded' onClick={()=>{
                    if(confirm('Remove roster?')) setM(s=>({...s, rosters: s.rosters.filter(x=>x.id!==r.id)}))
                  }}>Remove</button>
                </div>
              </div>
              <div className='mt-2'>
                <div className='text-sm font-medium'>Members</div>
                <div className='mt-2 space-y-1'>
                  {r.members.map(mb=>(
                    <div key={mb.teamMemberId} className='flex items-center justify-between bg-white p-2 rounded'>
                      <div>
                        <div className='text-sm'>{mb.individualId} ({mb.position})</div>
                        <div className='text-xs text-slate-500'>Jersey: {mb.jersey}</div>
                      </div>
                      <div>
                        <button className='text-sm px-2 py-1 border rounded mr-2' onClick={()=>{
                          const pos = prompt('Position', mb.position)
                          if(pos) setM(s=>({...s, rosters: s.rosters.map(rr=> rr.id===r.id?{...rr, members: rr.members.map(mm=> mm.teamMemberId===mb.teamMemberId?{...mm, position:pos}:mm)}:rr)}))
                        }}>Edit</button>
                        <button className='text-sm px-2 py-1 border rounded' onClick={()=>{
                          if(confirm('Remove member?')) setM(s=>({...s, rosters: s.rosters.map(rr=> rr.id===r.id?{...rr, members: rr.members.filter(mm=> mm.teamMemberId!==mb.teamMemberId)}:rr)}))
                        }}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='mt-2'>
                  <button className='px-2 py-1 bg-indigo-600 text-white rounded' onClick={()=>{
                    const id = Math.random().toString(36).slice(2,9)
                    setM(s=>({...s, rosters: s.rosters.map(rr=> rr.id===r.id?{...rr, members: [...rr.members, {teamMemberId:id, individualId:'new-ind', position:'', jersey:''}]}:rr)}))
                  }}>Add Member</button>
                </div>
              </div>
            </div>
          ))}
          <div>
            <button className='px-3 py-2 bg-indigo-600 text-white rounded' onClick={()=>{
              const id = Math.random().toString(36).slice(2,9)
              setM(s=>({...s, rosters: [...s.rosters, {id, seasonPeriodId:'', members:[] }]}))
            }}>Add Roster</button>
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
