import React, { useState } from 'react';

// Enhanced Modern Icons Component with better SVG designs
const Icons = {
  home: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  search: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" strokeWidth="2.5"/>
      <path d="m21 21-4.35-4.35" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  plus: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth="2.5"/>
      <line x1="12" y1="8" x2="12" y2="16" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="8" y1="12" x2="16" y2="12" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  user: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4" strokeWidth="2.5"/>
    </svg>
  ),
  message: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 11h6m-6 4h4"/>
    </svg>
  ),
  location: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3" strokeWidth="3"/>
    </svg>
  ),
  chevronDown: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m6 9 6 6 6-6"/>
    </svg>
  ),
  chevronLeft: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m15 18-6-6 6-6"/>
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  star: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  filter: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.207A1 1 0 0 1 3 6.5V4z"/>
    </svg>
  ),
  phone: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  close: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18 6 6 18M6 6l12 12"/>
    </svg>
  ),
  camera: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4" strokeWidth="2"/>
    </svg>
  ),
  whatsapp: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
  ),
  trending: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
    </svg>
  ),
  verified: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 4L13.5 7H9.5C8.7 7 8 7.7 8 8.5S8.7 10 9.5 10H10.5L9 13H15L13.5 10H18.5C19.3 10 20 9.3 20 8.5S19.3 7 18.5 7H17.2L21 9ZM6 16H18V18H6V16ZM12 20C13.1 20 14 20.9 14 22H10C10 20.9 10.9 20 12 20Z"/>
    </svg>
  ),
  lightning: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M13 3L4 14h6v7l9-11h-6V3z"/>
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 12 2 2 4-4"/>
    </svg>
  ),
  diamond: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3h12l4 6-10 11L2 9l4-6z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3 8 9l4 11 4-11-3-6"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 9h20"/>
    </svg>
  )
};

