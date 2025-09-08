import React from 'react'

export default function FormField({label, children, hint}) {
  return (
    <div className='mb-4'>
      <label className='block text-sm font-medium text-slate-700'>{label}</label>
      <div className='mt-1'>
        {children}
      </div>
      {hint && <p className='text-xs text-slate-500 mt-1'>{hint}</p>}
    </div>
  )
}
