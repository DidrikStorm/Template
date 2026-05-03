import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import coupleImg from "/src/components/IMG-20260414-WA0006.jpg";

export default function WelcomeHero() {
    return (
        <section id="welcome" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] to-[#f7f3ed]">
            {/* Photo on the right side, behind content */}
            <div className="absolute inset-y-0 right-0 w-1/2 z-0">
                <img
                    src={coupleImg}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ filter: "sepia(40%) saturate(60%) brightness(1.05) hue-rotate(10deg)" }}
                />
                {/* Fade left edge to blend with background */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #fdfbf7 0%, rgba(253,251,247,0.4) 40%, rgba(253,251,247,0.1) 100%)" }} />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#d4c4b0]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-32 right-20 w-48 h-48 bg-[#c9b8a8]/20 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-10 w-24 h-24 bg-[#e8ddd0]/30 rounded-full blur-2xl" />
            </div>

            <div className="container mx-auto px-6 py-20 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center"
                >
                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="w-24 h-px bg-gradient-to-r from-transparent via-[#b8a89a] to-transparent mx-auto mb-8"
                    />

                    {/* Pre-heading */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-[#8a7968] tracking-[0.3em] uppercase text-sm mb-6 font-light"
                    >
                        Vi ska gifta oss
                    </motion.p>

                    {/* Main names */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#4a4038] mb-4 leading-tight"
                    >
                        Alice
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex items-center justify-center gap-4 my-4"
                    >
                        <div className="w-16 h-px bg-[#c9b8a8]" />
                        <Heart className="w-5 h-5 text-[#c4a67c] fill-[#c4a67c]/30" />
                        <div className="w-16 h-px bg-[#c9b8a8]" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#4a4038] mb-12"
                    >
                        Didrik
                    </motion.h1>

                    {/* Date */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="space-y-2"
                    >
                        <p className="text-[#6d5f52] tracking-[0.2em] uppercase text-lg font-light">
                            1 Augusti 2026
                        </p>
                        <p className="text-[#8a7968] tracking-wide">
                            Södviks Gästgivaregård <br />
                            Gamla vägen 35 <br/>
                            Öland, Sverige <br/>
                            387 70 Löttorp Sverige
                        </p>

                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-20"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-px h-12 bg-gradient-to-b from-[#c9b8a8] to-transparent mx-auto"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}