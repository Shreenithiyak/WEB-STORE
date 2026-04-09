import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Tractor, Building2, ShoppingBag } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('retail');

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-beige-100 flex flex-col md:flex-row">
      {/* Left Column - Branding */}
      <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
        <h1 className="font-serif text-5xl md:text-6xl text-primary font-bold italic mb-2 tracking-tight">
          MaNila Market
        </h1>
        <p className="font-serif text-xl italic text-gray-500 mb-12">The Digital Agronomist</p>
        
        <h2 className="text-3xl md:text-4xl text-gray-800 mb-6 leading-snug">
          Cultivating direct pathways from heritage farms to your doorstep.
        </h2>
        
        <p className="text-gray-600 max-w-md mb-12">
          Access our curated selection of premium organic produce, artisanal spices, and sustainable dairy. Select your account type to continue your journey.
        </p>

        {/* Account Type Selection */}
        <div className="flex flex-col gap-4 max-w-md">
          <button 
            onClick={() => setAccountType('retail')}
            className={`w-full text-left p-4 rounded-2xl flex items-start gap-4 transition-all duration-300 ${
              accountType === 'retail' 
                ? 'bg-white shadow-xl scale-[1.02] border border-gray-100' 
                : 'bg-white/50 hover:bg-white pb-3 opacity-60 hover:opacity-100'
            }`}
          >
            <div className={`p-3 rounded-full ${accountType === 'retail' ? 'bg-green-100 text-primary' : 'bg-gray-100 text-gray-400'}`}>
              <ShoppingBag size={24} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-bold text-gray-900 text-lg">B2C Retail Customer</h3>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Retail</span>
              </div>
              <p className="text-sm text-gray-500 italic">Personal shopping, single qty, fresh daily delivery.</p>
            </div>
          </button>

          <button 
            onClick={() => setAccountType('b2b')}
            className={`w-full text-left p-4 rounded-2xl flex items-start gap-4 transition-all duration-300 ${
              accountType === 'b2b' 
                ? 'bg-white shadow-xl scale-[1.02] border border-gray-100' 
                : 'bg-white/50 hover:bg-white pb-3 opacity-60 hover:opacity-100'
            }`}
          >
            <div className={`p-3 rounded-full ${accountType === 'b2b' ? 'bg-accent-orange/30 text-accent-orangeDark' : 'bg-gray-100 text-gray-400'}`}>
              <Building2 size={24} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-bold text-gray-900 text-lg">B2B Institutional Buyer</h3>
                <span className="bg-accent-orange/40 text-accent-orangeDark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Bulk</span>
              </div>
              <p className="text-sm text-gray-500 italic">Bulk orders, MOQ pricing, Invoices, Contracts.</p>
            </div>
          </button>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="w-full md:w-1/2 p-6 md:p-20 flex items-center justify-center relative">
        <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-2xl w-full max-w-lg relative z-10 border border-white/50 backdrop-blur-xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-primary mb-2">Welcome Back</h2>
            <p className="text-sm text-gray-500">Please enter your credentials to access your harvest.</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="agronomist@manila.market" 
                className="w-full bg-beige-50 px-4 py-4 rounded-xl text-gray-700 border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all placeholder-gray-400"
                required
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold text-gray-800 uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-bold text-primary hover:text-primary-light">Forgot?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-beige-50 px-4 py-4 rounded-xl text-gray-700 border border-transparent focus:border-primary focus:bg-white focus:outline-none transition-all placeholder-gray-400"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-sm text-gray-500">Remember this device</label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#113527] hover:bg-[#184c38] text-white font-bold py-4 rounded-xl shadow-[0_8px_30px_rgb(17,53,39,0.2)] transition-all active:scale-[0.98]"
            >
              Sign In to Market
            </button>
          </form>

          <div className="mt-12 text-center text-sm">
            <p className="text-gray-500 italic mb-4">New to our ecosystem?</p>
            <button className="w-full border border-gray-200 text-gray-800 hover:bg-gray-50 font-semibold py-3 flex items-center justify-center gap-2 rounded-xl transition-all">
              Create Merchant Account <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer minimal integration */}
      <div className="absolute bottom-6 left-10 md:flex items-center gap-10 text-xs text-gray-400 hidden w-full justify-between pr-20">
        <div>
          <span className="font-bold text-primary mr-8">MaNila Market</span>
          © 2024 MaNila Market. The Digital Agronomist.
        </div>
        <div className="flex gap-6">
          <a href="#">Heritage</a>
          <a href="#">Sustainability</a>
          <a href="#">B2B Solutions</a>
          <a href="#">Organic Certification</a>
          <a href="#">Terms of Harvest</a>
        </div>
        <div className="flex gap-3 text-primary">
          <Leaf size={16} />
          <Tractor size={16} />
        </div>
      </div>
    </div>
  );
};

export default Login;
