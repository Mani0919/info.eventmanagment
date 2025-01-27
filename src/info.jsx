import React, { useState } from 'react';

const AppDownloadPage = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Convert Google Drive view link to direct download link
    const fileId = '17miVOXgx7Hratugeo48Jx0TgH0I8L7PW';
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Open the download link in a new tab
    window.open(downloadLink, '_blank');
    
    // Reset downloading state after a short delay
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Event Management App
        </h1>
        
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-16 w-16 mx-auto mb-4 text-blue-600"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        
        <p className="text-gray-600 mb-6">
          Manage your events seamlessly with our app!
        </p>

        <button 
          onClick={handleDownload}
          disabled={downloading}
          className={`w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${
            downloading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {downloading ? (
            <>
              <svg 
                className="animate-spin h-5 w-5 mr-2" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Initiating Download...
            </>
          ) : (
            <>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                />
              </svg>
              Download App
            </>
          )}
        </button>
        
        <div className="text-gray-500 text-sm mt-4">
          <p>Version 1.0 | Android APK</p>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadPage;
