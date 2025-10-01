  
// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main className="main-content" id="home">
        <h1>Welcome to Face Detection System</h1>
        <p>This application uses AI to detect faces in uploaded images.</p>
        
        {/* Replace this with your actual face detection component */}
        <section className="face-detection" id="detect">
          <h2>Upload Image</h2>
          <input type="file" accept="image/*" />
          <button>Detect Face</button>
        </section>
          <LiveCamera />

      </main>

      <Footer />
    </div>
  );
}

export default App;
