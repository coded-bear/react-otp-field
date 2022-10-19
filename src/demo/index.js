import React from 'react';
import { createRoot } from 'react-dom/client';

import './styles/globals.css';

import Demo from './components/Demo';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Demo />
    </React.StrictMode>,
);
