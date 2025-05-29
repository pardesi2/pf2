import React, { useState } from 'react';
import './App.css';
import Components from './Components';

const {
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
} = Components;

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
      images: ['https://images.unsplash.com/photo-1608386390658-86cf60bcf61a'],
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
      images: ['https://images.unsplash.com/photo-1583573636246-18cb2246697f'],
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
      images: ['https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg'],
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
      images: ['https://images.pexels.com/photos/7671972/pexels-photo-7671972.jpeg'],
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
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'],
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
      images: ['https://images.unsplash.com/photo-1512054502232-10a0a035d672'],
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

  // Handle search navigation from homepage
  React.useEffect(() => {
    const handleSearchNavigation = () => {
      setCurrentPage('search');
    };
    
    window.addEventListener('navigate-to-search', handleSearchNavigation);
    return () => window.removeEventListener('navigate-to-search', handleSearchNavigation);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto relative">
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