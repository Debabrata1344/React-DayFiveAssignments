import React, { Suspense } from 'react';
import UserGallery from './components/Gallery';
import ErrorBoundary from './components/ErrorBoundary';
import { getUsersPromise } from './actions/users';

// Initialize promise outside to prevent re-renders from re-fetching
const usersPromise = getUsersPromise();

function App() {
  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#333' }}>User Card Gallery</h1>
        <hr style={{ width: '50px', border: '2px solid #007bff', margin: '10px auto' }} />
         <p style={{ color: '#555', fontSize: '1.1rem' }}>
         
        </p>
        
      </header>


      <ErrorBoundary>
        <Suspense fallback={
          <div  style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '50px' }}>
            <div className="spinner"></div>
           <p style={{ fontSize: "1.5rem" }}>
        Preparing your user cards...
      </p>
          </div>
        }>
          <UserGallery usersPromise={usersPromise} />
        </Suspense>
      </ErrorBoundary>

      <style>
        {`
          .spinner {
            margin: 0 auto 15px;
            width: 40px;
            height: 40px;
            border: 5px solid #ddd;
            border-top: 5px solid #007bff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default App;