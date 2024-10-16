import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

function App() {
    const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <div className="App">
            <h1>Hệ thống Quản lý Bán hàng</h1>
            <AddProductForm onAddProduct={handleAddProduct} />
            <ProductList products={products} />
        </div>
    );
}

export default App;
