'use client';

export default function CartPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">
          Shopping Cart
        </h1>
        <div className="bg-white rounded-lg p-8 text-center">
          <p className="text-gray-600 text-lg">
            Your cart is empty. Start shopping!
          </p>
        </div>
      </div>
    </main>
  );
}
