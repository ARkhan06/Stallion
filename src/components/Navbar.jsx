import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn, LogOut, UserPlus, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import * as jwtDecode from "jwt-decode";
import PNG from '../assets/PNG 1.png'

const HERO_ROUTES = ['/', '/about', '/services', '/fleet', '/privacy'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHeroRoute = HERO_ROUTES.includes(location.pathname);
  const solid = isScrolled || !isHeroRoute;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode.jwtDecode(token);
          const currentTime = Date.now() / 1000;
          
          if (decoded.exp < currentTime) {
            handleLogout();
            toast.error('Session expired. Please login again.');
            return;
          }
          
          setIsAuthenticated(true);
          setIsAdmin(decoded.isAdmin);
        } catch (error) {
          handleLogout();
        }
      } else {
        setIsAuthenticated(false);
        setIsAdmin(false);
      }
    };

    checkAuth();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setIsAdmin(false);
    toast.success('Logged out successfully');
    navigate('/login');
    window.location.reload();
  };

  const handleBookRideClick = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error('Please login to book a ride');
      navigate('/login');
    } else {
      navigate('/booking');
    }
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Fleet', path: '/fleet' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Book Ride', path: '/booking', onClick: handleBookRideClick },
    { label: 'Contact', path: '/contact' },
    {label:'Privacy Policy', path: '/privacy'}
  ];

  const authItems = isAuthenticated
    ? [
        { 
          label: isAdmin ? 'Admin Dashboard' : 'Profile',
          path: isAdmin ? '/admin' : '/profile', 
          icon: User 
        },
        { 
          label: 'Logout', 
          path: '#', 
          icon: LogOut, 
          onClick: handleLogout 
        }
      ]
    : [
        { label: 'Login', path: '/login', icon: LogIn },
        { label: 'Sign Up', path: '/signup', icon: UserPlus }
      ];

  const isActivePath = (path) => {
    if (path === '/' && location.pathname !== '/') {
      return false;
    }
    return location.pathname === path;
  };

  useEffect(() => {
    const protectedRoutes = ['/booking', '/profile', '/admin'];
    const adminRoutes = ['/admin'];
    
    const token = localStorage.getItem('token');
    if (protectedRoutes.includes(location.pathname) && !token) {
      navigate('/login');
      toast.error('Please login to access this page');
      return;
    }

    if (token) {
      try {
        const decoded = jwtDecode.jwtDecode(token);
        const currentTime = Date.now() / 1000;
        
        if (decoded.exp < currentTime) {
          handleLogout();
          toast.error('Session expired. Please login again.');
          return;
        }

        if (adminRoutes.includes(location.pathname) && !decoded.isAdmin) {
          navigate('/');
          toast.error('Access denied. Admin only.');
        }
      } catch (error) {
        handleLogout();
      }
    }
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        solid ? 'py-2 bg-white shadow-lg' : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex-shrink-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-2"
              >
                <div className="ml-1 py-1 rounded-lg flex items-center justify-center flex-shrink-0">
                  <img
                    src={PNG}
                    alt="Logo"
                    className="h-9 w-auto transition-all duration-500"
                    style={{ filter: solid ? 'none' : 'brightness(0) invert(1)' }}
                  />
                </div>
                <div className="flex flex-col leading-none whitespace-nowrap">
                  <span className={`text-base font-extrabold tracking-wide transition-colors duration-500 ${
                    solid ? 'text-[#111827]' : 'text-white'
                  }`}>
                    STALLION
                  </span>
                  <span className={`text-[9px] font-semibold tracking-[2px] uppercase transition-colors duration-500 ${
                    solid ? 'text-[#111827]/60' : 'text-white/75'
                  }`}>
                    Worldwide Transportation
                  </span>
                </div>
              </motion.div>
            </Link>

            <div className="hidden xl:flex items-center">
              <div className={`flex items-center rounded-full px-2 py-1 transition-colors duration-500 ${
                solid ? 'bg-gray-100' : 'bg-white/10 backdrop-blur-sm'
              }`}>
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={item.onClick}
                    className="relative px-3 py-2 whitespace-nowrap"
                  >
                    <motion.div
                      className="relative z-10"
                      whileHover={{ y: -2 }}
                    >
                      <span className={`text-sm font-medium px-2 transition-colors duration-500 ${
                        isActivePath(item.path)
                          ? 'text-white'
                          : solid ? 'text-gray-600' : 'text-white/85'
                      }`}>
                        {item.label}
                      </span>
                      {isActivePath(item.path) && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 bg-[#111827] rounded-full -mx-2"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>

              <div className="flex items-center ml-6 space-x-3">
                {authItems.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.path}
                      onClick={item.onClick}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-500
                        ${item.label === 'Login'
                          ? 'bg-[#111827] text-white hover:bg-gray-800'
                          : item.label === 'Sign Up'
                          ? solid
                            ? 'border-2 border-[#111827] text-[#111827] hover:bg-gray-50'
                            : 'border-2 border-white text-white hover:bg-white/10'
                          : solid ? 'text-gray-600 hover:text-gray-900' : 'text-white/85 hover:text-white'}`}
                    >
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`xl:hidden p-2 rounded-lg transition-colors duration-500 ${
                solid ? 'text-[#111827] hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden bg-white border-t mt-2"
            >
              <div className="px-4 py-6 space-y-3 max-h-[70vh] overflow-y-auto">
                {[...menuItems, ...authItems].map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <Link
                      to={item.path}
                      onClick={(e) => {
                        setIsOpen(false);
                        item.onClick?.(e);
                      }}
                      className={`flex items-center space-x-2 p-3 rounded-lg
                        ${isActivePath(item.path)
                          ? 'bg-[#111827] text-white'
                          : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      {item.icon && <item.icon size={18} />}
                      <div className="font-medium">{item.label}</div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      {(!isHeroRoute || solid) && <div className={`${isScrolled ? 'h-16' : 'h-20'} transition-all duration-300`} />}
    </>
  );
};

export default Navbar;