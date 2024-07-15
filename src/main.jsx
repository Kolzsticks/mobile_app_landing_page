import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// External css
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.css';
import './assets/css/LineIcons.3.0.css';
import './assets/css/main.css';
import './assets/css/tiny-slider.css';

// External js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS from node_modules
import './assets/js/tiny-slider.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
