import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ItemContext = createContext();

const CustomItemContext = ({ children }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('/api/books');
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    return (
        <ItemContext.Provider value={{ items }}>
            {children}
        </ItemContext.Provider>
    );
};

export { ItemContext, CustomItemContext as default };
