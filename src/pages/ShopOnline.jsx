import React, { useState } from 'react';

export default function ShopOnline() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'accessories', 'parts', 'apparel', 'lifestyle'];

  const products = [
    {
      id: 1,
      name: 'BMW M Performance Carbon Fiber Mirror Caps',
      category: 'accessories',
      price: 449,
      image: '/videos/logo1.png',
      inStock: true
    },
    {
      id: 2,
      name: 'BMW Genuine Oil Filter Kit',
      category: 'parts',
      price: 29,
      image: '/videos/logo1.png',
      inStock: true
    },
    {
      id: 3,
      name: 'BMW M Power Polo Shirt',
      category: 'apparel',
      price: 65,
      image: '/videos/logo1.png',
      inStock: true
    },
    {
      id: 4,
      name: 'BMW Carbon Fiber Key Fob Holder',
      category: 'lifestyle',
      price: 89,
      image: '/videos/logo1.png',
      inStock: true
    },
    {
      id: 5,
      name: 'BMW M Performance Brake Pads',
      category: 'parts',
      price: 299,
      image: '/videos/logo1.png',
      inStock: true
    },
    {
      id: 6,
      name: 'BMW All-Weather Floor Mats',
      category: 'accessories',
      price: 149,
      image: '/videos/logo1.png',
      inStock: true
    },
    {
      id: 7,
      name: 'BMW Motorsport Jacket',
      category: 'apparel',
      price: 189,
      image: '/videos/logo1.png',
      inStock: false
    },
    {
      id: 8,
      name: 'BMW Premium Car Cover',
      category: 'accessories',
      price: 399,
      image: '/videos/logo1.png',
      inStock: true
    },
    {
      id: 9,
      name: 'BMW Laptop Backpack',
      category: 'lifestyle',
      price: 129,
      image: '/videos/logo1.png',
      inStock: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            BMW Shop Online
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Premium accessories, genuine parts, and exclusive merchandise for your BMW.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize transition ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {category === 'all' ? 'All Products' : category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-sky-400/50 transition-all duration-300"
            >
              <div className="p-6">
                {/* Product Image */}
                <div className="flex items-center justify-center h-48 mb-6 rounded-xl bg-white/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-24 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Product Info */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-400/10 text-sky-400 text-xs font-semibold uppercase mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-2xl font-bold">${product.price}</p>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`h-2 w-2 rounded-full ${product.inStock ? 'bg-green-400' : 'bg-red-400'}`}></div>
                  <span className="text-sm text-white/70">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    disabled={!product.inStock}
                    className={`flex-1 px-4 py-3 rounded-xl font-semibold transition ${
                      product.inStock
                        ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white hover:shadow-lg hover:shadow-sky-500/30'
                        : 'bg-white/5 text-white/40 cursor-not-allowed'
                    }`}
                  >
                    Add to Cart
                  </button>
                  <button className="px-4 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition">
                    <span className="sr-only">View details</span>
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">🛍️</div>
            <p className="text-xl text-white/70">No products found in this category</p>
          </div>
        )}

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-20 border-t border-white/10">
          <div className="text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
            <p className="text-white/70">On orders over $99</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2">Genuine Parts</h3>
            <p className="text-white/70">100% authentic BMW products</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">↩️</div>
            <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
            <p className="text-white/70">30-day return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
