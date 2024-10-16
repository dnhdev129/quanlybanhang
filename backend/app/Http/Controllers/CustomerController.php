<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    // Lấy danh sách tất cả khách hàng
    public function index()
    {
        $customers = Customer::all();
        return response()->json($customers);
    }

    // Thêm khách hàng mới
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:15',
            'email' => 'nullable|email|max:255',
        ]);

        $customer = Customer::create($request->all());
        return response()->json($customer, 201);
    }

    // Lấy thông tin khách hàng theo ID
    public function show($id)
    {
        $customer = Customer::findOrFail($id);
        return response()->json($customer);
    }

    // Cập nhật thông tin khách hàng
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:15',
            'email' => 'nullable|email|max:255',
        ]);

        $customer = Customer::findOrFail($id);
        $customer->update($request->all());
        return response()->json($customer);
    }

    // Xóa khách hàng
    public function destroy($id)
    {
        Customer::destroy($id);
        return response()->json(null, 204);
    }
}
