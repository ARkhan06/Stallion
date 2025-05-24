import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Phone, Mail, MapPin, Calendar, Users, Car, CheckCircle, AlertTriangle, Globe, Clock, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal identification information (name, email address, phone number)",
        "Billing address and payment information for service reservations",
        "Pick-up and drop-off locations for limousine services",
        "Special requests and preferences for your transportation needs",
        "Communication records and service history",
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and coordinate limousine transportation services",
        "To process payments and manage your reservations",
        "To communicate with you about your service requests and updates",
        "To improve our services and customer experience",
        "To comply with legal and regulatory requirements",
        "To ensure safety and security of our services"
      ]
    },
    {
      icon: Shield,
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "Information may be shared with our certified chauffeurs to provide services",
        "We may share information with payment processors for secure transactions",
        "Data may be shared with insurance companies for coverage purposes",
        "Information may be disclosed if required by law or legal process",
        "In case of business transfer, customer information may be transferred with proper notice"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your data",
        "All information is encrypted using secure SSL technology",
        "Access to personal information is restricted to authorized personnel only",
        "Regular security audits and updates to our systems",
        "Secure data storage with backup and recovery procedures",
      ]
    }
  ];

  const rightsData = [
    { icon: Eye, title: "Access Your Data", description: "Request access to your personal information we have on file" },
    { icon: FileText, title: "Correct Information", description: "Request correction of any inaccurate or incomplete data" },
    { icon: AlertTriangle, title: "Delete Your Data", description: "Request deletion of your personal information from our systems" },
    { icon: Globe, title: "Data Portability", description: "Request transfer of your data in a portable format" }
  ];

  const contactMethods = [
    { icon: Mail, label: "Email", value: "privacy@stallionlimousine.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Address", value: "123 Luxury Drive, Premium City, PC 12345" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Decorative Background Elements - Responsive */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-[#111827]/5 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute top-64 sm:top-96 left-5 sm:left-10 w-60 sm:w-96 h-60 sm:h-96 bg-[#111827]/3 rounded-full blur-2xl sm:blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-[#111827]/4 rounded-full blur-2xl sm:blur-3xl"></div>
        </div>

        {/* Hero Section - Mobile Responsive */}
        <motion.div 
          {...fadeInUp}
          className="relative py-8 sm:py-10 lg:py-16 px-4 bg-gradient-to-br from-gray-50 to-white"
        >
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#111827] rounded-xl sm:rounded-2xl mb-6 sm:mb-8 shadow-2xl"
            >
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-[#111827] leading-tight"
            >
              Privacy Policy
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2"
            >
              At Stallion Limousine, we are committed to protecting your privacy and ensuring that your personal information is handled with the utmost care and security.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-500 bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-flex shadow-lg"
            >
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Last updated: May 24, 2025</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Introduction - Mobile Responsive */}
        <motion.div 
          {...fadeInUp}
          className="max-w-6xl mx-auto px-4 py-8 sm:py-12 lg:py-16 relative z-10"
        >
          <div className="bg-[#111827] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 bg-white/5 rounded-full -mr-10 sm:-mr-16 lg:-mr-20 -mt-10 sm:-mt-16 lg:-mt-20"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-white/5 rounded-full -ml-8 sm:-ml-12 lg:-ml-16 -mb-8 sm:-mb-12 lg:-mb-16"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                <Star className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white mb-2 sm:mb-0 sm:mr-3" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">Welcome to Stallion Limousine</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                This Privacy Policy outlines how we collect, use, and protect your information when you use our premium chauffeured vehicle services. 
                By using our services, you agree to the collection and use of information in accordance with this policy. We are committed to 
                maintaining the highest standards of data protection and transparency in all our operations.
              </p>
            </div>
          </div>

          {/* Main Sections - Mobile Responsive */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-6 sm:gap-8 mb-12 sm:mb-16"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 hover:border-[#111827]/20 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-[#111827]/5 rounded-full -mr-8 sm:-mr-12 lg:-mr-16 -mt-8 sm:-mt-12 lg:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
                    <div className="bg-[#111827] p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-4 sm:mb-0 sm:mr-4 lg:mr-6 group-hover:scale-110 transition-transform duration-300">
                      <section.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111827]">{section.title}</h3>
                  </div>
                  <ul className="space-y-3 sm:space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="flex items-start space-x-3 sm:space-x-4 text-gray-700"
                      >
                        <div className="bg-green-100 rounded-full p-1 mt-1 flex-shrink-0">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                        </div>
                        <span className="text-base sm:text-lg leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Your Rights Section - Mobile Responsive */}
          <motion.div 
            {...fadeInUp}
            className="mb-12 sm:mb-16"
          >
            <div className="text-center mb-8 sm:mb-12 px-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#111827]">
                Your Privacy Rights
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                We believe in transparency and your right to control your personal information
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {rightsData.map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:border-[#111827]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="bg-[#111827] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <right.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <h4 className="font-bold text-[#111827] mb-2 sm:mb-3 text-lg sm:text-xl">{right.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{right.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Cookies & Tracking - Mobile Responsive */}
          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-20 sm:w-32 lg:w-40 h-20 sm:h-32 lg:h-40 bg-[#111827]/5 rounded-full -ml-10 sm:-ml-16 lg:-ml-20 -mt-10 sm:-mt-16 lg:-mt-20"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-[#111827] flex flex-col sm:flex-row items-start sm:items-center">
                <Globe className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 mb-2 sm:mb-0 sm:mr-3" />
                <span>Cookies and Tracking Technologies</span>
              </h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  "Remember your preferences and settings",
                  "Analyze website traffic and user behavior", 
                  "Provide personalized content and advertisements",
                  "Improve our services and website functionality"
                ].map((item, index) => (
                  <div key={index} className="flex items-start sm:items-center space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-1 sm:mt-0 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 text-base sm:text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <p className="text-blue-800 text-sm sm:text-base leading-relaxed">
                  <strong>Note:</strong> You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our website.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data Retention - Mobile Responsive */}
          <motion.div 
            {...fadeInUp}
            className="bg-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-[#111827] flex flex-col sm:flex-row items-start sm:items-center">
              <Calendar className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 mb-2 sm:mb-0 sm:mr-3" />
              <span>Data Retention</span>
            </h3>
            <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {[
                { title: "Service Records", desc: "Maintained for 7 years for business and tax purposes", icon: FileText },
                { title: "Payment Information", desc: "Processed securely and not stored on our servers", icon: Lock },
                { title: "Marketing Data", desc: "Retained until you opt-out or request deletion", icon: Mail },
                { title: "Website Analytics", desc: "Anonymized data retained for 26 months", icon: Globe }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="bg-[#111827] p-2 rounded-lg mr-3 flex-shrink-0">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <h4 className="font-bold text-[#111827] text-base sm:text-lg">{item.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section - Mobile Responsive */}
        

          {/* Policy Updates - Mobile Responsive */}
          <motion.div 
            {...fadeInUp}
            className="text-center bg-gradient-to-r from-gray-50 to-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-gray-100"
          >
            <div className="bg-[#111827] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <AlertTriangle className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#111827]">Policy Updates</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website 
              and updating the "Last Updated" date at the top of this page.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;