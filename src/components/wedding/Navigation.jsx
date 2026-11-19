import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

const navItems = [
    { name: "Välkommen", href: "#welcome" },
    { name: "Schema", href: "#schema" },
    { name: "FAQs", href: "#faqs" },
    { name: "Resa & Boende", href: "#resa" },
    { name: "Presenter", href: "#presenter" },
    { name: "Extra Information", href: "#extra" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("welcome");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Find active section
            const sections = navItems.map(item => item.href.substring(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
                        : "bg-transparent py-6"
                }`}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <button
                            onClick={() => scrollToSection("#welcome")}
                            className="flex items-center gap-2 group"
                        >
                            <Heart className={`w-5 h-5 transition-colors ${
                                scrolled ? "text-[#c4a67c]" : "text-[#c4a67c]"
                            } fill-[#c4a67c]/30 group-hover:fill-[#c4a67c]/50`} />
                            <span className={`font-serif text-lg transition-colors ${
                                scrolled ? "text-[#4a4038]" : "text-[#4a4038]"
                            }`}>
                L & V
              </span>
                        </button>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`text-sm tracking-wide transition-colors relative ${
                                        scrolled ? "text-[#6d5f52] hover:text-[#4a4038]" : "text-[#6d5f52] hover:text-[#4a4038]"
                                    }`}
                                >
                                    {item.name}
                                    {activeSection === item.href.substring(1) && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-px bg-[#c4a67c]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden p-2 transition-colors ${
                                scrolled ? "text-[#4a4038]" : "text-[#4a4038]"
                            }`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-72 bg-[#fdfbf7] shadow-xl"
                        >
                            <div className="pt-24 px-8">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`block w-full text-left py-4 border-b border-[#e8ddd0] text-lg transition-colors ${
                                            activeSection === item.href.substring(1)
                                                ? "text-[#c4a67c] font-medium"
                                                : "text-[#6d5f52]"
                                        }`}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}