// Enhanced Header Component with premium design
const Header = ({ selectedCity, setSelectedCity, cities, onMessagesClick }) => {
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white z-50 max-w-md mx-auto shadow-2xl backdrop-blur-lg border-b border-white/10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-11 h-11 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 ring-2 ring-white/20">
            <span className="text-white font-bold text-lg">📱</span>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              PhoneFlip
            </h1>
            <div className="relative">
              <button 
                onClick={() => setShowCityDropdown(!showCityDropdown)}
                className="text-xs flex items-center space-x-1 text-slate-300 hover:text-cyan-300 transition-all duration-300 hover:scale-105"
              >
                {Icons.location}
                <span className="font-medium">{selectedCity}</span>
                <div className={`transition-transform duration-300 ${showCityDropdown ? 'rotate-180' : ''}`}>
                  {Icons.chevronDown}
                </div>
              </button>
              {showCityDropdown && (
                <div className="absolute top-full left-0 bg-white/95 backdrop-blur-xl text-slate-800 rounded-2xl shadow-2xl mt-3 py-3 w-52 z-10 border border-white/20 shadow-blue-500/20">
                  {cities.map(city => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setShowCityDropdown(false);
                      }}
                      className="block w-full text-left px-5 py-3 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 text-sm font-medium transition-all duration-200 hover:text-blue-700"
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
          className="p-3 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 relative"
        >
          {Icons.message}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-red-400 to-pink-500 rounded-full border-2 border-white shadow-lg"></div>
        </button>
      </div>
    </header>
  );
};

// Enhanced Bottom Navigation with premium styling
const BottomNavigation = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'home', icon: Icons.home, label: 'Home' },
    { id: 'search', icon: Icons.search, label: 'Search' },
    { id: 'sell', icon: Icons.plus, label: 'Sell' },
    { id: 'profile', icon: Icons.user, label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200/50 max-w-md mx-auto shadow-2xl shadow-slate-900/10">
      <div className="flex">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex-1 py-3 px-1 text-center transition-all duration-300 relative ${
              currentPage === item.id 
                ? 'text-blue-600' 
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {currentPage === item.id && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
            )}
            <div className={`mb-1 transition-all duration-300 ${
              currentPage === item.id 
                ? 'scale-110 text-blue-600' 
                : 'hover:scale-105'
            }`}>
              {item.icon}
            </div>
            <div className={`text-xs font-semibold transition-all duration-300 ${
              currentPage === item.id 
                ? 'text-blue-600 font-bold' 
                : ''
            }`}>
              {item.label}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

// Enhanced Phone Card with premium design
const PhoneCard = ({ phone, onClick, compact = false }) => {
  const formatPrice = (price) => {
    return `₨ ${price.toLocaleString()}`;
  };

  const conditionColors = {
    'New': 'bg-gradient-to-r from-emerald-500 to-green-500',
    'Like New': 'bg-gradient-to-r from-green-500 to-emerald-600',
    'Excellent': 'bg-gradient-to-r from-blue-500 to-cyan-500',
    'Good': 'bg-gradient-to-r from-amber-500 to-orange-500',
    'Fair': 'bg-gradient-to-r from-orange-500 to-red-500'
  };

  return (
    <div 
      onClick={() => onClick(phone)}
      className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group hover:border-blue-200"
    >
      <div className="relative overflow-hidden">
        <img 
          src={phone.images[0]} 
          alt={phone.title}
          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className={`absolute top-4 right-4 ${conditionColors[phone.condition]} text-white text-xs px-3 py-2 rounded-full font-bold shadow-lg backdrop-blur-sm`}>
          {phone.condition}
        </div>
        <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md text-white text-xs px-3 py-2 rounded-full font-semibold">
          {phone.storage}
        </div>
        <div className="absolute bottom-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110">
          {Icons.heart}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-slate-800 mb-3 text-lg leading-tight group-hover:text-blue-700 transition-colors duration-300">{phone.title}</h3>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            {formatPrice(phone.price)}
          </span>
          {phone.originalPrice > phone.price && (
            <span className="text-sm text-slate-500 line-through">{formatPrice(phone.originalPrice)}</span>
          )}
        </div>
        
        <div className="space-y-3 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-sm"></div>
            <span className="font-medium">{phone.color}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-blue-500">
              {Icons.location}
            </div>
            <span className="font-medium">{phone.location}</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <div className="text-amber-400">
                {Icons.star}
              </div>
              <span className="font-bold text-slate-700">{phone.rating}</span>
            </div>
            <span className="text-slate-500 font-medium">{phone.posted}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Category Grid with modern design
const CategoryGrid = ({ onCategoryClick }) => {
  const categories = [
    { 
      name: 'Apple', 
      gradient: 'from-slate-200 via-slate-100 to-white', 
      textColor: 'text-slate-700',
      icon: '🍎',
      borderColor: 'border-slate-200',
      hoverGradient: 'hover:from-slate-300 hover:to-slate-100'
    },
    { 
      name: 'Samsung', 
      gradient: 'from-blue-100 via-cyan-50 to-white', 
      textColor: 'text-blue-700',
      icon: '📱',
      borderColor: 'border-blue-200',
      hoverGradient: 'hover:from-blue-200 hover:to-cyan-100'
    },
    { 
      name: 'Oppo', 
      gradient: 'from-emerald-100 via-green-50 to-white', 
      textColor: 'text-emerald-700',
      icon: '💚',
      borderColor: 'border-emerald-200',
      hoverGradient: 'hover:from-emerald-200 hover:to-green-100'
    },
    { 
      name: 'Vivo', 
      gradient: 'from-purple-100 via-violet-50 to-white', 
      textColor: 'text-purple-700',
      icon: '💜',
      borderColor: 'border-purple-200',
      hoverGradient: 'hover:from-purple-200 hover:to-violet-100'
    },
    { 
      name: 'Realme', 
      gradient: 'from-amber-100 via-yellow-50 to-white', 
      textColor: 'text-amber-700',
      icon: '⚡',
      borderColor: 'border-amber-200',
      hoverGradient: 'hover:from-amber-200 hover:to-yellow-100'
    },
    { 
      name: 'Xiaomi', 
      gradient: 'from-orange-100 via-red-50 to-white', 
      textColor: 'text-orange-700',
      icon: '🔥',
      borderColor: 'border-orange-200',
      hoverGradient: 'hover:from-orange-200 hover:to-red-100'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {categories.map(category => (
        <button
          key={category.name}
          onClick={() => onCategoryClick(category.name)}
          className={`bg-gradient-to-br ${category.gradient} ${category.hoverGradient} p-6 rounded-3xl text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 ${category.borderColor} hover:border-opacity-50 group`}
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {category.icon}
          </div>
          <div className={`text-sm font-bold ${category.textColor} group-hover:text-opacity-80 transition-colors duration-300`}>
            {category.name}
          </div>
        </button>
      ))}
    </div>
  );
};

// Enhanced Recent Listings Component
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
    <div className="bg-gradient-to-br from-white to-slate-50 mx-4 rounded-3xl shadow-xl border border-slate-200/50 overflow-hidden backdrop-blur-sm">
      <div className="p-6 pb-4 flex justify-between items-center bg-gradient-to-r from-transparent to-blue-50/30">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold text-slate-800">Recent Listings</h3>
            <div className="text-red-500">{Icons.lightning}</div>
          </div>
          <p className="text-sm text-slate-600 font-medium">Fresh phones just posted</p>
        </div>
        <button className="text-sm text-blue-600 font-bold hover:text-blue-700 transition-colors px-3 py-2 rounded-xl hover:bg-blue-50">
          View All
        </button>
      </div>
      <div className="px-6 pb-6">
        <div className="space-y-4">
          {recentPhones.map(phone => (
            <div 
              key={phone.id}
              onClick={() => onPhoneClick(phone)}
              className="flex gap-4 p-4 rounded-2xl border border-slate-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative">
                <img src={phone.images[0]} alt={phone.title} className="w-20 h-20 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
                {phone.isNew && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse border-2 border-white shadow-lg"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-sm text-slate-800 truncate group-hover:text-blue-700 transition-colors duration-300">
                    {phone.title}
                  </h4>
                  {phone.isNew && (
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold flex-shrink-0 ml-2 shadow-lg animate-pulse">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
                  ₨ {phone.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full font-semibold border border-green-200">
                    {phone.condition}
                  </span>
                  <span className="font-medium">•</span>
                  <span className="font-medium">{phone.posted}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced Featured Shops Component
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
    <div className="bg-gradient-to-br from-white to-slate-50 mx-4 rounded-3xl shadow-xl border border-slate-200/50 overflow-hidden">
      <div className="p-6 pb-4 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-amber-500">{Icons.verified}</div>
            <h3 className="text-xl font-bold text-slate-800">Featured Shops</h3>
            <div className="text-blue-500">{Icons.shield}</div>
          </div>
          <p className="text-sm text-slate-600 font-medium">Trusted verified sellers</p>
        </div>
        <button className="text-sm text-blue-600 font-bold hover:text-blue-700 transition-colors px-3 py-2 rounded-xl hover:bg-blue-50">
          View All
        </button>
      </div>
      <div className="px-6 pb-6">
        <div className="space-y-4">
          {shops.map(shop => (
            <div 
              key={shop.id}
              className="bg-gradient-to-r from-slate-50 via-white to-slate-50 p-5 rounded-2xl border-2 border-slate-200/50 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 cursor-pointer group hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${shop.gradient} rounded-3xl flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-blue-500/20 ring-2 ring-white group-hover:scale-110 transition-transform duration-300`}>
                  {shop.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                      {shop.name}
                    </h4>
                    {shop.verified && (
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-amber-400">{Icons.star}</div>
                    <span className="font-bold text-sm">{shop.rating}</span>
                    <span className="text-xs text-slate-600 font-medium">({shop.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                    <span>Specializes in {shop.specializes}</span>
                    <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full font-bold">
                      {shop.phones} phones
                    </span>
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

// Enhanced Our Offerings Component
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
    <div className="bg-gradient-to-br from-white to-slate-50 mx-4 rounded-3xl shadow-xl border border-slate-200/50 overflow-hidden">
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="text-blue-500">{Icons.diamond}</div>
          <h3 className="text-xl font-bold text-slate-800">Our Offerings</h3>
        </div>
        <p className="text-sm text-slate-600 font-medium">Why choose PhoneFlip for your next phone</p>
      </div>
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white via-slate-50 to-slate-100 p-5 rounded-2xl border-2 border-slate-200/50 hover:shadow-xl hover:scale-105 transition-all duration-500 group hover:border-blue-200"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${offering.color} rounded-3xl flex items-center justify-center text-white text-2xl mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                {offering.icon}
              </div>
              <h4 className="font-bold text-sm text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                {offering.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Export all components
export { 
  Icons, 
  Header, 
  BottomNavigation, 
  PhoneCard, 
  CategoryGrid,
  RecentListings,
  FeaturedShops,
  OurOfferings
};
