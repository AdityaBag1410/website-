import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Home as HomeIcon, Image as ImageIcon, 
  Activity, Info, Phone, Mail, MapPin, 
  Facebook, Twitter, Instagram, Linkedin,
  ChevronLeft, ChevronRight, Star, Users, School,
  MessageCircle, CheckCircle, Award, BookOpen, ShieldCheck, Trophy,
  Quote
} from 'lucide-react';

// --- Configuration ---
const WHATSAPP_NUMBER = "9257189373"; // Edit your WhatsApp number here (with country code, no +)
const LOGO_URL = "https://img.freepik.com/free-vector/school-logo-design-template_23-2149706901.jpg?t=st=1740760000~exp=1740763600~hmac=6b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b9b&w=740"; // Add your school logo URL here

// Social Media URLs
const FACEBOOK_URL = "https://facebook.com";
const INSTAGRAM_URL = "https://instagram.com";
const TWITTER_URL = "https://twitter.com";
const LINKEDIN_URL = "https://linkedin.com";

// Map Embed URL (Get this from Google Maps -> Share -> Embed a map -> Copy src URL)
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562064669231!2d77.22732107550004!3d28.61291207567491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b7187324844!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1711880000000!5m2!1sen!2sin";

// --- Components ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <HomeIcon size={18} /> },
    { name: 'Gallery', icon: <ImageIcon size={18} /> },
    { name: 'Activities', icon: <Activity size={18} /> },
    { name: 'About Us', icon: <Info size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentPage('Home')}>
            {LOGO_URL ? (
              <img src={LOGO_URL} alt="School Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
            ) : (
              <div className="bg-indigo-700 p-2.5 rounded-xl shadow-lg shadow-indigo-200">
                <School className="text-white" size={26} />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">Shri Swaroop</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-600 font-bold mt-1">Public School</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.name)}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all ${
                  currentPage === item.name 
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-600'
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setCurrentPage(item.name);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full px-3 py-3 text-base font-medium rounded-md ${
                    currentPage === item.name ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-24 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div>
          <div className="flex items-center gap-3 mb-8">
            {LOGO_URL ? (
              <img src={LOGO_URL} alt="School Logo" className="h-14 w-auto object-contain" referrerPolicy="no-referrer" />
            ) : (
              <School className="text-indigo-500" size={32} />
            )}
            <span className="text-3xl font-black text-white tracking-tight">Shri Swaroop</span>
          </div>
          <p className="text-lg leading-relaxed font-medium opacity-70">
            Nurturing young minds to become global leaders of tomorrow. Shri Swaroop public sen.sec.school provides a holistic environment for academic and personal growth.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-8 text-xl tracking-tight">Contact Us</h3>
          <ul className="space-y-6 text-lg font-medium">
            <li className="flex items-center gap-4 group">
              <div className="bg-slate-900 p-3 rounded-2xl group-hover:bg-indigo-600 transition-colors">
                <MapPin size={22} className="text-indigo-500 group-hover:text-white" />
              </div>
              123 Education Lane, Knowledge City, ST 54321
            </li>
            <li className="flex items-center gap-4 group">
              <div className="bg-slate-900 p-3 rounded-2xl group-hover:bg-indigo-600 transition-colors">
                <Phone size={22} className="text-indigo-500 group-hover:text-white" />
              </div>
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-4 group">
              <div className="bg-slate-900 p-3 rounded-2xl group-hover:bg-indigo-600 transition-colors">
                <Mail size={22} className="text-indigo-500 group-hover:text-white" />
              </div>
              admissions@shriswaroop.edu
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-8 text-xl tracking-tight">Follow Us</h3>
          <div className="flex gap-5">
            {[
              { Icon: Facebook, url: FACEBOOK_URL },
              { Icon: Twitter, url: TWITTER_URL },
              { Icon: Instagram, url: INSTAGRAM_URL },
              { Icon: Linkedin, url: LINKEDIN_URL }
            ].map(({ Icon, url }, i) => (
              <a 
                key={i} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 p-4 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1 shadow-lg"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-900 mt-20 pt-10 text-center text-sm font-bold opacity-40 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Shri Swaroop public sen.sec.school. All rights reserved.
      </div>
    </div>
  </footer>
);

const NavigationButtons = ({ onPrev, onNext }: { onPrev: () => void, onNext: () => void }) => (
  <div className="flex justify-center gap-4 py-8">
    <button
      onClick={onPrev}
      className="flex items-center gap-2 px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all"
    >
      <ChevronLeft size={20} /> Previous
    </button>
    <button
      onClick={onNext}
      className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all"
    >
      Next <ChevronRight size={20} />
    </button>
  </div>
);

// --- Pages ---

const Modal = ({ isOpen, onClose, title, children, size = "max-w-2xl" }: { isOpen: boolean, onClose: () => void, title: string, children: React.ReactNode, size?: string, key?: React.Key }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-md"
        />
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className={`relative bg-white rounded-[3rem] shadow-2xl w-full ${size} overflow-hidden border border-white/20`}
        >
          <div className="p-8 sm:p-16">
            <div className="flex justify-between items-start mb-10">
              <div className="space-y-2">
                <span className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-[10px]">Information Portal</span>
                <h3 className="text-4xl font-black text-slate-900 leading-tight tracking-tight">{title}</h3>
              </div>
              <button onClick={onClose} className="p-3 hover:bg-slate-100 rounded-2xl transition-all text-slate-400 hover:text-slate-900 hover:rotate-90">
                <X size={32} />
              </button>
            </div>
            <div className="text-slate-600 text-xl leading-relaxed font-medium">
              {children}
            </div>
            <div className="mt-12 flex justify-end">
              <button 
                onClick={onClose}
                className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 hover:-translate-y-1"
              >
                Got it, thanks
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const HomePage = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const whyChooseUsData = [
    { title: 'Experienced Faculty', desc: 'Our teachers are mentors who bring years of expertise and passion to the classroom.', icon: <Users className="text-indigo-600" size={32} />, longDesc: 'We believe that the quality of education is directly linked to the quality of our teachers. Our faculty members are not just subject matter experts, but also trained mentors who understand the emotional and cognitive needs of growing children. They undergo regular professional development workshops to stay updated with the latest teaching methodologies.' },
    { title: 'Smart Classrooms', desc: 'Interactive digital boards and multimedia tools to make learning engaging and effective.', icon: <BookOpen className="text-indigo-600" size={32} />, longDesc: 'Our classrooms are equipped with cutting-edge interactive whiteboards and high-speed internet. This allows teachers to bring abstract concepts to life through 3D visualizations, educational videos, and interactive simulations. We ensure that technology enhances, rather than replaces, the human element of teaching.' },
    { title: 'Sports Excellence', desc: 'Extensive grounds and professional coaching for cricket, football, and athletics.', icon: <Trophy className="text-indigo-600" size={32} />, longDesc: 'Physical fitness is a core pillar of our curriculum. We offer professional-grade facilities for a wide range of sports, including a full-sized football field, cricket nets, basketball courts, and indoor facilities for table tennis and chess. Our specialized coaches identify and nurture athletic talent from a young age.' },
    { title: 'Safe Environment', desc: '24/7 CCTV surveillance and a secure campus ensuring peace of mind for parents.', icon: <ShieldCheck className="text-indigo-600" size={32} />, longDesc: 'The safety of our students is our highest priority. Our entire campus is under constant CCTV monitoring, and we have a strict visitor management system. Additionally, all our staff members are trained in first aid and emergency response protocols to ensure a secure learning environment.' },
    { title: 'Holistic Growth', desc: 'Equal emphasis on academics, arts, music, and personality development.', icon: <Star className="text-indigo-600" size={32} />, longDesc: 'We aim to produce well-rounded individuals. Beyond the classroom, students are encouraged to explore their interests in music, dance, fine arts, and public speaking. Our "Personality Development" modules focus on building confidence, empathy, and leadership skills.' },
    { title: 'Modern Labs', desc: 'Well-equipped Physics, Chemistry, and Computer labs for practical knowledge.', icon: <School className="text-indigo-600" size={32} />, longDesc: 'Learning by doing is our philosophy. Our science and computer laboratories are equipped with the latest apparatus and software. We encourage students to conduct experiments and work on projects that apply theoretical knowledge to real-world scenarios.' },
  ];

  const newsData = [
    { date: 'March 15, 2026', title: 'Annual Sports Day 2026', desc: 'Join us for a day of athletic excellence and school spirit.', full: 'Our Annual Sports Day is scheduled for March 25th. Students from all houses will compete in various track and field events. We invite all parents to join us and cheer for our young athletes. The event will start at 8:00 AM at the main school ground.' },
    { date: 'March 10, 2026', title: 'Science Fair Winners', desc: 'Celebrating our young innovators and their groundbreaking projects.', full: 'The results of the Inter-School Science Fair are out! Our students secured the first position in the "Sustainable Energy" category. We are incredibly proud of their hard work and creative thinking. The winning projects will be on display in the school library next week.' },
    { date: 'March 05, 2026', title: 'Admissions Open', desc: 'Enrollment for the academic session 2026-27 is now open.', full: 'We are happy to announce that admissions for the new academic session are now open for classes Nursery to IX and XI. Parents can collect the prospectus from the school office or apply online through our portal. Limited seats available!' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050335392-9ae86774929f?auto=format&fit=crop&q=80&w=2070"
          alt="School Campus"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 backdrop-blur-[1px]" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500/20 rounded-full blur-[120px]"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px]"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl py-12 lg:py-20 rounded-[4rem] overflow-hidden">
          {/* Blurred Background Photo */}
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000" 
              alt="Background" 
              className="w-full h-full object-cover blur-[60px] opacity-20 scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full text-xs font-black uppercase tracking-[0.4em] mb-10 shadow-2xl"
            >
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              Premier Educational Institution
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.95] tracking-tighter">
              Inspiring <span className="text-indigo-400">Excellence</span>,<br />
              Nurturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Potential</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-14 leading-relaxed font-medium opacity-90 drop-shadow-lg">
              Shri Swaroop Public School is dedicated to providing a holistic education that prepares students for a rapidly evolving global landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setActiveModal('explore')}
                className="group relative bg-indigo-600 text-white px-12 py-5 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-indigo-900/50 hover:bg-indigo-700 hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Explore Our Vision</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl text-xl font-black hover:bg-slate-100 transition-all shadow-2xl shadow-black/20 hover:-translate-y-1 active:scale-95">
                Apply for 2026
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Latest News Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Stay Updated</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">Latest Announcements</h2>
            </div>
            <button className="text-indigo-600 font-bold hover:gap-4 transition-all flex items-center gap-2 group">
              View All News <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.map((news, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveModal(`news-${i}`)}
                className="group cursor-pointer"
              >
                <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 transition-all group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:shadow-2xl group-hover:shadow-indigo-200 h-full flex flex-col">
                  <span className="text-indigo-600 font-bold text-sm mb-6 block group-hover:text-indigo-100 transition-colors">{news.date}</span>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-white transition-colors">{news.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 group-hover:text-indigo-50 transition-colors line-clamp-3">{news.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-indigo-600 font-bold text-sm group-hover:text-white transition-colors">
                    Read Full Story <ChevronRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl -mr-48 -mt-48 opacity-50" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs mb-6 block"
            >
              Our Legacy
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 tracking-tight">A Tradition of Excellence Since 1995</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto mb-10 rounded-full" />
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Shri Swaroop Public School has been a beacon of knowledge for over two decades. Our commitment goes beyond academic results; we focus on the holistic development of every child.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-slate-800 tracking-tight">Our Core Values & Achievements</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We take pride in our 100% board result record and numerous accolades in regional sports and cultural competitions. Our campus is equipped with smart classrooms and advanced science labs.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Innovative Learning",
                  "Character Building",
                  "Global Perspective",
                  "Inclusive Education"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-indigo-50 hover:border-indigo-100 transition-all">
                    <div className="bg-white p-2 rounded-lg shadow-sm group-hover:text-indigo-600 transition-colors">
                      <CheckCircle size={20} />
                    </div>
                    <span className="text-slate-700 font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-indigo-600/10 rounded-[3rem] rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000" 
                alt="Students Learning" 
                className="relative rounded-[2.5rem] shadow-2xl z-10 border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-indigo-700 text-white p-10 rounded-[2rem] shadow-2xl z-20 hidden lg:block border-4 border-white">
                <div className="text-5xl font-black mb-1">25+</div>
                <div className="text-xs font-bold opacity-80 uppercase tracking-[0.2em]">Years of Success</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Choose Us?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">Discover what makes Shri Swaroop Public School the preferred choice for parents and students alike.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                onClick={() => setActiveModal(item.title)}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all cursor-pointer group"
              >
                <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-medium opacity-80 line-clamp-2">{item.desc}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm group-hover:gap-4 transition-all">
                  Read More <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-[5rem] overflow-hidden shadow-2xl relative border border-slate-900">
            <div className="absolute top-0 right-0 p-24 opacity-5">
              <Quote size={300} className="text-white" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="relative h-[600px] lg:h-auto overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Director" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
              </motion.div>
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="p-12 lg:p-24 flex flex-col justify-center relative z-10"
              >
                <span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Leadership Perspective</span>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter">Director's Message</h2>
                <div className="space-y-10 text-slate-300 text-2xl leading-relaxed font-medium italic opacity-90">
                  <p className="relative">
                    <Quote className="absolute -left-10 -top-5 text-indigo-500/30" size={40} />
                    "True education is about igniting a flame, not filling a vessel. We are committed to nurturing the unique spark in every child."
                  </p>
                </div>
                <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
                  <div className="pt-10 border-t border-slate-800 flex-1">
                    <div className="text-white font-black text-4xl mb-2 tracking-tight">Mr. Sandeep Swaroop</div>
                    <div className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-[10px]">Director & Founder</div>
                  </div>
                  <button 
                    onClick={() => setActiveModal('director')}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-10 py-4 rounded-2xl font-black hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95"
                  >
                    Read Full Message
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <Modal 
        isOpen={activeModal === 'explore'} 
        onClose={() => setActiveModal(null)} 
        title="Our Educational Philosophy"
        size="max-w-3xl"
      >
        <div className="space-y-8">
          <p className="text-2xl font-bold text-slate-800 leading-snug">At Shri Swaroop Public School, we envision a future where every student is equipped with the tools to lead, innovate, and inspire.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="text-indigo-600 font-black mb-4 uppercase tracking-widest text-xs">Academic Rigor</h4>
              <p className="text-slate-600 text-lg">We maintain the highest standards of academic excellence, encouraging students to push their intellectual boundaries.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="text-indigo-600 font-black mb-4 uppercase tracking-widest text-xs">Ethical Leadership</h4>
              <p className="text-slate-600 text-lg">Character building is at our core. We instill values of integrity, empathy, and global citizenship.</p>
            </div>
          </div>
          <p className="text-slate-500 italic">"Join us as we shape the architects of tomorrow's world."</p>
        </div>
      </Modal>

      <Modal 
        isOpen={activeModal === 'director'} 
        onClose={() => setActiveModal(null)} 
        title="From the Director's Desk"
        size="max-w-4xl"
      >
        <div className="space-y-8">
          <p className="text-2xl font-bold text-slate-800">Dear Parents and Students,</p>
          <div className="space-y-6 text-slate-600">
            <p>It is with great pride and a sense of profound responsibility that I welcome you to Shri Swaroop Public School. Since our inception in 1995, our mission has remained steadfast: to provide an education that is transformative, inclusive, and deeply rooted in values.</p>
            <p>In today's rapidly changing world, academic knowledge alone is not enough. We must equip our children with the resilience to face challenges, the creativity to solve complex problems, and the empathy to understand diverse perspectives. Our curriculum is designed to foster these very qualities.</p>
            <p>We believe that every child is a unique universe of potential. Our role as educators is to provide the right environment, the right guidance, and the right inspiration to help that potential flourish. We are partners in your child's journey, and we take that partnership very seriously.</p>
            <p>Thank you for trusting us with your child's future. Together, let us build a generation that is not just successful, but also significant.</p>
          </div>
          <div className="pt-10 border-t border-slate-100">
            <p className="font-black text-slate-900 text-xl">Mr. Sandeep Swaroop</p>
            <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Director, Shri Swaroop Public School</p>
          </div>
        </div>
      </Modal>

      {newsData.map((news, i) => (
        <Modal
          key={i}
          isOpen={activeModal === `news-${i}`}
          onClose={() => setActiveModal(null)}
          title={news.title}
        >
          <div className="space-y-6">
            <span className="text-indigo-600 font-bold text-sm block">{news.date}</span>
            <p className="text-xl text-slate-700 leading-relaxed">{news.full}</p>
          </div>
        </Modal>
      ))}

      {whyChooseUsData.map((item) => (
        <Modal 
          key={item.title}
          isOpen={activeModal === item.title} 
          onClose={() => setActiveModal(null)} 
          title={item.title}
        >
          <p>{item.longDesc}</p>
        </Modal>
      ))}
    </motion.div>
  );
};

const GalleryPage = () => {
  const [category, setCategory] = useState('All');
  const images = [
    { url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000', cat: 'Campus' },
    { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000', cat: 'Students' },
    { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000', cat: 'Events' },
    { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000', cat: 'Campus' },
    { url: 'https://images.unsplash.com/photo-1577896851231-70ef14697593?auto=format&fit=crop&q=80&w=1000', cat: 'Students' },
    { url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=1000', cat: 'Events' },
  ];

  const filtered = category === 'All' ? images : images.filter(img => img.cat === category);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-32 max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Visual Journey</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">A glimpse into the vibrant life and state-of-the-art facilities at Shri Swaroop Public School.</p>
      </div>
      
      {/* Categories */}
      <div className="flex justify-center gap-3 mb-16 flex-wrap">
        {['All', 'Events', 'Campus', 'Students'].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-8 py-3 rounded-2xl font-bold transition-all ${
              category === cat 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.div
              key={img.url}
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-md group"
            >
              <img src={img.url} alt={img.cat} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{img.cat}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const ActivitiesPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-32 max-w-7xl mx-auto px-4">
    <div className="text-center mb-24">
      <h2 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Beyond Academics</h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">We believe in nurturing every talent. Our diverse range of activities ensures every student finds their passion.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { title: 'Sports Excellence', desc: 'From football to swimming, we offer professional coaching in various sports.', icon: <Activity className="text-orange-500" size={44} /> },
        { title: 'Cultural Events', desc: 'Music, dance, and drama festivals that celebrate creativity and talent.', icon: <Star className="text-purple-500" size={44} /> },
        { title: 'Science & Tech', desc: 'Robotics clubs and science fairs to ignite curiosity and innovation.', icon: <Users className="text-indigo-500" size={44} /> },
        { title: 'Art & Craft', desc: 'Expressive workshops for painting, sculpture, and digital design.', icon: <ImageIcon className="text-pink-500" size={44} /> },
        { title: 'Debate & Literature', desc: 'Developing communication skills through public speaking and writing.', icon: <Info className="text-emerald-500" size={44} /> },
        { title: 'Community Service', icon: <HomeIcon className="text-teal-500" size={44} />, desc: 'Encouraging empathy through volunteering and social initiatives.' },
      ].map((act, i) => (
        <motion.div
          key={i}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-slate-100 transition-all group"
        >
          <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">{act.icon}</div>
          <h3 className="text-2xl font-extrabold text-slate-900 mb-5 tracking-tight">{act.title}</h3>
          <p className="text-slate-600 leading-relaxed text-lg font-medium opacity-80">{act.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AboutUsPage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-32 max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
      <div className="order-2 lg:order-1">
        <h2 className="text-5xl font-extrabold text-slate-900 mb-12 tracking-tight">Our Mission & Vision</h2>
        <div className="space-y-12">
          <div className="relative pl-10 border-l-4 border-indigo-600">
            <h3 className="text-2xl font-extrabold text-indigo-700 mb-4 tracking-tight">Mission</h3>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              To provide a transformative education that fosters intellectual curiosity, critical thinking, and a lifelong passion for learning.
            </p>
          </div>
          <div className="relative pl-10 border-l-4 border-indigo-600">
            <h3 className="text-2xl font-extrabold text-indigo-700 mb-4 tracking-tight">Vision</h3>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              To be a global leader in education, recognized for academic excellence and the development of compassionate, responsible citizens.
            </p>
          </div>
          <div className="relative pl-10 border-l-4 border-indigo-600">
            <h3 className="text-2xl font-extrabold text-indigo-700 mb-4 tracking-tight">History</h3>
            <p className="text-slate-600 text-xl leading-relaxed font-medium">
              What started as a small community school has grown into a prestigious institution serving over 2,000 students from diverse backgrounds.
            </p>
          </div>
        </div>
      </div>
      <div className="relative order-1 lg:order-2">
        <div className="absolute -inset-6 bg-indigo-600/5 rounded-[4rem] -rotate-3" />
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000" 
          alt="School Building" 
          className="relative rounded-[3.5rem] shadow-2xl z-10 border-8 border-white" 
          referrerPolicy="no-referrer" 
        />
      </div>
    </div>

    {/* Principal Message */}
    <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden border border-slate-800">
      <div className="absolute top-0 right-0 p-16 opacity-5">
        <Quote size={200} className="text-white" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center relative z-10">
        <div className="lg:col-span-1">
          <div className="aspect-square rounded-[3rem] overflow-hidden border-4 border-white/20 shadow-2xl max-w-[300px] mx-auto rotate-3">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" alt="Principal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-4xl font-extrabold mb-10 italic leading-tight tracking-tight">"Education is the most powerful weapon which you can use to change the world."</h3>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium opacity-90">
            Welcome to Shri Swaroop Public School. Our commitment is to provide an environment where every child feels valued and inspired to excel. We don't just teach subjects; we shape characters.
          </p>
          <div className="pt-8 border-t border-slate-800">
            <div className="font-black text-3xl mb-1">Dr. Robert Sterling</div>
            <div className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Principal, Shri Swaroop Public School</div>
          </div>
        </div>
      </div>
    </div>

    {/* WhatsApp Contact Section */}
    <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div className="text-center lg:text-left">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg mb-10">Have questions? Reach out to us directly on WhatsApp for a quick response or visit our campus.</p>
          
          <motion.a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-[2rem] text-xl font-bold shadow-2xl shadow-green-200 transition-all hover:bg-[#22c35e]"
          >
            <MessageCircle size={32} />
            Chat with us on WhatsApp
          </motion.a>
          
          <p className="mt-6 text-sm text-gray-500">Available Monday to Saturday, 9:00 AM - 5:00 PM</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative">
        <div className="absolute -inset-4 bg-indigo-600/5 rounded-[3rem] rotate-2" />
        <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden h-[400px]">
          <iframe 
            src={MAP_EMBED_URL}
            className="w-full h-full rounded-[1.5rem]"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const pages = ['Home', 'Gallery', 'Activities', 'About Us'];

  const handleNext = () => {
    const currentIndex = pages.indexOf(currentPage);
    const nextIndex = (currentIndex + 1) % pages.length;
    setCurrentPage(pages[nextIndex]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    const currentIndex = pages.indexOf(currentPage);
    const prevIndex = (currentIndex - 1 + pages.length) % pages.length;
    setCurrentPage(pages[prevIndex]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="pt-16">
        <AnimatePresence mode="wait">
          {currentPage === 'Home' && <HomePage key="home" />}
          {currentPage === 'Gallery' && <GalleryPage key="gallery" />}
          {currentPage === 'Activities' && <ActivitiesPage key="activities" />}
          {currentPage === 'About Us' && <AboutUsPage key="about" />}
        </AnimatePresence>
        
        <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
      </main>

      <Footer />
    </div>
  );
}
