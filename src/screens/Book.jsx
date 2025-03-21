import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Briefcase, Phone, Mail, ChevronUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SUV from "../assets/SUV.jpg";
import MiniVan from "../assets/MiniVan.jfif";
import Sedan from "../assets/sedan.jpg";
import Limo from "../assets/Limo.jpg";
import Van from "../assets/Van.jpg";
import Bus from "../assets/bus.jpg";
import BookingsDisplay from '../components/BookingDisplay';

// Leaflet Map Components (OpenStreetMap - free)
const MapSelector = ({ location, setLocation, label, error }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Initialize the map when component mounts
  useEffect(() => {
    // Create link for Leaflet CSS if not already present
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
      link.crossOrigin = '';
      document.head.appendChild(link);
    }

    // Load Leaflet JS if not already loaded
    if (!window.L) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      script.crossOrigin = '';
      script.async = true;
      
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      if (map) map.remove();
    };
  }, []);

  const initMap = () => {
    // Center on USA (coordinates for the geographical center of the contiguous United States)
    const usaCenter = [39.8283, -98.5795];
    const zoomLevel = 4; // Zoom out to show more of the country
    
    // Create map instance
    const mapInstance = window.L.map(mapRef.current).setView(usaCenter, zoomLevel);
    
    // Add OpenStreetMap tile layer
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);
    
    // Add a marker
    const markerInstance = window.L.marker(usaCenter, {
      draggable: true
    }).addTo(mapInstance);
    
    // When marker is dragged, update location
    markerInstance.on('dragend', async () => {
      const position = markerInstance.getLatLng();
      try {
        // Reverse geocoding with Nominatim
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.lat}&lon=${position.lng}&zoom=18&addressdetails=1`,
          { headers: { 'Accept-Language': 'en-US,en' } }
        );
        const data = await response.json();
        if (data && data.display_name) {
          setLocation(data.display_name);
        }
      } catch (error) {
        console.error('Error with reverse geocoding:', error);
      }
    });
    
    setMap(mapInstance);
    setMarker(markerInstance);
    
    // If we already have a location, try to center the map there
    if (location) {
      searchLocation(location);
    }
  };

  const searchLocation = async (query) => {
    if (!query) return;
    
    setIsSearching(true);
    try {
      // Geocoding with Nominatim
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`,
        { headers: { 'Accept-Language': 'en-US,en' } }
      );
      const data = await response.json();
      
      if (data && data.length > 0) {
        setSearchResults(data);
        
        // If we're selecting a specific result from the dropdown, update the map
        if (query === location) {
          const result = data[0];
          const position = [parseFloat(result.lat), parseFloat(result.lon)];
          
          if (map && marker) {
            map.setView(position, 15);
            marker.setLatLng(position);
          }
        }
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error searching location:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  // Search when query changes
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchQuery) {
        searchLocation(searchQuery);
      } else {
        setSearchResults([]);
      }
    }, 500);
    
    return () => clearTimeout(delaySearch);
  }, [searchQuery]);

  // Search when location changes (for initial load)
  useEffect(() => {
    if (location && map && marker) {
      searchLocation(location);
    }
  }, [location, map, marker]);

  const handleResultClick = (result) => {
    setLocation(result.display_name);
    setSearchQuery(result.display_name);
    setSearchResults([]);
    
    const position = [parseFloat(result.lat), parseFloat(result.lon)];
    if (map && marker) {
      map.setView(position, 15);
      marker.setLatLng(position);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Search for ${label.toLowerCase()}`}
          className={`w-full p-3 border rounded-lg pl-10 ${error ? 'border-red-500' : ''}`}
        />
        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        
        {/* Search results dropdown */}
        {searchResults.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
            {searchResults.map((result, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => handleResultClick(result)}
              >
                {result.display_name}
              </div>
            ))}
          </div>
        )}
        
        {isSearching && (
          <div className="absolute right-3 top-3">
            <div className="animate-spin h-4 w-4 border-2 border-gray-500 rounded-full border-t-transparent"></div>
          </div>
        )}
        
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <div ref={mapRef} className="w-full h-48 rounded-lg border mt-2 z-0"></div>
    </div>
  );
};

// Route map component
const RouteMap = ({ pickup, dropoff }) => {
  const mapRef = useRef(null);
  const [routeInfo, setRouteInfo] = useState(null);
  
  useEffect(() => {
    if (!window.L || !pickup || !dropoff) return;
    
    // Create map instance
    const map = window.L.map(mapRef.current);
    
    // Add OpenStreetMap tile layer
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Function to get coordinates from location search
    const getCoordinates = async (location) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}&limit=1`,
          { headers: { 'Accept-Language': 'en-US,en' } }
        );
        const data = await response.json();
        
        if (data && data.length > 0) {
          return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        }
        return null;
      } catch (error) {
        console.error('Error getting coordinates:', error);
        return null;
      }
    };
    
    // Function to get route using OSRM
    const getRoute = async (from, to) => {
      try {
        // Convert coordinates from [lat, lon] to [lon, lat] for OSRM
        const fromCoord = `${from[1]},${from[0]}`;
        const toCoord = `${to[1]},${to[0]}`;
        
        const response = await fetch(
          `https://router.project-osrm.org/route/v1/driving/${fromCoord};${toCoord}?overview=full&geometries=polyline`
        );
        const data = await response.json();
        
        if (data && data.routes && data.routes.length > 0) {
          return {
            geometry: data.routes[0].geometry,
            distance: (data.routes[0].distance / 1000).toFixed(1), // km
            duration: Math.round(data.routes[0].duration / 60) // minutes
          };
        }
        return null;
      } catch (error) {
        console.error('Error getting route:', error);
        return null;
      }
    };
    
    // Main function to fetch and display the route
    const showRoute = async () => {
      try {
        // Get coordinates for pickup and dropoff
        const pickupCoords = await getCoordinates(pickup);
        const dropoffCoords = await getCoordinates(dropoff);
        
        if (!pickupCoords || !dropoffCoords) {
          console.error('Could not find coordinates for one or both locations');
          return;
        }
        
        // Add markers for pickup and dropoff
        const pickupMarker = window.L.marker(pickupCoords, {
          icon: window.L.divIcon({
            html: '<div class="bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>',
            className: 'custom-div-icon'
          })
        }).addTo(map).bindPopup('Pickup');
        
        const dropoffMarker = window.L.marker(dropoffCoords, {
          icon: window.L.divIcon({
            html: '<div class="bg-red-500 w-4 h-4 rounded-full border-2 border-white"></div>',
            className: 'custom-div-icon'
          })
        }).addTo(map).bindPopup('Dropoff');
        
        // Get the route
        const route = await getRoute(pickupCoords, dropoffCoords);
        
        if (route) {
          // Decode the polyline
          const decodedPolyline = window.L.Polyline.fromEncoded(route.geometry).getLatLngs();
          
          // Add the route to the map
          const routeLine = window.L.polyline(decodedPolyline, {
            color: '#4a90e2',
            weight: 6,
            opacity: 0.8,
            lineJoin: 'round'
          }).addTo(map);
          
          // Fit the map to the route
          const bounds = routeLine.getBounds();
          map.fitBounds(bounds, { padding: [30, 30] });
          
          // Set route info
          setRouteInfo({
            distance: `${route.distance} km`,
            duration: `${route.duration} min`
          });
        } else {
          // If route calculation fails, just show the markers
          const bounds = window.L.latLngBounds([pickupCoords, dropoffCoords]);
          map.fitBounds(bounds, { padding: [30, 30] });
          
          // Estimate distance and duration (straight line)
          const distance = map.distance(pickupCoords, dropoffCoords) / 1000; // km
          const estimatedSpeed = 50; // km/h
          const duration = Math.round((distance / estimatedSpeed) * 60); // minutes
          
          setRouteInfo({
            distance: `~${distance.toFixed(1)} km (straight line)`,
            duration: `~${duration} min (estimated)`
          });
        }
      } catch (error) {
        console.error('Error displaying route:', error);
      }
    };
    
    // Add Polyline.encoded if not available
    if (!window.L.Polyline.fromEncoded) {
      // Polyline encoding/decoding functions
      window.L.Polyline.fromEncoded = function(encoded, options) {
        const decode = function(encoded) {
          let points = [];
          let index = 0, len = encoded.length;
          let lat = 0, lng = 0;
          
          while (index < len) {
            let b, shift = 0, result = 0;
            
            do {
              b = encoded.charAt(index++).charCodeAt(0) - 63;
              result |= (b & 0x1f) << shift;
              shift += 5;
            } while (b >= 0x20);
            
            let dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lat += dlat;
            
            shift = 0;
            result = 0;
            
            do {
              b = encoded.charAt(index++).charCodeAt(0) - 63;
              result |= (b & 0x1f) << shift;
              shift += 5;
            } while (b >= 0x20);
            
            let dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
            lng += dlng;
            
            points.push([lat * 1e-5, lng * 1e-5]);
          }
          
          return points;
        };
        
        return new window.L.Polyline(decode(encoded), options);
      };
    }
    
    showRoute();
    
    return () => {
      map.remove();
    };
  }, [pickup, dropoff]);
  
  return (
    <div className="space-y-2">
      <div ref={mapRef} className="w-full h-64 rounded-lg border mt-2"></div>
      {routeInfo && (
        <div className="flex justify-between text-sm text-gray-700 mt-2">
          <div>Distance: <span className="font-medium">{routeInfo.distance}</span></div>
          <div>Duration: <span className="font-medium">{routeInfo.duration}</span></div>
        </div>
      )}
    </div>
  );
};

