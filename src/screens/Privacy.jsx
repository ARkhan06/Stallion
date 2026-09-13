import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Phone, Mail, MapPin, Calendar, Users, Car, CheckCircle, AlertTriangle, Globe, Clock, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NAVY = "#111827";
const BLUE = "#2563eb";
const LIGHT_BLUE = "#93c5fd";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1 }
  },
  viewport: { once: true }
};

// ─── Reusable pieces (match Home / Services visual language) ───────────────
function AccentLine({ light }) {
  return <div className="mx-auto mb-5" style={{ width: 40, height: 3, borderRadius: 2, background: light ? BLUE : BLUE }} />;
}

const PolicyCard = ({ icon: Icon, title, content, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="relative h-full bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 sm:p-8 lg:p-9"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 rounded-2xl blur opacity-20" style={{ background: BLUE }} />
        <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: NAVY }}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold" style={{ color: NAVY }}>{title}</h3>
    </div>
    <ul className="space-y-3">
      {content.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-700">
          <div className="bg-blue-50 rounded-full p-1 mt-1 flex-shrink-0">
            <CheckCircle className="h-3.5 w-3.5" style={{ color: BLUE }} />
          </div>
          <span className="text-sm sm:text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const RightCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group"
  >
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/25 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300">
      <div className="relative w-14 h-14 mx-auto mb-5 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full blur-lg" style={{ background: `${BLUE}55` }} />
        <div className="absolute inset-0 rounded-full" style={{ background: BLUE }} />
        <Icon className="relative z-10 h-6 w-6 text-white" />
      </div>
      <h4 className="font-bold text-white mb-2 text-lg transition-colors duration-300 group-hover:text-[#93c5fd]">{title}</h4>
      <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const PrivacyPolicyPage = () => {
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
    { icon: Mail, label: "Email", value: "info@stallionsls.com" },
    { icon: Phone, label: "Phone", value: "1-888-719-5750" }
  ];

  const smsOptInMethods = [
    "Verbally during a conversation with our team",
    "Through consent forms on our website",
    "During the booking process for limousine services"
  ];

  const smsOptOutMethods = [
    "Reply \"STOP\" to any SMS message you receive",
    "Contact us directly to request removal from our messaging list",
    "Choose not to check the SMS consent box on our forms"
  ];

  const smsHelpOptions = [
    "Reply \"HELP\" to any SMS message for immediate assistance",
    "Contact our dispatch team directly at 1-888-719-5750",
    "Visit our Privacy Policy page at https://stallionsls.com/privacy"
  ];

  const smsTypesOfCommunications = [
    {
      title: "Reservation Confirmations & Updates",
      description: "Booking confirmations, itinerary changes, and service reminders"
    },
    {
      title: "Chauffeur Dispatch Notifications",
      description: "Real-time driver arrival updates, delays, and trip status"
    },
    {
      title: "Trip Reminders",
      description: "Pre-trip reminders and itinerary change notifications"
    },
    {
      title: "Customer Support Communications",
      description: "Service inquiries, issues resolution, and account support"
    },
    {
      title: "Billing & Payment Notifications",
      description: "Invoice confirmations, payment reminders, and receipt delivery"
    },
    {
      title: "Service-Specific Updates",
      description: "Airport pickup instructions, meet-and-greet coordination, VIP/government protocol updates"
    }
  ];

  const smsTerms = [
    {
      num: "1",
      title: "Consent to Receive Messages",
      content: "Users may opt in to receive SMS messages verbally during a conversation. By opting in, you consent to receive SMS/text messages from Stallion Worldwide Transportation related to reservation confirmations and updates, chauffeur dispatch notifications (arrival, delays, trip status), trip reminders and itinerary changes, customer support communications, and billing and payment notifications. Mobile opt in. SMS consent and phone numbers collected for SMS communication purposes will not be shared with any third party or affiliates for marketing purposes."
    },
    {
      num: "2",
      title: "Message Frequency",
      content: "Message frequency varies depending on your bookings, account activity, and service usage. Clients with active reservations may receive multiple updates per trip. You may receive up to 2 SMS messages per week regarding your appointments or account status, though this may vary based on your service needs."
    },
    {
      num: "3",
      title: "Message & Data Rates",
      content: "Standard message and data rates may apply based on your wireless carrier plan. These fees may vary if messages are sent domestically or internationally. Stallion Worldwide Transportation is not responsible for any carrier charges. Please contact your wireless carrier for information about your specific messaging plan and applicable rates."
    },
    {
      num: "4",
      title: "Opt-Out Instructions",
      content: "You may opt out at any time by replying \"STOP\" to any message. Once opted out, you will no longer receive SMS communications unless you opt in again. You can also contact us directly at 1-888-719-5750 to request removal from our messaging list, or choose not to check the SMS consent box on our forms."
    },
    {
      num: "5",
      title: "Help & Support",
      content: "For assistance, reply \"HELP\" to any SMS message or contact our dispatch team directly at 1-888-719-5750. You can also visit our Privacy Policy page at https://stallionsls.com/privacy for additional support options and information."
    },
    {
      num: "6",
      title: "Privacy & Data Protection",
      content: "Your phone number and SMS consent will never be shared, sold, or distributed to third parties or affiliates for marketing purposes. Information is used strictly for service-related communication in accordance with our Privacy Policy. We maintain the highest standards of data security and confidentiality for all SMS communications."
    },
    {
      num: "7",
      title: "Service-Specific Communications",
      content: "As a professional chauffeur and executive transportation provider serving corporate, affiliate, and government clients, SMS communications may include real-time chauffeur status updates, airport pickup instructions and meet-and-greet coordination, affiliate trip coordination, and security or protocol-related trip updates for VIP/government clients."
    },
    {
      num: "8",
      title: "Delivery Disclaimer",
      content: "SMS delivery is subject to carrier network availability. Stallion Worldwide Transportation is not responsible for delayed or undelivered messages. Please ensure your phone number is current and that you have active service to receive messages."
    },
    {
      num: "9",
      title: "Eligibility",
      content: "By subscribing, you confirm you are the account holder or have authorization from the account holder to receive messages. You must be 18 years of age or older to opt in to SMS communications from Stallion Worldwide Transportation."
    },
    {
      num: "10",
      title: "Changes to Terms",
      content: "Stallion Worldwide Transportation reserves the right to modify these SMS Terms at any time. Updates will be posted on our website at https://stallionsls.com/privacy. Your continued use of our services following any changes constitutes acceptance of the updated terms."
    }
  ];

  const dataRetention = [
    { title: "Service Records", desc: "Maintained for 7 years for business and tax purposes", icon: FileText },
    { title: "Payment Information", desc: "Processed securely and not stored on our servers", icon: Lock },
    { title: "Marketing Data", desc: "Retained until you opt-out or request deletion", icon: Mail },
    { title: "Website Analytics", desc: "Anonymized data retained for 26 months", icon: Globe }
  ];

  const cookieUses = [
    "Remember your preferences and settings",
    "Analyze website traffic and user behavior",
    "Provide personalized content and advertisements",
    "Improve our services and website functionality"
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white overflow-x-hidden">

        {/* ── HERO — full navy band, mirrors Home/Services dark hero treatment ── */}
        <section
          className="relative flex items-center px-4 overflow-hidden"
          style={{
            background: NAVY,
            height: "100vh",
            minHeight: 600,
            paddingTop: "clamp(90px, 12vh, 140px)",
            paddingBottom: "clamp(32px, 6vh, 72px)",
            boxSizing: "border-box"
          }}
        >
          {/* dot-grid texture */}
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `radial-gradient(${BLUE} 1.5px, transparent 1.5px)`, backgroundSize: "28px 28px" }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 0%, ${NAVY} 90%)` }} />
          <div className="absolute -top-10 right-0 w-72 sm:w-[30rem] h-72 sm:h-[30rem] rounded-full blur-3xl" style={{ background: `${BLUE}26` }} />
          <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl" style={{ background: `${BLUE}15` }} />

          <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-2.5 mb-6 sm:mb-7"
            >
              <span className="w-6 h-0.5 rounded" style={{ background: BLUE }} />
              <span className="text-[11px] sm:text-xs font-bold tracking-[3px] uppercase text-white/80">Legal &amp; Compliance</span>
              <span className="w-6 h-0.5 rounded" style={{ background: BLUE }} />
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-6 sm:mb-7"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{ border: `1.5px dashed ${BLUE}88` }}
              />
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-2xl" style={{ background: BLUE }}>
                <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-5 sm:mb-6 text-white leading-[0.95] tracking-tight"
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-gray-300 mb-7 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-2"
            >
              At Stallion Worldwide Transportation, we are committed to protecting your privacy and ensuring that your personal information is handled with the utmost care and security.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center justify-center gap-3 text-xs sm:text-sm text-gray-300 bg-white/10 border border-white/10 rounded-full px-5 py-2 inline-flex"
            >
              <Clock className="h-4 w-4" style={{ color: LIGHT_BLUE }} />
              <span>Last updated: April 04, 2026</span>
            </motion.div>
          </div>
        </section>

        {/* ── WELCOME INTRO — light band ── */}
        <section className="py-14 sm:py-16 px-4 bg-gray-50">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: NAVY }}>
              <Star className="h-5 w-5" style={{ color: LIGHT_BLUE }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: NAVY }}>Welcome to Stallion Worldwide Transportation</h2>
            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              This Privacy Policy outlines how we collect, use, and protect your information when you use our premium chauffeured vehicle services.
              By using our services, you agree to the collection and use of information in accordance with this policy. We are committed to
              maintaining the highest standards of data protection and transparency in all our operations.
            </p>
          </motion.div>
        </section>

        {/* ── MAIN POLICY SECTIONS — white band, 2-col card grid ── */}
        <section className="py-3 sm:py-6 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6 sm:gap-8"
            >
              {sections.map((section, index) => (
                <PolicyCard key={section.title} icon={section.icon} title={section.title} content={section.content} index={index} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── YOUR PRIVACY RIGHTS — navy band, invert-on-hover feature cards ── */}
        <section className="relative py-16 sm:py-24 px-4 overflow-hidden" style={{ background: NAVY }}>
          <div className="absolute top-20 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: `${BLUE}18` }} />
          <div className="absolute bottom-20 right-0 w-72 h-72 rounded-full blur-3xl" style={{ background: `${BLUE}18` }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-14">
              <AccentLine light />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Your Privacy Rights
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                We believe in transparency and your right to control your personal information
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {rightsData.map((right, index) => (
                <RightCard key={right.title} icon={right.icon} title={right.title} description={right.description} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ── COOKIES + DATA RETENTION — light band, split layout ── */}
        <section className="py-16 sm:py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <motion.div
              {...fadeInUp}
              className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: NAVY }}>
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: NAVY }}>Cookies and Tracking Technologies</h3>
              </div>
              <p className="text-gray-700 mb-5 text-base leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:
              </p>
              <div className="space-y-3 mb-6">
                {cookieUses.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-blue-50 rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle className="h-3.5 w-3.5" style={{ color: BLUE }} />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-5">
                <p className="text-blue-800 text-sm leading-relaxed">
                  <strong>Note:</strong> You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our website.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 lg:p-9 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: NAVY }}>
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: NAVY }}>Data Retention</h3>
              </div>
              <p className="text-gray-700 mb-5 text-base leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dataRetention.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg flex-shrink-0" style={{ background: BLUE }}>
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-bold text-sm" style={{ color: NAVY }}>{item.title}</h4>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SMS / TEXT MESSAGING TERMS — full navy band ── */}
        <section className="relative py-16 sm:py-24 px-4 overflow-hidden" style={{ background: NAVY }}>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl" style={{ background: `${BLUE}18` }} />
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div {...fadeInUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 sm:mb-14">
              <div className="p-3.5 sm:p-4 rounded-2xl flex-shrink-0" style={{ background: BLUE }}>
                <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">SMS/Text Messaging Terms &amp; Conditions</h3>
            </motion.div>

            <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-14">
              {smsTerms.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 5) * 0.05 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10 last:border-b-0 last:pb-0"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg text-white font-bold text-sm sm:text-base" style={{ background: BLUE }}>
                      {item.num}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2 text-base sm:text-lg">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 mt-8 sm:mt-10">Types of SMS Communications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
                {smsTypesOfCommunications.map((type, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 6) * 0.05 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5"
                  >
                    <h5 className="font-bold text-white mb-2 text-sm sm:text-base">{type.title}</h5>
                    <p className="text-gray-300 text-xs sm:text-sm">{type.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" style={{ color: LIGHT_BLUE }} />
                    Opt-In Methods
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {smsOptInMethods.map((method, index) => (
                      <li key={index} className="text-gray-300 text-sm sm:text-base leading-relaxed">• {method}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" style={{ color: LIGHT_BLUE }} />
                    Opt-Out Methods
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {smsOptOutMethods.map((method, index) => (
                      <li key={index} className="text-gray-300 text-sm sm:text-base leading-relaxed">• {method}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5" style={{ color: LIGHT_BLUE }} />
                    Get Help
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {smsHelpOptions.map((option, index) => (
                      <li key={index} className="text-gray-300 text-sm sm:text-base leading-relaxed">• {option}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-500/10 border-l-4 rounded-r-lg p-4 sm:p-6" style={{ borderColor: BLUE }}>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white">Important:</strong> SMS consent and phone numbers collected for SMS communication purposes will not be shared with any third party or affiliates for marketing purposes. Your data is protected in accordance with our comprehensive Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── GET IN TOUCH — white band ── */}
        <section className="py-16 sm:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-12">
              <AccentLine />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: NAVY }}>
                Get In Touch
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Contact us with any questions about our privacy policy or SMS terms
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: NAVY }}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: NAVY }}>{method.label}</h4>
                  <p className="text-gray-600 text-sm sm:text-base break-all sm:break-normal">{method.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POLICY UPDATES ── */}
        <section className="pb-20 sm:pb-24 px-4 bg-white">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto text-center bg-gray-50 rounded-3xl p-8 sm:p-10 lg:p-12 border border-gray-100"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: NAVY }}>
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: NAVY }}>Policy Updates</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational,
              legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website
              and updating the "Last Updated" date at the top of this page. Your continued use of our services following any changes
              constitutes acceptance of the updated terms.
            </p>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
