'use client';

export default function Cart() {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 99.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 149.99, quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-xl font-bold text-blue-600">${(item.price * item.quantity).toFixed(2)}</span>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-300">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t pt-6 flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900">Total: ${total.toFixed(2)}</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}