// Main BookingPage component
const BookingPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  
  const cars = [
    {
      id: 1,
      image: Sedan,
      name: 'Luxury Sedan',
      price: "1500",
      transmission: "Automatic",
      seats: 5,
      luggage: 4,
      speed: 4800,
      year: "2024"
    },
    {
      id: 2,
      image: MiniVan,
      name: 'Executive Vans',
      price: "2000",
      transmission: "Automatic",
      seats: 14,
      luggage: 6,
      speed: 4200,
      year: "2024"
    },
    {
      id: 3,
      image: SUV,
      name: 'Luxury SUVs',
      price: "2500",
      transmission: "Automatic",
      seats: 6,
      luggage: 5,
      speed: 5000,
      year: "2024"
    },
    {
      id: 4,
      image: Van,
      name: 'Luxury MiniBus',
      price: "3000",
      transmission: "Automatic",
      seats: 35,
      luggage: 12,
      speed: 3800,
      year: "2024"
    },
    {
      id: 5,
      image: Bus,
      name: 'Luxury Motor Coach',
      price: "4000",
      transmission: "Automatic",
      seats: 50,
      luggage: 16,
      speed: 3500,
      year: "2024"
    },
    {
      id: 6,
      image: Limo,
      name: 'Stretch Limo',
      price: "5000",
      transmission: "Automatic",
      seats: 8,
      luggage: 4,
      speed: 4500,
      year: "2024"
    }
  ];

  const [formData, setFormData] = useState({
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropoffLocation: '',
    phoneNumber: '',
    email: '',
  });
  
  const [selectedCar, setSelectedCar] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(0);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');
  const [routeDetails, setRouteDetails] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Update location directly (used by map components)
  const updatePickupLocation = (value) => {
    setFormData(prev => ({ ...prev, pickupLocation: value }));
    if (errors.pickupLocation) {
      setErrors(prev => ({ ...prev, pickupLocation: '' }));
    }
  };

  const updateDropoffLocation = (value) => {
    setFormData(prev => ({ ...prev, dropoffLocation: value }));
    if (errors.dropoffLocation) {
      setErrors(prev => ({ ...prev, dropoffLocation: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+1|1)?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (!formData.pickupDate) newErrors.pickupDate = 'Pickup date is required';
    if (!formData.pickupTime) newErrors.pickupTime = 'Pickup time is required';
    if (!formData.pickupLocation) newErrors.pickupLocation = 'Pickup location is required';
    if (!formData.dropoffLocation) newErrors.dropoffLocation = 'Drop-off location is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    else if (!phoneRegex.test(formData.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number format';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!selectedCar) newErrors.car = 'Please select a vehicle';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage('');
    
    if (!validateForm()) {
      setSubmitMessage('Please fill in all required fields correctly.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    setIsLoading(true);

    try {
      const bookingData = {
        ...formData,
        passengers,
        luggage,
        selectedCar: {
          id: selectedCar.id,
          name: selectedCar.name,
          price: selectedCar.price
        }
      };

      // If we have route details, add them to the booking
      if (routeDetails) {
        bookingData.routeDetails = routeDetails;
      }

      const response = await fetch('https://stallionsls.com/api/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bookingData)
      });

      const data = await response.json();

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem('token');
        navigate('/login');
        return;
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create booking');
      }

      setSubmitMessage('Booking created successfully!');
      // Reset form
      setFormData({
        pickupDate: '',
        pickupTime: '',
        pickupLocation: '',
        dropoffLocation: '',
        phoneNumber: '',
        email: '',
      });
      setSelectedCar(null);
      setPassengers(1);
      setLuggage(0);
      setRouteDetails(null);
      setTimeout(() => {
        window.location.reload();
      }, 1000);

    } catch (error) {
      console.error('Booking error:', error);
      setSubmitMessage(error.message || 'Failed to create booking. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12 -mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Luxury Ride</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Experience unparalleled luxury and comfort with our premium fleet.</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Booking Details</h2>
            
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                <div className="relative">
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg pl-10 ${errors.pickupDate ? 'border-red-500' : ''}`}
                  />
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  {errors.pickupDate && <p className="text-red-500 text-sm mt-1">{errors.pickupDate}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Time</label>
                <div className="relative">
                  <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleInputChange}
                    className={`w-full p-3 border rounded-lg pl-10 ${errors.pickupTime ? 'border-red-500' : ''}`}
                  />
                  <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  {errors.pickupTime && <p className="text-red-500 text-sm mt-1">{errors.pickupTime}</p>}
                </div>
              </div>

              {showMap ? (
                <>
                  <MapSelector
                    location={formData.pickupLocation}
                    setLocation={updatePickupLocation}
                    label="Pickup Location"
                    error={errors.pickupLocation}
                  />
                  
                  <MapSelector
                    location={formData.dropoffLocation}
                    setLocation={updateDropoffLocation}
                    label="Drop-off Location"
                    error={errors.dropoffLocation}
                  />
                  
                  {formData.pickupLocation && formData.dropoffLocation && (
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <h3 className="font-medium mb-2">Route Information</h3>
                      <RouteMap pickup={formData.pickupLocation} dropoff={formData.dropoffLocation} />
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleInputChange}
                        placeholder="Enter pickup location"
                        className={`w-full p-3 border rounded-lg pl-10 ${errors.pickupLocation ? 'border-red-500' : ''}`}
                      />
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      {errors.pickupLocation && <p className="text-red-500 text-sm mt-1">{errors.pickupLocation}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Drop-off Location</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleInputChange}
                        placeholder="Enter drop-off location"
                        className={`w-full p-3 border rounded-lg pl-10 ${errors.dropoffLocation ? 'border-red-500' : ''}`}
                      />
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      {errors.dropoffLocation && <p className="text-red-500 text-sm mt-1">{errors.dropoffLocation}</p>}
                    </div>
                  </div>
                </>
              )}

              <button
                type="button"
                onClick={() => setShowMap(!showMap)}
                className="text-sm text-gray-600 hover:text-gray-900 underline focus:outline-none mb-2"
              >
                {showMap ? "Hide Map Selection" : "Use Map to Select Locations"}
              </button>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full p-3 border rounded-lg pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className={`w-full p-3 border rounded-lg pl-10 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                  />
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                  <div className="flex items-center border rounded-lg">
                    <button
                      type="button"
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="p-3 hover:bg-gray-100 rounded-l-lg"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </button>
                    <span className="flex-1 text-center">{passengers}</span>
                    <button
                      type="button"
                      onClick={() => setPassengers(Math.min(16, passengers + 1))}
                      className="p-3 hover:bg-gray-100 rounded-r-lg"
                    >
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Luggage</label>
                  <div className="flex items-center border rounded-lg">
                    <button
                      type="button"
                      onClick={() => setLuggage(Math.max(0, luggage - 1))}
                      className="p-3 hover:bg-gray-100 rounded-l-lg"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </button>
                    <span className="flex-1 text-center">{luggage}</span>
                    <button
                      type="button"
                      onClick={() => setLuggage(Math.min(16, luggage + 1))}
                      className="p-3 hover:bg-gray-100 rounded-r-lg"
                    >
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {submitMessage && (
              <div className={`p-3 rounded-lg mb-4 ${
                submitMessage.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitMessage}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Processing...' : 'Proceed to Book'}
            </motion.button>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  className="space-y-4"
>
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Vehicle</h2>
  {errors.car && <p className="text-red-500 text-sm mb-4">{errors.car}</p>}
  
  <div className="grid grid-cols-1 gap-4">
    {cars.map((car) => (
      <motion.div
        key={car.id}
        whileHover={{ scale: 1.01 }}
        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
          selectedCar?.id === car.id
            ? 'border-gray-900 bg-gray-900 text-white'
            : 'border-gray-200 hover:border-gray-900'
        }`}
        onClick={() => setSelectedCar(car)}
      >
        <div className="flex items-center space-x-4">
          <img
            src={car.image}
            alt={car.name}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h3 className="font-bold text-lg">{car.name}</h3>
            <p className="text-sm opacity-75">{car.transmission}</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {car.seats} Seats
              </span>
              <span className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                {car.luggage} Luggage
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>
        </form>
        <BookingsDisplay/>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;