import React, { useState } from 'react';
import { addProduct } from '../api';

function AddProductForm({ onAddProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset lỗi trước khi gửi yêu cầu mới
        setError('');

        const newProduct = { name, price, stock };
        try {
            const addedProduct = await addProduct(newProduct);
            onAddProduct(addedProduct);
            setName('');
            setPrice('');
            setStock('');
        } catch (error) {
            console.error('Lỗi khi thêm sản phẩm:', error);
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Thêm Sản phẩm mới</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên sản phẩm:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Giá:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        min="0"
                        step="0.01"
                    />
                </div>
                <div>
                    <label>Số lượng tồn:</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                        min="0"
                        step="1"
                    />
                </div>
                <button type="submit">Thêm sản phẩm</button>
            </form>
        </div>
    );
}

export default AddProductForm;