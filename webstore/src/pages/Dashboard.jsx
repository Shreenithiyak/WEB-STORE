import React from 'react';
import { RefreshCcw, ShoppingCart, Lightbulb, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-beige-100 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Welcome Section */}
        <section className="mb-12">
          <h1 className="font-serif text-5xl font-bold text-primary mb-4 tracking-tight">Vanakkam, Priya</h1>
          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
            Your pantry is currently supporting <span className="font-bold text-green-700">4 local farmers</span> across Tamil Nadu. Here is
            how your organic ecosystem looks today.
          </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Main Content Area (Left) */}
          <div className="w-full lg:w-2/3">
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-serif text-2xl font-bold text-primary">Recent Harvests</h2>
              <a href="#" className="text-sm font-bold text-green-700 hover:text-primary-light">Explore Marketplace</a>
            </div>

            {/* Grid of Products */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              
              {/* Product Card 1 */}
              <div className="bg-white rounded-[1.5rem] p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                <span className="absolute top-6 flex right-6 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider z-10">NEW</span>
                <div className="h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1587049352847-ecdfa69e7191?q=80&w=400&auto=format&fit=crop" alt="Honey" className="w-full h-full object-cover" />
                </div>
                <div className="text-[10px] font-bold text-accent-orangeDark uppercase tracking-widest mb-1">Western Ghats</div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Wild Organic Honey</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary text-xl">₹450.00</span>
                  <button className="bg-primary hover:bg-primary-light text-white p-2 rounded-xl border border-primary-light scale-90">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-[1.5rem] p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                <div className="h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop" alt="Turmeric" className="w-full h-full object-cover" />
                </div>
                <div className="text-[10px] font-bold text-accent-orangeDark uppercase tracking-widest mb-1">Heritage Spices</div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Salem Turmeric</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary text-xl">₹180.00</span>
                  <button className="bg-primary hover:bg-primary-light text-white p-2 rounded-xl border border-primary-light scale-90">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white rounded-[1.5rem] p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                <div className="h-40 bg-gray-200 rounded-xl mb-4 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1586940801894-dddbd76378e9?q=80&w=400&auto=format&fit=crop" alt="Ghee" className="w-full h-full object-cover" />
                </div>
                <div className="text-[10px] font-bold text-accent-orangeDark uppercase tracking-widest mb-1">Dairy Heritage</div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg">A2 Gir Cow Ghee</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary text-xl">₹1,250.00</span>
                  <button className="bg-primary hover:bg-primary-light text-white p-2 rounded-xl border border-primary-light scale-90">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>

              {/* Product Card 4 Placeholder */}
              <div className="bg-beige-50 rounded-[1.5rem] p-4 shadow-sm border border-gray-100">
                <div className="h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-400">🖼️</span>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Traditional Grains</div>
                <h3 className="font-bold text-gray-700 mb-4 text-lg">Ponni Rice (5kg)</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary text-xl">₹850.00</span>
                  <button className="bg-primary hover:bg-primary-light text-white p-2 rounded-xl border border-primary-light scale-90">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>

              {/* Product Card 5 Placeholder */}
              <div className="bg-beige-50 rounded-[1.5rem] p-4 shadow-sm border border-gray-100">
                <div className="h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-400">🖼️</span>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Cold Pressed</div>
                <h3 className="font-bold text-gray-700 mb-4 text-lg">Gingelly Oil (1L)</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary text-xl">₹320.00</span>
                  <button className="bg-primary hover:bg-primary-light text-white p-2 rounded-xl border border-primary-light scale-90">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>

              {/* Product Card 6 Placeholder */}
              <div className="bg-beige-50 rounded-[1.5rem] p-4 shadow-sm border border-gray-100">
                <div className="h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-gray-400">🖼️</span>
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Specialty</div>
                <h3 className="font-bold text-gray-700 mb-4 text-lg">Moringa Powder</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary text-xl">₹245.00</span>
                  <button className="bg-primary hover:bg-primary-light text-white p-2 rounded-xl border border-primary-light scale-90">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>

            </div>

            {/* Storage Tip Card */}
            <div className="bg-primary rounded-[2rem] p-8 text-white relative overflow-hidden">
              <div className="absolute right-[-40px] bottom-[-40px] opacity-10">
                <Leaf size={200} />
              </div>
              <div className="flex items-start gap-4 z-10 relative">
                <div className="bg-white/10 p-3 rounded-full flex-shrink-0">
                  <Lightbulb size={24} className="text-green-200" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-green-200 uppercase tracking-widest mb-1">Digital Agronomist Tip</div>
                  <h3 className="font-serif text-2xl mb-4">Storage Excellence</h3>
                  <p className="text-green-100 font-medium italic mb-6 leading-relaxed max-w-lg">
                    "Keep your A2 Gir Cow Ghee in a cool, dark ceramic jar to preserve its golden medicinal properties and delicate aroma."
                  </p>
                  <button className="text-sm font-bold flex items-center gap-2 hover:text-green-200 transition-colors">
                    Learn about Ayurveda <span>→</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Area (Right) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            {/* Monthly Harvest Card */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-primary mb-1">Monthly Harvest</h2>
                  <div className="text-sm">
                    <span className="text-gray-500">Subscription Status:</span>{' '}
                    <span className="font-bold text-green-700">Active</span>
                  </div>
                </div>
                <button className="text-primary hover:bg-green-50 p-2 rounded-full transition-colors">
                  <RefreshCcw size={20} />
                </button>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs">✓</span>
                  10kg Heritage Ponni Rice
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs">✓</span>
                  2L Cold Pressed Gingelly Oil
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs">✓</span>
                  Seasonal Spice Selection
                </li>
              </ul>

              <div className="bg-beige-50 rounded-xl p-4 flex justify-between items-center mb-6">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Next Delivery</span>
                <span className="font-bold text-gray-900 text-sm">Oct 14, 2024</span>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-xl transition-colors">
                  Manage Items
                </button>
                <button className="bg-green-100 hover:bg-green-200 text-green-800 p-3 rounded-xl transition-colors">
                  <Calendar size={20} />
                </button>
              </div>
            </div>

            {/* Tracker Card */}
            <div className="bg-beige-50 rounded-[2rem] p-8 mt-2 border border-gray-100">
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-[10px] font-bold text-green-700 uppercase tracking-widest">Ongoing Order</span>
               </div>
               
               <h3 className="font-bold text-gray-900 text-lg mb-1">Wild Organic Honey</h3>
               <p className="text-sm text-gray-500 mb-6">Arriving today by 6 PM</p>
               
               <button className="w-full bg-primary hover:bg-primary-light text-white text-sm font-bold py-3 rounded-xl shadow-lg shadow-primary/20 transition-all">
                  Track Shipment
               </button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
