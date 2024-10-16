<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    // Lấy danh sách tất cả đơn hàng
    public function index()
    {
        $orders = Order::with('customer')->get(); // Lấy đơn hàng kèm theo thông tin khách hàng
        return response()->json($orders);
    }

    // Thêm đơn hàng mới
    public function store(Request $request)
    {
        $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'total' => 'required|numeric',
        ]);

        $order = Order::create($request->all());
        return response()->json($order, 201);
    }

    // Lấy thông tin đơn hàng theo ID
    public function show($id)
    {
        $order = Order::with('customer')->findOrFail($id);
        return response()->json($order);
    }

    // Cập nhật thông tin đơn hàng
    public function update(Request $request, $id)
    {
        $request->validate([
            'customer_id' => 'required|exists:customers,id',
            'total' => 'required|numeric',
        ]);

        $order = Order::findOrFail($id);
        $order->update($request->all());
        return response()->json($order);
    }

    // Xóa đơn hàng
    public function destroy($id)
    {
        Order::destroy($id);
        return response()->json(null, 204);
    }
}