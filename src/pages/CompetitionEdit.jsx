import React, {useState} from 'react'
import FormField from '../components/FormField'
import Papa from 'papaparse'

const sample = {
  id:'63f4f747',
  name:'Friendlies W',
  sport:2,
  gender:1,
  regionId:'500',
  governingBodyId:'gb-1',
  periods:[
    {id:'p1', name:'2017-2018', seasonPeriodId:'s1', startDate:'2017-07-01', endDate:'2018-06-30'}
  ],
  stages:[],
  rounds:[]
}

export default function CompetitionEdit(){
  const [model, setModel] = useState(sample)
  const [csvPreview, setCsvPreview] = useState(null)

  function updateField(k,v){ setModel(m=>({...m,[k]:v})) }

  function onImportCsv(e){
    const f = e.target.files[0]
    if(!f) return
    Papa.parse(f, {header:true, complete: (res)=> setCsvPreview(res.data.slice(0,10))})
  }

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-4'>Edit Competition</h1>
      <div className='bg-white p-6 rounded shadow'>
        <div className='grid grid-cols-2 gap-6'>
          <FormField label='Name'>
            <input value={model.name} onChange={e=>updateField('name', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='Sport'>
            <input value={model.sport} onChange={e=>updateField('sport', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='Gender'>
            <input value={model.gender} onChange={e=>updateField('gender', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
          <FormField label='Region ID'>
            <input value={model.regionId} onChange={e=>updateField('regionId', e.target.value)} className='w-full border rounded p-2'/>
          </FormField>
        </div>

        <div className='mt-6'>
          <h3 className='font-medium'>Competition Periods</h3>
          <div className='mt-2 space-y-2'>
            {model.periods.map(p=>(
              <div key={p.id} className='p-3 border rounded bg-slate-50'>
                <div className='flex justify-between'>
                  <div>
                    <div className='text-sm font-medium'>{p.name}</div>
                    <div className='text-xs text-slate-500'>{p.startDate} → {p.endDate}</div>
                  </div>
                  <div className='space-x-2'>
                    <button className='text-sm px-2 py-1 border rounded' onClick={()=>{
                      const name = prompt('Edit period name', p.name)
                      if(name) setModel(m=>({...m, periods: m.periods.map(x=> x.id===p.id?{...x,name}:x)}))
                    }}>Edit</button>
                    <button className='text-sm px-2 py-1 border rounded' onClick={()=>{
                      if(confirm('Remove period?')) setModel(m=>({...m, periods: m.periods.filter(x=>x.id!==p.id)}))
                    }}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-3'>
            <button className='px-3 py-2 bg-indigo-600 text-white rounded' onClick={()=>{
              const id = Math.random().toString(36).slice(2,9)
              setModel(m=>({...m, periods:[...m.periods, {id, name:'New Period', seasonPeriodId:'', startDate:'', endDate:''}]}))
            }}>Add Period</button>
          </div>
        </div>

        <div className='mt-6'>
          <h3 className='font-medium'>CSV Import (Periods or Teams)</h3>
          <input type='file' accept='.csv' onChange={onImportCsv} />
          {csvPreview && <pre className='mt-2 p-2 bg-slate-100 rounded max-h-40 overflow-auto text-xs'>{JSON.stringify(csvPreview,null,2)}</pre>}
        </div>

        <div className='mt-6 flex justify-end'>
          <button className='px-4 py-2 bg-slate-200 rounded mr-2'>Cancel</button>
          <button className='px-4 py-2 bg-green-600 text-white rounded'>Save</button>
        </div>
      </div>
    </div>
  )
}
