import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';

// Put the things into the DOM!
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
