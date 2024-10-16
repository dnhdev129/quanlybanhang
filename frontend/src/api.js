const API_URL = 'http://127.0.0.1:8000/api'; // Đảm bảo URL đúng với backend Laravel của bạn

// API cho sản phẩm
export const fetchProducts = async () => {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
        throw new Error('Lỗi khi tải danh sách sản phẩm');
    }
    return await response.json();
};

export const addProduct = async (product) => {
    const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Lỗi khi thêm sản phẩm');
    }
    return await response.json();
};

export const deleteProduct = async (id) => {
    const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Lỗi khi xóa sản phẩm');
    }
};