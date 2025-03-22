import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, DollarSign, Users, Star,Calendar, Clock, Car, Heart , MapPin} from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sedan from "../assets/sedan.jpg";
import Home1 from "../assets/Home1.jfif";

import SUV1 from "../assets/SUV1.jfif";
import Founder from "../assets/Founder.jpg"
import AboutUS from "../assets/AboutUs.jfif"


const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen w-full"
      >
        <div className="absolute inset-0">
          <img
            src={AboutUS}
            
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-screen w-full">
      <div className="absolute inset-0">
       
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8"
        >
          EXPERIENCE LUXURY
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed mx-auto"
        >
At Stallions Limousine, we specialize in delivering a premium chauffeur experience tailored to your every need. Our fleet of luxurious vehicles and professional chauffeurs ensure that you arrive in style and comfort, whether for business or pleasure. With a commitment to punctuality, discretion, and unmatched service, we make every journey memorable.        </motion.p>
      </div>
    </div>
      </motion.div>

      {/* Journey & Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600">
              The journey of Stallions Limousine began with a simple yet powerful vision: to redefine the way people experience luxury transportation. What started as a small, family-owned business with a single vehicle has grown into a trusted name in the industry, known for impeccable service and a commitment to excellence.

From the very beginning, we have focused on delivering more than just a ride. Our goal has always been to create memorable experiences for our clients, whether it’s for a wedding, a corporate event, or a special celebration. Each journey is an opportunity to make lasting impressions, and we take pride in being a part of those important moments.              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">
              Our mission is simple: to deliver the highest quality limousine service with a personal touch. We understand that each client is unique, and we go the extra mile to accommodate your specific requests, ensuring a truly unforgettable ride.              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={Home1}
              alt="Luxury cars"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Star className="w-8 h-8" />, title: "Excellence", desc: "Delivering superior service and maintaining the highest standards in our fleet and operations." },
              { icon: <Shield className="w-8 h-8" />, title: "Reliability", desc: "Ensuring consistent, dependable service and well-maintained vehicles for every journey." },
              { icon: <DollarSign className="w-8 h-8" />, title: "Affordability", desc: "Providing competitive rates without compromising on quality and luxury." },
              { icon: <Users className="w-8 h-8" />, title: "Loyalty", desc: "Building lasting relationships through exceptional customer care and personalized experiences." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={Founder}
              alt="Founder"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet Our Founder</h2>
              <p className="text-gray-600">
              At the heart of Stallions Limousine is our founder, a passionate entrepreneur with a vision to elevate the transportation experience. With a deep-rooted belief in delivering exceptional service and making every journey unforgettable, Our founder established the company with one simple goal: to provide clients with luxury, reliability, and comfort—every time.              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Leadership & Expertise</h2>
              <p className="text-gray-600">
              At Stallions Limousine, our leadership team is the cornerstone of our success. Led by our founder and supported by a dedicated group of professionals, we bring decades of combined experience and expertise to the limousine and transportation industry. Our commitment to excellence drives every aspect of our service, ensuring that each client receives the highest level of care and attention.              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-12 px-4 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Car, title: 'Premium Fleet', desc: 'Luxury and performance vehicles' },
              { icon: Calendar, title: 'Flexible Booking', desc: 'Daily to monthly chauffeur services' },
              { icon: MapPin, title: 'Multiple Locations', desc: 'Convenient pickup points' },
              { icon: Clock, title: '24/7 Support', desc: 'Always here to help' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-xl shadow-sm"
              >
                <feature.icon className="w-10 h-10 mb-3 text-gray-900" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default AboutPage;