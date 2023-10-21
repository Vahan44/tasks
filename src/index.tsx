import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from "./components/Navbar/Navbar"
import Main from './components/Main/Main';
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<>
<NavBar/>
<Main/>
</>
    )