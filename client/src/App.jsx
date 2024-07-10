import React from 'react';
import ProductList from './components/ProductList.jsx/index.js';
import Header from './components/Header.jsx';
import './App.css';
import CustomItemContext from './context/ItemContext.jsx/index.js';

const App = () => {
    return (
        <CustomItemContext>
            <Header />
            <ProductList />
        </CustomItemContext>
    );
};

export default App;
