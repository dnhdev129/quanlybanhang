import React, { useState, useEffect } from 'react';
import { fetchProducts, deleteProduct } from '../api';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        loadProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteProduct(id);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <h3>{product.name}</h3>
                        <p>Giá: {product.price} VND</p>
                        <p>Số lượng tồn: {product.stock}</p>
                        <button onClick={() => handleDelete(product.id)}>Xóa</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductList;
