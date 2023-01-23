/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
const App = () => {
    const [prods, setProds] = useState([]);

    const updateProducts = (products = []) => {
        setProds(products)
    }

    return (
        <div className="App">
            <Menu updateProducts={updateProducts} />
            <Home products={prods} />
        </div>
    );
}

// Render this out
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
