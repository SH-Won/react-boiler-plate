import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createRoot} from 'react-dom/client';

// ReactDOM.render(
//     <BrowserRouter basename="/">
//         <App/>
//     </BrowserRouter>
//     ,
//     document.getElementById('root')
// )

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter basename="/">
        <App/>
    </BrowserRouter>
)