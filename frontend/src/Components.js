import React, { useState } from 'react';

// Modern Icons Component
const Icons = {
  home: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  plus: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  user: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  message: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a9.863 9.863 0 01-4.906-1.289L3 21l2.289-5.094A9.863 9.863 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
    </svg>
  ),
  location: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  chevronDown: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ),
  chevronLeft: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  star: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  filter: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
  close: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  camera: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  whatsapp: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  )
};

// Header Component
const Header = ({ selectedCity, setSelectedCity, cities, onMessagesClick }) => {
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white z-50 max-w-md mx-auto shadow-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">PF</span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              PhoneFlip
            </h1>
            <div className="relative">
              <button 
                onClick={() => setShowCityDropdown(!showCityDropdown)}
                className="text-xs flex items-center space-x-1 text-slate-300 hover:text-white transition-colors"
              >
                {Icons.location}
                <span>{selectedCity}</span>
                {Icons.chevronDown}
              </button>
              {showCityDropdown && (
                <div className="absolute top-full left-0 bg-white text-slate-800 rounded-xl shadow-xl mt-2 py-2 w-48 z-10 border border-slate-200">
                  {cities.map(city => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setShowCityDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-3 hover:bg-slate-50 text-sm font-medium transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <button 
          onClick={onMessagesClick}
          className="p-3 hover:bg-white/10 rounded-xl transition-colors duration-200"
        >
          {Icons.message}
        </button>
      </div>
    </header>
  );
};

// Bottom Navigation Component
const BottomNavigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', icon: Icons.home, label: 'Home' },
    { id: 'search', icon: Icons.search, label: 'Search' },
    { id: 'sell', icon: Icons.plus, label: 'Sell' },
    { id: 'profile', icon: Icons.user, label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 max-w-md mx-auto backdrop-blur-sm bg-white/95">
      <div className="flex">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex-1 py-3 px-1 text-center transition-all duration-200 ${
              currentPage === item.id 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            <div className={`mb-1 ${currentPage === item.id ? 'scale-110' : ''} transition-transform`}>
              {item.icon}
            </div>
            <div className="text-xs font-medium">{item.label}</div>
          </button>
        ))}
      </div>
    </nav>
  );
};

