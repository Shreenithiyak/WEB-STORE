import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-beige-100 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="font-serif text-5xl font-bold text-primary mb-4 tracking-tight">Your Curated Wishlist</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            A selection of heritage harvests saved for your kitchen. Prepared with traditional methods and seasonal care.
          </p>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Wishlist Item 1 */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group relative">
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white z-10 transition-colors shadow-sm">
              <X size={16} />
            </button>
            <div className="h-64 bg-beige-200 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-0 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1587049352847-ecdfa69e7191?auto=format&fit=crop&q=80&w=600" alt="Honey" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-2">KODAIKANAL HIGHLANDS</div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Wild Forest Honey</h3>
                </div>
                <span className="font-bold text-gray-900 text-xl">₹850</span>
              </div>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed flex-1">
                Multi-floral nectar collected from the deep evergreen forests of the Western Ghats.
              </p>
              <button className="w-full bg-primary hover:bg-[#184c38] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <ShoppingBag size={18} /> Add to Cart
              </button>
            </div>
          </div>

          {/* Wishlist Item 2 */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group relative">
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white z-10 transition-colors shadow-sm">
              <X size={16} />
            </button>
            <div className="h-64 bg-beige-200 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-0 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1615486171448-4fd134812f27?auto=format&fit=crop&q=80&w=600" alt="Turmeric" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-2">SALEM REGION</div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Salem Turmeric Root</h3>
                </div>
                <span className="font-bold text-gray-900 text-xl">₹420</span>
              </div>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed flex-1">
                High-curcumin content heritage variety, sun-dried using ancient traditional methods.
              </p>
              <button className="w-full bg-primary hover:bg-[#184c38] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <ShoppingBag size={18} /> Add to Cart
              </button>
            </div>
          </div>

          {/* Wishlist Item 3 */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group relative">
            <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-white z-10 transition-colors shadow-sm">
              <X size={16} />
            </button>
            <div className="h-64 bg-beige-200 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-0 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?auto=format&fit=crop&q=80&w=600" alt="Rice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-[10px] font-bold text-green-700 uppercase tracking-widest mb-2">CAUVERY DELTA</div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Mappillai Samba Rice</h3>
                </div>
                <span className="font-bold text-gray-900 text-xl">₹360</span>
              </div>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed flex-1">
                The "Bridegroom's Rice"—a nutrient-dense, traditional red rice variety with a robust earthy flavor.
              </p>
              <button className="w-full bg-primary hover:bg-[#184c38] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                <ShoppingBag size={18} /> Add to Cart
              </button>
            </div>
          </div>
          
        </div>

        {/* Seasonal Recommendations */}
        <div className="pt-12 border-t border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900">Seasonal Recommendations</h2>
            <button className="text-[10px] font-bold text-green-700 uppercase tracking-widest hover:text-primary flex items-center gap-1">
              VIEW FULL HARVEST <span className="text-lg leading-none">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Rec 1 */}
            <div className="bg-white p-4 rounded-3xl flex items-center gap-4 hover:shadow-md transition-shadow border border-gray-100 cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1605342461836-82eb75fcbdf8?auto=format&fit=crop&q=80&w=200" alt="Peppercorns" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Green Peppercorns</h4>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">THE GORDON ESTATE</div>
                <span className="font-bold text-green-700 text-sm">₹290</span>
              </div>
            </div>

            {/* Rec 2 */}
            <div className="bg-white p-4 rounded-3xl flex items-center gap-4 hover:shadow-md transition-shadow border border-gray-100 cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1621257969123-575efc056ec1?auto=format&fit=crop&q=80&w=200" alt="Jaggery" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Palm Jaggery Blocks</h4>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">THOOTHUKUDI COAST</div>
                <span className="font-bold text-green-700 text-sm">₹180</span>
              </div>
            </div>

            {/* Rec 3 */}
            <div className="bg-white p-4 rounded-3xl flex items-center gap-4 hover:shadow-md transition-shadow border border-gray-100 cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1596647225134-8c8ecb6af81d?auto=format&fit=crop&q=80&w=200" alt="Chillies" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Mundu Chillies</h4>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">RAMNAD HARVEST</div>
                <span className="font-bold text-green-700 text-sm">₹140</span>
              </div>
            </div>

            {/* Rec 4 */}
            <div className="bg-white p-4 rounded-3xl flex items-center gap-4 hover:shadow-md transition-shadow border border-gray-100 cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl overflow-hidden flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1586940801894-dddbd76378e9?auto=format&fit=crop&q=80&w=200" alt="Ghee" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Bilona A2 Ghee</h4>
                <div className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">KONGU DAIRY</div>
                <span className="font-bold text-green-700 text-sm">₹1,200</span>
              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Wishlist;
