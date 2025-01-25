import React from 'react';

const AppDownloadPage = () => {
  const handleDownload = () => {
    window.location.href = 'https://expo.dev/accounts/eashan20/projects/supabaseproject/builds/9f1449ce-dc68-4b6d-aa6a-d05662a0fc0b';
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        width: '100%',
        maxWidth: '28rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '1.875rem',
          fontWeight: 'bold',
          color: '#2563eb',
          marginBottom: '1.5rem'
        }}>
          Event Management App
        </h1>
        
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          style={{
            color: '#2563eb',
            width: '4rem',
            height: '4rem',
            margin: '0 auto 1rem'
          }} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        
        <p style={{
          color: '#4b5563',
          marginBottom: '1.5rem'
        }}>
          Manage your events seamlessly with our app!
        </p>

        <button 
          onClick={handleDownload}
          style={{
            width: '100%',
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            style={{
              width: '1.25rem',
              height: '1.25rem',
              marginRight: '0.5rem'
            }} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download App
        </button>
        
        <div style={{
          color: '#6b7280',
          fontSize: '0.875rem',
          marginTop: '1rem'
        }}>
      
          <p>Version 1.0 | Expo Build</p>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadPage;