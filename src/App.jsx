import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Menu, 
  X, 
  ArrowRight, 
  Clock, 
  Linkedin, 
  GraduationCap, 
  FileText, 
  Users,
  Sun,
  Moon,
  MessageCircle,
  BookOpen,
  ClipboardList,
  Headset,
  Building2,
  CalendarCheck
} from 'lucide-react';

// --- Data & Content Configuration ---

const COMPANY_INFO = {
  name: "AMC Connect",
  phone: "07955 528885", 
  email: "info@amc-connect.co.uk", 
  address: "Unit 3, KD Tower, Cotterells, Hemel Hempstead, HP1 1FW", 
  linkedin: "https://www.linkedin.com/company/amc-connect-uk/?viewAsMember=true", 
  facebook: "(will provide soon)",
  companyNumber: "16252583", 
  hours: "Monday to Saturday 10:00 - 18:00" 
};

const NAV_LINKS = [
  { name: "Home", id: "home" }, 
  { name: "About Us", id: "about" }, 
  { name: "Our Services", id: "services" }, 
  { name: "Contact Us", id: "contact" } 
];

const SERVICES = [
  {
    title: "Courses",
    desc: "Whether you are interested in Undergraduate or Postgraduate study, HND programmes, or Top-Up courses, we can guide you through options available across the United Kingdom.", 
    icon: <BookOpen size={32} />
  },
  {
    title: "Application Support",
    desc: "Benefit from professional assistance in preparing your university application, CV, personal statement, and document submissions to ensure your application stands out.", 
    icon: <FileText size={32} />
  },
  {
    title: "Personalised University Guidance",
    desc: "We provide expert advice to help you select the university and course that best aligns with your academic and career ambitions.", 
    icon: <GraduationCap size={32} />
  },
  {
    title: "Vocational Guidance",
    desc: "Unlock your potential with guidance that aligns your interests and skills with career opportunities.", 
    icon: <Users size={32} />
  }
];

const WHY_CHOOSE_US = [
  {
    title: "Expertise",
    desc: "In-depth knowledge and experience in supporting students at every stage."
  },
  {
    title: "Personalised Support",
    desc: "Tailored services to match your unique goals."
  },
  {
    title: "Comprehensive Services",
    desc: "End-to-end assistance from application to interview preparation and finance."
  },
  {
    title: "Availability",
    desc: "Reliable support whenever you need it."
  }
];

const PROCESS_STEPS = [
  {
    step: "Step 1",
    desc: "Enter your details so we can contact you for an eligibility check and understand your goals.",
    icon: <ClipboardList size={32} />
  },
  {
    step: "Step 2",
    desc: "Our student advisor will contact you by phone to discuss your background and help identify the most suitable institution and course. After the call, you will receive clear information about the recommended option.",
    icon: <Headset size={32} />
  },
  {
    step: "Step 3",
    desc: "Once your course and institution are agreed, the next step will be the submission of your documents so the application can move forward.",
    icon: <FileText size={32} />
  },
  {
    step: "Step 4",
    desc: "When your documents are received, our admissions team will prepare and submit your application to the chosen College or University. We will also support you in preparing for any required admission test.",
    icon: <Building2 size={32} />
  },
  {
    step: "Step 5",
    desc: "When the College or University confirms your acceptance, we will guide you through the Student Finance application and provide support throughout the process.",
    icon: <CheckCircle size={32} />
  },
  {
    step: "Step 6",
    desc: "After your place is confirmed, the College or University will send you details regarding induction, timetable, and enrolment. You will receive all the information you need before your course begins.",
    icon: <BookOpen size={32} />
  }
];

const TEAM_MEMBERS = [
  { name: "Ana-Maria Ciomaga", role: "Founder", image: "/images/anamaria.jpeg" },
  { name: "Andreea Grigoriu", role: "Co-founder", image: "/images/andreea.jpeg" },
  { name: "Roxana Sisu", role: "Recruitment Manager", image: "/images/roxana.jpeg" },
  { name: "Nina Lazar", role: "Student Finance officer", image: "/images/nina.jpeg" }
];

// --- Components ---

const Navbar = ({ scrollToSection, setMobileMenuOpen, mobileMenuOpen, theme, toggleTheme, onApplyClick }) => (
  <nav className="bg-white/90 dark:bg-noir-900/90 backdrop-blur-md border-b border-gray-200 dark:border-noir-800 sticky top-0 z-50 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center cursor-pointer gap-3 group" onClick={() => scrollToSection('home')}>
          <span className="text-2xl font-bold text-copper-600 dark:text-copper-400 transition-colors duration-300 group-hover:text-copper-700 dark:group-hover:text-copper-300">AMC Connect</span> 
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="group relative text-gray-600 dark:text-gray-400 hover:text-copper-600 dark:hover:text-copper-400 transition-colors duration-300 font-medium py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-copper-600 dark:bg-copper-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={onApplyClick}
              className="bg-copper-50 dark:bg-copper-400/10 border border-copper-200 dark:border-copper-400/50 text-copper-600 dark:text-copper-400 hover:bg-copper-500 hover:text-white dark:hover:bg-copper-400 dark:hover:text-noir-950 px-6 py-2 rounded-full font-medium transition-all shadow-lg"
            >
              APPLY 
            </button>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-noir-800 text-gray-600 dark:text-copper-400 hover:bg-gray-200 dark:hover:bg-noir-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-noir-800 text-gray-600 dark:text-copper-400 hover:bg-gray-200 dark:hover:bg-noir-700 transition-colors"
          >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 dark:text-gray-400 hover:text-copper-600 dark:hover:text-copper-400">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu Dropdown */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-white dark:bg-noir-900 border-t border-gray-200 dark:border-noir-800">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-copper-600 dark:hover:text-copper-400 hover:bg-gray-50 dark:hover:bg-noir-800"
            >
              {link.name}
            </button>
          ))}
          <button 
             onClick={() => { onApplyClick(); setMobileMenuOpen(false); }}
             className="w-full text-left px-3 py-2 text-base font-medium text-copper-600 dark:text-copper-400 font-bold"
          >
            START YOUR JOURNEY 
          </button>
        </div>
      </div>
    )}
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-900 dark:bg-noir-950 text-white pt-12 pb-8 border-t border-gray-800 dark:border-noir-800 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-copper-400 mb-4">{COMPANY_INFO.name}</h3>
          <p className="text-gray-400 mb-4">
            Honest, patient, and personal support for your university journey.
          </p>
          <div className="flex space-x-4">
            <a href={COMPANY_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-copper-400 transition-colors">
              <Linkedin />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-200">Contact Info</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center"><Phone size={18} className="mr-2 text-copper-400" /> {COMPANY_INFO.phone}</li>
            <li className="flex items-center"><Mail size={18} className="mr-2 text-copper-400" /> {COMPANY_INFO.email}</li>
            <li className="flex items-start"><MapPin size={18} className="mr-2 mt-1 text-copper-400" /> {COMPANY_INFO.address}</li>
            <li className="flex items-center"><Clock size={18} className="mr-2 text-copper-400" /> {COMPANY_INFO.hours}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-200">Company Details</h4>
          <p className="text-gray-400">AMC Connect LTD</p> 
          <p className="text-gray-400">Company Number: {COMPANY_INFO.companyNumber}</p> 
        </div>
      </div>
      <div className="border-t border-gray-800 dark:border-noir-800 mt-8 pt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} AMC Connect. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <div className="fixed bottom-6 right-6 z-40">
    <a 
      href="https://wa.me/447955528885" // Assuming this is the number based on phone
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center transition-transform transform hover:scale-105"
    >
      <span className="mr-2">Need Help? Chat with us</span>
      <MessageCircle size={24} />
    </a>
  </div>
);

const TopBar = () => (
  <div className="bg-gray-900 dark:bg-noir-950 text-gray-300 py-2 px-4 text-sm hidden md:block border-b border-gray-800">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex space-x-6">
        <div className="flex items-center hover:text-copper-400 transition-colors cursor-pointer">
          <Phone size={14} className="mr-2" />
          <span>{COMPANY_INFO.phone}</span>
        </div>
        <div className="flex items-center hover:text-copper-400 transition-colors cursor-pointer">
          <Mail size={14} className="mr-2" />
          <span>{COMPANY_INFO.email}</span>
        </div>
      </div>

    </div>
  </div>
);



// --- Page Views ---

const HomeView = ({ scrollToSection, onJourneyClick }) => (
  <div className="flex-grow bg-white dark:bg-noir-950 transition-colors duration-300">
    {/* Hero Section */}
    <div className="relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 dark:from-noir-950/90 dark:to-noir-950/70"></div>
      </div>
      
      <div className="relative z-10 py-12 px-4 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Main Message */}
          <div className="space-y-10 animate-fade-in-up text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              You Are Not Alone in Your <span className="text-copper-500">University Journey</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-xl">
              We are here to guide you with patience, answer your questions clearly, and support you at a pace that feels right for you.
            </p>
            
            <div className="space-y-5 border-l-4 border-copper-500 pl-8 pr-6 py-6 bg-white/5 rounded-r-xl backdrop-blur-sm">
               <h3 className="text-2xl font-bold text-copper-400 mb-2">Free Support, Personalised Guidance</h3>
               <p className="text-gray-200 text-base leading-relaxed">
                 All our assistance is free for students. We work through official partnerships with universities, which allows us to offer support without fees or hidden charges.
               </p>
               <p className="text-gray-300 text-base leading-relaxed italic">
                 You deserve guidance that feels honest and safe when making decisions about your future. We are here to provide that support with integrity and care.
               </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button onClick={onJourneyClick} className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-full transition-all"
              >
                Explore Services
              </button>
            </div>

            <div className="pt-4 flex items-center space-x-8 text-sm font-medium text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="text-copper-500 mr-2" size={20} />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-copper-500 mr-2" size={20} />
                <span>98% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Checklist Card */}
          <div className="glass-panel p-8 rounded-2xl animate-fade-in-up animation-delay-200 lg:ml-auto max-w-md w-full bg-white/95 dark:bg-noir-900/95 backdrop-blur-xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              We help you with:
            </h2>
            
            <div className="space-y-4 mb-8">
              {[
                "University enrolment", 
                "CV & Personal Statement",
                "Student Finance Support",
                "Exam Preparation",
                "Document Upload",
                "Ongoing Guidance"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="bg-copper-100 dark:bg-copper-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="text-copper-600 dark:text-copper-400" size={16} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span> 
                </div>
              ))}
            </div>

            <div className="bg-copper-50 dark:bg-copper-900/20 p-4 rounded-xl text-center mb-6 border border-copper-100 dark:border-copper-800">
               <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">Our Services Are</p>
               <p className="text-3xl font-extrabold text-copper-600 dark:text-copper-400">100% FREE</p>
               <p className="text-xs text-gray-500 mt-1">for all students</p>
            </div>

            <button 
              onClick={onJourneyClick}
              className="w-full btn-primary flex items-center justify-center"
            >
              <span className="mr-2">Help Me Understand My Options</span> 
              <ArrowRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
);

const ServicesView = () => (
  <div className="section-padding bg-white dark:bg-noir-950 flex-grow transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2> 
        <div className="w-24 h-1 bg-copper-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {SERVICES.map((service, index) => (
          <div key={index} className={`bg-white dark:bg-noir-900 p-10 rounded-2xl shadow-sm hover:shadow-[0_0_30px_rgba(179,109,72,0.3)] hover:border-copper-200 dark:hover:border-copper-800 border border-gray-100 dark:border-noir-800 transition-all duration-300 hover:-translate-y-1 group animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
            <div className="w-16 h-16 rounded-full bg-orange-50 dark:bg-copper-900/20 flex items-center justify-center text-copper-600 dark:text-copper-400 mb-6 group-hover:bg-copper-600 group-hover:text-white transition-all duration-300">
              {React.cloneElement(service.icon, { size: 28, strokeWidth: 1.5 })}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Column */}
          <div className="space-y-6">
            {WHY_CHOOSE_US.slice(0, 2).map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl hover:border-copper-400/50 transition-colors">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Column */}
          <div className="bg-gradient-to-br from-copper-500 to-copper-700 dark:from-copper-900 dark:to-noir-900 text-white p-8 rounded-2xl shadow-2xl transform lg:scale-105 z-10 relative overflow-hidden text-center">
             <div className="relative z-10">
                <div className="bg-white w-24 h-24 mx-auto flex items-center justify-center rounded-full mb-6 shadow-md overflow-hidden p-1">
                  <img src="/images/logo.jpeg" alt="AMC Logo" className="w-full h-full object-contain rounded-full" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
                <p className="text-copper-100 font-semibold tracking-wide uppercase text-sm mb-8">A Different Approach to Support</p>
                
                <div className="inline-block text-left">
                  <h3 className="text-lg font-bold mb-4">What You Can Expect From Us</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-white/20 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-copper-50 text-sm">We listen before we advise</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white/20 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-copper-50 text-sm">We guide you step by step if you choose to enrol to University</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-white/20 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-copper-50 text-sm">We make the application process clear and manageable</span>
                    </li>
                  </ul>
                </div>
             </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {WHY_CHOOSE_US.slice(2, 4).map((item, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl hover:border-copper-400/50 transition-colors">
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  </div>
);

const AboutView = () => (
  <div className="flex-grow bg-white dark:bg-noir-950 transition-colors duration-300">
    <div className="py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Text Content */}
        <div className="space-y-16 lg:sticky lg:top-32">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
              Who We Are
              <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-copper-500 rounded-full"></span>
            </h2> 
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              AMC Connect was created with a simple purpose: to support students in a way that feels <strong className="text-copper-600 dark:text-copper-400">honest, patient, and personal.</strong> 
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
              We have spent years helping students enrol in universities across the United Kingdom. Through this experience, we have learned that what students need most is clarity, trust, and people who genuinely care about their goals. 
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 relative inline-block">
              Why We Do This
              <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-copper-500 rounded-full"></span>
            </h2> 
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
               We believe that education can open doors and shape lives, but it should begin with informed and confident decisions. Our work is guided by honesty, respect for individual circumstances, and long-term support.
            </p>
          </div>
        </div>

        {/* Right Column: How We Help & Team */}
        <div className="space-y-10">
          <div className="glass-panel p-10 rounded-3xl shadow-xl animate-fade-in-up border-t-4 border-copper-500" style={{animationDelay: '0.2s'}}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How We Help</h2>
            <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              <p>
                We provide guidance with university applications, personal statements, documents, exam preparation, and Student Finance. Our support does not end at enrolment. We remain available during your studies whenever you need help or advice.
              </p>
              <p>
                We want you to feel secure, prepared, and confident at every stage of your journey. No pressure. No rushing. Just support that respects your goals and your pace.
              </p>
              <p className="font-medium text-copper-600 dark:text-copper-400">
                If you have questions or would like to discuss your options, we are always open to a conversation.
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 pl-2">Meet Our Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TEAM_MEMBERS.map((member, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-8 bg-white dark:bg-noir-900 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-noir-800 group hover:-translate-y-1">
                  <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-gray-50 dark:border-noir-800 shadow-md group-hover:border-copper-100 transition-colors">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=random`;
                      }}
                    />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-sm font-bold text-copper-600 dark:text-copper-400 uppercase tracking-wide">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

const ContactView = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });
  };

  return (
  <div className="flex-grow bg-white dark:bg-noir-950 py-20 px-4 transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in touch with us</h1> 
            <p className="text-lg text-gray-600 dark:text-gray-400">
                If you have questions or need help, just reach out to us, and we will get back to you as soon as we can! 
            </p>
        </div>

      <div className="flex justify-center">
        {/* Contact Info Card */}
        <div className="glass-panel p-12 rounded-2xl shadow-lg w-full max-w-7xl animate-fade-in-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                <div className="flex items-start">
                    <div className="bg-copper-50 dark:bg-copper-400/10 p-3 rounded-full mr-4 text-copper-600 dark:text-copper-400">
                        <Phone />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 dark:text-gray-200">Phone</p>
                        <p className="text-gray-600 dark:text-gray-400">{COMPANY_INFO.phone}</p> 
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-copper-50 dark:bg-copper-400/10 p-3 rounded-full mr-4 text-copper-600 dark:text-copper-400">
                        <Mail />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 dark:text-gray-200">Mail</p>
                        <p className="text-gray-600 dark:text-gray-400">{COMPANY_INFO.email}</p> 
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-copper-50 dark:bg-copper-400/10 p-3 rounded-full mr-4 text-copper-600 dark:text-copper-400">
                        <MapPin />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 dark:text-gray-200">Address</p>
                        <p className="text-gray-600 dark:text-gray-400">{COMPANY_INFO.address}</p> 
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-copper-50 dark:bg-copper-400/10 p-3 rounded-full mr-4 text-copper-600 dark:text-copper-400">
                        <Linkedin />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 dark:text-gray-200">Linkedin</p>
                        <a href={COMPANY_INFO.linkedin} className="text-copper-600 dark:text-copper-400 hover:underline break-all text-sm">View Profile</a> 
                    </div>
                </div>

                <div className="flex items-start">
                    <div className="bg-copper-50 dark:bg-copper-400/10 p-3 rounded-full mr-4 text-copper-600 dark:text-copper-400">
                        <Users />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 dark:text-gray-200">Facebook</p>
                        <p className="text-gray-600 dark:text-gray-400">{COMPANY_INFO.facebook}</p> 
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="bg-copper-50 dark:bg-copper-400/10 p-3 rounded-full mr-4 text-copper-600 dark:text-copper-400">
                        <Clock />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800 dark:text-gray-200">Working hours</p>
                        <p className="text-gray-600 dark:text-gray-400">{COMPANY_INFO.hours}</p> 
                    </div>
                </div>
            </div>

            {/* Questionnaire Form */}
            <div id="questionnaire" className="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-gray-700 pt-12 lg:pt-0 lg:pl-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact form</h2> 
                <form ref={form} className="space-y-4" onSubmit={sendEmail}>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your name</label> 
                    <input type="text" name="name" className="input-field w-full" required />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your phone number</label> 
                    <input type="tel" name="phone" className="input-field w-full" required />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your email</label> 
                    <input type="email" name="email" className="input-field w-full" required />
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="btn-primary w-full">
                            Send Message
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                        We will respond as soon as possible!
                    </p>
                </form>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
  );
};

