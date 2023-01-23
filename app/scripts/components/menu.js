/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 * 
 */
import React from 'react';
import { debounce } from '../helper';

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor(props) {
        super(props);
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {
        console.log(e.target.value, ' >>> ');
        const searchKey = e.target.value;
        const debouncedSayHello = debounce(() => {
            this.fetchProducts(searchKey); 
        }, 400)
        debouncedSayHello();
    }

    fetchProducts(searchKey) {
        fetch(`http://localhost:3035/getProd?key=${searchKey}`)
            .then(res => res.json())
            .then(res => {
                this.props.updateProducts(res);
            }).catch(err => {
                console.log(err);
            })
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" className="inline-search-container">
                                <i className="material-icons search">search</i>
                                <input type="text" className="inline-search" placeholder='SEARCH' onChange={(e) => this.onSearch(e)} />
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }


}

// Export out the React Component
export default Menu;