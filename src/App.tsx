import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Users, 
  Calendar, 
  CreditCard, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Clock, 
  TrendingUp, 
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Briefcase,
  Award,
  DollarSign,
  BriefcaseIcon,
  Handshake,
  Mic,
  Phone,
  ArrowRightCircle,
  FileText,
  AlertCircle,
  Send,
  Menu,
  X,
  ArrowRight,
  LayoutDashboard,
  Settings,
  Bell,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Smartphone,
  Shield,
  Upload,
  Video,
  FileVideo
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="60" height="60" rx="12" fill="#10b981" fillOpacity="0.1" />
    <path 
      d="M35 50 L45 60 L65 40" 
      stroke="#10b981" 
      strokeWidth="8" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = ({ onPanelClick }: { onPanelClick: (panel: 'privacy' | 'terms' | 'partner') => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePanelClick = (panel: 'privacy' | 'terms' | 'partner') => {
    setIsMobileMenuOpen(false);
    // Add a small delay to allow the mobile menu to close before opening the drawer
    setTimeout(() => {
      onPanelClick(panel);
    }, 300);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5 py-4" : "bg-transparent py-6"
    )}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <Logo className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" />
          <span className="text-lg font-bold text-white tracking-tight">TrackMark</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-gray-400">
          <a href="#features" className="hover:text-white transition-colors duration-300">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors duration-300">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors duration-300">FAQ</a>
          <button 
            onClick={() => onPanelClick('partner')}
            className="hover:text-emerald-neon transition-colors duration-300"
          >
            Partners
          </button>
          <a href="#lead-form" className="btn-primary py-2.5 px-6 rounded-xl">
            Get Free Setup
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 md:hidden flex flex-col items-center justify-center p-8 backdrop-blur-3xl"
          >
            <button 
              className="absolute top-6 right-6 text-white p-2" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              className="flex flex-col items-center gap-8 text-center"
            >
              {[
                { name: "Features", href: "#features" },
                { name: "Pricing", href: "#pricing" },
                { name: "FAQ", href: "#faq" }
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 10 }
                  }}
                  className="text-2xl font-semibold text-white hover:text-emerald-neon transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.button
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 }
                }}
                onClick={() => handlePanelClick('partner')}
                className="text-2xl font-semibold text-emerald-neon hover:text-white transition-colors"
              >
                Become a Partner
              </motion.button>

              <motion.a 
                href="#lead-form"
                variants={{
                  open: { opacity: 1, scale: 1 },
                  closed: { opacity: 0, scale: 0.95 }
                }}
                className="bg-emerald-neon text-black px-8 py-3 rounded-lg font-medium text-lg mt-4" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Setup
              </motion.a>

              {/* Legal Section in Mobile Menu */}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 }
                }}
                className="pt-8 border-t border-white/10 w-full max-w-[200px]"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4">Legal</p>
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={() => handlePanelClick('privacy')}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </button>
                  <button 
                    onClick={() => handlePanelClick('terms')}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const DashboardPreview = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 lg:mt-0">
      <div className="absolute -inset-10 bg-emerald-neon/5 blur-[120px] rounded-full opacity-30" />
      <div className="glass-card p-6 overflow-hidden relative border-white/5 shadow-2xl">
        {/* Mock Dashboard Header */}
        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-xl" />
            <div className="space-y-1.5">
              <div className="h-3 w-32 bg-white/5 rounded-full" />
              <div className="h-2 w-20 bg-white/5 rounded-full opacity-50" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
              <Bell size={14} className="text-gray-400" />
            </div>
            <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
              <Settings size={14} className="text-gray-400" />
            </div>
          </div>
        </div>
        
        {/* Mock Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Active Members', value: '1,284', color: 'text-emerald-neon' },
            { label: 'Monthly Revenue', value: '₹1,24,450', color: 'text-white' },
            { label: 'Attendance Today', value: '84%', color: 'text-emerald-neon' }
          ].map((stat, i) => (
            <div key={i} className="bg-white/[0.02] p-4 rounded-2xl border border-white/5">
              <p className="text-[9px] text-gray-500 uppercase tracking-wider mb-2 font-semibold">{stat.label}</p>
              <p className={cn("text-xl font-bold", stat.color)}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Mock Chart Area */}
        <div className="h-48 bg-white/[0.02] rounded-2xl border border-white/5 flex items-end justify-around p-6 gap-3">
          {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.5 + i * 0.05, duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              className="w-full bg-gradient-to-t from-emerald-neon/5 to-emerald-neon/40 rounded-t-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
    className="glass-card p-6 border-white/5 group relative overflow-hidden"
  >
    <div className="w-10 h-10 bg-emerald-neon/10 rounded-lg flex items-center justify-center mb-6 transition-all">
      <Icon className="text-emerald-neon w-5 h-5" />
    </div>
    <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base font-medium text-white group-hover:text-emerald-neon transition-colors duration-300">{question}</span>
        <div className={cn(
          "w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-emerald-neon/50 transition-all duration-300",
          isOpen && "bg-emerald-neon border-emerald-neon"
        )}>
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isOpen ? "rotate-180 text-black" : "text-gray-500")} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-gray-400 leading-relaxed max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FeatureItem = ({ text, included = false, className }: { text: string, included?: boolean, className?: string }) => (
  <li className={cn("flex items-center gap-3 text-sm transition-colors", included ? "text-gray-300" : "text-gray-600", className)}>
    {included ? (
      <CheckCircle2 className="text-emerald-neon w-4 h-4 flex-shrink-0" />
    ) : (
      <X className="text-gray-700 w-4 h-4 flex-shrink-0" />
    )}
    <span className={cn(!included && "line-through opacity-50")}>{text}</span>
  </li>
);

// --- Constants ---

  // --- Main Application Component ---
  // Refined for premium SaaS landing page experience
  export default function App() {
  const [isYearly, setIsYearly] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDisplayCount(1);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(2);
      } else {
        setDisplayCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev + 1;
        const maxIndex = 6 - displayCount;
        return next > maxIndex ? 0 : next;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [displayCount, isPaused]);

  const [formData, setFormData] = useState({
    fullName: '',
    gymName: '',
    phoneNumber: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPartnerSubmitted, setIsPartnerSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [partnerData, setPartnerData] = useState({
    fullName: '',
    phone: '',
    city: '',
    gymAccess: 'No',
    experience: '',
    motivation: ''
  });
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<'privacy' | 'terms' | 'refund' | 'partner' | 'partner-form' | null>(null);
  const [visibleFAQsCount, setVisibleFAQsCount] = useState(5);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const drawerContentRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when panel is open and reset drawer scroll
  useEffect(() => {
    if (activePanel) {
      document.body.style.overflow = 'hidden';
      // Reset scroll position of drawer content when it opens
      if (drawerContentRef.current) {
        drawerContentRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activePanel]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmissionError(null);
    
    try {
      const message = `Hi, I just applied for TrackMark Free Setup.\n\nName: ${formData.fullName}\nGym Name: ${formData.gymName}\nPhone: ${formData.phoneNumber}\nCity: ${formData.city}\n\nPlease find my details above. I will send my gym video here for verification.`;
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/+919372284941?text=${encodedMessage}`;

      // Show a brief loading state before redirecting
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      window.open(whatsappUrl, '_blank');
      
      setSubmittedData(formData);
      setIsSubmitted(true);
      setFormData({ fullName: '', gymName: '', phoneNumber: '', city: '' });
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmissionError('Something went wrong. Please try again or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMsg = `Hi, I have applied for the TrackMark Partner Program. Here are my details:\n\nName: ${partnerData.fullName}\nPhone: ${partnerData.phone}\nCity: ${partnerData.city}\nGym Access: ${partnerData.gymAccess}\nSales Experience: ${partnerData.experience}\nReason: ${partnerData.motivation}\n\nI will send a voice note shortly.`;
    const whatsappUrl = `https://wa.me/919372284941?text=${encodeURIComponent(whatsappMsg)}`;
    
    setIsPartnerSubmitted(true);
    setActivePanel(null); // Close panel to show success screen on landing page
    window.open(whatsappUrl, '_blank');
  };

  const handlePanelClose = () => {
    setActivePanel(null);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-neon selection:text-black">
      <Navbar onPanelClick={(panel) => {
        setIsPartnerSubmitted(false); // Reset success view if they open panel again
        setActivePanel(panel);
      }} />

      {/* Success View for Partner Program */}
      <AnimatePresence>
        {isPartnerSubmitted && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-20 overflow-y-auto bg-black/90 backdrop-blur-xl"
          >
            <div className="max-w-2xl w-full bg-[#0A0A0A] border border-white/10 rounded-[32px] p-8 md:p-12 text-center relative shadow-2xl">
              <button 
                onClick={() => setIsPartnerSubmitted(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="w-20 h-20 bg-emerald-neon/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-emerald-neon/20">
                <Mic className="w-10 h-10 text-emerald-neon" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Application Submitted Successfully</h2>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-10">
                <p>
                  To complete your application, please send a <span className="text-white font-semibold">voice note on WhatsApp</span> explaining TrackMark in 30–40 seconds.
                </p>
                <p>
                  This helps us evaluate your communication, clarity, and confidence.
                </p>
                <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5 text-sm italic">
                  "Our team is currently reviewing your request. Only candidates who are clear, fluent, and confident will be selected as partners."
                </div>
              </div>

              <button 
                onClick={() => setIsPartnerSubmitted(false)}
                className="btn-primary px-10 py-4 rounded-2xl mx-auto"
              >
                Got it
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 lg:pt-56 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-neon/5 blur-[120px] rounded-full pointer-events-none opacity-50" />
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-neon/10 border border-emerald-neon/20 text-emerald-neon text-[10px] font-bold uppercase tracking-widest mb-8">
                  <Zap className="w-3.5 h-3.5" />
                  Performance Management for Modern Gyms
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-white">
                  Run Your Gym Like a <span className="text-emerald-neon text-gradient">Business</span>
                </h1>
                <p className="text-base md:text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  The all-in-one operating system for fitness facilities. Track members, automate payments, and scale your brand with confidence.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a 
                    href="https://wa.me/919372284941?text=Hi%20I%20want%20to%20know%20more%20about%20TrackMark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                  <a 
                    href="#lead-form"
                    className="btn-secondary w-full sm:w-auto"
                  >
                    Get Free Setup
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 w-full max-w-2xl lg:max-w-none"
            >
              <DashboardPreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="section-padding bg-white/[0.01] relative overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-neon/5 blur-[120px] rounded-full pointer-events-none opacity-30" />
        
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">The Cost of Staying Static</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4">
              Don't let manual processes and outdated systems cap your growth potential.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: AlertCircle, title: "Missed Revenue", desc: "Untracked expirations mean lost membership dues every month." },
              { icon: Users, title: "Manual Overload", desc: "Hours wasted on spreadsheets instead of focusing on members." },
              { icon: BarChart3, title: "Vision Gap", desc: "Operating without real-time data on your retention and growth." },
              { icon: Clock, title: "Inefficient Flow", desc: "Slow check-ins and billing cycles that frustrate your staff." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 group neon-glow"
              >
                <div className="w-12 h-12 bg-red-400/5 rounded-2xl flex items-center justify-center mb-8 border border-red-400/10 transition-colors">
                  <item.icon className="text-red-400/60 w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        id="features" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="section-padding relative overflow-hidden bg-[#050505]"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight text-white">
              Everything You Need <br/>to <span className="text-emerald-neon text-gradient">Dominate</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
              Powerful tools engineered to simplify complex operations and maximize member retention.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              { 
                icon: ShieldCheck, 
                title: "Smart Access Control", 
                desc: "Secure your facility with automated entry tracking and QR-based member check-ins." 
              },
              { 
                icon: Zap, 
                title: "Automated Renewals", 
                desc: "Say goodbye to manual tracking. Automated invoices and payment reminders sent on autopilot." 
              },
              { 
                icon: Smartphone, 
                title: "Branded Experience", 
                desc: "Give your members a premium feel with a dedicated web app for progress tracking and renewals." 
              },
              { 
                icon: Users, 
                title: "Staff Performance", 
                desc: "Manage your team, assign roles, and track attendance with built-in staff dashboards." 
              },
              { 
                icon: BarChart3, 
                title: "Growth Analytics", 
                desc: "Make data-driven decisions with real-time insights into revenue, growth, and retention." 
              },
              { 
                icon: Shield, 
                title: "Enterprise Grade", 
                desc: "Your business data is protected with bank-standard encryption and daily cloud backups." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-neon/20 transition-all duration-500 shadow-xl neon-glow"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-neon/10 flex items-center justify-center mb-8 group-hover:bg-emerald-neon/20 transition-all duration-500 border border-emerald-neon/10 group-hover:scale-110 shadow-lg shadow-emerald-neon/5">
                  <feature.icon className="w-5 h-5 text-emerald-neon" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-neon transition-colors tracking-tight leading-tight">{feature.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Pricing Section */}
      <motion.section 
        id="pricing" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="section-padding relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08)_0%,transparent_50%)] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">Simple, Professional Pricing</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">Flexible plans designed to grow alongside your fitness business.</p>
            
            {/* Toggle Switch */}
            <div className="mt-12 flex items-center justify-center gap-6">
              <span className={cn("text-xs font-bold uppercase tracking-widest transition-colors duration-300", !isYearly ? "text-white" : "text-gray-600")}>Monthly</span>
              <button 
                onClick={() => setIsYearly(!isYearly)}
                className="w-14 h-7 bg-white/5 rounded-full p-1 relative transition-all border border-white/10 hover:border-white/20"
              >
                <motion.div 
                  animate={{ x: isYearly ? 28 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-5 h-5 bg-emerald-neon rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                />
              </button>
              <div className="flex items-center gap-4">
                <span className={cn("text-xs font-bold uppercase tracking-widest transition-colors duration-300", isYearly ? "text-white" : "text-gray-600")}>Yearly</span>
                <span className="bg-emerald-neon/10 text-emerald-neon text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-neon/20 shadow-lg shadow-emerald-neon/5">
                  Save 15%
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-7xl mx-auto">
            {/* Starter Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 md:p-10 border-white/5 flex flex-col group rounded-3xl"
            >
              <div className="mb-10">
                <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mb-4">Essentials</div>
                <h3 className="text-3xl font-bold mb-4 text-white">Starter</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                    ₹{isYearly ? "12,999" : "1,499"}
                  </span>
                  <span className="text-gray-600 text-sm font-medium">/{isYearly ? "yr" : "mo"}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">Ideal for small private studios and boutiques.</p>
              </div>
              
              <div className="space-y-10 mb-12 flex-grow">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">Membership Features</h4>
                  <ul className="space-y-5">
                    <FeatureItem text="Up to 100 Members" included />
                    <FeatureItem text="Standard Dashboard" included />
                    <FeatureItem text="QR Attendance Tracking" included />
                    <FeatureItem text="Manual Renewals" included />
                    <FeatureItem text="Basic Analytics" included />
                  </ul>
                </div>
              </div>

              <a 
                href="https://wa.me/919372284941?text=Hi%2C%20I'm%20interested%20in%20the%20TrackMark%20Starter%20plan." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-4 text-[13px] hover:scale-[1.03] transition-transform"
              >
                Get Started
              </a>
            </motion.div>

            {/* Growth Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 md:p-10 border-emerald-neon/20 relative flex flex-col z-10 bg-emerald-neon/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:scale-[1.05] rounded-3xl"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-neon text-black text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl shadow-emerald-neon/20 ring-4 ring-[#050505] z-20">
                Most Popular
              </div>
              
              <div className="mb-10">
                <div className="text-emerald-neon/60 text-[10px] font-bold uppercase tracking-widest mb-4">Best Value</div>
                <h3 className="text-4xl font-bold mb-4 text-white">Growth</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                    ₹{isYearly ? "32,999" : "3,499"}
                  </span>
                  <span className="text-gray-600 text-sm font-medium">/{isYearly ? "yr" : "mo"}</span>
                </div>
                {isYearly && <div className="text-emerald-neon text-[11px] font-bold mb-4 bg-emerald-neon/10 w-fit px-3 py-1 rounded-full border border-emerald-neon/20">Save ₹9,000 annually</div>}
                <p className="text-gray-300 text-sm leading-relaxed font-medium">Complete management system for scaling gyms.</p>
              </div>

              <div className="space-y-10 mb-12 flex-grow text-left">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-neon/60 mb-6">Advanced Features</h4>
                  <ul className="space-y-5">
                    <FeatureItem text="Up to 500 Members" included className="text-white/90" />
                    <FeatureItem text="Pro Dashboard with Insights" included className="text-white/90" />
                    <FeatureItem text="Automated WhatsApp Renewals" included className="text-white/90" />
                    <FeatureItem text="Smart Payment Reminders" included className="text-white/90" />
                    <FeatureItem text="Retention Analytics" included className="text-white/90" />
                  </ul>
                </div>
              </div>

              <a 
                href="https://wa.me/919372284941?text=Hi%2C%20I'm%20interested%20in%20the%20TrackMark%20Growth%20plan." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-5 text-[13px] shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:scale-[1.03] transition-all"
              >
                Get Started
              </a>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8 md:p-10 border-white/5 flex flex-col group rounded-3xl"
            >
              <div className="mb-10">
                <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mb-4">Full Control</div>
                <h3 className="text-3xl font-bold mb-4 text-white">Enterprise</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                    ₹{isYearly ? "47,999" : "4,999"}
                  </span>
                  <span className="text-gray-600 text-sm font-medium">/{isYearly ? "yr" : "mo"}</span>
                </div>
                {isYearly && <div className="text-white/40 text-[11px] font-bold mb-4 italic">Best for Large Clubs</div>}
                <p className="text-gray-400 text-sm leading-relaxed font-medium">For business owners running multiple locations.</p>
              </div>

              <div className="space-y-10 mb-12 flex-grow">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">Business Intelligence</h4>
                  <ul className="space-y-5">
                    <FeatureItem text="Unlimited Members" included />
                    <FeatureItem text="Multi-Branch Management" included className="font-bold text-white" />
                    <FeatureItem text="Custom WhatsApp Flows" included />
                    <FeatureItem text="Staff KPI Dashboard" included />
                    <FeatureItem text="Branded Client Portal" included />
                  </ul>
                </div>
              </div>

              <a 
                href="mailto:support.trackmark@gmail.com?subject=Enterprise%20Plan%20Inquiry&body=Hi%2C%0A%0AI%27m%20interested%20in%20the%20TrackMark%20Enterprise%20plan.%20Please%20share%20more%20details%20about%20features%2C%20pricing%2C%20and%20setup.%0A%0AThanks" 
                className="btn-secondary w-full py-4 text-[13px] hover:scale-[1.03] transition-transform"
              >
                Contact Sales
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding relative overflow-hidden bg-black mt-10 md:mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0%,transparent_70%)] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">Why Gym Owners Choose Us</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              We focus on the metrics that matter for your business growth and operational efficiency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <TrendingUp className="w-6 h-6 text-emerald-neon" />,
                value: "30%",
                label: "Revenue Increase",
                desc: "By reducing missed renewals and churn through automated follow-ups."
              },
              {
                icon: <Clock className="w-6 h-6 text-emerald-neon" />,
                value: "15h",
                label: "Weekly Time Saved",
                desc: "Through automated admin, tracking, and member management."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-emerald-neon" />,
                value: "100%",
                label: "Business Control",
                desc: "Total visibility into every aspect of your gym from a single dashboard."
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-neon/10 flex items-center justify-center mb-8 border border-emerald-neon/20 group-hover:border-emerald-neon/40 transition-colors">
                  {benefit.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                  {benefit.value}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{benefit.label}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-black border-y border-white/5 relative overflow-hidden">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">What Gym Owners Say About Us</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">Share your feedback so it can be featured here.</p>
          </motion.div>
          <div 
            className="relative max-w-6xl mx-auto px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Carousel Container */}
            <div className="overflow-hidden py-4">
              <div 
                className="flex transition-transform duration-700 ease-in-out gap-6"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / displayCount)}%)`,
                }}
              >
                {[
                  { name: "Alex Rivera", gym: "Iron Forge MMA", text: "TrackMark changed how we handle renewals. We haven't missed a single payment in 6 months." },
                  { name: "Sarah Chen", gym: "Zenith Fitness", text: "The attendance tracking is a game changer. I can finally see which classes are actually profitable." },
                  { name: "Marcus Thorne", gym: "Elite Combat Club", text: "Setup was incredibly fast. The team migrated all our Google Sheets data in one afternoon." },
                  { name: "Elena Rossi", gym: "Pulse Yoga Studio", text: "Finally, a platform that understands boutique fitness. Our member retention has increased by 20%." },
                  { name: "David Miller", gym: "Iron Bound CrossFit", text: "The automated billing alone saved me 10 hours a week. It's the best investment we made this year." },
                  { name: "Sofia Gonzalez", gym: "Bloom Pilates", text: "Our instructors love the simple dashboard. Checking in members takes seconds, not minutes." }
                ].map((t, i) => (
                  <div 
                    key={i}
                    className="shrink-0"
                    style={{ width: `calc(${100 / displayCount}% - ${(6 * (displayCount - 1)) / displayCount}px)` }}
                  >
                    <div className="glass-card p-8 border-white/5 relative group rounded-3xl h-full flex flex-col">
                      <div className="mb-6 text-emerald-neon/40 flex gap-1">
                        {[...Array(5)].map((_, starIndex) => <Zap key={starIndex} size={12} fill="currentColor" />)}
                      </div>
                      <p className="mb-8 relative z-10 text-base md:text-lg leading-relaxed font-medium text-gray-300 italic flex-grow">"{t.text}"</p>
                      <div className="flex items-center gap-4 not-italic relative z-10 border-t border-white/5 pt-6 mt-auto">
                        <div className="w-12 h-12 bg-emerald-neon/10 rounded-xl border border-emerald-neon/20 flex items-center justify-center font-bold text-emerald-neon shadow-lg shadow-emerald-neon/5">
                          {t.name[0]}
                        </div>
                        <div>
                          <p className="text-base font-bold text-white tracking-tight leading-tight">{t.name}</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-neon/80 mt-1">{t.gym}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              className={`absolute left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-emerald-neon hover:bg-white/10 transition-all z-20 ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCurrentIndex(prev => Math.min(6 - displayCount, prev + 1))}
              className={`absolute right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-emerald-neon hover:bg-white/10 transition-all z-20 ${currentIndex >= 6 - displayCount ? 'opacity-20 cursor-not-allowed' : 'opacity-100'}`}
              disabled={currentIndex >= 6 - displayCount}
            >
              <ChevronRight size={24} />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-10 gap-3">
              {[...Array(7 - displayCount)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-emerald-neon shadow-[0_0_10px_rgba(0,255,163,0.5)]' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919372284941?text=Hi%2C%20I%20want%20to%20share%20my%20experience%20with%20TrackMark."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto px-10 py-5 rounded-2xl shadow-xl shadow-emerald-neon/10 hover:shadow-emerald-neon/20 transition-all font-bold flex items-center justify-center gap-3"
            >
              <MessageSquare className="w-5 h-5" />
              Share Your Feedback
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section 
        id="faq" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="section-padding bg-white/[0.01] relative overflow-hidden"
      >
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">Frequently Asked Questions</h2>
              <p className="text-gray-400 text-sm md:text-base uppercase tracking-[0.2em] font-bold opacity-60">Everything you need to know about the platform.</p>
            </div>
            
            <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
              <AnimatePresence mode="popLayout">
                  {[
                    {
                      question: "Is TrackMark suitable for small gyms?",
                      answer: "Absolutely. TrackMark is designed to scale. Whether you have 50 members or 5,000, our system adapts to your needs without overwhelming you with complexity."
                    },
                    {
                      question: "How long does setup take?",
                      answer: "Most facilities are up and running within 24-48 hours. Our team handles the heavy lifting, including data migration and initial configuration."
                    },
                    {
                      question: "Do I need technical knowledge?",
                      answer: "Not at all. If you can use a smartphone, you can use TrackMark. We've built the UI to be intuitive and user-friendly for both owners and staff."
                    },
                    {
                      question: "Can I track payments and attendance together?",
                      answer: "Yes, they are fully integrated. You can even set it up so members can't check in if their membership has expired or they have pending dues."
                    },
                    {
                      question: "Is support included?",
                      answer: "Yes, premium support is included in all our plans. You'll have a dedicated account manager to help you with any questions or custom needs."
                    },
                    {
                      question: "Can I use TrackMark on multiple devices?",
                      answer: "Yes, TrackMark is a cloud-based platform. You can access your dashboard from any device with an internet connection, including smartphones, tablets, and computers."
                    },
                    {
                      question: "Is my data secure?",
                      answer: "We take data security very seriously. TrackMark uses industry-standard encryption and secure cloud storage to ensure your business and member data is always protected."
                    },
                    {
                      question: "Can I export my data if I decide to leave?",
                      answer: "Yes, you own your data. You can export member lists, payment history, and attendance records at any time in standard formats like CSV or Excel."
                    },
                    {
                      question: "Do you offer staff training?",
                      answer: "Yes, we provide comprehensive onboarding and training for you and your staff to ensure everyone is comfortable using the system from day one."
                    },
                    {
                      question: "What happens if I have a technical issue?",
                      answer: "Our support team is available via WhatsApp and email to help you resolve any technical issues quickly. Enterprise plan users also get priority support."
                    }
                  ].slice(0, visibleFAQsCount).map((faq) => (
                    <motion.div
                      key={faq.question}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      layout
                    >
                      <FAQItem 
                        question={faq.question}
                        answer={faq.answer}
                      />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
            
            <div className="mt-16 text-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (visibleFAQsCount >= 10) {
                    setVisibleFAQsCount(5);
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setVisibleFAQsCount(prev => Math.min(prev + 5, 10));
                  }
                }}
                className="btn-secondary px-10 py-4 text-[13px] flex items-center gap-3 mx-auto"
              >
                {visibleFAQsCount >= 10 ? "Show Less" : "Load More Questions"}
                <motion.div
                  animate={{ rotate: visibleFAQsCount >= 10 ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Lead Form Section */}
      <motion.section 
        id="lead-form" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="section-padding relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-10 md:p-20 border-white/5 relative overflow-hidden text-center md:text-left">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-neon/5 blur-[120px] rounded-full pointer-events-none" />
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-emerald-neon/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-neon/20 shadow-2xl shadow-emerald-neon/10">
                    <CheckCircle2 className="text-emerald-neon w-10 h-10" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight">Application Received</h2>
                  <div className="space-y-6 text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
                    <p>We've received your inquiry! To guarantee your spot and begin the setup process, please connect with our team on WhatsApp.</p>
                    <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/5 text-left shadow-inner">
                      <p className="font-bold text-white mb-6 text-xs uppercase tracking-[0.2em]">Required Verification Step:</p>
                      <ul className="space-y-4 text-sm font-medium">
                        <li className="flex items-center gap-4 group">
                          <div className="w-2 h-2 rounded-full bg-emerald-neon shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                          Send a 5-10 second video of your gym facility
                        </li>
                        <li className="flex items-center gap-4 group">
                          <div className="w-2 h-2 rounded-full bg-emerald-neon shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                          Confirm your preferred onboarding date
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm italic opacity-60">
                      Note: Verification helps us maintain a high-quality community of real gym owners.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-6">
                    <a 
                      href="https://wa.me/919372284941"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-12 py-5"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Secure My Spot on WhatsApp
                    </a>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold text-gray-500 hover:text-white transition-all uppercase tracking-widest py-2 border-b border-transparent hover:border-gray-500"
                    >
                      Return to form
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-[520px] mx-auto"
                >
                  <div className="glass-card p-6 md:p-8 bg-white/[0.03] border-white/10 rounded-2xl shadow-xl">
                    <div className="text-center mb-10">
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-white leading-tight">Apply for Your <span className="text-emerald-neon">Free Setup</span></h2>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Join elite facilities using TrackMark to automate growth.
                      </p>
                    </div>

                    <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-5">
                      {submissionError && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-4 mb-6"
                        >
                          <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-red-200 font-medium">{submissionError}</p>
                        </motion.div>
                      )}
                      
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Full Name</label>
                          <input
                            required
                            type="text"
                            placeholder="Rahul Sharma"
                            className="w-full h-11 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus:border-emerald-neon focus:bg-white/[0.05] outline-none transition-all text-sm text-white placeholder:text-gray-600"
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Gym Name</label>
                          <input
                            required
                            type="text"
                            placeholder="Iron Fitness Club"
                            className="w-full h-11 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus:border-emerald-neon focus:bg-white/[0.05] outline-none transition-all text-sm text-white placeholder:text-gray-600"
                            value={formData.gymName}
                            onChange={(e) => setFormData({...formData, gymName: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Phone Number</label>
                          <input
                            required
                            type="tel"
                            placeholder="9876543210"
                            className="w-full h-11 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus:border-emerald-neon focus:bg-white/[0.05] outline-none transition-all text-sm text-white placeholder:text-gray-600"
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Location / City</label>
                          <input
                            required
                            type="text"
                            placeholder="Mumbai"
                            className="w-full h-11 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus:border-emerald-neon focus:bg-white/[0.05] outline-none transition-all text-sm text-white placeholder:text-gray-600"
                            value={formData.city}
                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="pt-6 space-y-4 border-t border-white/5">
                        <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-medium">
                          To complete your free trial request, you will be redirected to WhatsApp after submission. Kindly share a short 5–10 second video of your gym to help us verify your application.
                        </p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                          Only genuine gym setups will be approved for free access.
                        </p>
                      </div>

                      <div className="pt-2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                          type="submit"
                          className="w-full h-12 bg-emerald-neon text-black rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-emerald-neon/10 hover:shadow-emerald-neon/30 disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Get Free Setup
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </motion.button>
                        
                        <p className="mt-6 text-[10px] text-gray-500 leading-relaxed text-center font-medium px-4">
                          We review every application manually.
                        </p>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="container-custom relative z-10 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white tracking-tight leading-tight">Stop Losing Members. <br />Start Scaling Your Gym.</h2>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#lead-form"
            className="inline-flex items-center gap-4 bg-emerald-neon text-black px-12 py-5 rounded-xl font-bold text-lg hover:bg-emerald-neon/90 transition-all shadow-2xl shadow-emerald-neon/30"
          >
            Get Started Now
            <ArrowRight className="w-6 h-6" />
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-neon/5 blur-[150px] rounded-full pointer-events-none opacity-20" />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-2.5 group cursor-pointer">
                <Logo className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" />
                <span className="text-xl font-bold text-white tracking-tight">TrackMark</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Empowering modern fitness facilities with enterprise-grade management tools. Built for scale, engineered for reliability.
              </p>
              
              <a 
                href="https://wa.me/919372284941?text=Hi%20TrackMark%20team%2C%20I%20would%20like%20to%20share%20my%20feedback%20about%20my%20experience."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-2.5 px-6 rounded-xl text-[12px] inline-flex items-center gap-2 group/feedback w-fit"
              >
                Share Feedback
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/feedback:translate-x-1" />
              </a>

              <div className="flex items-center gap-5">
                {[
                  { Icon: MessageCircle, href: "https://wa.me/+919372284941" },
                  { Icon: Instagram, href: "https://www.instagram.com/trackmark.io" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-emerald-neon hover:border-emerald-neon/30 hover:bg-emerald-neon/5 transition-all">
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-sm text-gray-500 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-sm text-gray-500 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-sm text-gray-500 hover:text-white transition-colors">FAQ</a></li>
                <li><button onClick={() => setActivePanel('partner')} className="text-sm text-emerald-neon font-semibold hover:text-white transition-all text-left">Become a Partner</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Legal</h4>
              <ul className="space-y-4">
                <li><button onClick={() => setActivePanel('privacy')} className="text-sm text-gray-500 hover:text-white transition-all text-left">Privacy Policy</button></li>
                <li><button onClick={() => setActivePanel('terms')} className="text-sm text-gray-500 hover:text-white transition-all text-left">Terms of Service</button></li>
                <li><button onClick={() => setActivePanel('refund')} className="text-sm text-gray-500 hover:text-white transition-all text-left">Refund Policy</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Contact</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-emerald-neon mt-0.5" />
                  <a href="mailto:support.trackmark@gmail.com" className="text-sm text-gray-500 hover:text-white transition-colors">
                    support.trackmark@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-4 h-4 text-emerald-neon mt-0.5" />
                  <span className="text-sm text-gray-500 leading-relaxed uppercase tracking-widest text-[9px] font-bold">Mumbai, Maharashtra,<br/>India</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-[11px] font-medium text-gray-600 uppercase tracking-widest">
              2026 TRACKMARK . ALL RIGHTS RESERVED
            </p>
            <div className="flex items-center gap-3 py-2 px-6 rounded-full bg-white/[0.02] border border-white/5 shadow-inner">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-neon animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">System Status: Operational</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Side Panel Widget */}
      <AnimatePresence>
        {activePanel && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePanel(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            />
            
            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#050505] border-l border-white/10 z-[9999] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0">
                <h3 className="text-lg font-bold text-white tracking-tight uppercase tracking-[0.1em] text-[13px]">
                  {activePanel === 'partner' || activePanel === 'partner-form'
                    ? 'Partner Program'
                    : activePanel === 'privacy' 
                      ? 'Privacy Policy' 
                      : activePanel === 'refund' 
                        ? 'Refund Policy' 
                        : 'Terms of Service'}
                </h3>
                <button 
                  onClick={() => setActivePanel(null)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div 
                ref={drawerContentRef}
                className="flex-grow overflow-y-auto p-6 md:p-8 custom-scrollbar pt-8 pb-12"
              >
                <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-400">
                  {activePanel === 'partner' ? (
                    <div className="space-y-12 pb-10">
                      <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">TrackMark <span className="text-emerald-neon">Partner Program</span></h2>
                        <p className="text-lg text-gray-300 font-medium">Earn by helping gyms grow with automation</p>
                      </div>

                      <div className="grid gap-10">
                        <section className="space-y-6 bg-white/[0.02] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-neon/5 blur-3xl rounded-full -mr-16 -mt-16" />
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-neon/10 flex items-center justify-center border border-emerald-neon/20 shadow-lg shadow-emerald-neon/5 group-hover:scale-110 transition-transform duration-500">
                              <BriefcaseIcon className="w-6 h-6 text-emerald-neon" />
                            </div>
                            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm">ROLE & RESPONSIBILITY</h4>
                          </div>
                          <ul className="space-y-5 text-[15px]">
                            {[
                              "Connect with gym owners in your local area and identify operational gaps.",
                              "Introduce TrackMark and explain how automation solves their biggest challenges.",
                              "Educate gym owners on the benefits of the verification system.",
                              "Independently close the deal or forward highly qualified leads to our core team."
                            ].map((item, i) => (
                              <li key={i} className="flex items-start gap-4 text-gray-400 group/item">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-neon mt-2 shrink-0 group-hover/item:scale-150 transition-transform" />
                                <p className="leading-relaxed group-hover/item:text-gray-200 transition-colors">{item}</p>
                              </li>
                            ))}
                          </ul>
                        </section>

                        <section className="space-y-6 bg-white/[0.02] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 blur-3xl rounded-full -mr-16 -mt-16" />
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-400/10 flex items-center justify-center border border-blue-400/20 shadow-lg shadow-blue-400/5 group-hover:scale-110 transition-transform duration-500">
                              <CheckCircle2 className="w-6 h-6 text-blue-400" />
                            </div>
                            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm">REQUIREMENTS</h4>
                          </div>
                          <ul className="space-y-5 text-[15px]">
                            <li className="flex items-start gap-4 text-gray-400">
                              <CheckCircle2 className="w-5 h-5 text-emerald-neon mt-0.5 shrink-0" />
                              <p className="leading-relaxed">Exceptional communication and <span className="text-white/90">persuasive speaking skills</span>.</p>
                            </li>
                            <li className="flex items-start gap-4 text-gray-400">
                              <CheckCircle2 className="w-5 h-5 text-emerald-neon mt-0.5 shrink-0" />
                              <p className="leading-relaxed">Physically active presence – ready to visit gym clusters in person.</p>
                            </li>
                            <li className="flex items-start gap-4 text-gray-400">
                              <CheckCircle2 className="w-5 h-5 text-emerald-neon mt-0.5 shrink-0" />
                              <p className="leading-relaxed">Fundamental understanding of B2B sales cycles.</p>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-blue-400/5 rounded-2xl border border-blue-400/10 text-blue-300 font-medium italic">
                              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                              <p>Serious applicants only. We do not accept casual or trial users.</p>
                            </li>
                          </ul>
                        </section>

                        <section className="space-y-6 bg-white/[0.02] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/5 blur-3xl rounded-full -mr-16 -mt-16" />
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-red-400/10 flex items-center justify-center border border-red-400/20 shadow-lg shadow-red-400/5 group-hover:scale-110 transition-transform duration-500">
                              <ShieldCheck className="w-6 h-6 text-red-400" />
                            </div>
                            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm">RULES & CONDITIONS</h4>
                          </div>
                          <div className="space-y-4">
                            <p className="text-[13px] text-gray-500 italic flex items-center gap-2">
                              <AlertCircle className="w-3.5 h-3.5" />
                              Please read carefully before applying
                            </p>
                            <ul className="space-y-3 text-[13px] text-gray-500">
                              <li className="flex gap-3 items-start"><span className="text-red-400/50">•</span> <span>Fake or simulated leads will result in <span className="text-white/60 font-medium">immediate disqualification</span>.</span></li>
                              <li className="flex gap-3 items-start"><span className="text-red-400/50">•</span> <span>Payments are released only for verified qualified leads or closed contracts.</span></li>
                              <li className="flex gap-3 items-start"><span className="text-red-400/50">•</span> <span>Misleading clients or making false commitments is strictly prohibited.</span></li>
                              <li className="flex gap-3 items-start"><span className="text-red-400/50">•</span> <span>TrackMark reserves absolute right to reject partners at our discretion.</span></li>
                              <li className="flex gap-3 items-start"><span className="text-red-400/50">•</span> <span><span className="text-white/60 font-medium">Performance will be monitored</span> through continuous reviews.</span></li>
                            </ul>
                          </div>
                        </section>

                        <section className="space-y-8">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-purple-400/10 flex items-center justify-center border border-purple-400/20 shadow-lg shadow-purple-400/5">
                              <TrendingUp className="w-6 h-6 text-purple-400" />
                            </div>
                            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm">SELECTION PROCESS</h4>
                          </div>
                          <div className="space-y-6 relative ml-6">
                            <div className="absolute left-[-1.5rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-emerald-neon/50 via-emerald-neon/20 to-transparent" />
                            {[
                              { title: "Fill application form", desc: "Submit your basic profile details" },
                              { title: "Submit details", desc: "Complete the digital application flow" },
                              { title: "Voice note verification", desc: "Send a clarity check on WhatsApp" },
                              { title: "Internal Review", desc: "We evaluate your communication & clarity" },
                              { title: "Onboarding", desc: "Selected partners get access to tools & resources" }
                            ].map((item, i) => (
                              <div key={i} className="flex gap-5 items-start relative group/step">
                                <div className="w-8 h-8 rounded-full bg-[#0A0A0A] border border-emerald-neon/30 text-emerald-neon text-xs font-bold flex items-center justify-center shrink-0 absolute left-[-2.5rem] bg-black group-hover/step:bg-emerald-neon group-hover/step:text-black transition-all duration-300">
                                  {i + 1}
                                </div>
                                <div className="pt-0.5">
                                  <h5 className="text-white font-bold text-[15px] group-hover/step:text-emerald-neon transition-colors">{item.title}</h5>
                                  <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>
                      </div>

                      <div className="pt-10 flex flex-col items-center gap-6">
                        <button 
                          onClick={() => setActivePanel('partner-form')}
                          className="btn-primary w-full py-6 text-lg font-bold shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] transition-all flex items-center justify-center gap-3"
                        >
                          Apply as Partner
                          <ArrowRightCircle className="w-6 h-6" />
                        </button>
                        <p className="text-[11px] text-gray-600 uppercase tracking-[0.3em] font-bold">Only selected candidates will be onboarded</p>
                      </div>
                    </div>
                  ) : activePanel === 'partner-form' ? (
                    <div className="space-y-10 pb-10">
                      <div className="space-y-2">
                        <button 
                          onClick={() => setActivePanel('partner')}
                          className="text-emerald-neon flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:translate-x-[-4px] transition-transform"
                        >
                          <ChevronDown className="w-4 h-4 rotate-90" />
                          Back to details
                        </button>
                        <h2 className="text-2xl font-bold text-white mt-4">Partner Application Form</h2>
                        <p className="text-gray-400">Tell us about yourself and your reach.</p>
                      </div>

                      <form onSubmit={handlePartnerSubmit} className="space-y-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Full Name</label>
                            <input 
                              required
                              type="text"
                              value={partnerData.fullName}
                              onChange={(e) => setPartnerData({...partnerData, fullName: e.target.value})}
                              placeholder="e.g. John Doe"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-emerald-neon/50 focus:bg-white/[0.05] transition-all"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">WhatsApp Number</label>
                            <input 
                              required
                              type="tel"
                              value={partnerData.phone}
                              onChange={(e) => setPartnerData({...partnerData, phone: e.target.value})}
                              placeholder="e.g. +91 98765 43210"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-emerald-neon/50 focus:bg-white/[0.05] transition-all"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">City</label>
                            <input 
                              required
                              type="text"
                              value={partnerData.city}
                              onChange={(e) => setPartnerData({...partnerData, city: e.target.value})}
                              placeholder="Enter your base city"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-emerald-neon/50 focus:bg-white/[0.05] transition-all"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Do you have access to local gyms?</label>
                            <div className="flex gap-4">
                              {['Yes', 'No'].map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => setPartnerData({...partnerData, gymAccess: option})}
                                  className={`flex-1 py-4 rounded-2xl border text-sm font-semibold transition-all ${
                                    partnerData.gymAccess === option 
                                      ? 'bg-emerald-neon border-emerald-neon text-black shadow-lg shadow-emerald-neon/10' 
                                      : 'bg-white/[0.03] border-white/10 text-white/60 hover:border-white/20'
                                  }`}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Sales Experience</label>
                            <textarea 
                              required
                              rows={3}
                              value={partnerData.experience}
                              onChange={(e) => setPartnerData({...partnerData, experience: e.target.value})}
                              placeholder="Briefly describe your sales background..."
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-emerald-neon/50 focus:bg-white/[0.05] transition-all resize-none"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">Why should we select you?</label>
                            <textarea 
                              required
                              rows={3}
                              value={partnerData.motivation}
                              onChange={(e) => setPartnerData({...partnerData, motivation: e.target.value})}
                              placeholder="What makes you a great partner for TrackMark?"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-emerald-neon/50 focus:bg-white/[0.05] transition-all resize-none"
                            />
                          </div>
                        </div>

                        <button 
                          type="submit"
                          className="btn-primary w-full py-5 text-lg group"
                        >
                          Submit Details
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    </div>
                  ) : activePanel === 'privacy' ? (
                    <>
                      <p className="text-white font-medium">We value your privacy and are committed to protecting your data.</p>
                      
                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">1. Information We Collect</h4>
                        <p>We collect basic information such as your name, phone number, gym name, and location when you fill out our forms or contact us. This information is required to understand your business and provide our services effectively.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">2. How We Use Your Information</h4>
                        <p>Your data is used strictly for:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Communication regarding your inquiry</li>
                          <li>Setting up and onboarding your gym dashboard</li>
                          <li>Providing customer support</li>
                          <li>Improving our services</li>
                        </ul>
                        <p>We do not use your information for unrelated marketing without your consent.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">3. Data Protection</h4>
                        <p>We take appropriate security measures to protect your information from unauthorized access, misuse, or disclosure. Your data is stored securely and only accessible to authorized personnel.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">4. No Data Sharing</h4>
                        <p>We do not sell, rent, or share your personal or business data with third parties unless required by law.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">5. Media & File Uploads</h4>
                        <p>Any files uploaded (such as gym verification videos) are used only for verification purposes and are not shared publicly or used for marketing without permission.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">6. User Responsibility</h4>
                        <p>You are responsible for providing accurate and updated information. Incorrect data may affect service quality.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">7. Consent</h4>
                        <p>By submitting your details, you agree to the collection and use of your data as described in this policy.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">8. Updates</h4>
                        <p>We may update this policy from time to time. Continued use of our services implies acceptance of the updated policy.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">9. Contact</h4>
                        <p>You can reach out through our official contact channels for any privacy concerns.</p>
                      </section>

                      <p className="text-xs pt-4 border-t border-white/5">Last updated: April 2026</p>
                    </>
                  ) : (
                    <>
                      <p className="text-white font-medium">By using TrackMark services, you agree to the following terms:</p>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">1. Service Agreement</h4>
                        <p>TrackMark provides gym management systems based on selected plans (Starter, Growth, Enterprise). Features vary accordingly.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">2. Payments & Billing</h4>
                        <p>All plans are prepaid. Services are activated only after successful payment. Payments are non-refundable once service is initiated.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">3. Free Trial Policy</h4>
                        <p>Free trial access is granted only after verification. We reserve the right to approve or reject any request.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">4. User Responsibilities</h4>
                        <p>Users must:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Provide accurate information</li>
                          <li>Use the system responsibly</li>
                          <li>Avoid misuse or illegal activity</li>
                        </ul>
                        <p>Violation may result in suspension or termination.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">5. Service Modifications</h4>
                        <p>We may update features, pricing, or system functionality at any time to improve service quality.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">6. Downtime</h4>
                        <p>We aim for reliability but are not liable for temporary downtime or technical issues.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">7. Data Responsibility</h4>
                        <p>Users are responsible for the accuracy and management of their data within the system.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">8. Termination</h4>
                        <p>We reserve the right to suspend or terminate services in case of misuse or policy violations.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">9. Support</h4>
                        <p>Support is provided based on the selected plan. Higher-tier plans receive priority support.</p>
                      </section>

                      <section className="space-y-3">
                        <h4 className="text-white font-semibold">10. Agreement</h4>
                        <p>By using our services, you confirm that you agree to these terms.</p>
                      </section>

                      <p className="text-xs pt-4 border-t border-white/5">Last updated: April 2026</p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sticky WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        href="https://wa.me/+919372284941?text=Hi%20I%20want%20to%20know%20more%20about%20TrackMark"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#25D366]/40 transition-shadow"
      >
        <MessageCircle className="text-white w-8 h-8 fill-white" />
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
        </div>
      </motion.a>
    </div>
  );
}
