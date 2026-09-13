import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Car,
  Trophy,
  Train,
  Heart,
  Compass,
  Wine,
  Briefcase,
  Music,
  Plane,
  Star,
  Clock,
  Phone,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from "../assets/Services.jfif"
import FifaTrophy from "../assets/fifa-world-cup-2026-trophy.jpg";
import CopaTrophy from "../assets/copa-america-usa-2024-trophy.jpg";
import F1Trophy from "../assets/f1-trophy-trackside.jpg";
import CocaColaTrophy from "../assets/coca-cola-championship-trophy.jpg";

const NAVY = "#111827";
const BLUE = "#2563eb";
const LIGHT_BLUE = "#93c5fd";

const EVENTS_SHOWCASE = [
  { name: "FIFA World Cup", tag: "Global Tournament", img: FifaTrophy },
  { name: "Copa America", tag: "International Cup", img: CopaTrophy },
  { name: "Formula 1", tag: "Grand Prix Weekend", img: F1Trophy },
  { name: "Championship Finals", tag: "Sponsored by Coca-Cola", img: CocaColaTrophy },
];

const EventTile = ({ ev, index, widthClass }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.02 }}
    className={`relative rounded-3xl overflow-hidden group cursor-pointer h-[280px] sm:h-[320px] flex-1 ${widthClass}`}
  >
    <img src={ev.img} alt={ev.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${NAVY}ee 0%, ${NAVY}44 55%, transparent 100%)` }} />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <div className="w-8 h-0.5 mb-3" style={{ background: BLUE }} />
      <p className="text-white font-bold text-xl uppercase tracking-wide">{ev.name}</p>
      <p className="text-white/70 text-sm mt-1">{ev.tag}</p>
    </div>
  </motion.div>
);

const EventsShowcase = () => (
  <div className="relative overflow-hidden" style={{ background: NAVY }}>
    <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-7 h-0.5" style={{ background: BLUE }} />
          <span className="text-xs font-bold tracking-[3px] uppercase" style={{ color: BLUE }}>Events We Cover</span>
          <span className="w-7 h-0.5" style={{ background: BLUE }} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          On the Ground at <span style={{ color: LIGHT_BLUE }}>World-Class</span> Events
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg mt-4">
          From FIFA World Cup fan zones to Formula 1 paddocks, our chauffeurs deliver VIP transportation
          for the world's biggest sporting and entertainment events.
        </p>
      </motion.div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-6">
          <EventTile ev={EVENTS_SHOWCASE[0]} index={0} widthClass="sm:basis-[70%]" />
          <EventTile ev={EVENTS_SHOWCASE[1]} index={1} widthClass="sm:basis-[30%]" />
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          <EventTile ev={EVENTS_SHOWCASE[2]} index={2} widthClass="sm:basis-[30%]" />
          <EventTile ev={EVENTS_SHOWCASE[3]} index={3} widthClass="sm:basis-[70%]" />
        </div>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: `${BLUE}22` }} />
    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: `${BLUE}15` }} />
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="relative h-full"
    >
      <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 transition-shadow duration-300 hover:shadow-xl">
        {/* Card Content */}
        <div className="relative h-full p-8 flex flex-col">
          {/* Icon */}
          <div className="inline-flex">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl blur opacity-20" style={{ background: BLUE }} />
              <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl" style={{ background: NAVY }}>
                <Icon className="text-white" size={28} />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-6 flex-grow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feature = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.2,
      ease: "easeOut"
    }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="relative z-10 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300">
      {/* Icon Container with Animation */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.3 }}
        className="relative flex items-center justify-center w-16 h-16 mx-auto mb-6"
      >
        <div className="absolute inset-0 rounded-full blur-xl" style={{ background: `${BLUE}33` }} />
        <div className="absolute inset-0 rounded-full" style={{ background: BLUE }} />
        <Icon className="relative z-10 text-white" size={28} />
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-4 text-center transition-colors duration-300 feature-title">
        {title}
      </h3>
      <p className="text-gray-300 text-center leading-relaxed group-hover:text-white transition-colors duration-300">
        {description}
      </p>
    </div>
    <style>{`.group:hover .feature-title { color: ${LIGHT_BLUE}; }`}</style>
  </motion.div>
);

// ─── Google Reviews carousel ────────────────────────────────────────────────
const REVIEWS = [
  { name: "Michael Torres", role: "Corporate Client", text: "Flawless service from booking to drop-off. Our executive team relies on Stallion Worldwide Transportation for every roadshow." },
  { name: "Sarah Johnson", role: "Wedding Client", text: "The chauffeur was punctual, professional, and the car was spotless. Made our wedding day feel even more special." },
  { name: "David Kim", role: "Frequent Flyer", text: "Airport transfers are always on time, even with flight delays. They track everything and adjust automatically." },
  { name: "Amanda Reyes", role: "Event Planner", text: "We book Stallion for every VIP event we manage. Reliable, discreet, and always a step ahead of schedule." },
  { name: "James Whitfield", role: "Business Traveler", text: "Best chauffeur service I've used across three countries. Consistent quality no matter which office handles the booking." },
  { name: "Priya Nair", role: "Concert Promoter", text: "Coordinating transport for artists and crews is never easy, but their dispatch team makes it painless every time." },
  { name: "Robert Chen", role: "Corporate Client", text: "Professional chauffeurs, immaculate vehicles, and excellent communication. Highly recommend for any executive travel." },
  { name: "Linda Martinez", role: "Anniversary Client", text: "Booked a stretch limo for our anniversary and the experience was five-star from start to finish." },
  { name: "Omar Al-Farsi", role: "Dubai Office Client", text: "Their Dubai office team is exceptional. Always available, always professional, always on time." },
  { name: "Katie Brooks", role: "Sporting Event Guest", text: "Got us to the stadium ahead of the Formula 1 crowds without a single hiccup. Will book again." },
  { name: "Thomas Berger", role: "Germany Office Client", text: "Reliable service across our European operations. The Germany team handles logistics beautifully." },
  { name: "Nicole Anderson", role: "Corporate Client", text: "Our go-to for client pickups. They always make a great first impression for our visiting partners." },
  { name: "Marcus Webb", role: "Tour Client", text: "The city tour package was fantastic — knowledgeable driver and a genuinely comfortable ride the whole day." },
  { name: "Emily Carter", role: "Airport Transfer Client", text: "Meet-and-greet service at the airport was seamless. Made a long trip feel effortless." },
  { name: "Vancouver Client", role: "Vancouver Office Client", text: "Consistently excellent service from the Vancouver team — always my first call for corporate travel." },
];

function GoogleLogo({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill={BLUE} color={BLUE} />
      ))}
    </div>
  );
}

const ReviewsCarousel = () => {
  const perPage = 3;
  const pageCount = Math.ceil(REVIEWS.length / perPage);
  const [page, setPage] = useState(0);

  const next = () => setPage((p) => (p + 1) % pageCount);
  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const current = REVIEWS.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-7 h-0.5" style={{ background: BLUE }} />
            <GoogleLogo size={16} />
            <span className="text-xs font-bold tracking-[3px] uppercase" style={{ color: BLUE }}>Google Reviews</span>
            <span className="w-7 h-0.5" style={{ background: BLUE }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: NAVY }}>
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <GoogleLogo size={22} />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={BLUE} color={BLUE} />
              ))}
            </div>
            <span className="text-gray-600 font-semibold">5.0 · 15 Google Reviews</span>
          </div>
        </motion.div>

        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={prev}
            aria-label="Previous reviews"
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 hover:text-white transition-colors duration-300 review-nav-btn"
            style={{ borderColor: NAVY, color: NAVY }}
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {current.map((r) => (
                  <div key={r.name} className="bg-white p-7 rounded-2xl shadow-md border border-gray-100 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <Quote size={28} style={{ color: BLUE }} className="opacity-60" />
                      <GoogleLogo size={20} />
                    </div>
                    <StarRow />
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{r.text}</p>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ background: NAVY }}
                      >
                        {r.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                        <p className="text-gray-500 text-xs">{r.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            aria-label="Next reviews"
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 hover:text-white transition-colors duration-300 review-nav-btn"
            style={{ borderColor: NAVY, color: NAVY }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(pageCount)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to review page ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{ width: i === page ? 24 : 8, background: i === page ? BLUE : '#d1d5db' }}
            />
          ))}
        </div>
      </div>
      <style>{`
        .review-nav-btn:hover { background: ${NAVY}; }
      `}</style>
    </section>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: MapPin,
      title: "Point to Point",
      description: "Direct transportation between any two locations with professional chauffeurs ensuring a comfortable and timely journey."
    },
    {
      icon: Trophy,
      title: "Sporting Events",
      description: "Luxury transportation to major sporting events. Arrive in style and avoid parking hassles with our door-to-door service."
    },
    {
      icon: Train,
      title: "Train Station Service",
      description: "Seamless connections to and from train stations. Never miss your connection with our punctual pickup and drop-off service."
    },
    {
      icon: Heart,
      title: "Weddings",
      description: "Make your special day perfect with our luxury wedding transportation services. Elegant vehicles and professional chauffeurs."
    },
    {
      icon: Compass,
      title: "Tours",
      description: "Customized city tours and sightseeing experiences. Explore destinations in comfort with our knowledgeable drivers."
    },
    {
      icon: Wine,
      title: "Dinner Services",
      description: "Evening transportation for special dining occasions. Enjoy your night out without worrying about driving."
    },
    {
      icon: Briefcase,
      title: "Corporate Services",
      description: "Professional transportation solutions for business needs. Impress clients and ensure executives arrive on time."
    },
    {
      icon: Music,
      title: "Concerts",
      description: "Reliable transportation to music venues and events. Skip the parking lines and enjoy the show stress-free."
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Punctual airport pickup and drop-off services. Track flights and adjust to schedule changes automatically."
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Premium Service",
      description: "Experience unmatched luxury and comfort with our high-end fleet"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock service to meet your transportation needs"
    },
    {
      icon: Phone,
      title: "Dedicated Support",
      description: "Professional customer service team at your service"
    }
  ];

  const heroContent = {
    heading1: "Elevate Your",
    heading2: "Journey",
    description: "Experience unparalleled luxury and sophistication in every ride. Our premium fleet and professional chauffeurs are ready to transform your transportation into an unforgettable experience.",
    stats: [
      { value: "24/7", label: "Service" },
      { value: "100+", label: "Luxury Vehicles" },
      { value: "15k+", label: "Happy Clients" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Enhanced Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${NAVY}e6 0%, ${NAVY}b3 100%)` }} />
        <img
          src={Services}
          alt="Luxury Transportation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="max-w-6xl px-4 mx-auto w-full pt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                  {heroContent.heading1}{" "}
                  <span style={{ color: LIGHT_BLUE }}>
                    {heroContent.heading2}
                  </span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-white/90 mb-4 leading-relaxed"
                >
                  {heroContent.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-6 mb-3"
                >
                  <Link to="/booking">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                      Book Now
                    </motion.button>
                  </Link>
                  <Link to="/fleet">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
                    >
                      View Fleet
                    </motion.button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="grid grid-cols-3 gap-8"
                >
                  {heroContent.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="text-white"
                    >
                      <div className="text-3xl font-bold mb-2">{stat.value}</div>
                      <div className="text-white/80">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl transform rotate-3" style={{ background: `${BLUE}22` }}></div>
                  <div className="absolute inset-0 rounded-3xl transform -rotate-3" style={{ background: `${BLUE}22` }}></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Services Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Exceptional Services for Every Occasion
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            From corporate events to special occasions, our premium fleet and professional chauffeurs
            ensure every journey exceeds expectations. Experience the perfect blend of luxury,
            reliability, and exceptional service.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Events We Cover Showcase */}
      <EventsShowcase />

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden"
        style={{ background: NAVY }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 px-6 py-16 md:py-24">
          {/* Animated Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: LIGHT_BLUE }}>
              Why Choose Us
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Experience the perfect blend of luxury, reliability, and exceptional service
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {features.map((feature, index) => (
                <Feature
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-40 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: `${BLUE}18` }} />
        <div className="absolute bottom-40 right-0 w-72 h-72 rounded-full blur-3xl" style={{ background: `${BLUE}18` }} />
      </motion.div>

      {/* Google Reviews */}
      <ReviewsCarousel />

      <div className="max-w-7xl mx-auto px-4">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{ background: `${BLUE}0d` }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{ background: `${BLUE}0d` }} />

          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: NAVY }}
            >
              Ready to Experience{" "}
              <span style={{ color: BLUE }}>
                Premium Transportation?
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 mb-4 text-lg md:text-xl"
            >
              Book your journey today and discover the Stallion Worldwide Transportation difference
            </motion.p>
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-12 py-4 rounded-xl
                  font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ background: NAVY }}
              >
                Book Your Ride Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: NAVY }}
            >
              Frequently Asked{" "}
              <span style={{ color: BLUE }}>
                Questions
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Find answers to common questions about our services and booking process
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 24 hours in advance to ensure availability, especially for special events or peak times. However, we can accommodate last-minute bookings based on availability."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, corporate accounts, and digital payments including Apple Pay and Google Pay. Payment is processed securely through our booking system."
              },
              {
                question: "Are your drivers background checked?",
                answer: "Yes, all our chauffeurs undergo rigorous background checks, drug testing, and professional training. They are licensed, insured, and experienced professionals."
              },
              {
                question: "What if my flight is delayed?",
                answer: "We monitor all flights in real-time and adjust pickup times automatically. There's no additional charge for flight delays, and we ensure we're there when you arrive."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl
                  transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300 faq-question">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
            <style>{`.group:hover .faq-question { color: ${BLUE}; }`}</style>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;
