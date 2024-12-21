/**
 * @copyright 2024 Jordy VUONG
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


/**
 * Compenents
 */
import App from './App.jsx';

/**
 * CSS link
 */
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
