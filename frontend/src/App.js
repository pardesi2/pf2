import React, { useState } from 'react';
import './App.css';
import { 
  Icons, 
  Header, 
  BottomNavigation, 
  PhoneCard, 
  CategoryGrid,
  RecentListings,
  FeaturedShops,
  OurOfferings
} from './Components';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Karachi');
  const [filters, setFilters] = useState({
    brand: 'All',
    priceRange: 'All',
    condition: 'All',
    storage: 'All'
  });

  // Mock data for phones with Pakistani market pricing
  const phoneListings = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max',
      brand: 'Apple',
      model: '15 Pro Max',
      price: 485000,
      originalPrice: 520000,
      condition: 'Like New',
      storage: '256GB',
      color: 'Natural Titanium',
      location: 'Gulshan-e-Iqbal, Karachi',
      images: ['https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=400&fit=crop'],
      seller: 'Ahmad Khan',
      rating: 4.8,
      description: 'PTA Approved. Excellent condition, rarely used. All accessories included.',
      specs: {
        display: '6.7" Super Retina XDR',
        camera: '48MP + 12MP + 12MP',
        battery: '4441 mAh',
        ram: '8GB',
        processor: 'A17 Pro'
      },
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      model: 'Galaxy S24 Ultra',
      price: 320000,
      originalPrice: 365000,
      condition: 'Excellent',
      storage: '512GB',
      color: 'Titanium Black',
      location: 'DHA Phase 5, Lahore',
      images: ['https://images.unsplash.com/photo-1610792516307-7e22b020107e?w=400&h=400&fit=crop'],
      seller: 'Fatima Sheikh',
      rating: 4.9,
      description: 'Brand new condition. S Pen included. Under warranty.',
      specs: {
        display: '6.8" Dynamic AMOLED 2X',
        camera: '200MP + 50MP + 12MP + 10MP',
        battery: '5000 mAh',
        ram: '12GB',
        processor: 'Snapdragon 8 Gen 3'
      },
      posted: '1 day ago'
    },
    {
      id: 3,
      title: 'Oppo Reno 12 Pro',
      brand: 'Oppo',
      model: 'Reno 12 Pro',
      price: 135000,
      originalPrice: 145000,
      condition: 'Good',
      storage: '256GB',
      color: 'Sunset Gold',
      location: 'F-10/4, Islamabad',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop'],
      seller: 'Ali Hassan',
      rating: 4.6,
      description: 'Great camera phone. Minor scratches on back. Front screen perfect.',
      specs: {
        display: '6.7" AMOLED',
        camera: '50MP + 8MP + 2MP',
        battery: '5000 mAh',
        ram: '12GB',
        processor: 'Dimensity 7300'
      },
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Vivo V30 Pro',
      brand: 'Vivo',
      model: 'V30 Pro',
      price: 142000,
      originalPrice: 155000,
      condition: 'Like New',
      storage: '256GB',
      color: 'Peacock Green',
      location: 'Johar Town, Lahore',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop'],
      seller: 'Sarah Ahmed',
      rating: 4.7,
      description: 'Excellent selfie camera. Hardly used for 2 months.',
      specs: {
        display: '6.78" AMOLED',
        camera: '50MP + 50MP + 50MP',
        battery: '5000 mAh',
        ram: '12GB',
        processor: 'Dimensity 8200'
      },
      posted: '1 day ago'
    },
    {
      id: 5,
      title: 'Realme GT 6',
      brand: 'Realme',
      model: 'GT 6',
      price: 85000,
      originalPrice: 95000,
      condition: 'Good',
      storage: '128GB',
      color: 'Fluid Silver',
      location: 'Clifton, Karachi',
      images: ['https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop'],
      seller: 'Hassan Ali',
      rating: 4.5,
      description: 'Gaming beast. Fast charging included. Small scratch on corner.',
      specs: {
        display: '6.74" LTPO OLED',
        camera: '50MP + 8MP + 2MP',
        battery: '5500 mAh',
        ram: '8GB',
        processor: 'Snapdragon 8s Gen 3'
      },
      posted: '4 days ago'
    },
    {
      id: 6,
      title: 'Xiaomi 14 Ultra',
      brand: 'Xiaomi',
      model: '14 Ultra',
      price: 185000,
      originalPrice: 205000,
      condition: 'Excellent',
      storage: '512GB',
      color: 'Black',
      location: 'Bahria Town, Rawalpindi',
      images: ['https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&h=400&fit=crop'],
      seller: 'Usman Khan',
      rating: 4.8,
      description: 'Photography flagship. Leica cameras. Pristine condition.',
      specs: {
        display: '6.73" LTPO OLED',
        camera: '50MP + 50MP + 50MP + 50MP',
        battery: '5300 mAh',
        ram: '16GB',
        processor: 'Snapdragon 8 Gen 3'
      },
      posted: '2 days ago'
    }
  ];

  const pakistaniCities = [
    'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad', 
    'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala'
  ];

  const brands = ['All', 'Apple', 'Samsung', 'Oppo', 'Vivo', 'Realme', 'Xiaomi', 'OnePlus', 'Tecno'];
  const priceRanges = ['All', 'Under 50k', '50k-100k', '100k-200k', '200k-300k', 'Above 300k'];
  const conditions = ['All', 'New', 'Like New', 'Excellent', 'Good', 'Fair'];
  const storageOptions = ['All', '64GB', '128GB', '256GB', '512GB', '1TB'];

  const filteredPhones = phoneListings.filter(phone => {
    const matchesSearch = phone.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         phone.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = filters.brand === 'All' || phone.brand === filters.brand;
    const matchesCondition = filters.condition === 'All' || phone.condition === filters.condition;
    const matchesStorage = filters.storage === 'All' || phone.storage === filters.storage;
    
    let matchesPrice = true;
    if (filters.priceRange !== 'All') {
      const price = phone.price;
      switch (filters.priceRange) {
        case 'Under 50k': matchesPrice = price < 50000; break;
        case '50k-100k': matchesPrice = price >= 50000 && price <= 100000; break;
        case '100k-200k': matchesPrice = price >= 100000 && price <= 200000; break;
        case '200k-300k': matchesPrice = price >= 200000 && price <= 300000; break;
        case 'Above 300k': matchesPrice = price > 300000; break;
        default: matchesPrice = true;
      }
    }
    
    return matchesSearch && matchesBrand && matchesCondition && matchesStorage && matchesPrice;
  });

  // Enhanced HomePage Component
  const HomePage = ({ phones, onPhoneClick, onCategoryClick }) => {
    return (
      <div className="space-y-8 pb-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 mx-4 rounded-3xl p-8 text-white shadow-2xl mt-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 font-semibold text-sm">LIVE MARKETPLACE</span>
            </div>
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Find Your Perfect Phone
            </h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Discover premium smartphones at unbeatable prices. PTA approved, verified sellers, secure transactions.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                <div className="text-green-400">{Icons.shield}</div>
                <span className="text-sm font-semibold">PTA Verified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                <div className="text-blue-400">{Icons.lightning}</div>
                <span className="text-sm font-semibold">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-4">
          <div 
            onClick={() => setCurrentPage('search')}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-5 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="text-slate-400 group-hover:text-blue-500 transition-colors duration-300">
                {Icons.search}
              </div>
              <span className="text-slate-500 font-medium group-hover:text-slate-700 transition-colors duration-300">
                Search for phones, brands, models...
              </span>
            </div>
          </div>
        </div>

        {/* Category Grid */}
        <div>
          <div className="px-4 mb-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Shop by Brand</h3>
            <p className="text-slate-600">Choose your favorite smartphone brand</p>
          </div>
          <CategoryGrid onCategoryClick={onCategoryClick} />
        </div>

        {/* Recent Listings */}
        <RecentListings phones={phones} onPhoneClick={onPhoneClick} />

        {/* Featured Shops */}
        <FeaturedShops />

        {/* Our Offerings */}
        <OurOfferings />

        {/* Featured Phones */}
        <div className="px-4">
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl border border-slate-200/50 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Featured Phones</h3>
                <p className="text-slate-600 font-medium">Handpicked premium smartphones</p>
              </div>
              <button 
                onClick={() => setCurrentPage('search')}
                className="text-blue-600 font-bold hover:text-blue-700 transition-colors px-4 py-2 rounded-xl hover:bg-blue-50"
              >
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {phones.slice(0, 3).map(phone => (
                <PhoneCard 
                  key={phone.id} 
                  phone={phone} 
                  onClick={onPhoneClick}
                  compact={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced SearchPage Component
  const SearchPage = ({ phones, onPhoneClick, searchQuery, setSearchQuery, onFilterClick }) => {
    return (
      <div className="space-y-6 pb-8">
        <div className="bg-white p-4 shadow-lg border-b border-slate-200 sticky top-16 z-40">
          <div className="flex gap-3">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search phones, brands, models..."
                className="input-modern w-full"
              />
            </div>
            <button 
              onClick={onFilterClick}
              className="btn-secondary flex items-center gap-2 px-4"
            >
              {Icons.filter}
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </div>

        <div className="px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              {searchQuery ? `Results for "${searchQuery}"` : 'All Phones'}
            </h2>
            <span className="text-sm text-slate-600 bg-slate-100 px-3 py-2 rounded-full font-medium">
              {phones.length} phones
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {phones.map(phone => (
              <PhoneCard 
                key={phone.id} 
                phone={phone} 
                onClick={onPhoneClick}
              />
            ))}
          </div>

          {phones.length === 0 && (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-4xl text-slate-400">📱</div>
              </div>
              <h3 className="text-xl font-bold text-slate-600 mb-3">No phones found</h3>
              <p className="text-slate-500 mb-6">Try adjusting your search or filters</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="btn-primary"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Simple PhoneDetails Component
  const PhoneDetails = ({ phone, onBack, onMessageSeller }) => {
    const formatPrice = (price) => `₨ ${price.toLocaleString()}`;
    
    return (
      <div className="bg-white min-h-screen">
        <div className="sticky top-16 bg-white/95 backdrop-blur-md z-40 p-4 border-b border-slate-200">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium"
          >
            {Icons.chevronLeft}
            <span>Back</span>
          </button>
        </div>

        <div className="p-4 space-y-6">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={phone.images[0]} 
              alt={phone.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 mb-2">{phone.title}</h1>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  {formatPrice(phone.price)}
                </span>
                {phone.originalPrice > phone.price && (
                  <span className="text-lg text-slate-500 line-through">
                    {formatPrice(phone.originalPrice)}
                  </span>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-4">Phone Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-600">Condition:</span>
                  <p className="font-semibold text-slate-800">{phone.condition}</p>
                </div>
                <div>
                  <span className="text-slate-600">Storage:</span>
                  <p className="font-semibold text-slate-800">{phone.storage}</p>
                </div>
                <div>
                  <span className="text-slate-600">Color:</span>
                  <p className="font-semibold text-slate-800">{phone.color}</p>
                </div>
                <div>
                  <span className="text-slate-600">Location:</span>
                  <p className="font-semibold text-slate-800">{phone.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-4">Description</h3>
              <p className="text-slate-600 leading-relaxed">{phone.description}</p>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={onMessageSeller}
                className="flex-1 btn-primary flex items-center justify-center gap-2"
              >
                {Icons.message}
                <span>Message Seller</span>
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2 px-6">
                {Icons.phone}
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Simple SellPage Component
  const SellPage = ({ onBack }) => {
    return (
      <div className="bg-white min-h-screen">
        <div className="sticky top-16 bg-white/95 backdrop-blur-md z-40 p-4 border-b border-slate-200">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium"
          >
            {Icons.chevronLeft}
            <span>Back</span>
          </button>
        </div>

        <div className="p-4 space-y-6">
          <div className="text-center py-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-xl">
              <div className="text-3xl text-white">{Icons.camera}</div>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 mb-3">Sell Your Phone</h1>
            <p className="text-slate-600 leading-relaxed">
              Post your phone listing and reach thousands of potential buyers
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Phone title (e.g., iPhone 15 Pro Max)"
              className="input-modern"
            />
            <input
              type="text"
              placeholder="Price in PKR"
              className="input-modern"
            />
            <select className="select-modern">
              <option>Select Condition</option>
              <option>New</option>
              <option>Like New</option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
            <textarea
              placeholder="Describe your phone..."
              rows="4"
              className="input-modern resize-none"
            ></textarea>
            
            <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center">
              <div className="text-4xl text-slate-400 mb-4">{Icons.camera}</div>
              <p className="text-slate-600 font-medium">Add Photos</p>
              <p className="text-sm text-slate-500 mt-2">Upload up to 5 photos</p>
            </div>

            <button className="btn-primary w-full">
              Post Your Listing
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Simple ProfilePage Component
  const ProfilePage = ({ phones, onPhoneClick }) => {
    return (
      <div className="space-y-6 pb-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 mx-4 rounded-3xl p-8 text-white shadow-2xl mt-4">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl shadow-xl">
              👤
            </div>
            <h2 className="text-2xl font-bold mb-2">Ahmad Khan</h2>
            <p className="text-slate-300 mb-4">Member since Jan 2024</p>
            <div className="flex justify-center gap-6 text-sm">
              <div className="text-center">
                <div className="font-bold text-xl text-cyan-300">4.8</div>
                <div className="text-slate-400">Rating</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl text-cyan-300">12</div>
                <div className="text-slate-400">Sales</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-xl text-cyan-300">3</div>
                <div className="text-slate-400">Active</div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          <h3 className="text-xl font-bold text-slate-800 mb-4">My Listings</h3>
          <div className="space-y-4">
            {phones.map(phone => (
              <PhoneCard 
                key={phone.id} 
                phone={phone} 
                onClick={onPhoneClick}
                compact={true}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Simple FilterModal Component
  const FilterModal = ({ filters, setFilters, brands, priceRanges, conditions, storageOptions, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end">
        <div className="bg-white w-full max-w-md mx-auto rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-800">Filters</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              {Icons.close}
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">Brand</label>
              <select 
                value={filters.brand}
                onChange={(e) => setFilters({...filters, brand: e.target.value})}
                className="select-modern"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">Price Range</label>
              <select 
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                className="select-modern"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">Condition</label>
              <select 
                value={filters.condition}
                onChange={(e) => setFilters({...filters, condition: e.target.value})}
                className="select-modern"
              >
                {conditions.map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">Storage</label>
              <select 
                value={filters.storage}
                onChange={(e) => setFilters({...filters, storage: e.target.value})}
                className="select-modern"
              >
                {storageOptions.map(storage => (
                  <option key={storage} value={storage}>{storage}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 pt-4">
              <button 
                onClick={() => setFilters({ brand: 'All', priceRange: 'All', condition: 'All', storage: 'All' })}
                className="flex-1 btn-secondary"
              >
                Clear All
              </button>
              <button 
                onClick={onClose}
                className="flex-1 btn-primary"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Simple MessageModal Component  
  const MessageModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end">
        <div className="bg-white w-full max-w-md mx-auto rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-slate-800">Messages</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              {Icons.close}
            </button>
          </div>

          <div className="space-y-4">
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="text-2xl text-slate-400">{Icons.message}</div>
              </div>
              <h4 className="text-lg font-bold text-slate-600 mb-2">No messages yet</h4>
              <p className="text-slate-500">Your conversations will appear here</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            phones={phoneListings.slice(0, 6)} 
            onPhoneClick={setSelectedPhone}
            onCategoryClick={(brand) => {
              setFilters({...filters, brand});
              setCurrentPage('search');
            }}
            onSearchClick={() => setCurrentPage('search')}
          />
        );
      case 'search':
        return (
          <SearchPage 
            phones={filteredPhones}
            onPhoneClick={setSelectedPhone}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onFilterClick={() => setShowFilters(true)}
            filters={filters}
          />
        );
      case 'sell':
        return <SellPage onBack={() => setCurrentPage('home')} />;
      case 'profile':
        return <ProfilePage phones={phoneListings.slice(0, 3)} onPhoneClick={setSelectedPhone} />;
      default:
        return <HomePage phones={phoneListings.slice(0, 6)} onPhoneClick={setSelectedPhone} onSearchClick={() => setCurrentPage('search')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 max-w-md mx-auto relative">
      <Header 
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        cities={pakistaniCities}
        onMessagesClick={() => setShowMessages(true)}
      />
      
      <main className="pb-20 pt-16">
        {selectedPhone ? (
          <PhoneDetails 
            phone={selectedPhone} 
            onBack={() => setSelectedPhone(null)}
            onMessageSeller={() => setShowMessages(true)}
          />
        ) : (
          renderCurrentPage()
        )}
      </main>

      <BottomNavigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {showFilters && (
        <FilterModal
          filters={filters}
          setFilters={setFilters}
          brands={brands}
          priceRanges={priceRanges}
          conditions={conditions}
          storageOptions={storageOptions}
          onClose={() => setShowFilters(false)}
        />
      )}

      {showMessages && (
        <MessageModal onClose={() => setShowMessages(false)} />
      )}
    </div>
  );
}

export default App;