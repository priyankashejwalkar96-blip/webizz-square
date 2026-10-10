import React from 'react'

export const AdminLogo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0' }}>
      <div 
        style={{ 
          width: '44px', 
          height: '44px', 
          background: 'linear-gradient(135deg, #ff5987 0%, #ff3b6a 100%)', 
          borderRadius: '14px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          boxShadow: '0 8px 20px rgba(255,89,135,0.4)',
          flexShrink: 0
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      </div>
      <span style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.5px', color: 'white', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        Webiz <span style={{ color: '#ff5987' }}>Square</span>
      </span>
    </div>
  )
}