// Phone Card Component
const PhoneCard = ({ phone, onClick, compact = false }) => {
  const formatPrice = (price) => {
    return `₨ ${price.toLocaleString()}`;
  };

  const conditionColors = {
    'New': 'bg-emerald-500',
    'Like New': 'bg-green-500',
    'Excellent': 'bg-blue-500',
    'Good': 'bg-amber-500',
    'Fair': 'bg-orange-500'
  };

  return (
    <div 
      onClick={() => onClick(phone)}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <div className="relative">
        <img 
          src={phone.images[0]} 
          alt={phone.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-3 right-3 ${conditionColors[phone.condition]} text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg`}>
          {phone.condition}
        </div>
        <div className="absolute top-3 left-3 bg-black/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg">
          {phone.storage}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-slate-800 mb-2 text-sm leading-tight">{phone.title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold text-slate-900">{formatPrice(phone.price)}</span>
          {phone.originalPrice > phone.price && (
            <span className="text-sm text-slate-500 line-through">{formatPrice(phone.originalPrice)}</span>
          )}
        </div>
        
        <div className="space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
            <span>{phone.color}</span>
          </div>
          <div className="flex items-center gap-1">
            {Icons.location}
            <span>{phone.location}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {Icons.star}
              <span className="font-medium">{phone.rating}</span>
            </div>
            <span className="text-slate-500">{phone.posted}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Category Grid Component
const CategoryGrid = ({ onCategoryClick }) => {
  const categories = [
    { name: 'Apple', gradient: 'from-slate-100 to-slate-200', textColor: 'text-slate-700' },
    { name: 'Samsung', gradient: 'from-blue-100 to-blue-200', textColor: 'text-blue-700' },
    { name: 'Oppo', gradient: 'from-emerald-100 to-emerald-200', textColor: 'text-emerald-700' },
    { name: 'Vivo', gradient: 'from-purple-100 to-purple-200', textColor: 'text-purple-700' },
    { name: 'Realme', gradient: 'from-amber-100 to-amber-200', textColor: 'text-amber-700' },
    { name: 'Xiaomi', gradient: 'from-orange-100 to-orange-200', textColor: 'text-orange-700' }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {categories.map(category => (
        <button
          key={category.name}
          onClick={() => onCategoryClick(category.name)}
          className={`bg-gradient-to-br ${category.gradient} p-6 rounded-2xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border border-white/50`}
        >
          <div className={`text-2xl mb-3 ${category.textColor} font-bold`}>
            {category.name.charAt(0)}
          </div>
          <div className={`text-sm font-semibold ${category.textColor}`}>{category.name}</div>
        </button>
      ))}
    </div>
  );
};

// Recent Listings Component
const RecentListings = ({ phones, onPhoneClick }) => {
  const recentPhones = [
    {
      id: 'r1',
      title: 'iPhone 14 Plus',
      brand: 'Apple',
      price: 265000,
      condition: 'Excellent',
      storage: '128GB',
      color: 'Purple',
      location: 'Gulberg, Lahore',
      images: ['https://images.unsplash.com/photo-1678685888221-cda773a3dcdb'],
      posted: '15 min ago',
      isNew: true
    },
    {
      id: 'r2',
      title: 'Samsung Galaxy A54',
      brand: 'Samsung',
      price: 89000,
      condition: 'Like New',
      storage: '256GB',
      color: 'Awesome Lime',
      location: 'Defence, Karachi',
      images: ['https://images.unsplash.com/photo-1610792516307-7e22b020107e'],
      posted: '28 min ago',
      isNew: true
    },
    {
      id: 'r3',
      title: 'OnePlus 12',
      brand: 'OnePlus',
      price: 195000,
      condition: 'New',
      storage: '256GB',
      color: 'Silky Black',
      location: 'F-11, Islamabad',
      images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0'],
      posted: '1 hour ago',
      isNew: false
    }
  ];

  return (
    <div className="bg-white mx-4 rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 pb-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-1">Recent Listings</h3>
          <p className="text-sm text-slate-600">Fresh phones just posted</p>
        </div>
        <button className="text-sm text-blue-600 font-semibold">View All</button>
      </div>
      <div className="px-6 pb-6">
        <div className="space-y-4">
          {recentPhones.map(phone => (
            <div 
              key={phone.id}
              onClick={() => onPhoneClick(phone)}
              className="flex gap-3 p-3 rounded-2xl border border-slate-100 hover:bg-slate-50 hover:shadow-md transition-all cursor-pointer"
            >
              <img src={phone.images[0]} alt={phone.title} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="font-bold text-sm text-slate-800 truncate">{phone.title}</h4>
                  {phone.isNew && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2">NEW</span>
                  )}
                </div>
                <p className="text-lg font-bold text-slate-900 mb-1">₨ {phone.price.toLocaleString()}</p>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">{phone.condition}</span>
                  <span>•</span>
                  <span>{phone.posted}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Featured Shops Component
const FeaturedShops = () => {
  const shops = [
    {
      id: 's1',
      name: 'TechHub Karachi',
      rating: 4.9,
      reviews: 324,
      specializes: 'Premium iPhones',
      location: 'Saddar, Karachi',
      verified: true,
      phones: 45,
      avatar: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 's2',
      name: 'Mobile Palace',
      rating: 4.8,
      reviews: 218,
      specializes: 'Samsung Galaxy',
      location: 'Mall Road, Lahore',
      verified: true,
      phones: 67,
      avatar: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 's3',
      name: 'Smart Devices',
      rating: 4.7,
      reviews: 156,
      specializes: 'Budget Phones',
      location: 'Blue Area, Islamabad',
      verified: true,
      phones: 89,
      avatar: 'https://images.unsplash.com/photo-1560472355-536de3962603',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="bg-white mx-4 rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 pb-4 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-1">Featured Shops</h3>
          <p className="text-sm text-slate-600">Trusted verified sellers</p>
        </div>
        <button className="text-sm text-blue-600 font-semibold">View All</button>
      </div>
      <div className="px-6 pb-6">
        <div className="space-y-4">
          {shops.map(shop => (
            <div 
              key={shop.id}
              className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-2xl border border-slate-200 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${shop.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {shop.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-slate-800">{shop.name}</h4>
                    {shop.verified && (
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {Icons.star}
                    <span className="font-semibold text-sm">{shop.rating}</span>
                    <span className="text-xs text-slate-600">({shop.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span>Specializes in {shop.specializes}</span>
                    <span>{shop.phones} phones</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Our Offerings Component
const OurOfferings = () => {
  const offerings = [
    {
      icon: '🔒',
      title: 'Secure Transactions',
      description: 'All payments protected with escrow service',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '🚚',
      title: 'Safe Delivery',
      description: 'Nationwide delivery with insurance',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '✅',
      title: 'Phone Verification',
      description: 'IMEI check & authenticity guarantee',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description: 'Round the clock customer assistance',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: '7-day return policy on all purchases',
      color: 'from-teal-500 to-green-600'
    },
    {
      icon: '📱',
      title: 'PTA Verification',
      description: 'Only PTA approved devices listed',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <div className="bg-white mx-4 rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 pb-4">
        <h3 className="text-xl font-bold text-slate-800 mb-1">Our Offerings</h3>
        <p className="text-sm text-slate-600">Why choose PhoneFlip for your next phone</p>
      </div>
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-2xl border border-slate-200 hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${offering.color} rounded-2xl flex items-center justify-center text-white text-xl mb-3 shadow-lg`}>
                {offering.icon}
              </div>
              <h4 className="font-bold text-sm text-slate-800 mb-2">{offering.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = ({ phones, onPhoneClick, onCategoryClick }) => {
  return (
    <div className="space-y-8 bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-6 mx-4 rounded-3xl mt-6 shadow-2xl">
        <div className="relative">
          <h2 className="text-2xl font-bold mb-2">Welcome to PhoneFlip</h2>
          <p className="text-blue-100 text-sm mb-6">Pakistan's most trusted phone marketplace</p>
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
            <div className="text-sm text-cyan-300 mb-1">✨ Featured Deal</div>
            <div className="font-bold text-lg">iPhone 15 starting from ₨ 350,000</div>
          </div>
          <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mx-4">
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('navigate-to-search'))}
          className="w-full bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-3 hover:shadow-lg transition-all text-left"
        >
          <div className="text-slate-400">
            {Icons.search}
          </div>
          <span className="text-slate-500 flex-1">Search phones, brands, models...</span>
          <div className="bg-slate-100 px-3 py-1 rounded-lg text-xs text-slate-600 font-medium">
            Search
          </div>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="mx-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-200">
            <div className="text-2xl font-bold text-blue-600 mb-1">1,200+</div>
            <div className="text-xs text-slate-600 font-medium">Active Listings</div>
          </div>
          <div className="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-200">
            <div className="text-2xl font-bold text-emerald-600 mb-1">98%</div>
            <div className="text-xs text-slate-600 font-medium">Satisfied Users</div>
          </div>
          <div className="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-200">
            <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
            <div className="text-xs text-slate-600 font-medium">Support</div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white mx-4 rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 pb-2">
          <h3 className="text-xl font-bold text-slate-800 mb-1">Browse by Brand</h3>
          <p className="text-sm text-slate-600">Find your favorite phone brand</p>
        </div>
        <CategoryGrid onCategoryClick={onCategoryClick} />
      </div>

      {/* Recent Listings */}
      <RecentListings phones={phones} onPhoneClick={onPhoneClick} />

      {/* Featured Phones */}
      <div className="bg-white mx-4 rounded-3xl shadow-sm border border-slate-200 overflow-hidden pb-6">
        <div className="p-6 pb-4">
          <h3 className="text-xl font-bold text-slate-800 mb-1">Featured Phones</h3>
          <p className="text-sm text-slate-600">Hand-picked best deals</p>
        </div>
        <div className="grid grid-cols-2 gap-4 px-6">
          {phones.map(phone => (
            <PhoneCard key={phone.id} phone={phone} onClick={onPhoneClick} />
          ))}
        </div>
      </div>

      {/* Featured Shops */}
      <FeaturedShops />

      {/* Our Offerings */}
      <OurOfferings />
    </div>
  );
};

// Search Page Component
const SearchPage = ({ phones, onPhoneClick, searchQuery, setSearchQuery, onFilterClick, filters }) => {
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    'iPhone 15 Pro Max', 'Samsung Galaxy S24', 'Oppo Reno 12', 'Realme GT 6', 'Xiaomi 14 Ultra'
  ]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowResults(true);
      // Add to recent searches if not already there
      if (!recentSearches.includes(searchQuery)) {
        setRecentSearches([searchQuery, ...recentSearches.slice(0, 4)]);
      }
    }
  };

  const handleQuickSearch = (query) => {
    setSearchQuery(query);
    setShowResults(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  // Popular search categories
  const searchCategories = [
    {
      title: 'Search by Brand',
      icon: '📱',
      items: [
        { name: 'iPhone', count: '450+ phones', color: 'from-slate-500 to-slate-700' },
        { name: 'Samsung', count: '320+ phones', color: 'from-blue-500 to-blue-700' },
        { name: 'Oppo', count: '180+ phones', color: 'from-green-500 to-green-700' },
        { name: 'Vivo', count: '165+ phones', color: 'from-purple-500 to-purple-700' },
        { name: 'Realme', count: '140+ phones', color: 'from-yellow-500 to-orange-600' },
        { name: 'Xiaomi', count: '95+ phones', color: 'from-orange-500 to-red-600' }
      ]
    },
    {
      title: 'Search by Price Range',
      icon: '💰',
      items: [
        { name: 'Under ₨50k', count: '280+ phones', color: 'from-emerald-500 to-teal-600' },
        { name: '₨50k - ₨100k', count: '350+ phones', color: 'from-blue-500 to-cyan-600' },
        { name: '₨100k - ₨200k', count: '240+ phones', color: 'from-indigo-500 to-purple-600' },
        { name: '₨200k - ₨300k', count: '120+ phones', color: 'from-purple-500 to-pink-600' },
        { name: 'Above ₨300k', count: '85+ phones', color: 'from-rose-500 to-red-600' }
      ]
    },
    {
      title: 'Search by Features',
      icon: '⚡',
      items: [
        { name: 'Gaming Phones', count: '75+ phones', color: 'from-red-500 to-orange-600' },
        { name: 'Camera Pro', count: '120+ phones', color: 'from-purple-500 to-indigo-600' },
        { name: 'Fast Charging', count: '200+ phones', color: 'from-yellow-500 to-orange-600' },
        { name: 'Wireless Charging', count: '90+ phones', color: 'from-blue-500 to-purple-600' },
        { name: '5G Ready', count: '180+ phones', color: 'from-green-500 to-blue-600' },
        { name: 'Long Battery', count: '160+ phones', color: 'from-emerald-500 to-green-600' }
      ]
    }
  ];

  const quickFilters = [
    { label: 'New Phones', icon: '✨', color: 'bg-emerald-500' },
    { label: 'Under Warranty', icon: '🛡️', color: 'bg-blue-500' },
    { label: 'PTA Approved', icon: '✅', color: 'bg-green-500' },
    { label: 'With Box', icon: '📦', color: 'bg-purple-500' },
    { label: 'Exchange OK', icon: '🔄', color: 'bg-orange-500' },
    { label: 'Urgent Sale', icon: '⚡', color: 'bg-red-500' }
  ];

  const popularSearches = [
    'iPhone 15 Pro Max 256GB', 'Samsung S24 Ultra', 'Oppo Reno 12 Pro', 
    'iPhone 14 Plus', 'Realme GT 6', 'Vivo V30 Pro', 'Xiaomi 14 Ultra',
    'OnePlus 12', 'Samsung A54 5G', 'iPhone 13 Pro'
  ];

  const searchSuggestions = [
    { text: 'iPhone 15 Pro Max Natural Titanium', type: 'Exact Model' },
    { text: 'Samsung Galaxy S24 Ultra 512GB', type: 'Storage Specific' },
    { text: 'Gaming phones under 100k', type: 'Category + Price' },
    { text: 'Oppo camera phone 2024 model', type: 'Feature + Brand' },
    { text: 'PTA approved iPhone Karachi', type: 'Verified + Location' }
  ];

  if (showResults) {
    return (
      <div className="space-y-4 bg-slate-50 min-h-screen">
        {/* Search Bar with Results */}
        <div className="p-4 bg-white border-b border-slate-200">
          <div className="flex gap-3 mb-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search phones, brands, models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 border border-slate-300 rounded-2xl pl-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <div className="absolute left-4 top-4 text-slate-400">
                {Icons.search}
              </div>
            </div>
            <button 
              onClick={clearSearch}
              className="p-4 border border-slate-300 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              {Icons.close}
            </button>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={onFilterClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium text-sm flex items-center gap-2"
            >
              {Icons.filter}
              Filters
            </button>
            <div className="text-sm text-slate-600 flex items-center">
              {phones.length} results for "{searchQuery}"
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="px-4 pb-8">
          <div className="grid grid-cols-2 gap-4">
            {phones.map(phone => (
              <PhoneCard key={phone.id} phone={phone} onClick={onPhoneClick} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 bg-slate-50 min-h-screen">
      {/* Search Bar */}
      <div className="p-4 bg-white border-b border-slate-200">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search phones, brands, models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 border border-slate-300 rounded-2xl pl-12 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <div className="absolute left-4 top-4 text-slate-400">
              {Icons.search}
            </div>
          </div>
          <button 
            onClick={handleSearch}
            disabled={!searchQuery.trim()}
            className="px-6 py-4 bg-blue-600 text-white rounded-2xl font-semibold disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="px-4">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              🕒 Recent Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickSearch(search)}
                  className="bg-slate-100 hover:bg-blue-100 px-3 py-2 rounded-xl text-sm text-slate-700 hover:text-blue-700 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quick Filters */}
      <div className="px-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Filters</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickFilters.map((filter, index) => (
              <button
                key={index}
                className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors"
              >
                <div className={`w-8 h-8 ${filter.color} rounded-lg flex items-center justify-center text-white text-sm`}>
                  {filter.icon}
                </div>
                <span className="font-medium text-slate-800 text-sm">{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Categories */}
      {searchCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="px-4">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              {category.icon} {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {category.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickSearch(item.name)}
                  className="bg-slate-50 hover:bg-slate-100 p-4 rounded-2xl text-left transition-all hover:shadow-md"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white font-bold text-lg mb-3 shadow-lg`}>
                    {item.name.charAt(0)}
                  </div>
                  <div className="font-bold text-slate-800 text-sm mb-1">{item.name}</div>
                  <div className="text-xs text-slate-600">{item.count}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Popular Searches */}
      <div className="px-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            🔥 Trending Searches
          </h3>
          <div className="space-y-3">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handleQuickSearch(search)}
                className="w-full flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50 rounded-2xl transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-medium text-slate-800 text-sm">{search}</span>
                </div>
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Suggestions */}
      <div className="px-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            💡 Search Like a Pro
          </h3>
          <div className="space-y-3">
            {searchSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleQuickSearch(suggestion.text)}
                className="w-full p-4 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-50 hover:to-indigo-50 rounded-2xl transition-all text-left border border-slate-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-slate-800 text-sm">{suggestion.text}</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                    {suggestion.type}
                  </span>
                </div>
                <div className="text-xs text-slate-600">Try this search pattern for better results</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Tips */}
      <div className="px-4 pb-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-200">
          <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
            🎯 Search Tips
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
              <div>
                <div className="font-semibold text-blue-800">Be Specific</div>
                <div className="text-blue-700">Include model, storage, and condition for exact matches</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <div>
                <div className="font-semibold text-blue-800">Use Filters</div>
                <div className="text-blue-700">Combine search with price range and condition filters</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
              <div>
                <div className="font-semibold text-blue-800">Try Variations</div>
                <div className="text-blue-700">Search "iPhone 15" or "iPhone 15 Pro" for different results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Phone Details Component
const PhoneDetails = ({ phone, onBack, onMessageSeller }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const formatPrice = (price) => {
    return `₨ ${price.toLocaleString()}`;
  };

  const conditionColors = {
    'New': 'bg-emerald-500',
    'Like New': 'bg-green-500',
    'Excellent': 'bg-blue-500',
    'Good': 'bg-amber-500',
    'Fair': 'bg-orange-500'
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center p-4 bg-white border-b border-slate-200 sticky top-16 z-10 backdrop-blur-sm bg-white/95">
        <button onClick={onBack} className="mr-4 p-2 hover:bg-slate-100 rounded-xl transition-colors">
          {Icons.chevronLeft}
        </button>
        <h2 className="text-lg font-bold flex-1 text-slate-800">Phone Details</h2>
        <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
          {Icons.heart}
        </button>
      </div>

      <div className="space-y-6 pb-8">
        {/* Images */}
        <div className="relative bg-white">
          <img 
            src={phone.images[currentImageIndex]} 
            alt={phone.title}
            className="w-full h-80 object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-xl text-xs font-medium">
            1/{phone.images.length}
          </div>
        </div>

        {/* Price and Title */}
        <div className="px-4">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl font-bold text-slate-900">{formatPrice(phone.price)}</span>
              {phone.originalPrice > phone.price && (
                <span className="text-lg text-slate-500 line-through">{formatPrice(phone.originalPrice)}</span>
              )}
            </div>
            <h1 className="text-2xl font-bold mb-4 text-slate-800">{phone.title}</h1>
            <div className="flex items-center gap-4 text-sm">
              <span className={`${conditionColors[phone.condition]} text-white px-3 py-2 rounded-xl font-medium`}>
                {phone.condition}
              </span>
              <div className="flex items-center gap-1 text-slate-600">
                {Icons.location}
                <span>{phone.location}</span>
              </div>
              <span className="text-slate-500">{phone.posted}</span>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="px-4">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-4 text-slate-800">Specifications</h3>
            <div className="space-y-4">
              {Object.entries({
                'Storage': phone.storage,
                'Color': phone.color,
                'Display': phone.specs.display,
                'Camera': phone.specs.camera,
                'Battery': phone.specs.battery,
                'RAM': phone.specs.ram,
                'Processor': phone.specs.processor
              }).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                  <span className="text-slate-600 font-medium">{key}</span>
                  <span className="font-semibold text-slate-800">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-4">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-4 text-slate-800">Description</h3>
            <p className="text-slate-700 leading-relaxed">{phone.description}</p>
          </div>
        </div>

        {/* Seller Info */}
        <div className="px-4">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-4 text-slate-800">Seller Information</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {phone.seller.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-lg text-slate-800">{phone.seller}</div>
                <div className="flex items-center gap-1 text-sm text-slate-600">
                  {Icons.star}
                  <span className="font-medium">{phone.rating}</span>
                  <span>(127 reviews)</span>
                </div>
                <div className="text-sm text-emerald-600 font-medium mt-1">
                  ✓ Verified seller • Member since 2022
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="px-4">
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all">
              {Icons.phone}
              Call Now
            </button>
            <button 
              onClick={onMessageSeller}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              {Icons.whatsapp}
              WhatsApp
            </button>
          </div>
          <button className="w-full mt-3 border-2 border-slate-300 py-4 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all">
            💰 Make Offer
          </button>
        </div>
      </div>
    </div>
  );
};

// Sell Page Component
const SellPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    model: '',
    storage: '',
    condition: '',
    price: '',
    description: '',
    color: '',
    location: 'Karachi'
  });

  const brands = ['Apple', 'Samsung', 'Oppo', 'Vivo', 'Realme', 'Xiaomi', 'OnePlus', 'Tecno'];
  const conditions = ['New', 'Like New', 'Excellent', 'Good', 'Fair'];
  const storageOptions = ['64GB', '128GB', '256GB', '512GB', '1TB'];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="flex items-center p-4 bg-white border-b border-slate-200 sticky top-16 z-10">
        <button onClick={onBack} className="mr-4 p-2 hover:bg-slate-100 rounded-xl transition-colors">
          {Icons.chevronLeft}
        </button>
        <h2 className="text-lg font-bold text-slate-800">Sell Your Phone</h2>
      </div>

      <div className="p-4 space-y-6 pb-8">
        {/* Photo Upload */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <label className="block text-lg font-bold mb-4 text-slate-800">Photos (Add up to 5)</label>
          <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center hover:border-blue-400 transition-colors">
            <div className="text-slate-400 mb-4">
              {Icons.camera}
            </div>
            <p className="text-slate-600 font-medium mb-2">Tap to add photos</p>
            <p className="text-xs text-slate-500">Good photos get 3x more responses</p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-6">
          <div>
            <label className="block text-sm font-bold mb-3 text-slate-800">Phone Title *</label>
            <input
              type="text"
              placeholder="e.g., iPhone 15 Pro Max 256GB"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full p-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-3 text-slate-800">Brand *</label>
              <select
                value={formData.brand}
                onChange={(e) => setFormData({...formData, brand: e.target.value})}
                className="w-full p-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select Brand</option>
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-3 text-slate-800">Storage *</label>
              <select
                value={formData.storage}
                onChange={(e) => setFormData({...formData, storage: e.target.value})}
                className="w-full p-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select Storage</option>
                {storageOptions.map(storage => (
                  <option key={storage} value={storage}>{storage}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-3 text-slate-800">Condition *</label>
              <select
                value={formData.condition}
                onChange={(e) => setFormData({...formData, condition: e.target.value})}
                className="w-full p-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select Condition</option>
                {conditions.map(condition => (
                  <option key={condition} value={condition}>{condition}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-3 text-slate-800">Color</label>
              <input
                type="text"
                placeholder="e.g., Space Gray"
                value={formData.color}
                onChange={(e) => setFormData({...formData, color: e.target.value})}
                className="w-full p-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-3 text-slate-800">Price (PKR) *</label>
            <input
              type="number"
              placeholder="e.g., 85000"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              className="w-full p-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
            <p className="text-xs text-slate-500 mt-2">💡 Tip: Check similar phones for competitive pricing</p>
          </div>

          <div>
            <label className="block text-sm font-bold mb-3 text-slate-800">Description *</label>
            <textarea
              placeholder="Describe your phone's condition, any accessories included, reason for selling..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
              className="w-full p-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>
        </div>

        {/* Additional Options */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <h3 className="font-bold mb-4 text-slate-800">Additional Options</h3>
          <div className="space-y-4">
            {[
              'PTA Approved',
              'Under Warranty',
              'Original Box & Accessories'
            ].map((option) => (
              <label key={option} className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-3 w-5 h-5 text-blue-600 rounded" />
                <span className="text-sm font-medium text-slate-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all">
          Post Ad - FREE
        </button>

        <p className="text-xs text-slate-500 text-center leading-relaxed">
          By posting, you agree to PhoneFlip's Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

// Profile Page Component
const ProfilePage = ({ phones, onPhoneClick }) => {
  return (
    <div className="space-y-6 bg-slate-50 min-h-screen pb-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-6 mx-4 rounded-3xl mt-6 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl">
            AK
          </div>
          <div>
            <h2 className="text-2xl font-bold">Ahmad Khan</h2>
            <div className="flex items-center gap-1 text-blue-200 mb-1">
              {Icons.star}
              <span className="font-medium">4.8 (45 reviews)</span>
            </div>
            <p className="text-blue-200 text-sm">Member since Jan 2023</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-white border border-slate-200 p-6 rounded-2xl text-center hover:shadow-lg transition-all">
            <div className="text-3xl mb-3">📋</div>
            <div className="text-sm font-bold text-slate-800">My Ads</div>
            <div className="text-xs text-slate-500">5 active</div>
          </button>
          <button className="bg-white border border-slate-200 p-6 rounded-2xl text-center hover:shadow-lg transition-all">
            <div className="text-3xl mb-3">❤️</div>
            <div className="text-sm font-bold text-slate-800">Favorites</div>
            <div className="text-xs text-slate-500">12 saved</div>
          </button>
        </div>
      </div>

      {/* My Listings */}
      <div className="px-4">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold mb-4 text-slate-800">My Active Listings</h3>
          <div className="space-y-4">
            {phones.map(phone => (
              <div key={phone.id} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex gap-4">
                <img src={phone.images[0]} alt={phone.title} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-slate-800">{phone.title}</h4>
                  <p className="text-blue-600 font-bold text-lg">₨ {phone.price.toLocaleString()}</p>
                  <p className="text-xs text-slate-500">👁️ 23 views • 💬 3 messages</p>
                </div>
                <button className="text-slate-400 p-2">⋮</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="px-4">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 pb-4">
            <h3 className="text-xl font-bold text-slate-800">Account Settings</h3>
          </div>
          {[
            { icon: '👤', text: 'Edit Profile', arrow: true },
            { icon: '🔔', text: 'Notifications', arrow: true },
            { icon: '💳', text: 'Payment Methods', arrow: true },
            { icon: '❓', text: 'Help & Support', arrow: true },
            { icon: '⚙️', text: 'Settings', arrow: true },
            { icon: '🚪', text: 'Logout', arrow: false }
          ].map((item, index) => (
            <button key={index} className="w-full flex items-center justify-between p-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-slate-700">{item.text}</span>
              </div>
              {item.arrow && <span className="text-slate-400">›</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Filter Modal Component
const FilterModal = ({ filters, setFilters, brands, priceRanges, conditions, storageOptions, onClose }) => {
  const [tempFilters, setTempFilters] = useState(filters);

  const applyFilters = () => {
    setFilters(tempFilters);
    onClose();
  };

  const clearFilters = () => {
    const clearedFilters = {
      brand: 'All',
      priceRange: 'All',
      condition: 'All',
      storage: 'All'
    };
    setTempFilters(clearedFilters);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end max-w-md mx-auto">
      <div className="bg-white w-full rounded-t-3xl max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">Filters</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
            {Icons.close}
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold mb-4 text-slate-800">Brand</h3>
            <div className="grid grid-cols-3 gap-3">
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setTempFilters({...tempFilters, brand})}
                  className={`p-3 text-sm rounded-xl border-2 font-medium transition-all ${
                    tempFilters.brand === brand 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-bold mb-4 text-slate-800">Price Range</h3>
            <div className="space-y-3">
              {priceRanges.map(range => (
                <button
                  key={range}
                  onClick={() => setTempFilters({...tempFilters, priceRange: range})}
                  className={`w-full p-4 text-left rounded-xl border-2 font-medium transition-all ${
                    tempFilters.priceRange === range 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Condition */}
          <div>
            <h3 className="font-bold mb-4 text-slate-800">Condition</h3>
            <div className="grid grid-cols-3 gap-3">
              {conditions.map(condition => (
                <button
                  key={condition}
                  onClick={() => setTempFilters({...tempFilters, condition})}
                  className={`p-3 text-sm rounded-xl border-2 font-medium transition-all ${
                    tempFilters.condition === condition 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'
                  }`}
                >
                  {condition}
                </button>
              ))}
            </div>
          </div>

          {/* Storage */}
          <div>
            <h3 className="font-bold mb-4 text-slate-800">Storage</h3>
            <div className="grid grid-cols-3 gap-3">
              {storageOptions.map(storage => (
                <button
                  key={storage}
                  onClick={() => setTempFilters({...tempFilters, storage})}
                  className={`p-3 text-sm rounded-xl border-2 font-medium transition-all ${
                    tempFilters.storage === storage 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'
                  }`}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-slate-200 flex gap-4">
          <button 
            onClick={clearFilters}
            className="flex-1 py-4 border-2 border-slate-300 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-all"
          >
            Clear All
          </button>
          <button 
            onClick={applyFilters}
            className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

// Message Modal Component
const MessageModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end max-w-md mx-auto">
      <div className="bg-white w-full rounded-t-3xl max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">Messages</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
            {Icons.close}
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {[
              {
                name: 'Hassan Ali',
                message: 'Is the iPhone still available?',
                time: '2 min ago',
                unread: true,
                phone: 'iPhone 15 Pro Max'
              },
              {
                name: 'Sarah Ahmed',
                message: 'Can you reduce the price?',
                time: '1 hour ago',
                unread: false,
                phone: 'Samsung Galaxy S24'
              },
              {
                name: 'Ali Khan',
                message: 'WhatsApp number please',
                time: '3 hours ago',
                unread: false,
                phone: 'Oppo Reno 12'
              }
            ].map((chat, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-slate-800">{chat.name}</div>
                  <div className="text-xs text-slate-500">{chat.time}</div>
                </div>
                <div className="text-xs text-blue-600 mb-2 font-medium">{chat.phone}</div>
                <div className="text-sm text-slate-700">{chat.message}</div>
                {chat.unread && (
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center py-12 text-slate-500">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              {Icons.message}
            </div>
            <h3 className="text-lg font-bold mb-2 text-slate-800">Start chatting!</h3>
            <p className="text-sm">Connect with buyers and sellers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Components = {
  Header,
  BottomNavigation,
  HomePage,
  SearchPage,
  PhoneDetails,
  SellPage,
  ProfilePage,
  CategoryGrid,
  PhoneCard,
  FilterModal,
  MessageModal
};

export default Components;