const JourneyView = ({ onBack }) => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    residency: '',
    residencyOther: '',
    englishLevel: '',
    qualification: '',
    age: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_JOURNEY,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          setSubmitted(true);
      }, (error) => {
          console.log(error.text);
          alert("Failed to send details, please try again.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="flex-grow flex items-center justify-center bg-white dark:bg-noir-950 py-20 px-4 transition-colors duration-300">
        <div className="glass-panel max-w-2xl w-full p-8 rounded-2xl text-center animate-fade-in-up">
          <div className="mb-6 flex justify-center">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
              <CheckCircle size={48} className="text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Thank you!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We have received your details and will contact you within the next 24 hours.
          </p>
          <button 
            onClick={onBack}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow bg-white dark:bg-noir-950 py-12 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-2xl animate-fade-in-up">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Begin your university journey in the United Kingdom
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Open new opportunities for yourself and your family.
            </p>
          </div>

          <form ref={form} onSubmit={handleSubmit} className="space-y-8">
            {/* Question 1 */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white">
                What is your current residency status in the United Kingdom?
              </label>
              <div className="space-y-3">
                {['British Citizen', 'Settled Status', 'Pre-Settled Status', 'Indefinite Leave to Remain'].map((option) => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="residency" 
                      value={option} 
                      checked={formData.residency === option}
                      onChange={handleChange}
                      className="w-5 h-5 text-copper-600 border-gray-300 focus:ring-copper-500 dark:focus:ring-copper-400 dark:bg-noir-950 dark:border-noir-700" 
                      required
                    />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">{option}</span>
                  </label>
                ))}
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="residency" 
                    value="Other" 
                    checked={formData.residency === 'Other'}
                    onChange={handleChange}
                    className="w-5 h-5 text-copper-600 border-gray-300 focus:ring-copper-500 dark:focus:ring-copper-400 dark:bg-noir-950 dark:border-noir-700" 
                  />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">Other – please specify</span>
                </label>
                {formData.residency === 'Other' && (
                  <input 
                    type="text" 
                    name="residencyOther"
                    value={formData.residencyOther}
                    onChange={handleChange}
                    className="input-field mt-2 w-full"
                    placeholder="Please specify your status"
                    required
                  />
                )}
              </div>
            </div>

            {/* Question 2 */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white">
                What is your current English level?
              </label>
              <div className="space-y-3">
                {['Beginner', 'Intermediate', 'Advanced'].map((option) => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="englishLevel" 
                      value={option} 
                      checked={formData.englishLevel === option}
                      onChange={handleChange}
                      className="w-5 h-5 text-copper-600 border-gray-300 focus:ring-copper-500 dark:focus:ring-copper-400 dark:bg-noir-950 dark:border-noir-700" 
                      required
                    />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white">
                Please tell us if you have:
              </label>
              <div className="space-y-3">
                {[
                  'A Level 3 qualification (for example, a baccalaureate)', 
                  'Work history', 
                  'Both', 
                  'Neither'
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="qualification" 
                      value={option} 
                      checked={formData.qualification === option}
                      onChange={handleChange}
                      className="w-5 h-5 text-copper-600 border-gray-300 focus:ring-copper-500 dark:focus:ring-copper-400 dark:bg-noir-950 dark:border-noir-700" 
                      required
                    />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Question 4 */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white">
                What is your current age?
              </label>
              <div className="space-y-3">
                {['Under 18', '18-21', 'Over 21'].map((option) => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="age" 
                      value={option} 
                      checked={formData.age === option}
                      onChange={handleChange}
                      className="w-5 h-5 text-copper-600 border-gray-300 focus:ring-copper-500 dark:focus:ring-copper-400 dark:bg-noir-950 dark:border-noir-700" 
                      required
                    />
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-copper-600 dark:group-hover:text-copper-400 transition-colors">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row gap-4">
              <button type="submit" className="btn-primary flex-1 text-lg">
                Submit Application
              </button>
              <button type="button" onClick={onBack} className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-noir-800 dark:hover:bg-noir-700 text-gray-700 dark:text-gray-300 font-bold py-4 px-8 rounded-lg shadow-lg transition-colors text-lg">
                Back to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ApplyView = ({ onBack }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_APPLY,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          alert("Application sent successfully!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert("Failed to send application, please try again.");
      });
  };

  return (
  <div className="flex-grow bg-white dark:bg-noir-950 py-12 px-4 transition-colors duration-300">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Left Column: Application Form */}
      <div className="glass-panel p-8 rounded-2xl animate-fade-in-up">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Apply Today!</h2>
        
        <form ref={form} className="space-y-6" onSubmit={sendEmail}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name <span className="text-red-500">*</span></label>
            <input type="text" name="first_name" className="input-field w-full" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Surname <span className="text-red-500">*</span></label>
            <input type="text" name="surname" className="input-field w-full" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
            <input type="email" name="email" className="input-field w-full" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone <span className="text-red-500">*</span></label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 dark:border-noir-800 bg-gray-100 dark:bg-noir-800 text-gray-500 dark:text-gray-400 text-sm">
                🇬🇧
              </span>
              <input type="tel" name="phone" placeholder="07400 123456" className="input-field w-full rounded-l-none" required />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Referral Agent Name</label>
            <input type="text" name="referral_agent" className="input-field w-full" />
          </div>
          
          <div className="flex items-start pt-2">
            <div className="flex items-center h-5">
              <input id="gdpr" name="gdpr" type="checkbox" className="w-4 h-4 text-copper-600 border-gray-300 rounded focus:ring-copper-500 dark:focus:ring-copper-400 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="gdpr" className="font-medium text-gray-700 dark:text-gray-300">GDPR <span className="text-red-500">*</span></label>
              <p className="text-gray-500 dark:text-gray-400">I agree with Terms and Conditions of this website and Privacy Policy by sending this form.</p>
            </div>
          </div>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button type="submit" className="btn-primary flex-1">
              Submit
            </button>
            <button type="button" onClick={onBack} className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-noir-800 dark:hover:bg-noir-700 text-gray-700 dark:text-gray-300 font-bold py-3 px-8 rounded-full shadow-lg transition-colors">
              Back to Home
            </button>
          </div>
        </form>
      </div>

      {/* Right Column: Our Process Timeline */}
      <div className="glass-panel p-8 rounded-2xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">Our Process</h2>
        
        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-300 dark:bg-gray-600/50 hidden md:block"></div>

          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center group">
              {/* Step Label */}
              <div className="md:w-24 flex-shrink-0 mb-4 md:mb-0 z-10">
                <div className="bg-copper-500 text-white font-bold py-1 px-4 rounded-r-full inline-block shadow-md">
                  {step.step}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow md:pl-8 md:pr-4">
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {step.desc}
                </p>
                {/* Dotted Arrow Separator (Visual only) */}
                {index < PROCESS_STEPS.length - 1 && (
                   <div className="flex justify-center my-4 md:hidden">
                      <span className="text-gray-500 text-xl">⌄</span>
                   </div>
                )}
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 mt-4 md:mt-0 bg-copper-50 dark:bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-copper-100 dark:border-white/20 text-copper-600 dark:text-copper-400">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
  );
};



// --- Main App Component ---

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'apply', 'journey'

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const smoothScrollTo = (targetId) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const startPosition = window.scrollY;
    const offsetPosition = elementPosition + startPosition - headerOffset;
    const distance = offsetPosition - startPosition;
    const duration = 1000; // Duration in ms
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      
      // Ease in-out function
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const scrollToSection = (id) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        smoothScrollTo(id);
      }, 100);
    } else {
      smoothScrollTo(id);
    }
    setMobileMenuOpen(false);
  };

  const handleApplyClick = () => {
    setCurrentView('apply');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJourneyClick = () => {
    setCurrentView('journey');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-noir-950 transition-colors duration-300">
      <TopBar />
      <Navbar 
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
        onApplyClick={handleApplyClick}
      />
      
      <main className="flex-grow flex flex-col">
        {currentView === 'landing' ? (
          <>
            <section id="home">
              <HomeView 
                scrollToSection={scrollToSection} 
                onJourneyClick={handleJourneyClick}
              />
            </section>
            <section id="about">
              <AboutView />
            </section>
            <section id="services">
              <ServicesView />
            </section>
            <section id="contact">
              <ContactView />
            </section>
          </>
        ) : currentView === 'apply' ? (
          <ApplyView onBack={() => scrollToSection('home')} />
        ) : (
          <JourneyView onBack={() => scrollToSection('home')} />
        )}
      </main>

      <WhatsAppButton />

      <Footer />
    </div>
  );
};

export default App;
