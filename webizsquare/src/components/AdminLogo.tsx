import React from 'react'

export const AdminLogo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="/white-logo.png" 
        alt="Webiz Square Logo" 
        style={{ height: '45px', objectFit: 'contain' }}
      />
    </div>
  )
}
